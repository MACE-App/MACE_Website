---
sidebar_position: 2
---

# Customizing Rules

<div className="editor-intro">
  <p className="editor-intro__lead">Full control over every aspect of your security rules.</p>
  <p className="editor-intro__sub">Edit check scripts, fix commands, ODVs, profiles, and more. MACE preserves your customizations while keeping baseline rules intact.</p>
</div>

## Understanding Rules

All compliance rules in mSCP are defined as YAML files. Each rule contains multiple fields: metadata like title and discussion, check scripts to verify compliance, fix scripts to remediate issues, configuration profile payloads, and references to compliance frameworks.

MACE reads all the YAML files created by mSCP and provides a nice interface to view, change, and interact with them. You can edit rules in two views:
- **Field View** — Each field and its value displayed separately for easy editing. Some fields are not editable in this view to prevent workflow issues for newer users.
- **Raw YAML View** — The entire rule shown as raw YAML where every field is editable for full control.

Some fields like `id` and `title` are best left unchanged as modifying them can break references and workflows.

```yaml
id: system_settings_screensaver_password_enforce
title: Enforce Screen Saver Password
discussion: |
  Users _MUST_ authenticate when unlocking the screen saver.
platforms:
  macOS:
    enforcement_info:
      check:
        shell: /usr/bin/osascript -l JavaScript << EOS
          ...
        result:
          string: 'true'
tags:
  - 800-53r5_moderate
  - cisv8
mobileconfig_info:
  - PayloadType: com.apple.screensaver
    PayloadContent:
      - askForPassword: true
```

## Editable Fields

<div className="editable-fields-grid">
  <div className="editable-field">
    <span className="editable-field__icon">💬</span>
    <div className="editable-field__content">
      <strong>Discussion</strong>
      <code>discussion</code>
      <span>Rule rationale and context</span>
    </div>
  </div>
  <div className="editable-field">
    <span className="editable-field__icon">🔍</span>
    <div className="editable-field__content">
      <strong>Check Script</strong>
      <code>check.shell</code>
      <span>Verification command</span>
    </div>
  </div>
  <div className="editable-field">
    <span className="editable-field__icon">✓</span>
    <div className="editable-field__content">
      <strong>Expected Result</strong>
      <code>check.result</code>
      <span>Expected check output</span>
    </div>
  </div>
  <div className="editable-field">
    <span className="editable-field__icon">🔧</span>
    <div className="editable-field__content">
      <strong>Fix Script</strong>
      <code>fix.shell</code>
      <span>Remediation command</span>
    </div>
  </div>
  <div className="editable-field">
    <span className="editable-field__icon">📝</span>
    <div className="editable-field__content">
      <strong>Additional Info</strong>
      <code>fix.additional_info</code>
      <span>Manual fix steps</span>
    </div>
  </div>
  <div className="editable-field">
    <span className="editable-field__icon">🔢</span>
    <div className="editable-field__content">
      <strong>ODV</strong>
      <code>odv</code>
      <span>Organization defined values</span>
    </div>
  </div>
  <div className="editable-field">
    <span className="editable-field__icon">🔗</span>
    <div className="editable-field__content">
      <strong>References</strong>
      <code>references</code>
      <span>NIST, DISA, CIS citations</span>
    </div>
  </div>
  <div className="editable-field">
    <span className="editable-field__icon">🏷️</span>
    <div className="editable-field__content">
      <strong>Tags</strong>
      <code>tags</code>
      <span>Categorization metadata</span>
    </div>
  </div>
  <div className="editable-field">
    <span className="editable-field__icon">📱</span>
    <div className="editable-field__content">
      <strong>Mobileconfig</strong>
      <code>mobileconfig_info</code>
      <span>Profile payload data</span>
    </div>
  </div>
  <div className="editable-field">
    <span className="editable-field__icon">📲</span>
    <div className="editable-field__content">
      <strong>DDM Info</strong>
      <code>ddm_info</code>
      <span>DDM declaration data</span>
    </div>
  </div>
</div>

## Organization Defined Values (ODVs)

<div className="odv-intro">
  <p>ODVs are parameterized values that differ by organization. Instead of hardcoding values, mSCP rules use <code>$ODV</code> variables that you can customize. Each baseline can have different default values.</p>
</div>

<div className="odv-examples">
  <div className="odv-example">
    <div className="odv-example__header">
      <code>$ODV</code> in pwpolicy_minimum_length_enforce
    </div>
    <div className="odv-example__body">
      <span className="odv-example__label">Minimum password length</span>
      <span className="odv-example__value">15</span>
    </div>
  </div>
  <div className="odv-example">
    <div className="odv-example__header">
      <code>$ODV</code> in system_settings_screensaver_timeout
    </div>
    <div className="odv-example__body">
      <span className="odv-example__label">Screensaver idle time</span>
      <span className="odv-example__value">900 sec</span>
    </div>
  </div>
</div>

### ODV Structure in Rules

Rules with ODVs include baseline-specific defaults:

```yaml
odv:
  hint:
    datatype: number
    description: Minimum password length. e.g. 15
    validation:
      min: 1
  recommended: 6
  cis_lvl1: 15
  cis_lvl2: 15
  stig: 14
```

<div className="odv-howto">
  <div className="odv-howto__header">
    <span className="odv-howto__icon">⚙️</span>
    <strong>How to Edit ODVs</strong>
  </div>
  <div className="odv-howto__steps">
    <div className="odv-step">
      <span className="odv-step__number">1</span>
      <span>Select a rule with ODV variables (title shows $ODV)</span>
    </div>
    <div className="odv-step">
      <span className="odv-step__number">2</span>
      <span>Look for the ODV section in the detail panel</span>
    </div>
    <div className="odv-step">
      <span className="odv-step__number">3</span>
      <span>Enter your organization's required value</span>
    </div>
    <div className="odv-step">
      <span className="odv-step__number">4</span>
      <span>The value replaces $ODV in scripts during build</span>
    </div>
  </div>
</div>

## Scripts & Commands

<div className="script-section script-section--check">

### Check Script

The shell command used to verify compliance. Located under `platforms.macOS.enforcement_info.check.shell` in the YAML.

```bash
/usr/bin/osascript -l JavaScript << EOS
$.NSUserDefaults.alloc.initWithSuiteName('com.apple.screensaver')\
.objectForKey('askForPassword').js
EOS
```

Customize the check logic for your environment or edge cases.

</div>

<div className="script-section script-section--result">

### Expected Result

What the check script should return for a passing result. Can be a `string` or `integer` value.

```yaml
result:
  string: 'true'
```

or

```yaml
result:
  integer: 0
```

</div>

<div className="script-section script-section--fix">

### Fix Script

The remediation command to bring a system into compliance. Located under `platforms.macOS.enforcement_info.fix.shell`.

```bash
/bin/launchctl enable system/com.apple.auditd
/bin/launchctl bootstrap system /System/Library/LaunchDaemons/com.apple.auditd.plist
/usr/sbin/audit -i
```

</div>

<div className="script-section script-section--info">

### Additional Fix Information

Manual remediation steps when automation isn't possible. Located under `fix.additional_info`.

```yaml
fix:
  additional_info: |-
    . Go to System Settings -> Time Machine
    . Click *Select Disk*
    . Select existing Backup Disk
    . Click *Encrypt Backups*
```

<table className="icon-table">
  <tr><td>🖥️</td><td>GUI steps that can't be scripted</td></tr>
  <tr><td>✓</td><td>Prerequisites to check first</td></tr>
  <tr><td>🔄</td><td>Post-fix verification steps</td></tr>
</table>

</div>

## Configuration Profiles

<div className="config-section config-section--mobileconfig">

### Mobileconfig Payloads

For rules that deploy via configuration profile, edit the payload directly. The structure includes PayloadType and PayloadContent.

```yaml
mobileconfig_info:
  - PayloadType: com.apple.security.smartcard
    PayloadContent:
      - enforceSmartCard: true
      - allowSmartCard: true
```

Changes affect the generated `.mobileconfig` files.

</div>

<div className="config-section config-section--ddm">

### DDM Declarations

For rules using Declarative Device Management. Edit DDM configurations for modern Apple device management.

```yaml
ddm_info:
  declarationtype: com.apple.configuration.passcode.settings
  ddm_key: MinimumLength
  ddm_value: $ODV
```

</div>

## References

<div className="references-section">

Rules include comprehensive references to compliance frameworks:

<div className="reference-grid">
  <div className="reference-item">
    <strong>NIST</strong>
    <span>CCE IDs, 800-53r5 controls, 800-171r3</span>
  </div>
  <div className="reference-item">
    <strong>DISA</strong>
    <span>CCI, SRG, STIG IDs, CMMC levels</span>
  </div>
  <div className="reference-item">
    <strong>CIS</strong>
    <span>Benchmark IDs, Controls v8</span>
  </div>
  <div className="reference-item">
    <strong>BSI</strong>
    <span>INDIGO references (iOS)</span>
  </div>
</div>

```yaml
references:
  nist:
    cce:
      macos_26:
        - CCE-95138-4
    800-53r5:
      - IA-2(1)
      - IA-2(2)
  disa:
    cci:
      - CCI-000186
    disa_stig:
      macos_26:
        - APPL-26-003020
```

</div>

## Modification Tracking

<div className="tracking-intro">
  <p>MACE tracks all your customizations, making it easy to see what changed and revert when needed.</p>
</div>

<div className="tracking-features">
  <div className="tracking-feature">
    <div className="tracking-feature__icon">
      <span className="status-dot status-dot--modified"></span>
    </div>
    <div className="tracking-feature__content">
      <strong>Visual Indicators</strong>
      <span>Modified rules show an orange indicator in the rules list and a "Modified" badge in the detail view</span>
    </div>
  </div>
  <div className="tracking-feature">
    <div className="tracking-feature__icon">📝</div>
    <div className="tracking-feature__content">
      <strong>Field-Level Tracking</strong>
      <span>Each modified field shows what changed from the original baseline value</span>
    </div>
  </div>
  <div className="tracking-feature">
    <div className="tracking-feature__icon">↩️</div>
    <div className="tracking-feature__content">
      <strong>Reset to Baseline</strong>
      <span>Revert any rule to its original state with one click, restoring all values to baseline</span>
    </div>
  </div>
</div>

## How Customizations are Saved

<div className="save-process">
  <div className="save-step">
    <div className="save-step__icon">📄</div>
    <div className="save-step__content">
      <strong>Original Preserved</strong>
      <span>Baseline rule unchanged</span>
    </div>
  </div>
  <div className="save-step__connector">→</div>
  <div className="save-step">
    <div className="save-step__icon">✏️</div>
    <div className="save-step__content">
      <strong>Override Created</strong>
      <span>Changes saved to <code>custom/rules/</code></span>
    </div>
  </div>
  <div className="save-step__connector">→</div>
  <div className="save-step">
    <div className="save-step__icon">🔀</div>
    <div className="save-step__content">
      <strong>Smart Merge</strong>
      <span>Only changed fields stored</span>
    </div>
  </div>
</div>

<div className="save-benefits">
  <div className="save-benefit">
    <span className="save-benefit__icon">🛡️</span>
    <span>Baseline updates don't overwrite your customizations</span>
  </div>
  <div className="save-benefit">
    <span className="save-benefit__icon">👁️</span>
    <span>You can always see what you changed</span>
  </div>
  <div className="save-benefit">
    <span className="save-benefit__icon">📦</span>
    <span>Custom rules are portable between project versions</span>
  </div>
</div>

## Best Practices

<table className="icon-table">
  <tr><td>📝</td><td><strong>Document changes</strong> — Add notes in Discussion explaining why you modified the rule</td></tr>
  <tr><td>🧪</td><td><strong>Test check scripts</strong> — Verify modified checks work before deploying</td></tr>
  <tr><td>🔧</td><td><strong>Use ODVs</strong> — Prefer ODV variables over hardcoded values for flexibility</td></tr>
  <tr><td>↩️</td><td><strong>Keep fixes reversible</strong> — Remediation scripts should be safely re-runnable</td></tr>
  <tr><td>📂</td><td><strong>Track in version control</strong> — Commit your <code>custom/rules/</code> folder to git</td></tr>
</table>

## Creating New Rules

Need to create entirely new rules that don't exist in any baseline? See [Custom Rules](/docs/custom-rules/overview) for creating your own rules from scratch using the mSCP YAML format.
