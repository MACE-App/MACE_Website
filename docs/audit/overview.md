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
      <span>Output should contain "Log mode is on"</span>
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
  <p>The audit helper will not install or run without your permission. You choose how it's used: install it permanently, or do a one-time run where the helper is removed as soon as the audit finishes. MACE also shows a code execution warning each time you start an audit — review it and acknowledge before any checks run.</p>
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
      <span>Use the toolbar button to open the Audit window</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Select audit engine</strong>
      <span>Choose M.A.C.E. engine (recommended)</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Configure options</strong>
      <span>Pick the audit mode (Full Audit Scan or Profile Inspector) and toggle Watch Live and Include Disabled Rules</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">5</span>
    <div className="build-step__content">
      <strong>Click Start Audit</strong>
      <span>Review the code execution warning and acknowledge to proceed</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">6</span>
    <div className="build-step__content">
      <strong>Watch progress</strong>
      <span>See pass/fail status for each rule as it completes</span>
    </div>
  </div>
</div>

<div className="explanation-box">
  <h4>Tip: Load Last Audit</h4>
  <p>With <strong><a href="../reference/settings#audits">Save Last Audit</a></strong> enabled in Settings, MACE saves each completed run to the project. On your next audit, the code execution warning offers <strong>Load Last Audit</strong> — restore those results instantly instead of re-running every check.</p>
</div>

## Audit Engines

Choosing an engine is the first decision when you start an audit — the engine cards appear at the top of the audit sheet:

<div className="engine-comparison">
  <div className="engine-card">
    <div className="engine-card__header">
      <img src="/img/engine-mscp.webp" alt="mSCP" className="engine-card__icon-img" />
      <h3>mSCP Audit Engine</h3>
    </div>
    <p>Uses the original mSCP Python scripts. For organizations already using mSCP command-line tools.</p>
    <ul>
      <li>Standard mSCP audit output</li>
      <li>Python-based execution</li>
      <li>Full mSCP compatibility</li>
    </ul>
    <span className="engine-card__tag">Official Scripts</span>
  </div>
  <div className="engine-card engine-card--primary">
    <div className="engine-card__header">
      <img src="/img/engine-mace.webp" alt="M.A.C.E." className="engine-card__icon-img" />
      <h3>M.A.C.E. Audit Engine</h3>
    </div>
    <p>The recommended engine. Fast, full-featured, and built into MACE.</p>
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
    <p>Compares locally deployed mobileconfig profiles against what each rule requires. Only works with rules that have <code>mobileconfig_info</code> defined — script-based rules are excluded.</p>
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
    <p>Only available when the baseline has excluded rules.</p>
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
    <p>The percentage of rules that passed. N/A and Manual Review rules don't count toward this number since they aren't automated checks.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📈</span>
      <strong>Status Counts</strong>
    </div>
    <p>Badges showing how many rules are in each status: Total, Passed, Failed, Manual Review, Errors, N/A.</p>
  </div>
</div>

### Results Table

Each row shows one rule with its:

<table className="icon-table">
  <tbody>
  <tr><td>🏷️</td><td><strong>Status</strong></td><td>Color-coded badge, e.g. <span className="status-card--pass status-card__pill"><span className="status-card__dot"></span>Pass</span> <span className="status-card--fail status-card__pill"><span className="status-card__dot"></span>Fail</span></td></tr>
  <tr><td>🆔</td><td><strong>Rule ID</strong></td><td>Unique identifier (or STIG ID for STIG compliance)</td></tr>
  <tr><td>📝</td><td><strong>Title</strong></td><td>Human-readable rule name</td></tr>
  <tr><td>📂</td><td><strong>Section</strong></td><td>Category the rule belongs to</td></tr>
  <tr><td>🎯</td><td><strong>Expected Output</strong></td><td>What the check should return</td></tr>
  <tr><td>💻</td><td><strong>Actual Output</strong></td><td>What was actually found</td></tr>
  <tr><td>⏱️</td><td><strong>Execution Time</strong></td><td>How long the check took</td></tr>
  </tbody>
</table>

### What You Can Do With Results

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🔍</span>
      <strong>Filter and Search</strong>
    </div>
    <p>Filter by status (show only failures) or search by Rule ID, title, or section.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">✏️</span>
      <strong>Override Status</strong>
    </div>
    <p>Manually change a rule's status if needed. Overrides are tracked and appear in exports.</p>
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
    <p>Re-check a single rule without running the entire audit again.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📤</span>
      <strong>Export Reports</strong>
    </div>
    <p>Open a live <strong>Export Preview</strong>, then export in any of nine formats — from PDF and HTML to spreadsheets and DISA STIG checklists.</p>
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
