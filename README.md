# AI Subscription Assist — Fork FR / EN (HA 2026.9)

🌐 **Langue / Language** : [🇫🇷 Français](#-français) · [🇬🇧 English](#-english)

---

<a id="-français"></a>

# 🇫🇷 Français

# AI Subscription Assist — Fork personnalisé (FR / HA 2026.9)

Ce dépôt est un **fork** de [`toml0006/ai-subscription-assist`](https://github.com/toml0006/ai-subscription-assist), l'intégration Home Assistant qui permet d'utiliser des LLM par abonnement (Claude Pro/Max, ChatGPT Plus/Pro, Google AI Pro, ou clé API OpenAI-compatible) comme agent de conversation dans le pipeline **Assist** de Home Assistant. **Ce fork est volontairement réduit au seul provider Claude** — voir le point 2 ci-dessous.

Ce fork a été créé pour trois raisons principales :

1. **Compatibilité avec Home Assistant 2026.9** — le dépôt d'origine visait des versions antérieures de HA ; plusieurs API internes utilisées par l'intégration (schéma d'entités Config, panel personnalisé, `ConfigSubentry`, sérialisation des schémas d'outils) ont changé et provoquaient des erreurs bloquantes sous 2026.9.
2. **Épuré au seul provider Claude** — l'écran de configuration initial ne propose plus le choix entre Claude / ChatGPT-Codex / Gemini / OpenAI : il va directement à la connexion OAuth Claude. Le code des autres providers reste présent dans les fichiers (pour rester proche du dépôt d'origine et faciliter la maintenance), mais n'est plus accessible depuis l'interface.
3. **Adaptation en français** — traduction complète de l'interface (`translations/fr.json`) et prise en charge des tournures françaises pour les fonctions de mémoire heuristique ("retiens que...", "rappelle-toi que...", etc.), qui n'existaient qu'en anglais dans la version d'origine.

> ⚠️ **Périmètre des correctifs : provider Claude uniquement.**
> Tous les correctifs listés dans ce fork ont été développés, diagnostiqués et testés exclusivement avec le provider **Claude Pro/Max (OAuth Anthropic)**. Les autres providers pris en charge par l'intégration d'origine (ChatGPT/Codex, Google AI Pro / Gemini, OpenAI-compatible) **n'ont pas été testés** ici et sont susceptibles d'avoir des bugs analogues non corrigés (ex. rafraîchissement de token OAuth en cours d'exécution).

Pour tout ce qui concerne l'installation, la configuration des providers (OAuth Claude/Codex/Gemini, clé API OpenAI), les commandes slash (`/memory`, `/remember`...), les services HA exposés, etc., **le guide d'origine reste valable et fait référence** :
- [README du projet original](https://github.com/toml0006/ai-subscription-assist)
- [Guide de démarrage (GETTING_STARTED.md)](https://github.com/toml0006/ai-subscription-assist/blob/main/docs/GETTING_STARTED.md)

Ce document ne couvre que ce qui a été **ajouté ou modifié** par rapport à cette base.

---

## 0. Installation

### Option A — Bouton "My Home Assistant" (recommandé)

Clique sur le badge ci-dessous depuis un navigateur sur le même réseau que ton instance HA (ou avec Remote UI configuré). Il ouvre directement HACS et pré-remplit l'ajout de ce dépôt comme intégration personnalisée :

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=kyzer-android&repository=ha-claude-subscription&category=integration)

1. Clique sur le badge → HACS s'ouvre sur l'écran d'ajout de dépôt personnalisé, déjà pré-rempli.
2. Vérifie que la catégorie est bien **Integration**, puis valide.
3. Installe **AI Subscription Assist** depuis la liste HACS.
4. Redémarre Home Assistant.

> Ce bouton nécessite que [My Home Assistant](https://my.home-assistant.io/) soit accessible depuis ton navigateur et pointe vers la bonne instance (il te le demandera au premier clic si ce n'est pas déjà configuré).

### Option B — Ajout manuel du dépôt personnalisé dans HACS

Si le bouton ne fonctionne pas (pas d'accès distant configuré, etc.) :

1. Home Assistant → **HACS**
2. **⋮ (menu en haut à droite) → Custom repositories** (Dépôts personnalisés)
3. Ajouter l'URL : `https://github.com/kyzer-android/ha-claude-subscription`
4. Catégorie : **Integration**
5. Installer **AI Subscription Assist** depuis la liste HACS
6. Redémarrer Home Assistant

---

## Réinjection de contexte (resume) — retirée

La fonctionnalité "Resume context after reopening Assist" (rejeu de l'historique d'une ancienne session comme s'il faisait partie de la conversation en cours) a été **entièrement retirée** de ce fork, code et case à cocher compris — plus seulement désactivée.

**Pourquoi** : elle causait de fausses confirmations vocales ("arrête la musique" confirmé sans que rien ne se passe), et une tentative de correction (fenêtre glissante + résumé condensé) s'est avérée redondante avec le mécanisme natif de continuité de conversation de Home Assistant (`CONVERSATION_TIMEOUT` de 5 min côté `chat_session.py`), qui gère déjà ce cas pour les commandes rapprochées. Le jeu n'en valait pas la chandelle.

**Ce qui reste actif** : l'historisation des sessions (visible dans le panel Memory Manager, y compris pour les commandes vocales via satellite) n'est pas affectée — c'est une fonctionnalité séparée (option `memory_record_enabled`).

---

## Motifs de capture mémoire en français

En plus des tournures anglaises d'origine, ce fork reconnaît les tournures françaises suivantes pour capturer automatiquement une information en mémoire (heuristique, sans appel outil explicite) :

| Tournure reconnue | Exemple |
|---|---|
| `retiens que ...` | "Retiens que ma radio préférée est Radio Nova" |
| `retiens ...` | "Retiens Radio Nova comme radio préférée" |
| `rappelle(s)-toi que ...` | "Rappelle-toi que je me couche tard le week-end" |
| `n'oublie pas que ...` | "N'oublie pas que j'ai un chat" |
| `pour info ...` | "Pour info, la lumière du salon est capricieuse" |
| `je préfère ...` | "Je préfère les lumières chaudes le soir" |
| `ma préférence est ...` | "Ma préférence est Radio Nova" |
| `appelle(s)-moi ...` | "Appelle-moi Mathieu" |

Ces motifs tolèrent les variantes courantes (avec/sans "s" fautif sur "rappelle(s)-toi"/"appelle(s)-moi", accents "préfère/préféré").

---

## 🔜 Prochainement

- Un **modèle spécifiquement optimisé pour Home Assistant en français** (base dédiée, hors modèles génériques par abonnement).

[⬆️ Retour en haut / Back to top](#ai-subscription-assist--fork-fr--en-ha-20269)

---

<a id="-english"></a>

# 🇬🇧 English

# AI Subscription Assist — Custom Fork (FR / HA 2026.9)

This repository is a **fork** of [`toml0006/ai-subscription-assist`](https://github.com/toml0006/ai-subscription-assist), the Home Assistant integration that lets you use subscription-based LLMs (Claude Pro/Max, ChatGPT Plus/Pro, Google AI Pro, or any OpenAI-compatible API key) as a conversation agent in Home Assistant's **Assist** pipeline. **This fork is intentionally reduced to the Claude provider only** — see point 2 below.

This fork was created for three main reasons:

1. **Compatibility with Home Assistant 2026.9** — the original repository targeted earlier HA versions; several internal APIs used by the integration (Config entity schema, custom panel, `ConfigSubentry`, tool schema serialization) changed and caused blocking errors on 2026.9.
2. **Trimmed down to the Claude provider only** — the initial setup screen no longer offers a choice between Claude / ChatGPT-Codex / Gemini / OpenAI: it goes straight to the Claude OAuth login. The code for the other providers is still present in the files (to stay close to the original repository and ease maintenance), but is no longer reachable from the UI.
3. **French adaptation** — full UI translation (`translations/fr.json`) and support for French phrasings in the heuristic memory features ("retiens que...", "rappelle-toi que...", etc.), which only existed in English in the original version.

> ⚠️ **Scope of the fixes: Claude provider only.**
> All fixes listed in this fork were developed, diagnosed and tested exclusively with the **Claude Pro/Max (Anthropic OAuth)** provider. The other providers supported by the original integration (ChatGPT/Codex, Google AI Pro / Gemini, OpenAI-compatible) **have not been tested** here and may have similar unfixed bugs (e.g. OAuth token refresh at runtime).

For everything related to installation, provider configuration (Claude/Codex/Gemini OAuth, OpenAI API key), slash commands (`/memory`, `/remember`...), exposed HA services, etc., **the original guide remains valid and is the reference**:
- [Original project README](https://github.com/toml0006/ai-subscription-assist)
- [Getting Started guide (GETTING_STARTED.md)](https://github.com/toml0006/ai-subscription-assist/blob/main/docs/GETTING_STARTED.md)

This document only covers what was **added or changed** compared to that base.

---

## 0. Installation

### Option A — "My Home Assistant" button (recommended)

Click the badge below from a browser on the same network as your HA instance (or with Remote UI configured). It opens HACS directly and pre-fills the addition of this repository as a custom integration:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=kyzer-android&repository=ha-claude-subscription&category=integration)

1. Click the badge → HACS opens on the custom repository screen, already pre-filled.
2. Check that the category is **Integration**, then confirm.
3. Install **AI Subscription Assist** from the HACS list.
4. Restart Home Assistant.

> This button requires [My Home Assistant](https://my.home-assistant.io/) to be reachable from your browser and pointed at the right instance (it will ask you on first click if not already configured).

### Option B — Manually add the custom repository in HACS

If the button doesn't work (no remote access configured, etc.):

1. Home Assistant → **HACS**
2. **⋮ (top-right menu) → Custom repositories**
3. Add the URL: `https://github.com/kyzer-android/ha-claude-subscription`
4. Category: **Integration**
5. Install **AI Subscription Assist** from the HACS list
6. Restart Home Assistant

---

## Context re-injection (resume) — removed

The "Resume context after reopening Assist" feature (replaying the history of an old session as if it were part of the current conversation) has been **fully removed** from this fork, code and checkbox included — not just disabled.

**Why**: it caused false voice confirmations ("stop the music" confirmed while nothing actually happened), and an attempted fix (sliding window + condensed summary) turned out to be redundant with Home Assistant's native conversation continuity mechanism (5-minute `CONVERSATION_TIMEOUT` in `chat_session.py`), which already handles this case for commands issued close together. It wasn't worth the trouble.

**What remains active**: session history recording (visible in the Memory Manager panel, including voice commands via satellite) is unaffected — it is a separate feature (`memory_record_enabled` option).

---

## French memory capture patterns

In addition to the original English phrasings, this fork recognizes the following French phrasings to automatically capture information into memory (heuristic, no explicit tool call):

| Recognized phrasing | Example |
|---|---|
| `retiens que ...` ("remember that ...") | "Retiens que ma radio préférée est Radio Nova" |
| `retiens ...` ("remember ...") | "Retiens Radio Nova comme radio préférée" |
| `rappelle(s)-toi que ...` ("remind yourself that ...") | "Rappelle-toi que je me couche tard le week-end" |
| `n'oublie pas que ...` ("don't forget that ...") | "N'oublie pas que j'ai un chat" |
| `pour info ...` ("FYI ...") | "Pour info, la lumière du salon est capricieuse" |
| `je préfère ...` ("I prefer ...") | "Je préfère les lumières chaudes le soir" |
| `ma préférence est ...` ("my preference is ...") | "Ma préférence est Radio Nova" |
| `appelle(s)-moi ...` ("call me ...") | "Appelle-moi Mathieu" |

These patterns tolerate common variants (with/without the mistaken "s" on "rappelle(s)-toi"/"appelle(s)-moi", accents on "préfère/préféré").

---

## 🔜 Coming soon

- A **model specifically optimized for Home Assistant in French** (dedicated base, outside generic subscription-based models).

[⬆️ Retour en haut / Back to top](#ai-subscription-assist--fork-fr--en-ha-20269)
