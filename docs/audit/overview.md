---
sidebar_position: 1
description: Run real-time compliance audits on your Mac and identify compliant, non-compliant, and manual review items.
title: "Audit"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Audit</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__figure">
      <img
        src="/img/mascots/audit-check.webp"
        alt="MACE mascot holding a completed audit checklist"
        className="doc-hero__mascot"
        width="440"
        height="440"
      />
    </div>
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Run compliance checks directly on your Mac and see results in real-time.</p>
      <p className="doc-hero__sub">Instantly identify what's compliant, what's not, and what needs manual review.</p>
    </div>
  </div>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/audit-light.webp" alt="MACE Audit" className="img-light" />
  <img src="/img/screenshots/audit-dark.webp" alt="MACE Audit" className="img-dark" />
</div>

## What Does Audit Do?

Every rule in your baseline has a check command, a small script that verifies whether a specific setting is in compliance. Audit takes all of those checks and runs them against your Mac in one pass, telling you rule by rule what's compliant, what isn't, and what needs your attention.

<div className="explanation-box">
  <h4>Audit vs Build: What's the Difference?</h4>
  <p><strong>Build</strong> generates files (scripts, profiles, DDM) that you deploy to other Macs via MDM.</p>
  <p><strong>Audit</strong> runs those same checks right now, on this Mac, and shows you the results immediately. It's how you verify compliance on a specific machine.</p>
</div>

## Audit Status Types

Each rule receives one of these statuses after checking:

<div className="status-grid">
  <div className="status-card status-card--pass">
    <span className="status-card__pill"><span className="status-card__dot"></span>Pass</span>
    <p>The setting matches the expected value. This Mac is compliant for this rule.</p>
  </div>
  <div className="status-card status-card--fail">
    <span className="status-card__pill"><span className="status-card__dot"></span>Fail</span>
    <p>The setting does not match the expected value. This Mac needs remediation.</p>
  </div>
  <div className="status-card status-card--error">
    <span className="status-card__pill"><span className="status-card__dot"></span>Error</span>
    <p>The check couldn't run or returned unexpected output. Investigate manually.</p>
  </div>
  <div className="status-card status-card--manual">
    <span className="status-card__pill"><span className="status-card__dot"></span>Manual Review</span>
    <p>No automated check exists. You must verify this rule manually and set the status yourself.</p>
  </div>
  <div className="status-card status-card--na">
    <span className="status-card__pill"><span className="status-card__dot"></span>N/A</span>
    <p>This rule doesn't apply to this system. Excluded from the pass rate calculation.</p>
  </div>
  <div className="status-card status-card--pending">
    <span className="status-card__pill"><span className="status-card__dot"></span>Pending</span>
    <p>The rule hasn't been checked yet. Waiting for the audit to reach this rule.</p>
  </div>
  <div className="status-card status-card--running">
    <span className="status-card__pill"><span className="status-card__dot"></span>Running</span>
    <p>The check is currently executing. You'll see this briefly as MACE works through each rule.</p>
  </div>
</div>

:::info Exempt rules
Rules marked exempt in the Compliance Editor are still checked. Choose what to honor with the **Include Exemptions** picker in the engine sheet: **None**, **Local Exemptions** already deployed on this Mac, **Compliance Exemptions** marked in this project, or both. Honored rules keep their Pass or Fail, gain an **Exempt** badge, and drop out of the pass rate. See [Exempting Rules](../compliance-editor/overview#exempting-rules).
:::

## How Auditing Works

When you run an audit, MACE goes through each enabled rule and executes its check command:

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Load your rules</strong>
      <span>MACE reads all enabled rules from your baseline, including any customizations you've made</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Verify helper is ready</strong>
      <span>Some checks need admin access. MACE confirms the helper tool is installed</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Run each check</strong>
      <span>For each rule, MACE runs the check command to see what your Mac's current setting is</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Compare actual vs expected</strong>
      <span>The output is compared against the expected value defined in the rule</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">5</span>
    <div className="build-step__content">
      <strong>Report results</strong>
      <span>Each rule gets a status (Pass/Fail/Error/etc.) and the results are displayed with details</span>
    </div>
  </div>
</div>

### Example: What Happens During a Check

For a rule like "Enable Firewall Logging":

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Check command runs</strong>
      <span><code>/usr/libexec/ApplicationFirewall/socketfilterfw --getloggingmode</code></span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Output received</strong>
      <span><code>Log mode is on</code></span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Expected value</strong>
      <span>Output must equal "Log mode is on" after trimming whitespace. Integer and boolean results are compared by value</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Comparison</strong>
      <span>Output matches the expected value</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">5</span>
    <div className="build-step__content">
      <strong>Result</strong>
      <span><span className="status-card--pass status-card__pill"><span className="status-card__dot"></span>Pass</span></span>
    </div>
  </div>
</div>

If the output was "Log mode is off", the result would be <span className="status-card--fail status-card__pill"><span className="status-card__dot"></span>Fail</span>.

## Privileged Helper

Some compliance checks need administrator access to read protected system settings. MACE includes a privileged helper tool that runs these checks securely.

<div className="helper-grid">
  <div className="helper-card">
    <div className="helper-card__header">
      <span className="helper-card__icon">🔐</span>
      <strong>Why Admin Access?</strong>
    </div>
    <p>Certain security settings can only be read with root privileges — for example, checking FileVault status or reading protected system preferences. The helper tool enables these checks without running the entire app as root.</p>
  </div>
  <div className="helper-card">
    <div className="helper-card__header">
      <span className="helper-card__icon">📦</span>
      <strong>One-Time Approval</strong>
    </div>
    <p>On the first audit you run, macOS prompts you to approve the helper tool. This is a standard macOS security prompt for privileged tools. Once approved, the helper is available for all future audits and you won't be prompted again.</p>
  </div>
</div>

<div className="explanation-box explanation-box--warning">
  <h4>Safety First</h4>
  <p>The audit helper will not install or run without your permission. The first time, an <strong>Administrator Access Required</strong> sheet offers <strong>Keep Installed</strong>, so you're never prompted again, or <strong>This Session Only</strong>, which removes the helper when the audit window closes. Once the helper is installed, every later audit starts with a <strong>Review Before Running</strong> sheet that tells you how many checks are about to run. You can remove the helper any time under <strong>Settings → Advanced → Privileged Helpers</strong>.</p>
  <p>Because the helper runs your rules' check commands with admin privileges, make sure you trust the baseline you're using. If you've added custom rules or are using an unfamiliar baseline, review them first.</p>
</div>

## Running an Audit

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Open your project</strong>
      <span>Load a compliance project with your selected baseline and enabled rules</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Click Audit</strong>
      <span>Use the Audit button in the editor's bottom bar. It's only enabled for macOS projects</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Select audit engine</strong>
      <span>In the Select Engine sheet, choose M.A.C.E. Audit (preselected) or mSCP Audit</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Configure options</strong>
      <span>Pick the audit mode (Full Audit Scan or Profile Inspector), then set Watch Live, Include Disabled Rules, and Include Exemptions</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">5</span>
    <div className="build-step__content">
      <strong>Click Start Audit</strong>
      <span>Approve the helper the first time, or click Continue on the Review Before Running sheet</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">6</span>
    <div className="build-step__content">
      <strong>Watch progress</strong>
      <span>With Watch Live on, see each rule's status as it completes with a time estimate and a Stop Audit button. With it off, a progress window shows "Checking rule X of Y"</span>
    </div>
  </div>
</div>

<div className="explanation-box">
  <h4>Tip: Load Last Audit</h4>
  <p>With <strong><a href="../reference/settings#audits">Save Last Audit</a></strong> enabled in Settings (off by default), MACE saves the most recent run to the project's <code>.mace</code> file. On your next audit, the Review Before Running sheet offers <strong>Load Last Audit</strong> with its date and pass/fail counts, so you can restore those results instantly instead of re-running every check.</p>
</div>

## Audit Engines

Choosing an engine is the first decision when you start an audit. The <strong>Select Engine</strong> sheet shows two cards:

<div className="engine-comparison">
  <div className="engine-card">
    <div className="engine-card__header">
      <img src="/img/engine-mscp.webp" alt="mSCP" className="engine-card__icon-img" />
      <h3>mSCP Audit</h3>
    </div>
    <p>Uses the original mSCP Python scripts with default options. Customize by editing files directly.</p>
    <ul>
      <li>Results in <code>/Library/Preferences</code> and <code>/Library/Logs</code></li>
      <li>Custom script flags and a command preview under Advanced</li>
      <li>An Audit Report window with Passed, Failed, Exempt, and N/A counts</li>
    </ul>
    <span className="engine-card__tag">Official Scripts</span>
  </div>
  <div className="engine-card engine-card--primary">
    <div className="engine-card__header">
      <img src="/img/engine-mace.webp" alt="M.A.C.E." className="engine-card__icon-img" />
      <h3>M.A.C.E. Audit</h3>
    </div>
    <p>Native Swift engine with more customization and output options built into the app. Preselected.</p>
    <ul>
      <li>Real-time results with Watch Live</li>
      <li>Export to PDF, HTML, spreadsheets, JSON, Markdown, and STIG checklists</li>
      <li>Override results and add comments</li>
      <li>Supports all customizations</li>
    </ul>
    <span className="engine-card__tag">Fast &amp; Customizable</span>
  </div>
</div>

## Audit Options

After selecting the M.A.C.E. engine, its options appear below the engine cards:

### Audit Mode

<div className="option-grid">
  <div className="option-card option-card--default">
    <div className="option-card__header">
      <span className="option-card__icon">⚡</span>
      <strong>Full Audit Scan</strong>
      <span className="option-card__badge">Default</span>
    </div>
    <p>Runs each rule's check command against the live system and verifies the output against the expected value. Requires admin access via the privileged helper.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📋</span>
      <strong>Profile Inspector</strong>
    </div>
    <p>Compares locally deployed mobileconfig profiles against what each rule requires. Only works with rules that have <code>mobileconfig_info</code> defined — script-based rules are excluded. Results can be viewed By Rule or By Profile with Setting, Expected, Current, and Status columns, and re-inspected on demand. Only Include Disabled Rules applies in this mode.</p>
  </div>
</div>

### Run Options

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">👁️</span>
      <strong>Watch Live</strong>
      <span className="option-card__switch option-card__switch--on"></span>
    </div>
    <p>Shows results updating in real-time as each rule is checked. Pass/fail results appear immediately as the audit progresses.</p>
    <p><strong>When to disable:</strong> On slower Macs, live updates can slow down the audit. Turn it off to finish faster, then view all results at once.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🚫</span>
      <strong>Include Disabled Rules</strong>
      <span className="option-card__switch"></span>
    </div>
    <p>Also audits rules you've excluded from the baseline. Useful for seeing where your Mac stands on the full rule set, even settings you've chosen not to enforce.</p>
    <p>Stays visible but disabled when the baseline has no excluded rules.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">➖</span>
      <strong>Include Exemptions</strong>
    </div>
    <p><strong>None</strong> ignores exemptions so every rule reports its plain Pass or Fail. <strong>Local Exemptions</strong> honors what's already deployed on this Mac in the <code>org.&lt;baseline&gt;.audit</code> domain. <strong>Compliance Exemptions</strong> honors the rules marked exempt in this project. <strong>Local + Compliance</strong> honors both, with the deployed one winning on conflicts. Honored rules keep their result and get an Exempt badge.</p>
  </div>
</div>

## Understanding the Results

After the audit completes, you'll see:

### Summary Statistics

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📊</span>
      <strong>Pass Rate</strong>
    </div>
    <p>The percentage of rules that passed. N/A, Manual Review, and exempt rules are left out of the calculation. Errors still count against it. Green at 80% or more, orange at 50% or more, red below.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📈</span>
      <strong>Status Counts</strong>
    </div>
    <p>Badges showing how many rules are in each status: All, Passed, Failed, Manual, N/A, and Errors when there are any. A <strong>Need Attention</strong> counter adds up unexempt failures, manual reviews, and errors. With nothing selected, the detail area shows a dashboard with a pass-rate donut and a By Section breakdown, worst first.</p>
  </div>
</div>

### Results List

Each row shows one rule with its:

<table className="icon-table">
  <tbody>
  <tr><td>🏷️</td><td><strong>Status</strong></td><td>Color-coded icon, e.g. <span className="status-card--pass status-card__pill"><span className="status-card__dot"></span>Pass</span> <span className="status-card--fail status-card__pill"><span className="status-card__dot"></span>Fail</span></td></tr>
  <tr><td>📝</td><td><strong>Title or Rule ID</strong></td><td>Whichever you pick in the Title / ID switch is the main line; the other is the caption</td></tr>
  <tr><td>🆔</td><td><strong>STIG ID, CIS ID, Section</strong></td><td>Optional extras from the view menu</td></tr>
  <tr><td>🏷️</td><td><strong>Pills</strong></td><td>N/A, Overridden, Modified, Disabled, Exempt, Review, or Comment when they apply</td></tr>
  <tr><td>⏱️</td><td><strong>Execution Time</strong></td><td>How long the check took, on the right</td></tr>
  </tbody>
</table>

Expected and actual output, the discussion for manual rules, comments, and the exemption reason live in the detail panel on the right.

### What You Can Do With Results

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🔍</span>
      <strong>Filter and Search</strong>
    </div>
    <p>Click a status badge to filter, use the Filter menu for payload types, Has Script, Has ODV, Exempt, Modified, Disabled, or Flagged rules, and search by Rule ID, title, STIG or CIS ID, comment, exemption reason, or status.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">✏️</span>
      <strong>Override Status</strong>
    </div>
    <p>Set a rule to Pass, Fail, Manual Review, or N/A, or override its output values. Overrides are tracked and can be shown in exports.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">💬</span>
      <strong>Add Comments</strong>
    </div>
    <p>Add notes to any rule explaining exceptions, compensating controls, or remediation plans.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🔄</span>
      <strong>Re-run Individual Rules</strong>
    </div>
    <p>Click <strong>Rerun</strong> in the detail header to re-check one rule, or <strong>Rerun All</strong> in the footer to repeat the whole audit. Rerun All keeps comments but clears overrides.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📤</span>
      <strong>Export Reports</strong>
    </div>
    <p>From the footer bar, open a live <strong>Export Preview</strong>, use <strong>Quick Export</strong>, or build a DISA <strong>STIG Checklist</strong>. Nine formats, from PDF and HTML to spreadsheets and checklists.</p>
  </div>
</div>

## Manual Review Rules

Some rules don't have automated checks. These are marked <span className="status-card--manual status-card__pill"><span className="status-card__dot"></span>Manual Review</span> and require you to:

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Read the rule's discussion</strong>
      <span>Understand what needs to be verified</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Manually check the setting</strong>
      <span>Verify it on your Mac yourself</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Set the status</strong>
      <span>Choose Pass, Fail, or N/A based on your findings</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Add a comment</strong>
      <span>Explain how you verified it</span>
    </div>
  </div>
</div>

<div className="explanation-box">
  <h4>Why Some Rules Need Manual Review</h4>
  <p>Not every security setting can be checked automatically. Some require visual inspection (like checking a physical cable), reviewing policies, or judgment calls that can't be automated.</p>
</div>

## System Information Collection

MACE can collect device information to include in reports:

<table className="icon-table">
  <tbody>
  <tr><td>💻</td><td><strong>Serial Number</strong></td><td>Your Mac's unique identifier</td></tr>
  <tr><td>📱</td><td><strong>Model Name</strong></td><td>e.g., "MacBook Pro" or "Mac mini"</td></tr>
  <tr><td>🖥️</td><td><strong>Hostname</strong></td><td>Your computer's network name</td></tr>
  <tr><td>🍎</td><td><strong>macOS Version</strong></td><td>e.g., 15.0.1</td></tr>
  <tr><td>🌐</td><td><strong>IP Address and MAC Address</strong></td><td>Off by default in exports</td></tr>
  </tbody>
</table>

This information is optional and can be included in exported reports to identify which Mac was audited.

## What's Next?

<table className="icon-table">
  <tbody>
  <tr><td>📊</td><td><strong><a href="./results">Audit Results</a></strong></td><td>Deep dive into working with results, overrides, and comments</td></tr>
  <tr><td>📄</td><td><strong><a href="./exporting">Exporting Reports</a></strong></td><td>Live preview and export in nine formats, from PDF to DISA STIG checklists</td></tr>
  </tbody>
</table>
