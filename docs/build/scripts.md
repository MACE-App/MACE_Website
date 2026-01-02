---
sidebar_position: 2
description: Create shell scripts for compliance auditing and remediation that deploy via MDM.
---

# Scripts

<div className="editor-intro">
  <p className="editor-intro__lead">Shell scripts that audit compliance status and remediate non-compliant settings.</p>
  <p className="editor-intro__sub">Deploy via MDM to continuously monitor and enforce your security baseline.</p>
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

The generated script supports three execution modes:

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
    <p>Runs all remediation functions to apply correct settings. Use this when you want to bring a device into compliance. Typically run after <code>--check</code> identifies failures.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔄</span>
      <strong>--cfc (Check-Fix-Check)</strong>
    </div>
    <p>Runs audit, then remediation, then audit again. This verifies that fixes were actually applied successfully. The final audit confirms the device is now compliant.</p>
  </div>
</div>

### Example: What a Rule Looks Like in the Script

For a rule like "Enable Firewall Logging", the script contains:

```bash
# Rule: os_firewall_log_enable
# STIG ID: APPL-15-005001
# Severity: medium
# Discussion: Firewall logging MUST be enabled...

audit_os_firewall_log_enable() {
    # Check command from the rule YAML
    local result=$(/usr/libexec/ApplicationFirewall/socketfilterfw \
        --getloggingmode 2>/dev/null | grep -c "Log mode is on")

    # Expected result from the rule YAML
    local expected="1"

    if [[ "$result" == "$expected" ]]; then
        logmessage "os_firewall_log_enable: PASSED"
        return 0
    else
        logmessage "os_firewall_log_enable: FAILED (expected: $expected, got: $result)"
        return 1
    fi
}

fix_os_firewall_log_enable() {
    # Fix command from the rule YAML
    /usr/libexec/ApplicationFirewall/socketfilterfw --setloggingmode on
    logmessage "os_firewall_log_enable: Fixed"
}
```

**What's happening here:**
1. The `audit_` function runs the check command defined in the rule's YAML
2. It compares the result against the expected value
3. Returns pass (0) or fail (1) and logs the result
4. The `fix_` function runs the remediation command to correct the setting

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

```bash
#!/bin/zsh
# Extension Attribute: Firewall Logging
# Checks if firewall logging is enabled

result=$(/usr/libexec/ApplicationFirewall/socketfilterfw \
    --getloggingmode 2>/dev/null | grep -c "Log mode is on")

if [[ "$result" == "1" ]]; then
    echo "<result>Compliant</result>"
else
    echo "<result>Non-Compliant</result>"
fi
```

**The output format matters:** Different MDMs expect different formats:
- **Jamf Pro:** `<result>value</result>`
- **Kandji:** Plain text output
- **Mosyle:** Plain text output
- **Intune:** Specific schema requirements

MACE generates EAs in the correct format for each supported MDM.

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
          <p>Click "New" and paste the contents of your compliance script. Set the script to run as the logged-in user or as root (most compliance checks need root).</p>
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
          <p>Copy the contents of the extension attribute script (e.g., <code>ea_os_firewall_log_enable.sh</code>) into the script field.</p>
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
          <p>Create a Smart Computer Group where the EA equals "Non-Compliant" to identify devices needing remediation.</p>
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
          <strong>Set script arguments</strong>
          <p>In "Script arguments", enter <code>--check</code> for audit or <code>--fix</code> for remediation.</p>
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
  <tr><td>🟠</td><td><strong>Kandji</strong></td><td>Use Custom Scripts library item. Set to run on a schedule or once.</td></tr>
  <tr><td>🟣</td><td><strong>Mosyle</strong></td><td>Use Custom Commands. Upload script and assign to device groups.</td></tr>
  <tr><td>⚫</td><td><strong>Workspace ONE</strong></td><td>Use Scripts feature. Configure trigger and assignment.</td></tr>
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
        <p>Pass/fail results write to <code>/Library/Logs/</code> and stdout. Your MDM captures this output.</p>
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
        <p>The script returns 0 (success) or non-zero (failures detected). Some MDMs use this to determine policy success.</p>
      </div>
    </div>
  </div>
</div>

## Audit Plist and Exemptions

The compliance script checks for an "audit plist" file that tracks exemptions. If a rule is marked exempt, the script skips it.

### How Exemptions Work

```bash
# The script checks the audit plist before running each rule
exempt_reason=$(defaults read "/Library/Preferences/org.{baseline}.audit.plist" \
    os_firewall_log_enable_exempt_reason 2>/dev/null)

if [[ -n "$exempt_reason" ]]; then
    logmessage "os_firewall_log_enable: EXEMPT - $exempt_reason"
    return 0  # Skip this rule
fi
```

**Why use exemptions?**
- A device has a legitimate reason to deviate (for example, testing system or specific application requirement)
- Document the reason in the audit plist so auditors can see why the rule was skipped

### Deploying the Audit Plist

The audit plist can be deployed as:
- A `.plist` file copied to `/Library/Preferences/`
- A `.mobileconfig` profile pushed via MDM (recommended because it ensures the file is managed)

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
