---
sidebar_position: 1
description: Compare two compliance baselines side by side in MACE. See which rules only one requires, which they configure differently, and export the result as CSV, Markdown, or HTML.
title: "Baseline Compare"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Baseline Compare</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__text">
      <p className="doc-hero__lead">See exactly where two baselines differ.</p>
      <p className="doc-hero__sub">Put any two frameworks, OS releases, mSCP sources, or your own projects side by side, then search, filter, and export the result.</p>
    </div>
  </div>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/baseline-compare-light.webp" alt="MACE Baseline Compare Hub comparing CIS Level 1 and CIS Level 2" className="img-light" />
  <img src="/img/screenshots/baseline-compare-dark.webp" alt="MACE Baseline Compare Hub comparing CIS Level 1 and CIS Level 2" className="img-dark" />
</div>

## What Baseline Compare Does

Picking a framework is usually the first real decision in a compliance project, and it's hard to make without knowing what each one actually asks for. The **Baseline Compare Hub** answers that directly. Choose two baselines, click **Compare**, and MACE lines up every rule from both and sorts it into four groups: only in the left, only in the right, in both with identical settings, and in both but configured differently.

<div className="feature-grid">
  <div className="feature-card">
    <span className="feature-card__icon">📊</span>
    <span className="feature-card__title">Framework vs Framework</span>
    <span className="feature-card__desc">CIS Level 1 against Level 2, or CIS against the DISA STIG. See which rules each one adds and where the shared rules disagree on ODV values or severity.</span>
  </div>
  <div className="feature-card">
    <span className="feature-card__icon">🖥️</span>
    <span className="feature-card__title">One OS Release vs Another</span>
    <span className="feature-card__desc">Lock the framework and compare macOS 26 to macOS 27. Find out what a new release adds, drops, or changes before you build for it.</span>
  </div>
  <div className="feature-card">
    <span className="feature-card__icon">🌿</span>
    <span className="feature-card__title">Source vs Source</span>
    <span className="feature-card__desc">Compare the mSCP <code>main</code> branch to a dev branch, or to a fork you added under Settings. Useful for previewing upcoming rule changes.</span>
  </div>
  <div className="feature-card">
    <span className="feature-card__icon">📁</span>
    <span className="feature-card__title">Your Project vs Its Framework</span>
    <span className="feature-card__desc">Pick one of your MACE projects as a side and compare it to the stock framework. Every rule you disabled, exempted, modified, or added shows up in one list.</span>
  </div>
</div>

## Opening the Hub

Click **Compare Baselines** on the main menu, under **Compliance Builder**. The hub opens in its own window and doesn't block anything else, so you can keep a Compliance Editor open next to it while you work.

<table className="icon-table">
  <tr><td>🪟</td><td>The hub <strong>replaces the main menu</strong> while it's open. Close it and the main menu comes back.</td></tr>
  <tr><td>💾</td><td>Your picks, lock settings, ignore settings, and view options are <strong>saved between sessions</strong>. If you had a comparison set up last time, it re-runs on its own when the window opens.</td></tr>
  <tr><td>🖱️</td><td>Clicking the MACE Dock icon brings an open or minimized hub back to the front.</td></tr>
</table>

## Picking the Two Sides

Each side has three pickers: **Source**, **OS Version**, and **Framework**. The **Platform** picker above them is shared, so both sides always compare the same platform. It only lists platforms the left side's source actually has rules for.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🌐</span>
      <strong>Source</strong>
    </div>
    <p>Where the rules come from. The menu lists, in order:<br/>
    <strong>mSCP branches:</strong> <code>main</code> shows as "mSCP (main)". Dev branches such as <code>dev_27</code> show as "mSCP (dev_27)". Forks you added under <strong>Settings ▸ Additional Sources</strong> show as "owner/repo (branch)". Any branch with the mSCP 2.0 layout is discovered automatically.<br/>
    <strong>Recent projects</strong> for the current platform, listed as "Project: name". Projects whose folder has moved are left out.<br/>
    <strong>Open Project…</strong>, which lets you choose any project folder. Pick the folder that contains the <code>.mace</code> file.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔢</span>
      <strong>OS Version</strong>
    </div>
    <p>The OS releases that source ships, newest first. A version that only exists on a dev branch, such as a beta macOS release, appears only when that branch is the source.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Framework</strong>
    </div>
    <p>The frameworks available for that source, platform, and version. Choose <strong>All Rules</strong> to include every rule for the platform and version.</p>
  </div>
</div>

Below each side's pickers a context line shows the rule count, the short commit hash of the rules snapshot, and how long ago it was updated. Hover it to see the exact snapshot date. While a source is downloading, the side shows **Downloading…**.

### Using a Project as a Side

When a side is one of your projects, its OS version and framework come from the project itself, so those two pickers are disabled. MACE reads the project's own copy of the rules with your edits merged in, and marks what you changed:

<table className="icon-table">
  <tr><td>🔴</td><td><strong>Removed</strong> — A framework rule you disabled. It's still listed so the project lines up rule for rule with its framework.</td></tr>
  <tr><td>🟣</td><td><strong>Custom</strong> — A rule you wrote and added to the project.</td></tr>
  <tr><td>🟠</td><td><strong>Modified</strong> — A rule you edited.</td></tr>
  <tr><td>🟦</td><td><strong>Exempt</strong> — A rule you marked exempt in the Compliance Editor.</td></tr>
</table>

Picking a project automatically sets the **other** side to the project's framework and OS version on whatever source that side already uses. That makes "my project vs the stock framework" a single click. You can also put a project on both sides to compare two of your own projects.

### The Compare Button

**Compare** stays disabled until both sides are fully set and actually different. If both sides name the same baseline, the hub tells you to change a framework, source, or OS version. Pressing **Return** also runs the comparison.

## Lock to Left, Match Left, and Swap

The **Lock to left** chips keep the right side in step with the left. A locked field copies the left value to the right and disables that picker on the right.

<table className="icon-table">
  <tr><td>🔒</td><td><strong>Source</strong> — Keep both sides on the same mSCP source. <strong>On by default.</strong> Not applied when the left side is a project, since that would compare the project with itself.</td></tr>
  <tr><td>🔓</td><td><strong>OS Version</strong> — Keep both sides on the same OS release.</td></tr>
  <tr><td>🔓</td><td><strong>Framework</strong> — Keep both sides on the same framework. Use this to compare one framework across releases. If the right side's source doesn't ship the left framework, the right side falls back to its first framework.</td></tr>
  <tr><td>↔️</td><td><strong>Swap</strong> — The arrow button between the two cards swaps every pick on both sides. It clears the current result, so click Compare again.</td></tr>
  <tr><td>🎯</td><td><strong>Match left</strong> — Appears on the right card when the sides differ on source or OS version. One click puts the right side on the same source and OS version as the left.</td></tr>
</table>

When the two sides use different sources or OS versions, a note in the options row says so, for example "Comparing across OS versions". Changing any picker after a comparison clears the result on screen.

## Ignoring Wording, Check, and Fix

Between mSCP releases and OS versions, a rule's title, audit command, and remediation are often rewritten while the rule still requires exactly the same thing. The three **Ignore** chips keep those rules under **Matching Identical**, so **Matching Diff** only shows rules whose requirement actually changed. All three are **on by default**.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📝</span>
      <strong>Wording</strong>
    </div>
    <p>Rule titles get reworded between mSCP releases. "Enforce" becomes "Configure", or a setting is renamed to match System Settings, while the rule still requires the same thing. Ignored: a retitled rule counts as matching.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔍</span>
      <strong>Check</strong>
    </div>
    <p>The audit command is often rewritten for a new OS, with a different tool, <code>osascript</code> instead of <code>defaults</code>, or a new output format, yet it verifies the same setting. Ignored: a rule whose check changed counts as matching.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔧</span>
      <strong>Fix</strong>
    </div>
    <p>Remediation changes the same way, or moves between a shell script and a configuration profile, while enforcing the same value. Ignored: a rule whose fix changed counts as matching.</p>
  </div>
</div>

<div className="explanation-box">
  <h4>ODV value and severity are always compared</h4>
  <p>They <em>are</em> the requirement, so there's no ignore switch for them. Ignored differences don't disappear either. When you select a rule, the detail pane still shows them, labeled "Ignored" instead of highlighted in orange.</p>
</div>

Counts, filters, and exports all follow the current ignore settings.

## Reading the Results

The four tiles under the pickers summarize the comparison. Click a tile to show or hide that group in the list.

<table className="icon-table">
  <tr><td>🔵</td><td><strong>Left Only</strong> — Included in the left baseline only. The tile is named after the left framework, for example "CIS Level 1 Only".</td></tr>
  <tr><td>🟣</td><td><strong>Right Only</strong> — Included in the right baseline only.</td></tr>
  <tr><td>🟢</td><td><strong>Matching Identical</strong> — Included in both, with identical settings (or only ignored differences).</td></tr>
  <tr><td>🟠</td><td><strong>Matching Diff</strong> — Included in both, but with different settings. Review these first.</td></tr>
</table>

When nothing is left-only, nothing differs, and the right side has extra rules, a line under the tiles says the left baseline **is a subset of** the right. CIS Level 1 against CIS Level 2 is the classic example.

### What Counts as a Difference

Rules are matched by rule ID. For a rule in both baselines, MACE compares:

<table className="icon-table">
  <tr><td>🎚️</td><td><strong>ODV value</strong> — The organization-defined value for each side's framework. A value present on one side and missing on the other counts as a difference.</td></tr>
  <tr><td>⚠️</td><td><strong>Severity</strong> — Only when both sides state one. CIS has no severities, so CIS vs STIG doesn't flag every rule.</td></tr>
  <tr><td>📝</td><td><strong>Title</strong> — Can only differ across sources. Ignored by default.</td></tr>
  <tr><td>🔍</td><td><strong>Check</strong> — The check command plus expected result for each side's OS version. Whitespace is ignored. Ignored by default.</td></tr>
  <tr><td>🔧</td><td><strong>Fix</strong> — The shell fix plus the configuration profile payload for each side's OS version. Ignored by default.</td></tr>
</table>

Tags are not compared. Within a single source and OS version, title, check, and fix can't differ, because both sides read the same rule file. Which rules belong to a baseline is decided by the same logic the Compliance Editor uses, so the counts match what you see when you open that framework in a project.

### The Rules List

Each row shows the rule on both sides. A side that doesn't include the rule reads **Not Included**. Rules that differ carry an orange warning icon, and every row has a status pill. `$ODV` placeholders in titles are highlighted, and hovering one shows that side's value (controlled by **Settings ▸ Appearance ▸ Rule Editor ▸ Highlight ODV Placeholders**).

Right-click a rule for **Copy Rule ID**, or **Compare Rule YAML…** when the two sides come from different files.

## Searching, Filtering, and Sorting

<table className="icon-table">
  <tr><td>🔍</td><td><strong>Search</strong> — Matches rule ID, title, or any reference ID for the current OS version: STIG ID, CCE, CIS section, NIST 800-53 control. Press <code>Cmd+F</code> to focus it and <code>Esc</code> to clear it.</td></tr>
  <tr><td>📂</td><td><strong>Sections</strong> — Narrow the list to one section. Each entry shows how many rules it still has under the current filters.</td></tr>
  <tr><td>🎛️</td><td><strong>Show</strong> — <strong>All</strong> shows every rule in either baseline. <strong>Left</strong> and <strong>Right</strong> show everything that side requires, in a single column. <strong>Differences</strong> hides rules that match exactly.</td></tr>
</table>

The **View** menu controls how the list is organized:

<table className="icon-table">
  <tr><td>↕️</td><td><strong>Sort by</strong> — Name or ID ascending or descending, plus Severity when any rule has one.</td></tr>
  <tr><td>🗂️</td><td><strong>Group by</strong> — <strong>Status</strong> (default) keeps the four groups in order: Left only, Right only, Matching Diff, Matching Identical. <strong>Section</strong> groups by mSCP section instead.</td></tr>
  <tr><td>🏷️</td><td><strong>Label rules by</strong> — Name (default) or ID.</td></tr>
  <tr><td>⚠️</td><td><strong>Show Severity</strong> — Adds the severity to each row. Only offered for frameworks that have severities, such as STIG and CIS.</td></tr>
</table>

Sort, grouping, labels, and the severity toggle are remembered. Search, section, and the Show filter reset each time you open the hub.

## The Detail Pane

Select a rule to see the full difference on the right. The pane is resizable and is organized top to bottom:

<table className="icon-table">
  <tr><td>📌</td><td><strong>Header</strong> — Title, rule ID, outcome (Left only, Right only, Identical, or Differs), and section.</td></tr>
  <tr><td>✅</td><td><strong>In baseline</strong> — Included or Not Included on each side. Project sides add Removed, Exempt, Custom, or Modified.</td></tr>
  <tr><td>🎚️</td><td><strong>ODV value</strong> and <strong>Severity</strong> — Shown when either side has one. Severity needs <strong>Show Severity</strong> turned on.</td></tr>
  <tr><td>📝</td><td><strong>Title</strong> — Only shown when the titles differ.</td></tr>
  <tr><td>💬</td><td><strong>Discussion</strong> — The rule's rendered description.</td></tr>
  <tr><td>🔍</td><td><strong>Check</strong> — Command and expected result.</td></tr>
  <tr><td>🔧</td><td><strong>Fix</strong> — Shell fix, configuration profile payload, and notes.</td></tr>
  <tr><td>🔗</td><td><strong>References</strong> — CCE, CCI, SRG, DISA STIG, CMMC, CIS Benchmark, CIS Controls v8, NIST 800-53r5, NIST 800-171r3, BIO, and HICP, narrowed to each side's OS version. A framework-specific reference only appears on the side using that framework, marked "Framework only". IDs that change between OS versions are marked "Set per OS version".</td></tr>
</table>

Values that match merge into a single box labeled **Same on both**. Real differences get orange boxes with a warning icon. When Check or Fix is ignored, those rows get a neutral **Ignored** caption instead. A **Compare rule YAML** link opens MACE's diff window on the two raw rule files whenever the sides come from different files, such as two sources or a project.

## Exporting a Comparison

The **Export** menu under the Compare button is enabled once a result exists.

<table className="icon-table">
  <tr><td>📊</td><td><strong>CSV Spreadsheet</strong> — One row per rule with ID, section, title, status, what differs, and each side's inclusion, ODV value, and severity.</td></tr>
  <tr><td>📝</td><td><strong>Markdown</strong> — A report with a summary table, the subset note when it applies, and one section per outcome, starting with the rules that differ. Long values such as login banners get a "Full values" subsection.</td></tr>
  <tr><td>🌐</td><td><strong>HTML Page</strong> — A self-contained page with automatic light and dark mode, summary cards, and one table per outcome.</td></tr>
  <tr><td>📦</td><td><strong>Export All…</strong> — Writes all three formats to a folder you choose. <code>Cmd+E</code> does the same.</td></tr>
</table>

Files are named after the two frameworks, platform, and version, for example `disa_stig-vs-cis_lvl2_macos_26.0.csv`. When the OS versions differ, both appear, as in `macos_15.0-vs-26.0`.

:::info Exports include every rule
Exports respect your Ignore settings but not the search, section, or Show filters. Every rule from both baselines is written, so the report is complete no matter what the list is currently showing.
:::

## Check for Updates

The **Check for Updates** button in the hub asks GitHub whether the mSCP sources used by either side have newer commits. Anything that moved is downloaded and rescanned, and the open comparison re-runs. Project sides are skipped. The result shows in the button for a few seconds: **Up to Date**, **Updated**, **Offline**, or **Check Failed**.

This checks rules only. It doesn't update the app itself, and it doesn't touch your projects. GitHub is contacted at most once per source every five minutes, so a quick second click reports up to date without a network call.

## Keyboard Shortcuts

<table className="icon-table">
  <tr><td>⌨️</td><td><code>Return</code> — Run the comparison</td></tr>
  <tr><td>⌨️</td><td><code>Cmd+F</code> — Focus the search field</td></tr>
  <tr><td>⌨️</td><td><code>Esc</code> — Clear the search and return arrow keys to the list</td></tr>
  <tr><td>⌨️</td><td><code>Cmd+E</code> — Export all three formats</td></tr>
  <tr><td>⌨️</td><td><code>↑</code> <code>↓</code> — Move through the rules list</td></tr>
</table>

## Good to Know

<table className="icon-table">
  <tr><td>📥</td><td><strong>Rules must be downloaded.</strong> Picking a source that isn't cached downloads it first. Offline with nothing cached, the hub tells you that branch hasn't been downloaded yet.</td></tr>
  <tr><td>📡</td><td><strong>Works offline</strong> with any source you've already downloaded, even if branch discovery fails.</td></tr>
  <tr><td>🍴</td><td><strong>Forks</strong> must be public and follow the mSCP 2.0 layout. Private repositories aren't supported.</td></tr>
  <tr><td>🧪</td><td><strong>Beta OS versions</strong> come from the dev branches. Pick that branch as the source to compare against them. See <a href="/docs/beta/overview">Beta Testers</a>.</td></tr>
  <tr><td>🚫</td><td><strong>No cross-platform comparisons.</strong> One Platform picker applies to both sides.</td></tr>
  <tr><td>📁</td><td><strong>Moved projects</strong> drop out of the Source menu. Use <strong>Open Project…</strong> to point at the new location.</td></tr>
  <tr><td>💾</td><td><strong>Results aren't saved</strong>, only your picks. The comparison re-runs when you reopen the hub.</td></tr>
</table>

## What's Next?

- **[Compliance Editor](../compliance-editor/overview)**: Once you've picked a framework, open or create a project and start customizing
- **[Projects](../getting-started/projects)**: How projects store the framework, OS version, and rule changes that Compare reads
- **[Settings](../reference/settings)**: Change the mSCP source, add forks under Additional Sources, and control ODV highlighting
