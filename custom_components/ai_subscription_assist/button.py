"""Button platform for AI Subscription Assist.

A single "Re-authenticate" button on the integration's device. Pressing it
starts the same re-authentication flow Home Assistant starts on its own
when the Claude refresh token is rejected, so the login can be redone on
demand (for instance after the "Authentication" sensor reports a problem).
The flow then appears in Settings > Devices & services.
"""

from __future__ import annotations

from homeassistant.components.button import ButtonEntity
from homeassistant.core import HomeAssistant
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import CONF_PROVIDER, DOMAIN, PROVIDER_CLAUDE_OAUTH


async def async_setup_entry(
    hass: HomeAssistant,
    entry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the re-authenticate button for a config entry."""
    provider = str(entry.data.get(CONF_PROVIDER, PROVIDER_CLAUDE_OAUTH))
    if provider != PROVIDER_CLAUDE_OAUTH:
        # Re-authentication is only implemented for the Claude OAuth login.
        return

    async_add_entities([AiSubscriptionAssistReauthButton(entry)])


class AiSubscriptionAssistReauthButton(ButtonEntity):
    """Starts the Claude re-authentication flow on demand."""

    _attr_has_entity_name = True
    _attr_translation_key = "reauthenticate"
    _attr_should_poll = False

    def __init__(self, entry) -> None:
        self._entry = entry
        self._attr_unique_id = f"{entry.entry_id}_reauthenticate"
        self._attr_device_info = dr.DeviceInfo(
            identifiers={(DOMAIN, entry.entry_id)},
            name=entry.title or "AI Subscription Assist",
        )

    async def async_press(self) -> None:
        """Start the re-authentication flow for this entry."""
        self._entry.async_start_reauth(self.hass)
