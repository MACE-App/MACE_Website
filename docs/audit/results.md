---
sidebar_position: 2
---

# Audit Results

<div className="editor-intro">
  <p className="editor-intro__lead">View, filter, edit, and understand your compliance audit results.</p>
  <p className="editor-intro__sub">Every rule's status, what was checked, and what was found.</p>
</div>

## Results Overview

After an audit completes, you see a comprehensive view of your Mac's compliance status. The results screen has three main areas:

1. **Summary header**: Pass rate, status counts, and filter controls
2. **Results table**: Every rule with its status and details
3. **Details panel**: Deep dive into the selected rule

## Summary Statistics

At the top of the results view, you'll see:

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📊</span>
      <strong>Pass Rate Percentage</strong>
    </div>
    <p>Your main compliance score. Shows what percentage of rules passed out of all the rules that could be automatically checked.</p>
    <p>N/A and Manual Review rules don't count toward this number.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🏷️</span>
      <strong>Status Badges</strong>
    </div>
    <p>Color-coded counts for each status type:</p>
    <ul>
      <li><strong>Total</strong>: All rules that were checked</li>
      <li><strong>Passed</strong> (green): Rules that passed</li>
      <li><strong>Failed</strong> (red): Rules that failed</li>
      <li><strong>Manual Review</strong> (yellow): Rules needing human verification</li>
      <li><strong>Errors</strong> (orange): Rules where the check couldn't run</li>
      <li><strong>N/A</strong> (gray): Rules not applicable to this system</li>
    </ul>
  </div>
</div>

## Results Table

The main table shows every rule that was checked:

### Table Columns

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🚦</span>
      <strong>Status</strong>
    </div>
    <p>Color-coded badge showing Pass, Fail, Error, Manual Review, N/A, or Pending.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔢</span>
      <strong>Rule ID / STIG ID</strong>
    </div>
    <p>The unique identifier for this rule. For STIG compliance, this shows the STIG ID (like APPL-15-005001). For other baselines, it shows the rule ID.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📝</span>
      <strong>Title</strong>
    </div>
    <p>Human-readable name describing what the rule checks (e.g., "Enable Firewall Logging").</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📁</span>
      <strong>Section</strong>
    </div>
    <p>The category this rule belongs to (e.g., "System Settings", "Authentication").</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">✅</span>
      <strong>Expected Output</strong>
    </div>
    <p>What the check command should return for a passing result. This is the "correct" value.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Actual Output</strong>
    </div>
    <p>What your Mac actually returned. If this matches Expected, the rule passes.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">⏱️</span>
      <strong>Execution Time</strong>
    </div>
    <p>How long the check took to run (in seconds). Helps identify slow-running checks.</p>
  </div>
</div>

### Optional Columns

Depending on your baseline and settings, you may also see:
- **CIS ID**: CIS Benchmark reference number (for CIS compliance)
- **Discussion**: Additional context about the rule

## Filtering and Searching

### Filter by Status

Click the status badges to filter the table:
- Click **Failed** to see only failed rules
- Click **Passed** to see only passing rules
- Click **Manual Review** to see rules needing attention
- Click **All** to reset and show everything

### Search

Use the search box to find rules by:
- **Rule ID**: Search "firewall" to find firewall-related rules
- **Title**: Search by the rule name
- **Section**: Search by category name

### Sorting

Click column headers to sort:
- **Rule ID**: Alphabetical by identifier
- **STIG ID**: By STIG reference (STIG compliance only)
- **Title**: Alphabetical by name
- **Status**: Groups by status (failures first)

## Rule Details Panel

Click any rule to see its full details in the right panel:

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📜</span>
      <strong>Check Script</strong>
    </div>
    <p>The command that was run to check this setting. Shows exactly what MACE tested.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔧</span>
      <strong>Fix Script</strong>
    </div>
    <p>The remediation command that would fix a failing rule. Copy this to run manually, or use Build to generate scripts that include it.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📖</span>
      <strong>Discussion</strong>
    </div>
    <p>Detailed explanation of why this rule exists, what it protects against, and any context for the setting.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">⚠️</span>
      <strong>Error Message</strong>
    </div>
    <p>If the check failed with an error, this shows what went wrong. Helps troubleshoot issues.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Copy Rule ID</strong>
    </div>
    <p>Click to copy the rule's ID to your clipboard. Useful for referencing specific rules in documentation or reports.</p>
  </div>
</div>

## Editing Results

### Overriding Status

Sometimes you need to manually change a rule's status. For example:
- A check reports "Fail" but you've verified it's actually compliant via a different method
- A check reports "Pass" but you know there's an issue
- You've completed a manual review and need to set the status

**To override a status:**
1. Select the rule in the results table
2. Click the status dropdown in the details panel
3. Choose the new status (Pass, Fail, Error, Manual Review, N/A)

<div className="explanation-box">
  <h4>Overrides Are Tracked</h4>
  <p>When you override a result, MACE remembers the original value. Exports can show an "Override" indicator so auditors know which results were manually changed.</p>
</div>

### Editing Expected and Actual Output

You can also edit the Expected Output and Actual Output fields:
1. Click the field you want to edit
2. Modify the text
3. The change is tracked as an override

This is useful when:
- The check returned extra whitespace or formatting
- You need to document what you manually observed
- You want to correct an expected value for your environment

### Adding Comments

Comments let you document why a rule is in a particular state:

1. Select a rule
2. Find the Comment field in the details panel
3. Enter your notes

**Use comments for:**
- Explaining why a rule is exempt
- Documenting compensating controls
- Noting when remediation is planned
- Recording who verified a manual review item

Comments appear in all exported reports.

## Re-running Rules

### Re-run a Single Rule

After making changes to your Mac, you can re-check a single rule without running the entire audit:

1. Select the rule you want to re-check
2. Click **Re-run** (or right-click and select Re-run)
3. The rule is checked again and the result updates

### Re-run All Rules

To re-run the entire audit:
1. Click **Re-run All** in the toolbar
2. All rules are checked fresh
3. User comments are preserved, but statuses are updated

## Understanding Pass/Fail

### What Makes a Rule Pass?

A rule passes when the **Actual Output** matches the **Expected Output**.

For example:
- **Expected:** `1` (firewall enabled)
- **Actual:** `1`
- **Result:** Pass

### What Makes a Rule Fail?

A rule fails when the actual output doesn't match expected:
- **Expected:** `1` (firewall enabled)
- **Actual:** `0` (firewall disabled)
- **Result:** Fail

### Error vs Fail

- **Fail**: The check ran successfully but the value was wrong
- **Error**: The check itself failed to run (crashed, timed out, or returned unexpected output)

Errors need investigation to understand why the check couldn't complete.

## Working with Manual Review Items

Rules marked "Manual Review" have no automated check. You must:

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
1. View the Expected vs Actual to understand the gap
2. Check the Fix Script to see how to remediate
3. Decide whether to fix now or document an exception

### Section Breakdown

Enable "Section Summary" in export options to see compliance by category. This helps identify which areas of your baseline have the most failures.

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
  <tr><td>📄</td><td><strong><a href="./exporting">Exporting Reports</a></strong></td><td>Export to PDF, HTML, CSV, and STIG CKL formats</td></tr>
</table>
