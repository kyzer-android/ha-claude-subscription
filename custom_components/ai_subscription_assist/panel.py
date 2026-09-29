"""Frontend panel registration for AI Subscription Assist."""

from __future__ import annotations

from pathlib import Path

from homeassistant.components.frontend import async_remove_panel
from homeassistant.components.http import StaticPathConfig
from homeassistant.components.panel_custom import async_register_panel
from homeassistant.core import HomeAssistant

from .const import (
    DATA_MEMORY_PANEL_REGISTERED,
    DOMAIN,
    LOGGER,
    PANEL_COMPONENT_NAME,
    PANEL_MODULE_URL,
    PANEL_SIDEBAR_ICON,
    PANEL_SIDEBAR_TITLE,
    PANEL_STATIC_BASE_URL,
    PANEL_URL_PATH,
)


async def async_setup_memory_panel(hass: HomeAssistant) -> None:
    """Register the memory/session management panel."""
    domain_data = hass.data.setdefault(DOMAIN, {})
    if domain_data.get(DATA_MEMORY_PANEL_REGISTERED):
        return

    static_dir = Path(__file__).parent / "frontend"
    if not static_dir.exists():
        LOGGER.warning("Panel frontend directory missing: %s", static_dir)
        return

    # Guard against stale pre-compressed siblings (e.g. a leftover
    # ai-subscription-assist-memory-panel.js.gz from a previous install).
    # aiohttp's static file response prefers a .gz sibling over the plain
    # file whenever the browser sends Accept-Encoding: gzip, regardless of
    # which one is newer — so a stale .gz silently shadows every future
    # update to the real .js file. We never ship pre-compressed assets
    # ourselves, so any .gz found here is debris and must go.
    for stale_gz in static_dir.glob("*.gz"):
        try:
            stale_gz.unlink()
            LOGGER.debug("Removed stale pre-compressed panel asset: %s", stale_gz)
        except OSError as err:
            LOGGER.warning("Could not remove stale panel asset %s: %s", stale_gz, err)

    await hass.http.async_register_static_paths(
        [StaticPathConfig(PANEL_STATIC_BASE_URL, str(static_dir), False)]
    )

    # Cache-bust the module URL with the JS file's mtime so browsers (and
    # any caching reverse proxy) always fetch the latest version after an
    # HA restart, instead of silently keeping a stale cached copy under
    # the same static URL.
    js_file = static_dir / "ai-subscription-assist-memory-panel.js"
    cache_bust = str(int(js_file.stat().st_mtime)) if js_file.exists() else "0"
    module_url = f"{PANEL_MODULE_URL}?v={cache_bust}"

    panel_kwargs = {
        "frontend_url_path": PANEL_URL_PATH,
        "webcomponent_name": PANEL_COMPONENT_NAME,
        "module_url": module_url,
        "sidebar_title": PANEL_SIDEBAR_TITLE,
        "sidebar_icon": PANEL_SIDEBAR_ICON,
        "config": {"domain": DOMAIN},
        "require_admin": False,
    }

    # HA API compatibility: some versions support update=, some do not.
    try:
        await async_register_panel(
            hass,
            **panel_kwargs,
            update=True,
        )
    except TypeError:
        await async_register_panel(
            hass,
            **panel_kwargs,
        )
    domain_data[DATA_MEMORY_PANEL_REGISTERED] = True


def async_unload_memory_panel(hass: HomeAssistant) -> None:
    """Remove memory/session panel when no entries remain."""
    domain_data = hass.data.setdefault(DOMAIN, {})
    if not domain_data.get(DATA_MEMORY_PANEL_REGISTERED):
        return
    async_remove_panel(hass, PANEL_URL_PATH, warn_if_unknown=False)
    domain_data[DATA_MEMORY_PANEL_REGISTERED] = False
