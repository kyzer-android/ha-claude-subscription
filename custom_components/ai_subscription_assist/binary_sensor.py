"""Binary sensor platform for AI Subscription Assist.

Exposes a single native binary_sensor tracking whether the Claude
provider currently has no usage quota left ("Plus de crédit"). The
integration is the sole writer of this entity: it turns on when a
`anthropic.RateLimitError` is caught in entity.py, and turns back off
automatically the next time a Claude call succeeds. Nothing outside the
integration should ever need to write to it — see entity.py for the
producer side (dispatcher signal via `quota_signal`).
"""

from __future__ import annotations

from homeassistant.components.binary_sensor import (
    BinarySensorDeviceClass,
    BinarySensorEntity,
)
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import CONF_PROVIDER, DOMAIN, PROVIDER_CLAUDE_OAUTH, quota_signal


async def async_setup_entry(
    hass: HomeAssistant,
    entry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the Claude quota binary sensor for a config entry."""
    provider = str(entry.data.get(CONF_PROVIDER, PROVIDER_CLAUDE_OAUTH))
    if provider != PROVIDER_CLAUDE_OAUTH:
        # Quota tracking only makes sense for the Claude OAuth provider;
        # there is nothing meaningful to report for the other providers.
        return

    async_add_entities([AiSubscriptionAssistQuotaSensor(entry)])


class AiSubscriptionAssistQuotaSensor(BinarySensorEntity):
    """Reports whether the Claude subscription has hit its usage limit."""

    _attr_has_entity_name = True
    _attr_device_class = BinarySensorDeviceClass.PROBLEM
    _attr_should_poll = False
    _attr_is_on = False

    def __init__(self, entry) -> None:
        self._entry = entry
        self._attr_unique_id = f"{entry.entry_id}_claude_quota_exceeded"
        self._attr_name = "Claude quota exceeded"
        self._attr_device_info = dr.DeviceInfo(
            identifiers={(DOMAIN, entry.entry_id)},
            name=entry.title or "AI Subscription Assist",
        )

    async def async_added_to_hass(self) -> None:
        """Subscribe to quota-state updates once added to hass."""
        self.async_on_remove(
            async_dispatcher_connect(
                self.hass,
                quota_signal(self._entry.entry_id),
                self._async_handle_update,
            )
        )

    @callback
    def _async_handle_update(self, is_on: bool) -> None:
        """Handle a quota state push from entity.py."""
        self._attr_is_on = bool(is_on)
        self.async_write_ha_state()
