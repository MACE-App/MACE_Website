---
sidebar_position: 2
description: Analyze audit results, filter by status, and understand what each compliance check found.
title: "Audit Results"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Audit Results</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__figure">
      <img
        src="/img/mascots/audit-results.webp"
        alt="MACE mascot presenting a compliance results dashboard"
        className="doc-hero__mascot"
        width="440"
        height="440"
      />
    </div>
    <div className="doc-hero__text">
      <p className="doc-hero__lead">View, filter, edit, and understand your compliance audit results.</p>
      <p className="doc-hero__sub">Every rule's status, what was checked, and what was found.</p>
    </div>
  </div>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/audit-light.webp" alt="MACE Audit Results" className="img-light" />
  <img src="/img/screenshots/audit-dark.webp" alt="MACE Audit Results" className="img-dark" />
</div>

## Results Overview

After an audit completes, you see a comprehensive view of your Mac's compliance status. The results screen has three main areas:

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📊</span>
      <strong>Summary Header</strong>
    </div>
    <p>Pass rate, status counts, and filter controls at the top of the window.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📋</span>
      <strong>Results Table</strong>
    </div>
    <p>Every rule with its status and details, searchable and sortable.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🔎</span>
      <strong>Details Panel</strong>
    </div>
    <p>Deep dive into the selected rule — scripts, discussion, outputs, and editing controls.</p>
  </div>
</div>

## Summary Statistics

At the top of the results view, you'll see:

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📊</span>
      <strong>Pass Rate Percentage</strong>
    </div>
    <p>Your main compliance score. Shows what percentage of rules passed out of all the rules that could be automatically checked.</p>
    <p>N/A and Manual Review rules don't count toward this number.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🏷️</span>
      <strong>Status Badges</strong>
    </div>
    <p>Color-coded counts for each status type. Click a badge to filter the table to just that status.</p>
    <div className="pill-row">
      <span className="status-card__pill"><span className="status-card__dot"></span>Total</span>
      <span className="status-card--pass status-card__pill"><span className="status-card__dot"></span>Passed</span>
      <span className="status-card--fail status-card__pill"><span className="status-card__dot"></span>Failed</span>
      <span className="status-card--manual status-card__pill"><span className="status-card__dot"></span>Manual Review</span>
      <span className="status-card--error status-card__pill"><span className="status-card__dot"></span>Errors</span>
      <span className="status-card--na status-card__pill"><span className="status-card__dot"></span>N/A</span>
    </div>
  </div>
</div>

## Results Table

The main table shows every rule that was checked:

### Table Columns

<table className="icon-table">
  <tbody>
  <tr><td>🚦</td><td><strong>Status</strong></td><td>Color-coded badge, e.g. <span className="status-card--pass status-card__pill"><span className="status-card__dot"></span>Pass</span> <span className="status-card--fail status-card__pill"><span className="status-card__dot"></span>Fail</span></td></tr>
  <tr><td>🔢</td><td><strong>Rule ID / STIG ID</strong></td><td>The unique identifier for this rule. For STIG compliance this shows the STIG ID (like APPL-15-005001); other baselines show the rule ID</td></tr>
  <tr><td>📝</td><td><strong>Title</strong></td><td>Human-readable name describing what the rule checks (e.g., "Enable Firewall Logging")</td></tr>
  <tr><td>📁</td><td><strong>Section</strong></td><td>The category this rule belongs to (e.g., "System Settings", "Authentication")</td></tr>
  <tr><td>✅</td><td><strong>Expected Output</strong></td><td>What the check command should return for a passing result — the "correct" value</td></tr>
  <tr><td>📋</td><td><strong>Actual Output</strong></td><td>What your Mac actually returned. If this matches Expected, the rule passes</td></tr>
  <tr><td>⏱️</td><td><strong>Execution Time</strong></td><td>How long the check took to run (in seconds). Helps identify slow-running checks</td></tr>
  </tbody>
</table>

### Optional Columns

Depending on your baseline and settings, you may also see:

<table className="icon-table">
  <tbody>
  <tr><td>🔖</td><td><strong>CIS ID</strong></td><td>CIS Benchmark reference number (for CIS compliance)</td></tr>
  <tr><td>📖</td><td><strong>Discussion</strong></td><td>Additional context about the rule</td></tr>
  </tbody>
</table>

## Filtering and Searching

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🚦</span>
      <strong>Filter by Status</strong>
    </div>
    <p>Click the status badges to filter the table:</p>
    <ul>
      <li>Click <strong>Failed</strong> to see only failed rules</li>
      <li>Click <strong>Passed</strong> to see only passing rules</li>
      <li>Click <strong>Manual Review</strong> to see rules needing attention</li>
      <li>Click <strong>All</strong> to reset and show everything</li>
    </ul>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🔍</span>
      <strong>Search</strong>
    </div>
    <p>Use the search box to find rules by:</p>
    <ul>
      <li><strong>Rule ID</strong>: Search "firewall" to find firewall-related rules</li>
      <li><strong>Title</strong>: Search by the rule name</li>
      <li><strong>Section</strong>: Search by category name</li>
    </ul>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">↕️</span>
      <strong>Sorting</strong>
    </div>
    <p>Click column headers to sort:</p>
    <ul>
      <li><strong>Rule ID</strong>: Alphabetical by identifier</li>
      <li><strong>STIG ID</strong>: By STIG reference (STIG compliance only)</li>
      <li><strong>Title</strong>: Alphabetical by name</li>
      <li><strong>Status</strong>: Groups by status (failures first)</li>
    </ul>
  </div>
</div>

## Rule Details Panel

Click any rule to see its full details in the right panel:

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📜</span>
      <strong>Check Script</strong>
    </div>
    <p>The command that was run to check this setting. Shows exactly what MACE tested.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🔧</span>
      <strong>Fix Script</strong>
    </div>
    <p>The remediation command that would fix a failing rule. Copy this to run manually, or use Build to generate scripts that include it.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📖</span>
      <strong>Discussion</strong>
    </div>
    <p>Detailed explanation of why this rule exists, what it protects against, and any context for the setting.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">⚠️</span>
      <strong>Error Message</strong>
    </div>
    <p>If the check failed with an error, this shows what went wrong. Helps troubleshoot issues.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📋</span>
      <strong>Copy Rule ID</strong>
    </div>
    <p>Click to copy the rule's ID to your clipboard. Useful for referencing specific rules in documentation or reports.</p>
  </div>
</div>

## Editing Results

### Overriding Status

Sometimes you need to manually change a rule's status. For example:

<table className="icon-table">
  <tbody>
  <tr><td>✅</td><td><strong>False failure</strong></td><td>A check reports "Fail" but you've verified it's actually compliant via a different method</td></tr>
  <tr><td>❌</td><td><strong>False pass</strong></td><td>A check reports "Pass" but you know there's an issue</td></tr>
  <tr><td>👁️</td><td><strong>Manual review done</strong></td><td>You've completed a manual review and need to set the status</td></tr>
  </tbody>
</table>

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Select the rule</strong>
      <span>Click it in the results table</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Click the status dropdown</strong>
      <span>Found in the details panel</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Choose the new status</strong>
      <span>Pass, Fail, Error, Manual Review, or N/A</span>
    </div>
  </div>
</div>

<div className="explanation-box">
  <h4>Overrides Are Tracked</h4>
  <p>When you override a result, MACE remembers the original value. Exports can show an "Override" indicator so auditors know which results were manually changed.</p>
</div>

### Editing Expected and Actual Output

You can also edit the Expected Output and Actual Output fields — click the field, modify the text, and the change is tracked as an override.

This is useful when:

<table className="icon-table">
  <tbody>
  <tr><td>🧹</td><td><strong>Messy output</strong></td><td>The check returned extra whitespace or formatting</td></tr>
  <tr><td>👀</td><td><strong>Manual observation</strong></td><td>You need to document what you manually observed</td></tr>
  <tr><td>🎯</td><td><strong>Environment-specific value</strong></td><td>You want to correct an expected value for your environment</td></tr>
  </tbody>
</table>

### Adding Comments

Comments let you document why a rule is in a particular state. Select a rule, find the Comment field in the details panel, and enter your notes.

<table className="icon-table">
  <tbody>
  <tr><td>🚫</td><td><strong>Exemptions</strong></td><td>Explain why a rule is exempt from your baseline</td></tr>
  <tr><td>🛡️</td><td><strong>Compensating controls</strong></td><td>Document alternative protections that cover the risk</td></tr>
  <tr><td>📅</td><td><strong>Remediation plans</strong></td><td>Note when a fix is scheduled or planned</td></tr>
  <tr><td>✍️</td><td><strong>Verification records</strong></td><td>Record who verified a manual review item and how</td></tr>
  </tbody>
</table>

<div className="explanation-box">
  <h4>Comments Travel With Your Reports</h4>
  <p>Comments appear in every exported format — from PDF reports to STIG checklists — so your documentation stays with the results auditors see.</p>
</div>

## Re-running Rules

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🔄</span>
      <strong>Re-run a Single Rule</strong>
    </div>
    <p>After making changes to your Mac, re-check one rule without running the entire audit: select the rule, then click <strong>Re-run</strong> (or right-click and select Re-run). The rule is checked again and the result updates.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🔁</span>
      <strong>Re-run All Rules</strong>
    </div>
    <p>Click <strong>Re-run All</strong> in the toolbar to check every rule fresh. User comments are preserved, but statuses are updated.</p>
  </div>
</div>

## Understanding Pass/Fail

A rule passes when the **Actual Output** matches the **Expected Output**:

<table className="icon-table">
  <tbody>
  <tr><td><span className="status-card--pass status-card__pill"><span className="status-card__dot"></span>Pass</span></td><td><strong>Expected:</strong> <code>1</code> · <strong>Actual:</strong> <code>1</code></td><td>The check ran and the value matches — firewall is enabled as required</td></tr>
  <tr><td><span className="status-card--fail status-card__pill"><span className="status-card__dot"></span>Fail</span></td><td><strong>Expected:</strong> <code>1</code> · <strong>Actual:</strong> <code>0</code></td><td>The check ran successfully but the value was wrong — firewall is disabled</td></tr>
  <tr><td><span className="status-card--error status-card__pill"><span className="status-card__dot"></span>Error</span></td><td><strong>Check couldn't run</strong></td><td>The check itself crashed, timed out, or returned unexpected output — investigate why</td></tr>
  </tbody>
</table>

<div className="explanation-box">
  <h4>Error vs Fail</h4>
  <p><strong>Fail</strong> means the check ran and gave a definitive wrong answer. <strong>Error</strong> means the check never completed, so the true state is unknown — review errors before addressing failures.</p>
</div>

## Working with Manual Review Items

Rules marked <span className="status-card--manual status-card__pill"><span className="status-card__dot"></span>Manual Review</span> have no automated check. You must:

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Read the discussion</strong>
      <span>Understand what the rule requires and how to verify it</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Manually verify</strong>
      <span>Check the setting on your Mac or review documentation</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Set the status</strong>
      <span>Change from "Manual Review" to Pass, Fail, or N/A</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Add a comment</strong>
      <span>Document how you verified and what you found</span>
    </div>
  </div>
</div>

## Identifying Problem Areas

### Failed Rules

Failed rules are your immediate priority. For each failed rule:

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>View Expected vs Actual</strong>
      <span>Understand the gap between what should be set and what is</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Check the Fix Script</strong>
      <span>See how to remediate the setting</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Fix or document</strong>
      <span>Decide whether to remediate now or document an exception</span>
    </div>
  </div>
</div>

### Section Breakdown

<div className="explanation-box">
  <h4>Tip: Compliance by Category</h4>
  <p>Enable <strong>Section Summary</strong> in export options to see compliance broken down by category. This helps identify which areas of your baseline have the most failures — for example, most misses concentrated in "Authentication" or "System Settings".</p>
</div>

## Best Practices

<div className="best-practices">
  <div className="practice-item">
    <span className="practice-item__icon">📝</span>
    <div className="practice-item__content">
      <strong>Document everything</strong>
      <p>Add comments to any rule with exceptions, compensating controls, or special circumstances. This helps auditors understand your decisions.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🔍</span>
    <div className="practice-item__content">
      <strong>Review errors first</strong>
      <p>Error results mean something went wrong with the check itself. Investigate these before addressing failures.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">✅</span>
    <div className="practice-item__content">
      <strong>Complete manual reviews</strong>
      <p>Don't leave rules in "Manual Review" status. Verify each one and set a definitive status with documentation.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">📊</span>
    <div className="practice-item__content">
      <strong>Export before making changes</strong>
      <p>Export results before remediating so you have a record of the "before" state for comparison.</p>
    </div>
  </div>
</div>

## What's Next?

<table className="icon-table">
  <tbody>
  <tr><td>📄</td><td><strong><a href="./exporting">Exporting Reports</a></strong></td><td>Live preview and export in nine formats, from PDF to DISA STIG checklists</td></tr>
  </tbody>
</table>
