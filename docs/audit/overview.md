---
sidebar_position: 1
---

# Audit Overview

MACE includes a powerful audit engine that runs compliance checks directly on your Mac, providing real-time results with detailed status reporting.

{/* TODO: Add screenshot - audit_running.png */}
:::tip Screenshot Needed
**Filename:** `audit_running.png`
**Description:** Audit in progress showing real-time progress bar, current rule being checked, and live pass/fail counts.
:::

## How Auditing Works

The MACE audit engine:

1. **Loads your baseline** - Reads enabled rules with your customizations
2. **Installs privileged helper** - Sets up secure root access for system checks
3. **Executes each check** - Runs the check script for every enabled rule
4. **Compares results** - Validates actual output against expected values
5. **Reports findings** - Displays color-coded results with details

## Privileged Helper

Many compliance checks require root access to read system settings. MACE uses a privileged helper daemon (`com.mace.helper`) for secure privilege escalation:

- **XPC-based communication** - Secure inter-process messaging
- **Session or persistent install** - Choose installation preference
- **Automatic verification** - Confirms helper is functioning

:::note
The privileged helper must be installed before running audits. MACE will prompt you to install it if needed.
:::

## Audit Status Types

Each rule receives one of these statuses:

| Status | Color | Description |
|--------|-------|-------------|
| **Pass** | Green | Setting matches expected value |
| **Fail** | Red | Setting does not match expected value |
| **Error** | Orange | Check script failed to execute |
| **Manual Review** | Yellow | Requires human verification |
| **Not Applicable** | Gray | Rule doesn't apply to this system |
| **Pending** | - | Not yet checked |
| **Running** | Blue | Currently being checked |

### When is Manual Review Used?
A rule gets "Manual Review" status when:
- No check script is defined
- Check requires visual verification
- Multiple conditions need human judgment
- Rule explicitly marked as manual-only

## Running an Audit

### Start Audit

1. Open your project in the Compliance Editor
2. Click **Audit** in the toolbar
3. Configure audit options (see below)
4. Click **Run Audit**

### Audit Options

| Option | Description |
|--------|-------------|
| **Timeout** | Maximum time per rule (default: 30 seconds) |
| **Stop on Failure** | Halt audit on first failed rule |
| **Include Manual** | Run checks for manual review rules |

### During the Audit

The audit view shows:
- **Progress bar** - Overall completion percentage
- **Current rule** - Rule being checked now
- **Live counts** - Running tally of pass/fail/error
- **Elapsed time** - How long the audit has run

{/* TODO: Add screenshot - audit_progress.png */}
:::tip Screenshot Needed
**Filename:** `audit_progress.png`
**Description:** Audit progress view with progress bar, current rule indicator, and live statistics.
:::

### Audit Controls

- **Pause** - Temporarily halt the audit
- **Resume** - Continue from where paused
- **Cancel** - Stop audit completely
- **Rerun** - Start fresh audit

## Viewing Results

After completion, the results view displays:

### Summary Statistics
- Total rules checked
- Passed count and percentage
- Failed count and percentage
- Errors and manual review counts
- Overall compliance percentage

### Results Table

| Column | Description |
|--------|-------------|
| **Status** | Color-coded pass/fail indicator |
| **Rule ID** | Unique identifier |
| **STIG ID** | DISA STIG reference (if applicable) |
| **Title** | Human-readable name |
| **Expected** | What the value should be |
| **Actual** | What was found on this system |
| **Time** | Execution time for this check |

### Sorting Results

Click column headers to sort by:
- Rule ID (alphabetical)
- STIG ID (if displayed)
- Title (alphabetical)
- Status (failures first)

### Filtering Results

| Filter | Shows |
|--------|-------|
| **All** | Every checked rule |
| **Failed** | Only failed rules |
| **Passed** | Only passing rules |
| **Errors** | Only error results |
| **Manual** | Only manual review items |

## Individual Rule Actions

For each rule result, you can:

- **View Details** - See full check output and expected vs. actual
- **Rerun Check** - Re-execute just this rule
- **Add Comment** - Annotate with notes
- **Override Status** - Manually change the status
- **View Fix** - See the remediation command
- **Copy to Clipboard** - Copy rule details

## Live Watch Mode

Enable Live Watch for continuous monitoring:

1. Toggle **Live Watch** in audit settings
2. Set check interval (e.g., every 5 minutes)
3. MACE continuously monitors compliance
4. Alerts on status changes

Useful for:
- Real-time compliance dashboards
- Detecting configuration drift
- Continuous monitoring requirements

## System Information Collection

MACE collects device metadata for reports:

| Information | Source |
|-------------|--------|
| **Serial Number** | IOKit registry |
| **Model** | system_profiler |
| **Hostname** | ProcessInfo |
| **OS Version** | ProcessInfo |
| **Hardware ID** | sysctl |

This information appears in exported reports.

## Performance

The audit engine is optimized for:
- **Parallel-safe execution** - Rules run sequentially to avoid conflicts
- **Timeout handling** - Hung checks are terminated
- **Memory efficiency** - Results streamed, not buffered
- **Cancellation support** - Stop anytime without corruption

## Next Steps

- [Audit Results](./results) - Understanding and working with results
- [Export Formats](./exports) - Exporting compliance reports
