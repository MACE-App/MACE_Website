---
sidebar_position: 2
description: Create shell scripts for compliance auditing and remediation that deploy via MDM.
title: "Scripts"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Scripts</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__figure">
      <img
        src="/img/mascots/terminal-wizard.webp"
        alt="MACE mascot as a terminal wizard"
        className="doc-hero__mascot"
        width="400"
        height="400"
      />
    </div>
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Shell scripts that audit compliance status and remediate non-compliant settings.</p>
      <p className="doc-hero__sub">Deploy via MDM to continuously monitor and enforce your security baseline.</p>
    </div>
  </div>
</div>

## What Are Compliance Scripts?

Compliance scripts are shell scripts (`.sh` files) that run directly on a Mac. They do two things:

1. **Audit**: Check if settings match your baseline requirements
2. **Remediate**: Change settings to match requirements if they don't

Unlike configuration profiles (which declare settings for macOS to enforce), scripts actively execute commands. This makes them more flexible. They can check anything you can query via command line, and fix anything you can change via command line.

## How the Compliance Script Works

MACE can generate either a single combined compliance script or individual scripts per rule (configured in Build Options). The combined script contains functions for every enabled rule. Here's what happens when it runs:

<div className="workflow-diagram">
  <div className="workflow-step">
    <span className="workflow-step__icon">📜</span>
    <span className="workflow-step__label">Script Runs</span>
    <span className="workflow-step__desc">Triggered by MDM or manually</span>
  </div>
  <span className="workflow-arrow">→</span>
  <div className="workflow-step">
    <span className="workflow-step__icon">🔍</span>
    <span className="workflow-step__label">Check Setting</span>
    <span className="workflow-step__desc">Runs audit command</span>
  </div>
  <span className="workflow-arrow">→</span>
  <div className="workflow-step">
    <span className="workflow-step__icon">⚖️</span>
    <span className="workflow-step__label">Compare Result</span>
    <span className="workflow-step__desc">Against expected value</span>
  </div>
  <span className="workflow-arrow">→</span>
  <div className="workflow-step">
    <span className="workflow-step__icon">✅</span>
    <span className="workflow-step__label">Pass/Fail</span>
    <span className="workflow-step__desc">Log result</span>
  </div>
</div>

### Script Modes

The generated script has three run modes, plus a set of single-rule, reporting, and exemption flags. It must run as root, and with no arguments in a terminal it opens an interactive menu.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔍</span>
      <strong>--check (Audit Only)</strong>
    </div>
    <p>Runs all audit functions and reports pass/fail for each rule. Does NOT change any settings. Use this to assess current compliance status without making changes.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔧</span>
      <strong>--fix (Remediate Only)</strong>
    </div>
    <p>Remediates the rules the last scan recorded as failing; already-compliant rules are skipped. It needs an existing scan, so run <code>--check</code> first or use <code>--cfc</code>. Exempt rules are never fixed.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔄</span>
      <strong>--cfc (Check-Fix-Check)</strong>
    </div>
    <p>Runs audit, then remediation, then audit again. This verifies that fixes were actually applied successfully. The final audit confirms the device is now compliant.</p>
  </div>
</div>

<table className="icon-table">
  <tr><td>📊</td><td><strong>Results:</strong> <code>--stats</code> (one-line summary for MDMs), <code>--compliant</code>, <code>--non_compliant</code>, <code>--json</code></td></tr>
  <tr><td>🎯</td><td><strong>Single rules:</strong> <code>--list</code>, <code>--check-rule &lt;id&gt;</code>, <code>--fix-rule &lt;id&gt;</code>, and <code>--dry-run</code> to show what a fix would run</td></tr>
  <tr><td>➖</td><td><strong>Exemptions:</strong> <code>--exempt &lt;id&gt; &lt;reason&gt;</code> (a reason is required), <code>--unexempt &lt;id&gt;</code>, <code>--exemptions</code></td></tr>
  <tr><td>🧹</td><td><strong>Housekeeping:</strong> <code>--reset</code> and <code>--reset-all</code> clear stored results without touching exemptions, <code>--reset-ssh</code>, <code>--quiet=1|2</code>, <code>--version</code>, <code>--help</code></td></tr>
  <tr><td>⚙️</td><td><strong>Settings block</strong> at the top of the script: <code>FORCED_MODE</code>, <code>RESET_RESULTS</code>, <code>DRY_RUN</code>, <code>QUIET_LEVEL</code>, <code>RESET_SSH_BEFORE_FIX</code>. A <code>compliance_args</code> array in the <code>org.&lt;baseline&gt;.audit</code> domain can supply arguments from MDM and overrides <code>FORCED_MODE</code></td></tr>
</table>

Mode precedence is <code>FORCED_MODE</code>, then Jamf's <code>$4</code>, then the first argument. Individual per-rule scripts only accept <code>--check</code> and <code>--fix</code>.

### Example: What a Rule Looks Like in the Script

For a rule like "Enable Firewall Logging", the script contains:

```bash
# Rule: os_firewall_log_enable
# STIG ID: APPL-15-005001
# Severity: medium

audit_os_firewall_log_enable() {
    # Check command and expected result from the rule YAML
    check_command='/usr/libexec/ApplicationFirewall/socketfilterfw --getloggingmode 2>/dev/null | grep -c "Log mode is on"'
    audit_rule "os_firewall_log_enable" "$check_command" "1"
}

fix_os_firewall_log_enable() {
    # Fix command from the rule YAML
    rule_fix "os_firewall_log_enable" '/usr/libexec/ApplicationFirewall/socketfilterfw --setloggingmode on'
}
```

**What's happening here:**
1. The `audit_` function hands the rule's check command and expected value to the shared `audit_rule` helper
2. The helper runs the command, compares the result, and records the rule as passed, failed, or not applicable
3. A line like `[INFO] [timestamp] os_firewall_log_enable failed (Result: 0, Expected: "1")` goes to the log, and an exempt failure is recorded as an allowed exemption with its reason
4. In fix mode, the `fix_` function runs the remediation only if the last scan recorded a failure and the rule isn't exempt

## Extension Attributes

Extension attributes (EAs) are individual scripts that report a single value back to your MDM. They're designed for MDM inventory collection.

### How Extension Attributes Work

<div className="what-happens">
  <div className="what-happens__list">
    <div className="what-happens__item">
      <span className="what-happens__icon">📅</span>
      <div className="what-happens__content">
        <strong>MDM triggers inventory collection</strong>
        <p>On a schedule (e.g., daily) or when you request a device update, your MDM tells the Mac to collect inventory.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">📜</span>
      <div className="what-happens__content">
        <strong>Mac runs each EA script</strong>
        <p>The MDM agent executes every extension attribute script on the device.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">📤</span>
      <div className="what-happens__content">
        <strong>Script outputs a result</strong>
        <p>Each script prints a value (like "Compliant" or "Non-Compliant") in a format the MDM expects.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">📊</span>
      <div className="what-happens__content">
        <strong>MDM stores the value</strong>
        <p>The result appears in the device's inventory record. You can search, report, and create smart groups based on these values.</p>
      </div>
    </div>
  </div>
</div>

### Example Extension Attribute

MACE writes one reporting script per MDM per baseline into `build/extension_attributes/`, not one per rule. Each one reads the results the compliance script left in `/Library/Preferences/<baseline>_audit.plist` and reports the failed rule IDs:

```bash
#!/bin/zsh
# jamf_cis_lvl2_extension_attribute.sh
# Reports the rules that failed the last compliance scan

failed=$(read_failed_rules_from_audit_plist)

if [[ -z "$scan_data" ]]; then
    echo "<result>No Scan Data</result>"
elif [[ -z "$failed" ]]; then
    echo "<result>Compliant</result>"
else
    echo "<result>$failed</result>"
fi
```

**What each MDM gets:**
- **Jamf Pro:** `jamf_<baseline>_extension_attribute.sh` with `<result>…</result>` output: `Compliant`, `No Scan Data`, or the failed rule IDs
- **Intune, Workspace ONE, Addigy:** one plain-text line such as `Non-Compliant (3) - Failed Rules: a,b,c`. Workspace ONE gets both a sensor (`ws1_…`) and a custom attribute (`ws1ca_…`); Intune also gets a compliance discovery script and rules JSON for custom compliance
- **Iru:** `iru_…` custom attribute
- **Fleet:** `fleet_<baseline>_policies.sql`, osquery policies to paste into Fleet

A README in the folder walks through the setup for each. The scripts only report; the compliance script has to be running on the Mac for them to have data.

## Deploying Scripts via MDM

### Jamf Pro

<div className="mdm-guide">
  <div className="mdm-guide__section">
    <h4>🔍 Deploying the Audit Script</h4>
    <div className="deployment-steps">
      <div className="deployment-step">
        <span className="deployment-step__number">1</span>
        <div className="deployment-step__content">
          <strong>Go to Settings → Scripts</strong>
          <p>In Jamf Pro, navigate to Settings → Computer Management → Scripts.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">2</span>
        <div className="deployment-step__content">
          <strong>Create a new script</strong>
          <p>Click "New" and paste the contents of your compliance script. Jamf policy scripts run as root, which the script requires.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">3</span>
        <div className="deployment-step__content">
          <strong>Set script parameters</strong>
          <p>Add a parameter for the mode: <code>$4</code> can be <code>--check</code>, <code>--fix</code>, or <code>--cfc</code>.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">4</span>
        <div className="deployment-step__content">
          <strong>Create a Policy</strong>
          <p>Go to Computers → Policies → New. Add your script and set the parameter to <code>--check</code> for audit-only runs.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">5</span>
        <div className="deployment-step__content">
          <strong>Set trigger and scope</strong>
          <p>Choose when to run: Recurring Check-in (daily/weekly), Startup, or manual trigger. Scope to your target computers.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="mdm-guide__section">
    <h4>📊 Deploying Extension Attributes</h4>
    <div className="deployment-steps">
      <div className="deployment-step">
        <span className="deployment-step__number">1</span>
        <div className="deployment-step__content">
          <strong>Go to Settings → Extension Attributes</strong>
          <p>In Jamf Pro, navigate to Settings → Computer Management → Extension Attributes.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">2</span>
        <div className="deployment-step__content">
          <strong>Create a new Extension Attribute</strong>
          <p>Click "New" and set Data Type to "String". Set Input Type to "Script".</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">3</span>
        <div className="deployment-step__content">
          <strong>Paste the EA script</strong>
          <p>Copy the contents of <code>jamf_&lt;baseline&gt;_extension_attribute.sh</code> from <code>build/extension_attributes/</code> into the script field.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">4</span>
        <div className="deployment-step__content">
          <strong>Save and wait for inventory</strong>
          <p>The EA runs during the next inventory collection. You can force this by running <code>sudo jamf recon</code> on a test Mac.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">5</span>
        <div className="deployment-step__content">
          <strong>Create Smart Groups (optional)</strong>
          <p>Create a Smart Computer Group where the EA <strong>is not</strong> "Compliant" and <strong>is not</strong> "No Scan Data" to identify devices needing remediation. MACE's Jamf upload can create these groups for you.</p>
        </div>
      </div>
    </div>
  </div>
</div>

### Microsoft Intune

<div className="mdm-guide">
  <div className="mdm-guide__section">
    <h4>📜 Deploying Scripts in Intune</h4>
    <div className="deployment-steps">
      <div className="deployment-step">
        <span className="deployment-step__number">1</span>
        <div className="deployment-step__content">
          <strong>Go to Devices → macOS → Shell scripts</strong>
          <p>In the Intune admin center, navigate to Devices → macOS → Shell scripts.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">2</span>
        <div className="deployment-step__content">
          <strong>Add a new script</strong>
          <p>Click "Add" and upload your compliance script file.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">3</span>
        <div className="deployment-step__content">
          <strong>Configure script settings</strong>
          <p>Set "Run script as signed-in user" to No (runs as root). Set "Hide script notifications" based on your preference.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">4</span>
        <div className="deployment-step__content">
          <strong>Set the mode in the script</strong>
          <p>Intune macOS shell scripts take no arguments, so set <strong>Forced Mode</strong> in the Build Hub (or edit <code>FORCED_MODE</code> at the top of the script) to <code>--check</code>, <code>--fix</code>, or <code>--cfc</code> before uploading.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">5</span>
        <div className="deployment-step__content">
          <strong>Assign to groups</strong>
          <p>Assign the script to device groups. Set the run frequency (once, every day, etc.).</p>
        </div>
      </div>
    </div>
  </div>
</div>

### Other MDMs

Scripts work with any MDM that supports running shell scripts on macOS:

<table className="icon-table">
  <tr><td>🟣</td><td><strong>Iru</strong></td><td>Use Custom Scripts library item. Set to run on a schedule or once.</td></tr>
  <tr><td>⚫</td><td><strong>Workspace ONE</strong></td><td>Use Scripts feature. Configure trigger and assignment.</td></tr>
  <tr><td>🟤</td><td><strong>Addigy</strong></td><td>Use a Custom Software item or script policy to run on a schedule or once.</td></tr>
  <tr><td>🔴</td><td><strong>Fleet</strong></td><td>Use Scripts to run shell scripts on enrolled Macs, on demand or via policy automation.</td></tr>
</table>

## What Happens on the Mac

When your MDM runs the compliance script, here's the sequence:

<div className="what-happens">
  <div className="what-happens__list">
    <div className="what-happens__item">
      <span className="what-happens__icon">📥</span>
      <div className="what-happens__content">
        <strong>MDM agent receives the command</strong>
        <p>The MDM agent on the Mac (like Jamf binary or Intune agent) receives instruction to run the script.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">🔐</span>
      <div className="what-happens__content">
        <strong>Script runs with root privileges</strong>
        <p>Most compliance checks need root access to read system settings. The MDM agent runs the script as root.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">🔍</span>
      <div className="what-happens__content">
        <strong>Audit functions execute</strong>
        <p>Each rule's check command runs. Commands like <code>defaults read</code>, <code>systemsetup</code>, or <code>csrutil status</code> query current settings.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">📝</span>
      <div className="what-happens__content">
        <strong>Results are logged</strong>
        <p>Results go to <code>/Library/Logs/&lt;hostname&gt;_&lt;baseline&gt;_baseline.log</code> and a matching <code>.csv</code>, failures to <code>/Library/Logs/&lt;baseline&gt;_failures.log</code>, per-rule status to <code>/Library/Preferences/&lt;baseline&gt;_audit.plist</code>, and a summary to the unified log and stdout. Your MDM captures the stdout.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">🔧</span>
      <div className="what-happens__content">
        <strong>Fix functions run (if --fix or --cfc)</strong>
        <p>Remediation commands execute to change settings. This might run <code>defaults write</code>, enable services, or modify system files.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">📤</span>
      <div className="what-happens__content">
        <strong>Exit code returned to MDM</strong>
        <p>The script exits 0 when it ran, 2 for a usage error or unknown flag, and 1 if it isn't root, isn't zsh, or <code>--fix</code> was run before any scan. Failed rules don't change the exit code; read the summary line, the audit plist, or the reporting scripts for that. Run from an MDM with no mode and no terminal, it prints usage and exits 0 without scanning, so always set a mode.</p>
      </div>
    </div>
  </div>
</div>

## Audit Preferences and Exemptions

The compliance script reads an **audit preferences** domain, `org.<baseline>.audit`, that holds one entry per rule. An exempt rule is still checked, but a failure is logged as an allowed exemption, kept out of the failures log, and never remediated.

### How Exemptions Work

```xml
<!-- org.<baseline>.audit: one dictionary per rule -->
<key>os_firewall_log_enable</key>
<dict>
    <key>exempt</key><true/>
    <key>exempt_reason</key><string>Logging handled by the SIEM agent</string>
</dict>
```

The script looks for exemptions in three places, in order: user-scoped managed preferences, device managed preferences, then the local `/Library/Preferences/org.<baseline>.audit.plist`. Results are stored separately in `/Library/Preferences/<baseline>_audit.plist`.

**Where exemptions come from:**
- **The project.** Rules you mark exempt in the Compliance Editor are pre-set with their reasons in the audit preferences MACE builds. See [Exempting Rules](../compliance-editor/overview#exempting-rules).
- **The Mac.** An admin can add one locally with `sudo ./script.sh --exempt <rule_id> "reason"`, remove it with `--unexempt`, and list them with `--exemptions`. The interactive menu has the same options.
- **Jamf's editor.** With **Write JSON Schema instead** on, Jamf Pro admins manage exemptions from the Custom Settings UI.

### Deploying the Audit Preferences

The audit preferences file can be deployed as:
- A `.mobileconfig` profile pushed via MDM (recommended, since managed preferences are read first and can't be edited on the Mac)
- A `.plist` file copied to `/Library/Preferences/`
- An Intune XML preference file or a Jamf JSON schema, depending on the Format you build with

Exempting a rule in the project only takes effect on a Mac once the updated audit preferences land there. Profiles already deployed keep enforcing the setting until they're re-uploaded.

## Best Practices

<div className="best-practices">
  <div className="practice-item">
    <span className="practice-item__icon">🧪</span>
    <div className="practice-item__content">
      <strong>Test on pilot devices first</strong>
      <p>Run the script manually on test Macs before deploying via MDM. Verify the checks work correctly and fixes don't break anything.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🔍</span>
    <div className="practice-item__content">
      <strong>Start with audit only</strong>
      <p>Deploy with <code>--check</code> first to understand your current compliance posture. Review results before running <code>--fix</code>.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">📅</span>
    <div className="practice-item__content">
      <strong>Schedule regular audits</strong>
      <p>Run the audit script on a recurring schedule (daily or weekly) to continuously monitor compliance status.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🎯</span>
    <div className="practice-item__content">
      <strong>Use Smart Groups for remediation</strong>
      <p>Create MDM groups based on EA results. Scope remediation policies only to non-compliant devices.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">📊</span>
    <div className="practice-item__content">
      <strong>Monitor for drift</strong>
      <p>Settings can change over time. Regular audits catch when devices drift out of compliance.</p>
    </div>
  </div>
</div>
