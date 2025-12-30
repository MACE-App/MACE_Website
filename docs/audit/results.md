---
sidebar_position: 2
---

# Audit Results

Understanding and working with MACE audit results.

## Results Summary

The summary view shows:

- **Total Rules** - Number of rules checked
- **Passed** - Rules meeting compliance
- **Failed** - Rules not meeting compliance
- **Errors** - Rules that couldn't be checked
- **Manual Review** - Rules requiring human verification
- **N/A** - Rules not applicable to this system
- **Compliance %** - Overall compliance percentage

## Section Breakdown

View compliance by section:
- Each section shows pass/fail ratio
- Drill down into specific sections
- Identify problem areas quickly

## Rule Details

For each rule, see:

| Field | Description |
|-------|-------------|
| **Status** | Pass, Fail, Error, Manual, N/A |
| **Expected** | What the value should be |
| **Actual** | What the value currently is |
| **Execution Time** | How long the check took |
| **Output** | Raw script output |

## Color Coding

Results are color-coded:
- **Green** - Pass
- **Red** - Fail
- **Yellow** - Manual Review
- **Gray** - N/A or Error

## User Comments

Add notes to individual results:
1. Select a rule
2. Click Add Comment
3. Enter your notes
4. Comments persist in exports

Use comments for:
- Explaining exceptions
- Documenting compensating controls
- Noting planned remediation

## Manual Overrides

Override the automatic status when needed:

1. Select a rule
2. Click Override
3. Choose new status
4. Add justification

:::note
Overrides are tracked and exported with results.
:::

## Filtering Results

Filter the results view:
- By status (Pass, Fail, etc.)
- By section
- By keyword
- Show only failures

## Comparing Audits

Track compliance over time:
- Run audits periodically
- Compare results
- Track improvements
- Identify regressions

*(Audit comparison is planned for future release)*
