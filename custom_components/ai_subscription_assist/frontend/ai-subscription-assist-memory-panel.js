const WS = {
  ENTRY_LIST: "ai_subscription_assist/entry_list",
  MEMORY_STATUS: "ai_subscription_assist/memory_status",
  MEMORY_LIST: "ai_subscription_assist/memory_list",
  MEMORY_ADD: "ai_subscription_assist/memory_add",
  MEMORY_DELETE: "ai_subscription_assist/memory_delete",
  MEMORY_CLEAR: "ai_subscription_assist/memory_clear",
  SESSION_LIST: "ai_subscription_assist/session_list",
  SESSION_GET: "ai_subscription_assist/session_get",
  SESSION_CLEAR: "ai_subscription_assist/session_clear",
};

const STRINGS = {
  fr: {
    title: "AI Subscription Assist \u2014 Gestionnaire de m\u00e9moire",
    subtitle: "G\u00e9rez les souvenirs \u00e0 long terme et les sessions.",
    provider_label: "Fournisseur :",
    refresh: "Actualiser",
    loading: "Chargement\u2026",
    no_entries:
      "Aucune configuration trouv\u00e9e. Ajoutez d'abord l'int\u00e9gration AI Subscription Assist.",
    status_title: "\u00c9tat",
    status_entry: "Configuration : {entry}",
    memory_enabled: "M\u00e9moire activ\u00e9e",
    yes: "oui",
    no: "non",
    shared_memories: "M\u00e9moires partag\u00e9es",
    your_memories: "Vos m\u00e9moires",
    your_sessions: "Vos sessions",
    no_status: "Aucun statut charg\u00e9.",
    memory_title: "M\u00e9moires",
    scope_label: "Afficher :",
    scope_mine: "Moi",
    scope_shared: "Partag\u00e9",
    scope_all: "Tout",
    limit_label: "Limite :",
    target_user_label: "Utilisateur cible :",
    target_user_placeholder: "ID utilisateur optionnel",
    clear_scope: "Tout vider",
    add_memory_label: "Nouvelle m\u00e9moire :",
    add_memory_placeholder: "Texte \u00e0 retenir\u2026",
    add_memory_scope_shared: "Partag\u00e9e",
    add_memory_scope_mine: "\u00c0 moi",
    add_memory_btn: "Ajouter",
    add_memory_added_toast: "M\u00e9moire ajout\u00e9e.",
    add_memory_failed_toast: "\u00c9chec de l'ajout : {message}",
    search_label: "Recherche :",
    search_placeholder: "Filtrer par texte/visibilit\u00e9",
    no_memories: "Aucune m\u00e9moire pour ce filtre.",
    th_scope: "Visibilit\u00e9",
    th_text: "Texte",
    th_updated: "Mis \u00e0 jour",
    th_actions: "Actions",
    delete_btn: "Supprimer",
    sessions_title: "Sessions",
    subentry_label: "Sous-entr\u00e9e :",
    subentry_placeholder: "ID sous-entr\u00e9e optionnel",
    no_sessions: "Aucune session pour ce filtre.",
    th_user: "Utilisateur",
    th_messages: "Messages",
    view_btn: "Voir",
    clear_btn: "Effacer",
    scope_pill: "affichage : moi",
    session_detail_title: "D\u00e9tail de la session",
    select_session_prompt: "S\u00e9lectionnez une session pour voir son contenu.",
    messages_count: "messages : {count}",
    clear_this_session: "Effacer cette session",
    role_user: "UTILISATEUR",
    role_assistant: "ASSISTANT",
    owner_me: "Moi",
    owner_satellite: "Satellite",
    ws_unavailable:
      "La connexion websocket Home Assistant est indisponible.",
    generic_error: "Erreur inattendue lors du chargement du panneau.",
    delete_confirm: "Supprimer la m\u00e9moire {id} ?",
    delete_failed:
      "La m\u00e9moire n'a pas \u00e9t\u00e9 supprim\u00e9e (introuvable ou non autoris\u00e9e).",
    deleted_toast: "M\u00e9moire {id} supprim\u00e9e.",
    clear_memories_confirm:
      "Tout vider (filtre \u00ab {scope} \u00bb) ? Cette action est irr\u00e9versible.",
    cleared_memories_toast: "{count} m\u00e9moire(s) supprim\u00e9e(s).",
    clear_session_named: "la session \u00ab {id} \u00bb",
    clear_session_scope: "les sessions du filtre \u00ab {scope} \u00bb",
    clear_session_confirm: "Effacer {label} ? Cette action est irr\u00e9versible.",
    cleared_sessions_toast:
      "{sessions} session(s) et {messages} message(s) effac\u00e9(s).",
  },
  en: {
    title: "AI Subscription Assist \u2014 Memory Manager",
    subtitle: "Manage long-term memories and resumable sessions.",
    provider_label: "Provider entry:",
    refresh: "Refresh",
    loading: "Loading\u2026",
    no_entries: "No provider entries found. Add AI Subscription Assist first.",
    status_title: "Status",
    status_entry: "Entry: {entry}",
    memory_enabled: "Memory enabled",
    yes: "yes",
    no: "no",
    shared_memories: "Shared memories",
    your_memories: "Your memories",
    your_sessions: "Your sessions",
    no_status: "No status loaded yet.",
    memory_title: "Memories",
    scope_label: "Show:",
    scope_mine: "Mine",
    scope_shared: "Shared",
    scope_all: "All",
    limit_label: "Limit:",
    target_user_label: "Target user:",
    target_user_placeholder: "Optional user_id",
    clear_scope: "Clear All",
    add_memory_label: "New memory:",
    add_memory_placeholder: "Text to remember\u2026",
    add_memory_scope_shared: "Shared",
    add_memory_scope_mine: "Mine",
    add_memory_btn: "Add",
    add_memory_added_toast: "Memory added.",
    add_memory_failed_toast: "Failed to add: {message}",
    search_label: "Search:",
    search_placeholder: "Filter by text/visibility",
    no_memories: "No memories for current filter.",
    th_scope: "Visibility",
    th_text: "Text",
    th_updated: "Updated",
    th_actions: "Actions",
    delete_btn: "Delete",
    sessions_title: "Sessions",
    subentry_label: "Subentry:",
    subentry_placeholder: "Optional subentry_id",
    no_sessions: "No sessions for current filter.",
    th_user: "User",
    th_messages: "Messages",
    view_btn: "View",
    clear_btn: "Clear",
    scope_pill: "showing: mine",
    session_detail_title: "Session Detail",
    select_session_prompt: "Select a session to inspect transcript context.",
    messages_count: "messages: {count}",
    clear_this_session: "Clear This Session",
    role_user: "USER",
    role_assistant: "ASSISTANT",
    owner_me: "Me",
    owner_satellite: "Satellite",
    ws_unavailable: "Home Assistant websocket connection is unavailable.",
    generic_error: "Unexpected error while loading memory panel.",
    delete_confirm: "Delete memory {id}?",
    delete_failed: "Memory was not deleted (not found or not permitted).",
    deleted_toast: "Deleted memory {id}.",
    clear_memories_confirm:
      "Clear all memories (filter: {scope})? This cannot be undone.",
    cleared_memories_toast: "Cleared {count} memory item(s).",
    clear_session_named: "session '{id}'",
    clear_session_scope: "sessions matching filter '{scope}'",
    clear_session_confirm: "Clear {label}? This cannot be undone.",
    cleared_sessions_toast: "Cleared {sessions} session(s), {messages} message(s).",
  },
};

class AiSubscriptionAssistMemoryPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._hass = null;
    this._initialized = false;
    this._state = {
      loading: false,
      error: "",
      entries: [],
      selectedEntryId: "",
      status: null,
      memoryScope: "all",
      memoryLimit: 50,
      memorySearch: "",
      memoryTargetUserId: "",
      addMemoryText: "",
      addMemoryScope: "mine",
      memories: [],
      filteredMemories: [],
      sessionScope: "all",
      sessionLimit: 50,
      sessionSubentryId: "",
      sessionTargetUserId: "",
      sessions: [],
      selectedSession: null,
    };
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._initialized) {
      this._initialized = true;
      this._bootstrap();
    } else {
      this._render();
    }
  }

  set panel(_panel) {
    // Home Assistant sets this when rendering a panel.
  }

  connectedCallback() {
    this._render();
  }

  get _isAdmin() {
    return Boolean(this._hass?.user?.is_admin);
  }

  async _bootstrap() {
    try {
      await this._loadEntries();
      await this._refreshAll();
    } catch (err) {
      this._setError(err);
    }
  }

  _setState(patch) {
    this._state = { ...this._state, ...patch };
    this._render();
  }

  _setError(err) {
    const message =
      typeof err === "string" ? err : err?.message || this._t("generic_error");
    this._setState({ error: message, loading: false });
  }

  _toast(message) {
    this.dispatchEvent(
      new CustomEvent("hass-notification", {
        detail: { message },
        bubbles: true,
        composed: true,
      })
    );
  }

  async _ws(type, payload = {}) {
    if (!this._hass?.connection) {
      throw new Error(this._t("ws_unavailable"));
    }
    return this._hass.connection.sendMessagePromise({ type, ...payload });
  }

  async _loadEntries() {
    const response = await this._ws(WS.ENTRY_LIST);
    const entries = Array.isArray(response?.entries) ? response.entries : [];
    let selectedEntryId = this._state.selectedEntryId;
    if (!selectedEntryId && entries.length > 0) {
      selectedEntryId = entries[0].entry_id;
    } else if (
      selectedEntryId &&
      !entries.some((entry) => entry.entry_id === selectedEntryId)
    ) {
      selectedEntryId = entries.length > 0 ? entries[0].entry_id : "";
    }
    this._setState({ entries, selectedEntryId });
  }

  _selectedEntry() {
    return this._state.entries.find(
      (entry) => entry.entry_id === this._state.selectedEntryId
    );
  }

  _basePayload() {
    return this._state.selectedEntryId
      ? { config_entry_id: this._state.selectedEntryId }
      : {};
  }

  async _refreshStatus() {
    const status = await this._ws(WS.MEMORY_STATUS, this._basePayload());
    this._setState({ status });
  }

  _applyMemorySearch(memories, query) {
    const trimmed = String(query || "").trim().toLowerCase();
    if (!trimmed) {
      return memories;
    }
    return memories.filter((item) => {
      const text = String(item?.text || "").toLowerCase();
      const id = String(item?.id || "").toLowerCase();
      const scope = String(item?.scope || "").toLowerCase();
      return text.includes(trimmed) || id.includes(trimmed) || scope.includes(trimmed);
    });
  }

  async _refreshMemories() {
    const payload = {
      ...this._basePayload(),
      scope: this._state.memoryScope,
      limit: Number(this._state.memoryLimit) || 50,
    };
    if (this._isAdmin && this._state.memoryTargetUserId.trim()) {
      payload.target_user_id = this._state.memoryTargetUserId.trim();
    }
    const response = await this._ws(WS.MEMORY_LIST, payload);
    const memories = Array.isArray(response?.items) ? response.items : [];
    const filteredMemories = this._applyMemorySearch(
      memories,
      this._state.memorySearch
    );
    this._setState({ memories, filteredMemories });
  }

  async _refreshSessions() {
    const payload = {
      ...this._basePayload(),
      scope: this._state.sessionScope,
      limit: Number(this._state.sessionLimit) || 50,
    };
    if (this._state.sessionSubentryId.trim()) {
      payload.subentry_id = this._state.sessionSubentryId.trim();
    }
    if (this._isAdmin && this._state.sessionTargetUserId.trim()) {
      payload.target_user_id = this._state.sessionTargetUserId.trim();
    }
    const response = await this._ws(WS.SESSION_LIST, payload);
    const sessions = Array.isArray(response?.sessions) ? response.sessions : [];
    this._setState({ sessions });
  }

  async _refreshAll() {
    this._setState({ loading: true, error: "" });
    try {
      await Promise.all([
        this._refreshStatus(),
        this._refreshMemories(),
        this._refreshSessions(),
      ]);
      this._setState({ loading: false });
    } catch (err) {
      this._setError(err);
    }
  }

  async _withWrite(action) {
    this._setState({ loading: true, error: "" });
    try {
      await action();
      await this._refreshStatus();
      await this._refreshMemories();
      await this._refreshSessions();
      this._setState({ loading: false });
    } catch (err) {
      this._setError(err);
    }
  }

  async _deleteMemory(memoryId) {
    if (!window.confirm(this._t("delete_confirm", { id: memoryId }))) {
      return;
    }
    await this._withWrite(async () => {
      const response = await this._ws(WS.MEMORY_DELETE, {
        ...this._basePayload(),
        memory_id: memoryId,
      });
      if (!response?.deleted) {
        throw new Error(this._t("delete_failed"));
      }
      this._toast(this._t("deleted_toast", { id: memoryId }));
    });
  }

  async _clearMemories() {
    if (
      !window.confirm(
        this._t("clear_memories_confirm", { scope: this._state.memoryScope })
      )
    ) {
      return;
    }
    await this._withWrite(async () => {
      const payload = {
        ...this._basePayload(),
        scope: this._state.memoryScope,
        confirm: true,
      };
      if (this._isAdmin && this._state.memoryTargetUserId.trim()) {
        payload.target_user_id = this._state.memoryTargetUserId.trim();
      }
      const response = await this._ws(WS.MEMORY_CLEAR, payload);
      this._toast(this._t("cleared_memories_toast", { count: response?.removed || 0 }));
    });
  }

  async _addMemory() {
    const text = this._state.addMemoryText.trim();
    if (!text) {
      return;
    }
    await this._withWrite(async () => {
      const response = await this._ws(WS.MEMORY_ADD, {
        ...this._basePayload(),
        text,
        scope: this._state.addMemoryScope === "shared" ? "shared" : "user",
      });
      if (!response?.added) {
        throw new Error(
          this._t("add_memory_failed_toast", {
            message: response?.message || "unknown error",
          })
        );
      }
      this._setState({ addMemoryText: "" });
      this._toast(this._t("add_memory_added_toast"));
    });
  }

  async _selectSession(sessionId) {
    this._setState({ loading: true, error: "" });
    try {
      const response = await this._ws(WS.SESSION_GET, {
        ...this._basePayload(),
        session_id: sessionId,
        limit: 500,
      });
      this._setState({ selectedSession: response?.session || null, loading: false });
    } catch (err) {
      this._setError(err);
    }
  }

  async _clearSession(sessionId = null) {
    const label = sessionId
      ? this._t("clear_session_named", { id: sessionId })
      : this._t("clear_session_scope", { scope: this._state.sessionScope });
    if (!window.confirm(this._t("clear_session_confirm", { label }))) {
      return;
    }
    await this._withWrite(async () => {
      const payload = {
        ...this._basePayload(),
        scope: this._state.sessionScope,
        confirm: true,
      };
      if (sessionId) {
        payload.session_id = sessionId;
      } else {
        if (this._state.sessionSubentryId.trim()) {
          payload.subentry_id = this._state.sessionSubentryId.trim();
        }
        if (this._isAdmin && this._state.sessionTargetUserId.trim()) {
          payload.target_user_id = this._state.sessionTargetUserId.trim();
        }
      }

      const response = await this._ws(WS.SESSION_CLEAR, payload);
      if (sessionId && this._state.selectedSession?.session_id === sessionId) {
        this._setState({ selectedSession: null });
      }
      this._toast(
        this._t("cleared_sessions_toast", {
          sessions: response?.removed_sessions || 0,
          messages: response?.removed_messages || 0,
        })
      );
    });
  }

  _lang() {
    const lang = String(
      this._hass?.language || (navigator.language || "en")
    ).toLowerCase();
    return lang.startsWith("fr") ? "fr" : "en";
  }

  _t(key, vars) {
    const dict = STRINGS[this._lang()] || STRINGS.en;
    let text = dict[key] ?? STRINGS.en[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        text = text.replaceAll(`{${k}}`, String(v));
      }
    }
    return text;
  }

  _escape(text) {
    return String(text ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  _formatDate(value) {
    if (!value) {
      return "";
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return this._escape(value);
    }
    const pad = (n) => String(n).padStart(2, "0");
    const yy = pad(date.getFullYear() % 100);
    const mm = pad(date.getMonth() + 1);
    const dd = pad(date.getDate());
    const hh = pad(date.getHours());
    const mi = pad(date.getMinutes());
    const ss = pad(date.getSeconds());
    return `${yy}/${mm}/${dd}-${hh}:${mi}:${ss}`;
  }

  _sessionOwnerLabel(sessionId) {
    const idx = String(sessionId || "").indexOf(":");
    const userPart = idx >= 0 ? sessionId.slice(idx + 1) : "";
    return userPart === "voice_satellite"
      ? this._t("owner_satellite")
      : this._t("owner_me");
  }

  _roleLabel(role) {
    const r = String(role || "").toLowerCase();
    if (r === "user") return this._t("role_user");
    if (r === "assistant") return this._t("role_assistant");
    return this._escape(role).toUpperCase();
  }

  _styles() {
    return `
      :host {
        --panel-gap: 16px;
        --panel-radius: 10px;
        display: block;
        padding: 16px;
        box-sizing: border-box;
        overflow-x: hidden;
        color: var(--primary-text-color);
      }
      * {
        box-sizing: border-box;
        min-width: 0;
      }
      .wrap {
        display: grid;
        gap: var(--panel-gap);
        max-width: 1400px;
        margin: 0 auto;
      }
      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
        flex-wrap: wrap;
      }
      .toolbar h2 {
        font-size: 22px;
        line-height: 1.25;
        overflow-wrap: anywhere;
      }
      .toolbar-actions {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
      }
      .controls {
        display: flex;
        gap: 12px;
        align-items: flex-end;
        flex-wrap: wrap;
        margin-bottom: 12px;
      }
      .controls label,
      .toolbar-actions label {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 12px;
        color: var(--secondary-text-color);
        flex: 1 1 140px;
        min-width: 110px;
      }
      .controls label input,
      .controls label select,
      .toolbar-actions label select {
        font: inherit;
        color: var(--primary-text-color);
        background: var(--card-background-color, var(--primary-background-color));
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 8px;
      }
      .btn {
        appearance: none;
        font: inherit;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        border-radius: 8px;
        padding: 9px 16px;
        border: 1px solid var(--primary-color, #03a9f4);
        background: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
        line-height: 1;
        white-space: nowrap;
      }
      .btn:hover {
        filter: brightness(1.08);
      }
      .btn:active {
        filter: brightness(0.95);
      }
      .btn-outline {
        background: transparent;
        color: var(--primary-color, #03a9f4);
      }
      .btn-danger {
        border-color: var(--error-color, #db4437);
        background: var(--error-color, #db4437);
        color: #fff;
      }
      .btn-danger.btn-outline {
        background: transparent;
        color: var(--error-color, #db4437);
      }
      .btn-small {
        padding: 6px 12px;
        font-size: 12px;
      }
      .toolbar-actions .btn {
        flex: 0 0 auto;
      }
      .controls .btn {
        flex: 0 0 auto;
      }
      .grid {
        display: grid;
        gap: var(--panel-gap);
        grid-template-columns: 1fr;
      }
      @media (min-width: 1200px) {
        .grid {
          grid-template-columns: 1fr 1fr;
        }
      }
      ha-card {
        display: block;
        padding: 16px;
        overflow: hidden;
      }
      h2, h3 {
        margin: 0 0 4px;
        font-weight: 600;
      }
      h3 {
        font-size: 16px;
        letter-spacing: 0.1px;
      }
      p.meta {
        margin: 0 0 12px;
        color: var(--secondary-text-color);
        font-size: 13px;
      }
      code {
        font-family: var(--code-font-family, monospace);
        word-break: break-all;
        overflow-wrap: anywhere;
      }
      .table-scroll {
        overflow-x: auto;
        margin: 0 -4px;
        padding: 0 4px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
      }
      th, td {
        border-bottom: 1px solid var(--divider-color);
        padding: 10px 8px;
        text-align: left;
        vertical-align: top;
        overflow-wrap: anywhere;
      }
      th {
        color: var(--secondary-text-color);
        font-weight: 600;
        font-size: 12px;
      }
      tbody tr:hover {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
      }
      td.actions {
        white-space: nowrap;
      }
      td.actions .btn {
        margin-right: 6px;
      }
      .error {
        color: var(--error-color);
        font-weight: 600;
        overflow-wrap: anywhere;
      }
      .pill {
        display: inline-flex;
        max-width: 100%;
        border: 1px solid var(--divider-color);
        border-radius: 999px;
        padding: 3px 10px;
        font-size: 12px;
        overflow-wrap: anywhere;
      }
      .status-grid {
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 4px;
      }
      @media (min-width: 460px) {
        .status-grid {
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
      }
      .status-item {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 10px;
      }
      .status-item .label {
        color: var(--secondary-text-color);
        font-size: 12px;
      }
      .status-item .value {
        font-size: 22px;
        font-weight: 600;
        color: var(--primary-color, var(--primary-text-color));
        margin-top: 2px;
      }
      .messages {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        gap: 8px;
      }
      .msg {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 10px;
        overflow-wrap: anywhere;
      }
      .msg .role {
        font-weight: 700;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
      }
      .msg .time {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      .empty {
        color: var(--secondary-text-color);
      }

      /* Responsive: below 640px, tables become stacked cards instead of
         scrolling sideways, and controls take the full row width. */
      @media (max-width: 640px) {
        :host {
          padding: 12px;
        }
        .toolbar-actions,
        .toolbar-actions label {
          width: 100%;
        }
        .toolbar-actions .btn {
          width: 100%;
        }
        .controls label {
          flex: 1 1 100%;
        }
        table.responsive thead {
          display: none;
        }
        table.responsive,
        table.responsive tbody,
        table.responsive tr,
        table.responsive td {
          display: block;
          width: 100%;
        }
        table.responsive tr {
          border: 1px solid var(--divider-color);
          border-radius: 8px;
          padding: 8px 10px;
          margin-bottom: 10px;
        }
        table.responsive td {
          border-bottom: none;
          padding: 6px 0;
        }
        table.responsive td[data-label]::before {
          content: attr(data-label);
          display: block;
          font-size: 11px;
          color: var(--secondary-text-color);
          margin-bottom: 2px;
        }
        table.responsive td.actions {
          display: flex;
          gap: 8px;
          padding-top: 8px;
          white-space: normal;
        }
        table.responsive td.actions .btn {
          flex: 1 1 auto;
        }
      }
    `;
  }

  _render() {
    if (!this.shadowRoot) {
      return;
    }
    const entry = this._selectedEntry();
    const status = this._state.status;
    const memories = this._state.filteredMemories || [];
    const sessions = this._state.sessions || [];
    const selectedSession = this._state.selectedSession;
    const subentryOptions = (entry?.subentries || [])
      .map(
        (subentry) =>
          `<option value="${this._escape(subentry.subentry_id)}">${this._escape(
            subentry.title || subentry.subentry_id
          )}</option>`
      )
      .join("");
    const adminOnlyFields = this._isAdmin
      ? `
          <label>
            ${this._t("target_user_label")}
            <input id="memory-target-user" type="text" value="${this._escape(
              this._state.memoryTargetUserId
            )}" placeholder="${this._t("target_user_placeholder")}">
          </label>
        `
      : "";
    const adminOnlySessionFields = this._isAdmin
      ? `
          <label>
            ${this._t("scope_label")}
            <select id="session-scope">
              <option value="mine" ${
                this._state.sessionScope === "mine" ? "selected" : ""
              }>${this._t("scope_mine")}</option>
              <option value="all" ${
                this._state.sessionScope === "all" ? "selected" : ""
              }>${this._t("scope_all")}</option>
            </select>
          </label>
          <label>
            ${this._t("target_user_label")}
            <input id="session-target-user" type="text" value="${this._escape(
              this._state.sessionTargetUserId
            )}" placeholder="${this._t("target_user_placeholder")}">
          </label>
        `
      : `
          <span class="pill">${this._t("scope_pill")}</span>
        `;

    this.shadowRoot.innerHTML = `
      <style>${this._styles()}</style>
      <div class="wrap">
        <div class="toolbar">
          <div>
            <h2>${this._t("title")}</h2>
            <p class="meta">${this._t("subtitle")}</p>
          </div>
          <div class="toolbar-actions">
            <label>
              ${this._t("provider_label")}
              <select id="entry-select">
                ${this._state.entries
                  .map(
                    (item) => `
                      <option value="${this._escape(item.entry_id)}" ${
                        item.entry_id === this._state.selectedEntryId ? "selected" : ""
                      }>
                        ${this._escape(item.title || item.entry_id)}
                      </option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <button type="button" class="btn" id="refresh-all">${this._t("refresh")}</button>
          </div>
        </div>

        ${
          this._state.error
            ? `<div class="error">${this._escape(this._state.error)}</div>`
            : ""
        }
        ${
          this._state.loading
            ? `<div class="pill">${this._t("loading")}</div>`
            : ""
        }
        ${
          !entry
            ? `<div class="empty">${this._t("no_entries")}</div>`
            : `
              <div class="grid">
                <ha-card>
                  <h3>${this._t("status_title")}</h3>
                  <p class="meta">${this._t("status_entry", {
                    entry: this._escape(entry.title || entry.entry_id),
                  })}</p>
                  ${
                    status
                      ? `
                      <div class="status-grid">
                        <div class="status-item">
                          <div class="label">${this._t("memory_enabled")}</div>
                          <div class="value">${
                            status.memory_enabled ? this._t("yes") : this._t("no")
                          }</div>
                        </div>
                        <div class="status-item">
                          <div class="label">${this._t("shared_memories")}</div>
                          <div class="value">${this._escape(
                            status.counts?.shared_memories ?? 0
                          )}</div>
                        </div>
                        <div class="status-item">
                          <div class="label">${this._t("your_memories")}</div>
                          <div class="value">${this._escape(
                            status.counts?.own_user_memories ?? 0
                          )}</div>
                        </div>
                        <div class="status-item">
                          <div class="label">${this._t("your_sessions")}</div>
                          <div class="value">${this._escape(
                            status.counts?.sessions_mine ?? 0
                          )}</div>
                        </div>
                      </div>
                      `
                      : `<p class="empty">${this._t("no_status")}</p>`
                  }
                </ha-card>

                <ha-card>
                  <h3>${this._t("memory_title")}</h3>
                  <div class="controls">
                    <label>
                      ${this._t("scope_label")}
                      <select id="memory-scope">
                        <option value="mine" ${
                          this._state.memoryScope === "mine" ? "selected" : ""
                        }>${this._t("scope_mine")}</option>
                        <option value="shared" ${
                          this._state.memoryScope === "shared" ? "selected" : ""
                        }>${this._t("scope_shared")}</option>
                        <option value="all" ${
                          this._state.memoryScope === "all" ? "selected" : ""
                        }>${this._t("scope_all")}</option>
                      </select>
                    </label>
                    <label>
                      ${this._t("limit_label")}
                      <input id="memory-limit" type="number" min="1" max="500" value="${this._escape(
                        this._state.memoryLimit
                      )}">
                    </label>
                    ${adminOnlyFields}
                    <button type="button" class="btn btn-outline" id="refresh-memory">${this._t("refresh")}</button>
                    <button type="button" class="btn btn-danger btn-outline" id="clear-memory">${this._t("clear_scope")}</button>
                  </div>
                  <div class="controls">
                    <label>
                      ${this._t("search_label")}
                      <input id="memory-search" type="text" value="${this._escape(
                        this._state.memorySearch
                      )}" placeholder="${this._t("search_placeholder")}">
                    </label>
                  </div>
                  <div class="controls">
                    <label style="flex: 3 1 260px;">
                      ${this._t("add_memory_label")}
                      <input id="add-memory-text" type="text" value="${this._escape(
                        this._state.addMemoryText
                      )}" placeholder="${this._t("add_memory_placeholder")}">
                    </label>
                    <label>
                      &nbsp;
                      <select id="add-memory-scope">
                        <option value="mine" ${
                          this._state.addMemoryScope === "mine" ? "selected" : ""
                        }>${this._t("add_memory_scope_mine")}</option>
                        ${
                          this._isAdmin
                            ? `<option value="shared" ${
                                this._state.addMemoryScope === "shared" ? "selected" : ""
                              }>${this._t("add_memory_scope_shared")}</option>`
                            : ""
                        }
                      </select>
                    </label>
                    <button type="button" class="btn" id="add-memory">${this._t("add_memory_btn")}</button>
                  </div>
                  ${
                    memories.length < 1
                      ? `<p class="empty">${this._t("no_memories")}</p>`
                      : `
                        <div class="table-scroll">
                        <table class="responsive">
                          <thead>
                            <tr>
                              <th>${this._t("th_scope")}</th>
                              <th>${this._t("th_text")}</th>
                              <th>${this._t("th_updated")}</th>
                              <th>${this._t("th_actions")}</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${memories
                              .map(
                                (item) => `
                                  <tr>
                                    <td data-label="${this._t("th_scope")}">${this._escape(item.scope)}</td>
                                    <td data-label="${this._t("th_text")}">${this._escape(item.text)}</td>
                                    <td data-label="${this._t("th_updated")}">${this._formatDate(item.updated_at)}</td>
                                    <td data-label="${this._t("th_actions")}" class="actions">
                                      <button type="button" class="btn btn-danger btn-small" data-action="delete-memory" data-memory-id="${this._escape(
                                        item.id
                                      )}">${this._t("delete_btn")}</button>
                                    </td>
                                  </tr>
                                `
                              )
                              .join("")}
                          </tbody>
                        </table>
                        </div>
                      `
                  }
                </ha-card>

                <ha-card>
                  <h3>${this._t("sessions_title")}</h3>
                  <div class="controls">
                    ${adminOnlySessionFields}
                    <label>
                      ${this._t("subentry_label")}
                      <input id="session-subentry" type="text" value="${this._escape(
                        this._state.sessionSubentryId
                      )}" placeholder="${this._t("subentry_placeholder")}" list="session-subentry-options">
                    </label>
                    <datalist id="session-subentry-options">
                      ${subentryOptions}
                    </datalist>
                    <label>
                      ${this._t("limit_label")}
                      <input id="session-limit" type="number" min="1" max="500" value="${this._escape(
                        this._state.sessionLimit
                      )}">
                    </label>
                    <button type="button" class="btn btn-outline" id="refresh-sessions">${this._t("refresh")}</button>
                    <button type="button" class="btn btn-danger btn-outline" id="clear-sessions">${this._t("clear_scope")}</button>
                  </div>
                  ${
                    sessions.length < 1
                      ? `<p class="empty">${this._t("no_sessions")}</p>`
                      : `
                        <div class="table-scroll">
                        <table class="responsive">
                          <thead>
                            <tr>
                              <th>${this._t("th_user")}</th>
                              <th>${this._t("th_messages")}</th>
                              <th>${this._t("th_updated")}</th>
                              <th>${this._t("th_actions")}</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${sessions
                              .map(
                                (session) => `
                                  <tr>
                                    <td data-label="${this._t("th_user")}">${this._sessionOwnerLabel(
                                      session.session_id
                                    )}</td>
                                    <td data-label="${this._t("th_messages")}">${this._escape(session.message_count)}</td>
                                    <td data-label="${this._t("th_updated")}">${this._formatDate(session.updated_at)}</td>
                                    <td data-label="${this._t("th_actions")}" class="actions">
                                      <button type="button" class="btn btn-small" data-action="view-session" data-session-id="${this._escape(
                                        session.session_id
                                      )}">${this._t("view_btn")}</button>
                                      <button type="button" class="btn btn-outline btn-small" data-action="clear-session" data-session-id="${this._escape(
                                        session.session_id
                                      )}">${this._t("clear_btn")}</button>
                                    </td>
                                  </tr>
                                `
                              )
                              .join("")}
                          </tbody>
                        </table>
                        </div>
                      `
                  }
                </ha-card>

                <ha-card>
                  <h3>${this._t("session_detail_title")}</h3>
                  ${
                    !selectedSession
                      ? `<p class="empty">${this._t("select_session_prompt")}</p>`
                      : `
                        <div class="controls">
                          <span class="pill">${this._sessionOwnerLabel(
                            selectedSession.session_id
                          )}</span>
                          <span class="pill">${this._t("messages_count", {
                            count: this._escape(selectedSession.message_count),
                          })}</span>
                          <button type="button" class="btn btn-danger btn-outline btn-small" id="clear-selected-session">${this._t("clear_this_session")}</button>
                        </div>
                        <ul class="messages">
                          ${(selectedSession.messages || [])
                            .map(
                              (message) => `
                                <li class="msg">
                                  <div class="role">${this._roleLabel(message.role)}</div>
                                  <div>${this._escape(message.content)}</div>
                                  <div class="time">${this._formatDate(message.created_at)}</div>
                                </li>
                              `
                            )
                            .join("")}
                        </ul>
                      `
                  }
                </ha-card>
              </div>
            `
        }
      </div>
    `;

    this._bindEvents();
  }

  _bindEvents() {
    const root = this.shadowRoot;
    if (!root) {
      return;
    }

    root.getElementById("entry-select")?.addEventListener("change", async (event) => {
      this._setState({ selectedEntryId: event.target.value, selectedSession: null });
      await this._refreshAll();
    });

    root.getElementById("refresh-all")?.addEventListener("click", async () => {
      await this._loadEntries();
      await this._refreshAll();
    });

    root.getElementById("memory-scope")?.addEventListener("change", async (event) => {
      this._setState({ memoryScope: event.target.value });
      await this._refreshMemories();
    });

    root.getElementById("memory-limit")?.addEventListener("change", async (event) => {
      this._setState({ memoryLimit: Number(event.target.value) || 50 });
      await this._refreshMemories();
    });

    root.getElementById("memory-target-user")?.addEventListener("change", async (event) => {
      this._setState({ memoryTargetUserId: event.target.value });
      await this._refreshMemories();
    });

    root.getElementById("memory-search")?.addEventListener("input", (event) => {
      const memorySearch = event.target.value;
      const filteredMemories = this._applyMemorySearch(
        this._state.memories,
        memorySearch
      );
      this._setState({ memorySearch, filteredMemories });
    });

    root.getElementById("refresh-memory")?.addEventListener("click", async () => {
      await this._refreshMemories();
    });

    root.getElementById("clear-memory")?.addEventListener("click", async () => {
      await this._clearMemories();
    });

    root.getElementById("add-memory-text")?.addEventListener("input", (event) => {
      this._state.addMemoryText = event.target.value;
    });

    root.getElementById("add-memory-scope")?.addEventListener("change", (event) => {
      this._state.addMemoryScope = event.target.value;
    });

    root.getElementById("add-memory")?.addEventListener("click", async () => {
      await this._addMemory();
    });

    root.getElementById("session-scope")?.addEventListener("change", async (event) => {
      this._setState({ sessionScope: event.target.value, selectedSession: null });
      await this._refreshSessions();
    });

    root.getElementById("session-subentry")?.addEventListener("change", async (event) => {
      this._setState({ sessionSubentryId: event.target.value, selectedSession: null });
      await this._refreshSessions();
    });

    root.getElementById("session-target-user")?.addEventListener("change", async (event) => {
      this._setState({ sessionTargetUserId: event.target.value, selectedSession: null });
      await this._refreshSessions();
    });

    root.getElementById("session-limit")?.addEventListener("change", async (event) => {
      this._setState({ sessionLimit: Number(event.target.value) || 50 });
      await this._refreshSessions();
    });

    root.getElementById("refresh-sessions")?.addEventListener("click", async () => {
      await this._refreshSessions();
    });

    root.getElementById("clear-sessions")?.addEventListener("click", async () => {
      await this._clearSession();
    });

    root.getElementById("clear-selected-session")?.addEventListener("click", async () => {
      const sessionId = this._state.selectedSession?.session_id;
      if (sessionId) {
        await this._clearSession(sessionId);
      }
    });

    root.querySelectorAll("[data-action='delete-memory']").forEach((button) => {
      button.addEventListener("click", async () => {
        await this._deleteMemory(button.dataset.memoryId);
      });
    });

    root.querySelectorAll("[data-action='view-session']").forEach((button) => {
      button.addEventListener("click", async () => {
        await this._selectSession(button.dataset.sessionId);
      });
    });

    root.querySelectorAll("[data-action='clear-session']").forEach((button) => {
      button.addEventListener("click", async () => {
        await this._clearSession(button.dataset.sessionId);
      });
    });
  }
}

// Guard against double-registration: the cache-busted module URL changes
// on every HA restart, so if the panel gets re-mounted without a full
// page reload, the browser may re-execute this file. customElements.define
// throws if the tag name is already registered, so skip it when it is.
if (!customElements.get("ai-subscription-assist-memory-panel")) {
  customElements.define(
    "ai-subscription-assist-memory-panel",
    AiSubscriptionAssistMemoryPanel
  );
}
