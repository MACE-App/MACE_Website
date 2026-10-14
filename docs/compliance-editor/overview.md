---
sidebar_position: 1
description: Browse, search, and customize hundreds of mSCP compliance rules in MACE's central editor interface.
title: "Compliance Editor"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Compliance Editor</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Your central workspace for managing security rules.</p>
      <p className="doc-hero__sub">Browse, search, and customize hundreds of compliance rules from mSCP baselines all in one powerful interface.</p>
    </div>
  </div>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/compliance-editor-light.webp" alt="MACE Compliance Editor" className="img-light" />
  <img src="/img/screenshots/compliance-editor-dark.webp" alt="MACE Compliance Editor" className="img-dark" />
</div>

## Interface Layout

<div className="interface-layout-container">
  <div className="interface-visual">
    <div className="interface-panel interface-panel--sidebar">
      <div className="interface-panel__label">Sidebar</div>
    </div>
    <div className="interface-panel interface-panel--list">
      <div className="interface-panel__label">Rules List</div>
    </div>
    <div className="interface-panel interface-panel--detail">
      <div className="interface-panel__label">Detail Panel</div>
    </div>
  </div>
  <div className="interface-toolbar">
    <span>Toolbar</span>
  </div>
</div>

<div className="interface-section interface-section--sidebar">

### 📁 Sidebar

The left sidebar gives you quick access to project info and rule sections.

<table className="icon-table">
  <tr><td>📋</td><td><strong>Baseline</strong> — The compliance framework you're building for</td></tr>
  <tr><td>🔢</td><td><strong>Version</strong> — The OS version for this baseline</td></tr>
  <tr><td>👤</td><td><strong>Documentation Author</strong> — Benchmark name, author(s), organization, and logo for docs. Click it to open Author Docs</td></tr>
  <tr><td>📁</td><td><strong>File Path</strong> — Where your project is saved, with Copy path and Open in Finder buttons</td></tr>
  <tr><td>📂</td><td><strong>Sections</strong> — Jump to rules by category (Authentication, Auditing, etc.). A Custom section appears once you add custom rules. Right-click a section for bulk actions</td></tr>
</table>

</div>

<div className="interface-section interface-section--list">

### 📋 Rules List

The center panel shows all your rules with quick controls.

<table className="icon-table">
  <tr><td>✓</td><td><strong>Include Checkbox</strong> — Checked is enabled, a dash is exempt (audited but not enforced), empty is disabled. See <a href="#exempting-rules">Exempting Rules</a></td></tr>
  <tr><td>🔤</td><td><strong>Title or ID View</strong> — Switch between showing rule titles or IDs</td></tr>
  <tr><td>↕️</td><td><strong>Sort By</strong> — Title, ID, Included, or Modified, plus STIG ID or CIS ID for those frameworks and Severity when the framework has it</td></tr>
  <tr><td>🔍</td><td><strong>Search</strong> — Matches rule title, ID, STIG or CIS ID, tags, and mobileconfig payload types</td></tr>
  <tr><td>🔽</td><td><strong>Filter</strong> — All, a specific payload type, Has Mobileconfig, Has DDM, Has Script, Has ODV, or the Exempt, Modified, Disabled, and Flagged rule states</td></tr>
  <tr><td>➕</td><td><strong>Add</strong> — Import a <code>.yaml</code> rule from disk into the project. To write one from scratch, use the <a href="../custom-rules/overview">Rule Builder</a> on the main menu</td></tr>
  <tr><td>🏷️</td><td><strong>Framework IDs</strong> — Shows CIS or STIG IDs when applicable, and a High/Medium/Low severity badge for frameworks that define one</td></tr>
  <tr><td>⌨️</td><td><strong>Keyboard</strong> — Up and Down arrows move the selection, Space cycles the checkbox, Command-click and Shift-click multi-select</td></tr>
</table>

#### Rule Status Indicators

<div className="status-indicators">
  <div className="status-item">
    <span className="status-item__icon status-item__icon--newrule">+</span>
    <div className="status-item__content">
      <strong>New Rule</strong>
      <span>Rule is enabled — not part of the original baseline</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--disabled">⊘</span>
    <div className="status-item__content">
      <strong>Disabled</strong>
      <span>Rule is disabled — was part of the original baseline</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--notincluded">•••</span>
    <div className="status-item__content">
      <strong>Not Included</strong>
      <span>Rule is not included — was not part of the original baseline</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--modified">/</span>
    <div className="status-item__content">
      <strong>Modified</strong>
      <span>Rule has been modified — has changed compared to the original baseline</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--exempt">–</span>
    <div className="status-item__content">
      <strong>Exempt</strong>
      <span>Rule stays in the baseline and is audited, but nothing enforces it — indigo badge</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--review">⚑</span>
    <div className="status-item__content">
      <strong>Flagged for Review</strong>
      <span>Rule is marked for a later look, with an optional review comment — editor-only, no effect on builds</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--selected"></span>
    <div className="status-item__content">
      <strong>Selected</strong>
      <span>Rule is selected to be viewed in the right sidebar</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--custom">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M16.24 11.51l1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3.41 16.9a.996.996 0 000 1.41l2.34 2.34c.39.39 1.02.39 1.41 0l4.69-4.69 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.47-4.85zm-7.98 5.03l-1.41-1.41 7.27-7.27 1.41 1.41-7.27 7.27zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
    </span>
    <div className="status-item__content">
      <strong>Custom Rule</strong>
      <span>Added by the user — not part of the original rules</span>
    </div>
  </div>
</div>

</div>

<div className="interface-section interface-section--detail">

### 📝 Detail Panel

The right panel, titled <strong>Rule Values</strong>, shows everything about the selected rule. Fields are ID, Title, Discussion, Check, Results (with a String, Integer, or Boolean type), Fix, Fix Additional Info, DDM Info, Mobileconfig, ODV, References, Tags, Severity, and Introduced. Each editable field has Edit, Save, Cancel, and a copy button, and a changed field gets an orange Modified badge. The panel also shows a <strong>Disabled Comment</strong>, <strong>Added Comment</strong>, <strong>Review Comment</strong>, or <strong>Exemption Reason</strong> field when the rule is in that state.

<table className="icon-table">
  <tr><td>🔍</td><td><strong>Search details</strong> — Highlights matches in every field of the rule</td></tr>
  <tr><td>📋</td><td><strong>Copy</strong> — Each field has a copy button; the ODV, mobileconfig, and Raw YAML views have their own</td></tr>
  <tr><td>📂</td><td><strong>Show Rule in Finder</strong> — In the ⋯ menu. A modified rule offers both the modified and original files</td></tr>
  <tr><td>🌐</td><td><strong>View on GitHub</strong> — Opens the rule on mSCP's main branch. Hidden for custom rules</td></tr>
  <tr><td>📄</td><td><strong>View Raw YAML File</strong> — Edit the whole rule file directly, including fields the field view keeps read-only such as References and Tags</td></tr>
  <tr><td>⚑</td><td><strong>Flag for Review</strong> and <strong>Exempt Rule</strong> — Also in the ⋯ menu</td></tr>
  <tr><td>↩️</td><td><strong>Reset Rule…</strong> — Revert a modified rule to the original, after a confirmation</td></tr>
  <tr><td>🗑️</td><td><strong>Delete Rule…</strong> — Remove a custom rule you created, after a confirmation. Replaces Reset for custom rules</td></tr>
</table>

</div>

<div className="interface-section interface-section--toolbar">

### 🔧 Bottom Bar

The bar along the bottom of the window provides quick access to key actions, left to right.

<table className="icon-table">
  <tr><td>📋</td><td><strong>Change Build</strong> — Switch the platform version or compliance framework. Switching framework resets which rules are included and clears the benchmark name; modified rule values stay</td></tr>
  <tr><td>👤</td><td><strong>Author Docs</strong> — Set the benchmark name, organization, author(s), and logo for documentation</td></tr>
  <tr><td>🔢</td><td><strong>Rule count</strong> — "X Compliance Rules, Y included, Z Supported Rules"</td></tr>
  <tr><td>👁️</td><td><strong>Show All</strong> — Include rules not in your baseline but available for this version. Custom rules are always shown</td></tr>
  <tr><td>🚫</td><td><strong>Hide Disabled</strong> — Hide rules that are in the baseline but disabled</td></tr>
  <tr><td>⚠️</td><td><strong>Hide Severity</strong> — Hide the severity badges. Only shown for frameworks that have severities</td></tr>
  <tr><td>💾</td><td><strong>Saved / Unsaved</strong> — A Saved flash after each auto-save, or an orange Unsaved indicator when Auto Save is off</td></tr>
  <tr><td>🔨</td><td><strong>Build</strong> — Build scripts, profiles, and DDM using either engine</td></tr>
  <tr><td>✅</td><td><strong>Audit</strong> — Run a compliance audit using either engine. macOS projects only</td></tr>
  <tr><td>📄</td><td><strong>Documentation</strong> — Generate documentation using either engine</td></tr>
</table>

The menu bar adds a few more: <strong>Rules ▸ Check for Rule Updates</strong> (<code>Shift+Cmd+U</code>), <strong>Rules ▸ Switch Branch…</strong>, <strong>Rules ▸ Map Framework from SCF…</strong>, <strong>Project ▸ Open Project…</strong> and <strong>Duplicate Project…</strong>, <strong>File ▸ Make Project Git-Ready</strong>, <strong>File ▸ Main Menu</strong> (<code>Cmd+0</code>), and <strong>View ▸ Show Severity</strong>. The sync status pill in the title bar tracks whether your builds, audits, and docs are current; see <a href="../reference/settings#sync-indicator">Settings</a>.

</div>

## Features

### Exempting Rules

The include checkbox on every rule has **three states**, not two. Each click moves it one step along the cycle:

<div className="status-indicators">
  <div className="status-item">
    <span className="status-item__icon status-item__icon--selected">✓</span>
    <div className="status-item__content">
      <strong>Checked — Enabled</strong>
      <span>The rule is in the baseline and enforced. Scripts check and fix it, and profiles and DDM carry its settings.</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--exempt">–</span>
    <div className="status-item__content">
      <strong>Dash — Exempt</strong>
      <span>The rule stays in the baseline and is still audited by the compliance script, but nothing enforces it. Its settings are left out of profiles and DDM.</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--notincluded"></span>
    <div className="status-item__content">
      <strong>Empty — Disabled</strong>
      <span>The rule is out of the baseline. Nothing checks it and nothing enforces it.</span>
    </div>
  </div>
</div>

<table className="icon-table">
  <tr><td>🖱️</td><td><strong>Click</strong> a checked rule to make it exempt. Click again to disable it. Click a third time to enable it again.</td></tr>
  <tr><td>⌥</td><td><strong>Option-click</strong> a checked rule to skip the exempt step and disable it directly.</td></tr>
  <tr><td>⌨️</td><td><strong>Spacebar</strong> with a rule selected follows the same cycle.</td></tr>
  <tr><td>📋</td><td><strong>Right-click</strong> a rule, or use the menu in the detail panel, for <strong>Exempt Rule</strong> and <strong>Remove Exemption</strong>. Exempting a disabled rule this way brings it back into the baseline as exempt.</td></tr>
</table>

An exempt rule gets an indigo accent and an **Exempt** badge in the list. The detail panel gains an **Exemption Reason** field. The reason is optional in the app, but fill it in: it's written into the audit preferences, the build README, audit results, and documentation, so auditors can see why the rule isn't enforced. Exemptions and reasons are stored in the project's `.mace` file.

<div className="explanation-box">
  <h4>Exempt vs Flagged for Review</h4>
  <p><strong>Exempt</strong> changes what gets built. <strong>Flag for Review</strong> is editor-only: it adds a yellow Review badge and an optional review comment so you can come back to a rule later, but it never changes build output. A rule can be both.</p>
</div>

#### How an Exemption Flows Through

Mark a rule exempt once and every part of MACE honors it:

<div className="how-it-works-steps">
  <div className="how-step">
    <div className="how-step__number">1</div>
    <div className="how-step__content">
      <strong>Build</strong>
      <p>The <strong>audit preferences</strong> profile ships the rule as <code>exempt = true</code> with your reason, so the compliance script on each Mac knows to skip enforcement. The rule <strong>stays in the compliance script</strong> and is still checked. Its settings are <strong>left out</strong> of configuration profiles, DDM declarations, and the vendor manifest. The build README lists every exemption and its reason. The Build Hub footer shows the count, for example "117 rules (4 exempt)". This applies to Local Build and every MDM upload.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">2</div>
    <div className="how-step__content">
      <strong>On the Mac</strong>
      <p>When the compliance script runs, an exempt rule that fails is logged as an allowed exemption with its reason, and fix mode skips it. The script reads exemptions from managed preferences first, then from the local <code>org.&lt;baseline&gt;.audit</code> domain. Admins can also add or remove exemptions on a single Mac with the script's <code>--exempt</code> and <code>--unexempt</code> flags.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">3</div>
    <div className="how-step__content">
      <strong>Audit</strong>
      <p>The audit engine sheet has an <strong>Include Exemptions</strong> picker: <strong>None</strong>, <strong>Local Exemptions</strong> (what's deployed on this Mac), <strong>Compliance Exemptions</strong> (what's marked in this project), or both. Honored rules keep their Pass or Fail but get an <strong>Exempt</strong> badge, the pass rate leaves them out, and Need Attention ignores exempt failures. Exports can show the badge, the reason, and an Exempt column, or exclude exempt rules entirely.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">4</div>
    <div className="how-step__content">
      <strong>Documentation</strong>
      <p>An <strong>Exempt</strong> group under Rule Options controls <strong>Show Exempt Indicator</strong>, <strong>Include Reasons</strong>, and <strong>Own Section</strong>. Exempt rules get an indigo badge and reason block in HTML and PDF, a callout in Markdown and AsciiDoc, fields in JSON, and columns in CSV and XLSX.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">5</div>
    <div className="how-step__content">
      <strong>Baseline Compare</strong>
      <p>Compare the project against its framework and exempt rules carry an <strong>Exempt</strong> badge, alongside Removed, Modified, and Custom. See <a href="../baseline-compare/overview">Baseline Compare</a>.</p>
    </div>
  </div>
</div>

:::caution Things to know
- **Disabling clears the exemption.** A rule can't be both disabled and exempt. Disabling it by any route drops the exemption and its reason. Exemptions on rules that leave the baseline, for example after a framework change, are pruned the next time the project saves.
- **Already-deployed profiles keep enforcing.** Exempting a rule changes the next build. A profile that already landed on a Mac still enforces the setting until you re-upload or redeploy.
- **mSCP engine builds** patch the exemptions into the audit plist after the run, but mSCP's own profiles still include the exempt rules' settings. Build with the M.A.C.E. engine to leave them out.
- **The script wants a reason.** The app lets you exempt without one, but the on-device `--exempt` flag requires a reason, and the build README shows "no reason recorded" for blank ones.
:::

### Bulk Actions and Multi-Select

Change many rules at once instead of clicking through them one by one.

<table className="icon-table">
  <tr><td>⌘</td><td><strong>Command-click</strong> adds or removes a rule from the selection. <strong>Shift-click</strong> selects a range. Selected rows get a blue outline.</td></tr>
  <tr><td>📋</td><td><strong>Right-click any rule</strong> for submenus scoped to <strong>Selected Rules</strong>, <strong>All Rules</strong>, or <strong>All Shown Rules</strong> when a section, search, or filter is narrowing the list.</td></tr>
  <tr><td>📂</td><td><strong>Right-click a section</strong> in the left sidebar to act on <strong>All Rules in Section</strong>.</td></tr>
  <tr><td>🍎</td><td>The same actions sit at the top of the <strong>Rules</strong> menu in the menu bar.</td></tr>
</table>

Each submenu offers **Enable**, **Exempt**, **Disable**, **Unexempt**, **Flag**, and **Unflag**. Every item shows how many rules it will change, for example "Exempt All Shown Rules (12)", and is grayed out when there's nothing to do. Exempting in bulk also brings disabled rules back into the baseline as exempt.

Every bulk action asks for confirmation first. Disable, Exempt, and Flag let you type one justification, exemption reason, or review comment that's applied to every affected rule. You can still edit reasons per rule afterwards in the detail panel.

### Automatic Rule Updates

MACE checks your project's rules against the latest mSCP rules from GitHub and notifies you when updates are available. Your custom modifications are always preserved.

<div className="themed-image themed-image--wide">
  <img src="/img/screenshots/project-updates-light.webp" alt="Project Updates Available" className="img-light" />
  <img src="/img/screenshots/project-updates-dark.webp" alt="Project Updates Available" className="img-dark" />
</div>

<table className="icon-table">
  <tr><td>🔄</td><td><strong>Auto-Check</strong> — Compares your rules against the cached copy of the project's own branch, while Auto-Download Rules is on</td></tr>
  <tr><td>📥</td><td><strong>Easy Updates</strong> — One click to apply all rule updates</td></tr>
  <tr><td>🛡️</td><td><strong>Preserves Custom Rules</strong> — Your modifications are never overwritten</td></tr>
  <tr><td>📋</td><td><strong>Change Summary</strong> — Counts rules updated, rules removed, rules affecting your baseline, and project files changed, with a What's Changing diff for each row</td></tr>
</table>

<div className="feature-grid">
  <div className="feature-card">
    <span className="feature-card__icon">💾</span>
    <span className="feature-card__title">Auto-Save</span>
    <span className="feature-card__desc">Every change is automatically saved. Toggle rules, edit values, or customize scripts and your project updates instantly. Turn off Auto Save in Settings if you prefer manual control with <code>Cmd+S</code>.</span>
  </div>
  <div className="feature-card">
    <span className="feature-card__icon">⚡</span>
    <span className="feature-card__title">Performance</span>
    <span className="feature-card__desc">Built for the future with support for larger data sets, quick loading, async rendering, and smart caching. Optimized to run as fast as possible.</span>
  </div>
</div>
