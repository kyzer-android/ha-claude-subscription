"""Sensor platform for AI Subscription Assist.

Two read-only sensors on the integration's device, both fed by status.py:

- "Authentication": whether the Claude login is still valid, with the
  access-token expiry as an attribute.
- "Last error": the kind of the last failure (quota, authentication,
  connection...) with its message and time as attributes. A 429 from the
  API is a quota problem, not an authentication one, so this is what tells
  the two apart.

The matching "Re-authenticate" button lives in button.py.
"""

from __future__ import annotations

from typing import Any

from homeassistant.components.sensor import SensorDeviceClass, SensorEntity
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.util import dt as dt_util

from .const import (
    CONF_EXPIRES_AT,
    CONF_PROVIDER,
    DOMAIN,
    PROVIDER_CLAUDE_OAUTH,
    status_signal,
)
from .status import AUTH_STATES, ERROR_KINDS, async_get_status


async def async_setup_entry(
    hass: HomeAssistant,
    entry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the authentication and last-error sensors for a config entry."""
    provider = str(entry.data.get(CONF_PROVIDER, PROVIDER_CLAUDE_OAUTH))
    if provider != PROVIDER_CLAUDE_OAUTH:
        # Only the Claude OAuth login can be re-authenticated from here.
        return

    async_add_entities(
        [
            AiSubscriptionAssistAuthSensor(entry),
            AiSubscriptionAssistLastErrorSensor(entry),
        ]
    )


class _StatusSensor(SensorEntity):
    """Base class: an enum sensor that re-reads status.py on every push."""

    _attr_has_entity_name = True
    _attr_device_class = SensorDeviceClass.ENUM
    _attr_should_poll = False

    def __init__(self, entry, key: str) -> None:
        self._entry = entry
        self._attr_translation_key = key
        self._attr_unique_id = f"{entry.entry_id}_{key}"
        self._attr_device_info = dr.DeviceInfo(
            identifiers={(DOMAIN, entry.entry_id)},
            name=entry.title or "AI Subscription Assist",
        )

    async def async_added_to_hass(self) -> None:
        """Subscribe to status pushes once added to hass."""
        self.async_on_remove(
            async_dispatcher_connect(
                self.hass,
                status_signal(self._entry.entry_id),
                self._async_handle_update,
            )
        )

    @callback
    def _async_handle_update(self) -> None:
        """Handle a status push from status.py."""
        self.async_write_ha_state()


class AiSubscriptionAssistAuthSensor(_StatusSensor):
    """Reports whether the Claude authentication is still valid."""

    _attr_options = AUTH_STATES

    def __init__(self, entry) -> None:
        super().__init__(entry, "auth_state")

    @property
    def native_value(self) -> str:
        """Return the current authentication state."""
        return async_get_status(self.hass, self._entry.entry_id).auth_state

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return when the current access token expires."""
        expires_at = self._entry.data.get(CONF_EXPIRES_AT)
        if not expires_at:
            return {}
        try:
            expiry = dt_util.utc_from_timestamp(float(expires_at))
        except (TypeError, ValueError, OverflowError, OSError):
            return {}
        return {"token_expires_at": expiry.isoformat()}


class AiSubscriptionAssistLastErrorSensor(_StatusSensor):
    """Reports the kind of the last Claude error, if any."""

    _attr_options = ERROR_KINDS

    def __init__(self, entry) -> None:
        super().__init__(entry, "last_error")

    @property
    def native_value(self) -> str:
        """Return the kind of the last error ("none" when all is well)."""
        return async_get_status(self.hass, self._entry.entry_id).last_error

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the message and time of the last error."""
        status = async_get_status(self.hass, self._entry.entry_id)
        attributes: dict[str, Any] = {}
        if status.last_error_message:
            attributes["message"] = status.last_error_message
        if status.last_error_at:
            attributes["occurred_at"] = status.last_error_at.isoformat()
        return attributes
