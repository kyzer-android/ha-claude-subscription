"""Shared authentication / last-error status for a config entry.

The places where things go wrong (the token refresh in __init__.py and
the Claude API calls in entity.py) report here; the diagnostic sensors in
sensor.py subscribe to the dispatcher signal and render the state. Keeping
the state in one small store means the sensors show the right value as
soon as they are added, even if an error happened before they existed.

The store lives in ``hass.data`` and is dropped when the entry unloads, so
a reload (for instance right after a successful re-authentication) starts
again from a clean "ok / no error" state.
"""

from __future__ import annotations

from dataclasses import dataclass
import datetime

from homeassistant.core import HomeAssistant
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.util import dt as dt_util

from .const import DOMAIN, status_signal

_STATUS_KEY = f"{DOMAIN}_status"

# Authentication state (sensor "Authentication").
AUTH_OK = "ok"
# The refresh token was refused by Anthropic: only a new login fixes this.
AUTH_REFRESH_FAILED = "refresh_failed"
# The API itself answered 401 to a request: the access token is not valid.
AUTH_REJECTED = "rejected"
AUTH_STATES = [AUTH_OK, AUTH_REFRESH_FAILED, AUTH_REJECTED]

# Kind of the last error (sensor "Last error").
ERROR_NONE = "none"
ERROR_QUOTA = "quota"
ERROR_AUTH = "auth"
ERROR_PERMISSION = "permission"
ERROR_NOT_FOUND = "not_found"
ERROR_BAD_REQUEST = "bad_request"
ERROR_TIMEOUT = "timeout"
ERROR_CONNECTION = "connection"
ERROR_SERVER = "server"
ERROR_API = "api_error"
ERROR_UNEXPECTED = "unexpected"
ERROR_TOKEN_REFRESH = "token_refresh"
ERROR_KINDS = [
    ERROR_NONE,
    ERROR_QUOTA,
    ERROR_AUTH,
    ERROR_PERMISSION,
    ERROR_NOT_FOUND,
    ERROR_BAD_REQUEST,
    ERROR_TIMEOUT,
    ERROR_CONNECTION,
    ERROR_SERVER,
    ERROR_API,
    ERROR_UNEXPECTED,
    ERROR_TOKEN_REFRESH,
]

MAX_ERROR_MESSAGE_LEN = 500


@dataclass(slots=True)
class EntryStatus:
    """Current authentication state and last error of one config entry."""

    auth_state: str = AUTH_OK
    last_error: str = ERROR_NONE
    last_error_message: str | None = None
    last_error_at: datetime.datetime | None = None


def async_get_status(hass: HomeAssistant, entry_id: str) -> EntryStatus:
    """Return the status of an entry, creating a clean one if needed."""
    store: dict[str, EntryStatus] = hass.data.setdefault(_STATUS_KEY, {})
    return store.setdefault(entry_id, EntryStatus())


def async_remove_status(hass: HomeAssistant, entry_id: str) -> None:
    """Forget the status of an entry (called when it unloads)."""
    hass.data.get(_STATUS_KEY, {}).pop(entry_id, None)


def async_notify_status(hass: HomeAssistant, entry_id: str) -> None:
    """Tell the sensors to re-read the status (and the token expiry)."""
    async_dispatcher_send(hass, status_signal(entry_id))


def async_report_ok(hass: HomeAssistant, entry_id: str) -> None:
    """Record a successful Claude call: valid auth, no error."""
    status = async_get_status(hass, entry_id)
    if status.auth_state == AUTH_OK and status.last_error == ERROR_NONE:
        return
    status.auth_state = AUTH_OK
    status.last_error = ERROR_NONE
    status.last_error_message = None
    status.last_error_at = None
    async_notify_status(hass, entry_id)


def async_report_error(
    hass: HomeAssistant,
    entry_id: str,
    kind: str,
    message: str,
    *,
    auth_state: str | None = None,
) -> None:
    """Record an error, and optionally that the authentication is broken."""
    status = async_get_status(hass, entry_id)
    status.last_error = kind if kind in ERROR_KINDS else ERROR_UNEXPECTED
    text = " ".join(str(message).split())
    if len(text) > MAX_ERROR_MESSAGE_LEN:
        text = f"{text[: MAX_ERROR_MESSAGE_LEN - 3]}..."
    status.last_error_message = text or None
    status.last_error_at = dt_util.utcnow()
    if auth_state is not None:
        status.auth_state = auth_state
    async_notify_status(hass, entry_id)
