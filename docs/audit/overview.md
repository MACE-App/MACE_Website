---
sidebar_position: 1
---

# Audit

<div className="editor-intro">
  <p className="editor-intro__lead">Run compliance checks directly on your Mac and see results in real-time.</p>
  <p className="editor-intro__sub">Instantly identify what's compliant, what's not, and what needs manual review.</p>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/audit-light.png" alt="MACE Audit" className="img-light" />
  <img src="/img/screenshots/audit-dark.png" alt="MACE Audit" className="img-dark" />
</div>

## What Does Audit Do?

When you click Audit, MACE runs every enabled rule's check command directly on your Mac and tells you whether each setting is compliant. Think of it as a compliance health check: MACE examines your system and reports what passes, what fails, and what needs attention.

<div className="explanation-box">
  <h4>Audit vs Build: What's the Difference?</h4>
  <p><strong>Build</strong> generates files (scripts, profiles, DDM) that you deploy to other Macs via MDM.</p>
  <p><strong>Audit</strong> runs those same checks right now, on this Mac, and shows you the results immediately. It's how you verify compliance on a specific machine.</p>
</div>

## Audit Status Types

Each rule receives one of these statuses after checking:

<div className="status-grid">
  <div className="status-item status-item--pass">
    <span className="status-item__icon">✅</span>
    <div className="status-item__content">
      <strong>Pass</strong>
      <span>The setting matches the expected value. This Mac is compliant for this rule.</span>
    </div>
  </div>
  <div className="status-item status-item--fail">
    <span className="status-item__icon">❌</span>
    <div className="status-item__content">
      <strong>Fail</strong>
      <span>The setting does not match the expected value. This Mac needs remediation.</span>
    </div>
  </div>
  <div className="status-item status-item--error">
    <span className="status-item__icon">⚠️</span>
    <div className="status-item__content">
      <strong>Error</strong>
      <span>The check couldn't run or returned unexpected output. Investigate manually.</span>
    </div>
  </div>
  <div className="status-item status-item--manual">
    <span className="status-item__icon">👁️</span>
    <div className="status-item__content">
      <strong>Manual Review</strong>
      <span>No automated check exists. You must verify this rule manually and set the status yourself.</span>
    </div>
  </div>
  <div className="status-item status-item--na">
    <span className="status-item__icon">➖</span>
    <div className="status-item__content">
      <strong>N/A</strong>
      <span>This rule doesn't apply to this system. Excluded from the pass rate calculation.</span>
    </div>
  </div>
  <div className="status-item status-item--pending">
    <span className="status-item__icon">⏳</span>
    <div className="status-item__content">
      <strong>Pending</strong>
      <span>The rule hasn't been checked yet. Waiting for the audit to reach this rule.</span>
    </div>
  </div>
  <div className="status-item status-item--running">
    <span className="status-item__icon">🔄</span>
    <div className="status-item__content">
      <strong>Running</strong>
      <span>The check is currently executing. You'll see this briefly as MACE works through each rule.</span>
    </div>
  </div>
</div>

## How Auditing Works

When you run an audit, MACE goes through each enabled rule and executes its check command:

<div className="what-happens">
  <div className="what-happens__list">
    <div className="what-happens__item">
      <span className="what-happens__icon">📋</span>
      <div className="what-happens__content">
        <strong>Load your rules</strong>
        <p>MACE reads all enabled rules from your baseline, including any customizations you've made.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">🔐</span>
      <div className="what-happens__content">
        <strong>Verify helper is ready</strong>
        <p>Some checks need admin access. MACE confirms the helper tool is installed.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">⚡</span>
      <div className="what-happens__content">
        <strong>Run each check</strong>
        <p>For each rule, MACE runs the check command to see what your Mac's current setting is.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">⚖️</span>
      <div className="what-happens__content">
        <strong>Compare actual vs expected</strong>
        <p>The output is compared against the expected value defined in the rule.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">📊</span>
      <div className="what-happens__content">
        <strong>Report results</strong>
        <p>Each rule gets a status (Pass/Fail/Error/etc.) and the results are displayed with details.</p>
      </div>
    </div>
  </div>
</div>

### Example: What Happens During a Check

For a rule like "Enable Firewall Logging":

1. **Check command runs:** `/usr/libexec/ApplicationFirewall/socketfilterfw --getloggingmode`
2. **Output received:** `Log mode is on`
3. **Expected value:** Output should contain "Log mode is on"
4. **Comparison:** Output matches expected value
5. **Result:** **Pass**

If the output was "Log mode is off", the result would be **Fail**.

## Privileged Helper

Some compliance checks need administrator access to read protected system settings. MACE includes a helper tool that runs these checks securely.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔐</span>
      <strong>Why Admin Access?</strong>
    </div>
    <p>Certain security settings can only be read with admin privileges. For example, checking FileVault status or reading protected system preferences.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📦</span>
      <strong>Install Permanently</strong>
    </div>
    <p>Installs the helper so it's always available for future audits. You'll still see a warning before each audit runs, but you won't need to enter your password again.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">⏱️</span>
      <strong>Install for This Session</strong>
    </div>
    <p>Installs the helper temporarily. It automatically removes itself when MACE closes. Good if you only need to run a one-time audit.</p>
  </div>
</div>

<div className="explanation-box explanation-box--warning">
  <h4>Safety First</h4>
  <p>The helper runs commands from your rules with admin privileges. Before running an audit, make sure you trust the baseline you're using. If you've added custom rules or are using an unfamiliar baseline, review them first.</p>
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
      <span>Enable or disable Watch Live mode</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">5</span>
    <div className="build-step__content">
      <strong>Click Run Audit</strong>
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
  <h4>Code Execution Warning</h4>
  <p>Before the audit starts, MACE shows a warning explaining that it will run commands to check your Mac's settings. This is normal and expected. Review the warning and acknowledge to proceed.</p>
</div>

## Audit Options

### Watch Live

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">👁️</span>
      <strong>Watch Live (Default: ON)</strong>
    </div>
    <p>Shows results updating in real-time as each rule is checked. You can see pass/fail results appear immediately as the audit progresses.</p>
    <p><strong>When to disable:</strong> On slower Macs, live updates can slow down the audit. Disable this to let the audit complete faster, then view all results at once.</p>
  </div>
</div>

## Audit Engines

<div className="engine-comparison">
  <div className="engine-card engine-card--primary">
    <div className="engine-card__header">
      <span className="engine-card__icon">⚡</span>
      <h3>M.A.C.E. Audit Engine</h3>
    </div>
    <p>The recommended engine. Fast, full-featured, and built into MACE.</p>
    <ul>
      <li>Real-time results with Watch Live</li>
      <li>Export to PDF, HTML, CSV, CKL</li>
      <li>Override results and add comments</li>
      <li>Supports all customizations</li>
    </ul>
  </div>
  <div className="engine-card">
    <div className="engine-card__header">
      <span className="engine-card__icon">🐍</span>
      <h3>mSCP Audit Engine</h3>
    </div>
    <p>Uses the original mSCP Python scripts. For organizations already using mSCP command-line tools.</p>
    <ul>
      <li><em>(Planned for future release)</em></li>
    </ul>
  </div>
</div>

## Understanding the Results

After the audit completes, you'll see:

### Summary Statistics

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📊</span>
      <strong>Pass Rate</strong>
    </div>
    <p>The percentage of rules that passed. N/A and Manual Review rules don't count toward this number since they aren't automated checks.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📈</span>
      <strong>Status Counts</strong>
    </div>
    <p>Badges showing how many rules are in each status: Total, Passed, Failed, Manual Review, Errors, N/A.</p>
  </div>
</div>

### Results Table

Each row shows one rule with its:
- **Status**: Color-coded badge (Pass/Fail/Error/etc.)
- **Rule ID**: Unique identifier (or STIG ID for STIG compliance)
- **Title**: Human-readable rule name
- **Section**: Category the rule belongs to
- **Expected Output**: What the check should return
- **Actual Output**: What was actually found
- **Execution Time**: How long the check took

### What You Can Do With Results

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔍</span>
      <strong>Filter and Search</strong>
    </div>
    <p>Filter by status (show only failures) or search by Rule ID, title, or section.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">✏️</span>
      <strong>Override Status</strong>
    </div>
    <p>Manually change a rule's status if needed. Overrides are tracked and appear in exports.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">💬</span>
      <strong>Add Comments</strong>
    </div>
    <p>Add notes to any rule explaining exceptions, compensating controls, or remediation plans.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔄</span>
      <strong>Re-run Individual Rules</strong>
    </div>
    <p>Re-check a single rule without running the entire audit again.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📤</span>
      <strong>Export Reports</strong>
    </div>
    <p>Export results to PDF, HTML, CSV, or DISA STIG CKL format for documentation and auditors.</p>
  </div>
</div>

## Manual Review Rules

Some rules don't have automated checks. These are marked as "Manual Review" and require you to:

1. **Read the rule's discussion** to understand what needs to be verified
2. **Manually check the setting** on your Mac
3. **Set the status** to Pass, Fail, or N/A based on your findings
4. **Add a comment** explaining your verification

<div className="explanation-box">
  <h4>Why Some Rules Need Manual Review</h4>
  <p>Not every security setting can be checked automatically. Some require visual inspection (like checking a physical cable), reviewing policies, or judgment calls that can't be automated.</p>
</div>

## System Information Collection

MACE can collect device information to include in reports:

<table className="icon-table">
  <tr><td>💻</td><td><strong>Serial Number</strong></td><td>Your Mac's unique identifier</td></tr>
  <tr><td>📱</td><td><strong>Model Name</strong></td><td>e.g., "MacBook Pro" or "Mac mini"</td></tr>
  <tr><td>🖥️</td><td><strong>Hostname</strong></td><td>Your computer's network name</td></tr>
  <tr><td>🍎</td><td><strong>macOS Version</strong></td><td>e.g., 15.0.1</td></tr>
</table>

This information is optional and can be included in exported reports to identify which Mac was audited.

## What's Next?

<table className="icon-table">
  <tr><td>📊</td><td><strong><a href="./results">Audit Results</a></strong></td><td>Deep dive into working with results, overrides, and comments</td></tr>
  <tr><td>📄</td><td><strong><a href="./exporting">Exporting Reports</a></strong></td><td>Export to PDF, HTML, CSV, and STIG CKL formats</td></tr>
</table>
