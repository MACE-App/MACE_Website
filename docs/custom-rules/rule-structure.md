---
sidebar_position: 2
---

# Rule Structure

<div className="editor-intro">
  <p className="editor-intro__lead">Learn the mSCP YAML format for writing custom rules.</p>
  <p className="editor-intro__sub">Required fields, optional fields, and how they all fit together.</p>
</div>

## Basic Structure

Here's what the Rule Builder generates when you create a new rule:

```yaml
id: os_example_rule
title: Example Custom Rule
discussion: |
  This setting _MUST_ be configured for security.
  Explain why this rule matters and what risk it mitigates.

references:
  nist:
    cce:
      macos_15:
        - CCE-XXXXX-X
  disa:
    disa_stig:
      macos_15:
        - APPL-15-XXXXXX

platforms:
  macOS:
    '15.0':
      benchmarks:
        - name: cis_lvl1
    enforcement_info:
      check:
        shell: /usr/bin/defaults read com.example.app Setting
        result:
          string: 'expected_value'
      fix:
        shell: /usr/bin/defaults write com.example.app Setting -string 'expected_value'
```

## Required Fields

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔤</span>
      <strong>id</strong>
    </div>
    <p>Unique identifier. Lowercase letters and underscores only. Must match the filename.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📝</span>
      <strong>title</strong>
    </div>
    <p>Human-readable name shown in the UI and documentation.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">💬</span>
      <strong>discussion</strong>
    </div>
    <p>Explanation of why the rule exists and what it protects against. Use RFC 2119 keywords: _MUST_, _SHOULD_, _MAY_.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔗</span>
      <strong>references</strong>
    </div>
    <p>Compliance framework references. The Rule Builder auto-generates <code>nist.cce</code> and <code>disa.disa_stig</code> based on selected versions.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">💻</span>
      <strong>platforms</strong>
    </div>
    <p>Platform-specific enforcement info including check and fix commands.</p>
  </div>
</div>

## Field Details

### id

The unique identifier for your rule. The Rule Builder automatically prefixes the ID based on the Category you select:

```yaml
id: os_chrome_autoupdate_enabled
```

**Category prefixes:**
- `os_` - Operating System rules
- `system_settings_` - System Settings rules
- `auth_` - Authentication rules
- `audit_` - Audit rules
- `pwpolicy_` - Password Policy rules
- `icloud_` - iCloud rules
- `settings_` - Settings rules

**Requirements:**
- Lowercase letters and underscores only
- Must be unique across all rules
- Filename must match: `os_chrome_autoupdate_enabled.yaml`

### title

Human-readable name:

```yaml
title: Ensure Chrome Auto-Update is Enabled
```

### discussion

Multi-line explanation using YAML's `|` syntax. Use RFC 2119 keywords (_MUST_, _SHOULD_, _MAY_) to indicate requirement levels:

```yaml
discussion: |
  Google Chrome _MUST_ automatically update to ensure
  the latest security patches are applied.

  Outdated browsers are a common attack vector.
```

### platforms

The platforms section defines which macOS versions to target and the enforcement commands:

```yaml
platforms:
  macOS:
    '15.0':
      benchmarks:
        - name: cis_lvl1
    enforcement_info:
      check:
        shell: /usr/bin/command_to_check
        result:
          string: 'expected_value'
      fix:
        shell: /usr/bin/command_to_fix
```

### check

The check section verifies compliance:

```yaml
check:
  shell: /usr/bin/defaults read com.apple.screensaver askForPassword
  result:
    string: '1'
```

**Tips:**
- Use full paths (`/usr/bin/defaults`, not `defaults`)
- Redirect stderr if needed (`2>/dev/null`)
- Return a simple, comparable value

### result

The expected output from the check command. Supports multiple types:

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📝</span>
      <strong>String</strong>
    </div>
```yaml
result:
  string: 'expected text'
```
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔢</span>
      <strong>Integer</strong>
    </div>
```yaml
result:
  integer: 1
```
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">✓</span>
      <strong>Boolean</strong>
    </div>
```yaml
result:
  boolean: true
```
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔢</span>
      <strong>ODV (Variable)</strong>
    </div>
```yaml
result:
  integer: $ODV
```
  </div>
</div>

### fix

The command to remediate non-compliant settings:

```yaml
fix:
  shell: /usr/bin/defaults write com.apple.screensaver askForPassword -bool true
```

**Tips:**
- Make fixes idempotent (safe to run multiple times)
- Test thoroughly before deploying
- Use full paths to binaries

## Optional Fields

### Additional References

Beyond what the Rule Builder generates, you can add more compliance framework mappings:

```yaml
references:
  nist:
    cce:
      macos_15:
        - CCE-XXXXX-X
    800-53r5:            # Optional
      - CM-7
      - AC-6
  disa:
    cci:                 # Optional
      - CCI-000381
    srg:                 # Optional
      - SRG-OS-000095-GPOS-00049
    disa_stig:
      macos_15:
        - APPL-15-XXXXXX
  cis:                   # Optional
    benchmark:
      macos_15:
        - '2.5.1 (level 1)'
    controls_v8:
      - '4.1'
```

### odv

Organization Defined Values allow customization per baseline:

```yaml
odv:
  hint:
    datatype: number
    description: Maximum failed login attempts before lockout
    validation:
      min: 1
      max: 10
  recommended: 5
  cis_lvl1: 5
  cis_lvl2: 3
  stig: 3
```

ODV datatypes: `string`, `number`, `integer`, `boolean`, `regex`

Use `$ODV` in check/fix scripts to reference the value:

```yaml
check:
  shell: /usr/bin/pwpolicy -getpolicy | grep maxFailedAttempts
  result:
    integer: $ODV
```

### mobileconfig_info

For rules enforceable via configuration profile:

```yaml
mobileconfig_info:
  - PayloadType: com.apple.screensaver
    PayloadContent:
      - askForPassword: true
        askForPasswordDelay: 0
```

### ddm_info

For Declarative Device Management:

```yaml
ddm_info:
  declarationtype: com.apple.configuration.screensaver.settings
  ddm_key: AskForPassword
  ddm_value: true
```

### benchmarks

Specify which baselines and severity:

```yaml
platforms:
  macOS:
    '15.0':
      benchmarks:
        - name: cis_lvl1
        - name: disa_stig
          severity: medium
```

Severity levels: `low`, `medium`, `high`, `critical`

### tags

Categorization tags for filtering and organization:

```yaml
tags:
  - cis_lvl1
  - 800-53r5_moderate
```

Common tags: `cis_lvl1`, `cis_lvl2`, `disa_stig`, `800-53r5_low`, `800-53r5_moderate`, `800-53r5_high`

## File Naming

Save your rule as `{id}.yaml`:

```
os_chrome_autoupdate_enabled.yaml
```

The filename must match the `id` field exactly. The Rule Builder handles this automatically.

## Validation

MACE validates custom rules when loading:

<table className="icon-table">
  <tr><td>✅</td><td>Required fields present</td></tr>
  <tr><td>✅</td><td>ID is unique</td></tr>
  <tr><td>✅</td><td>YAML syntax is valid</td></tr>
  <tr><td>✅</td><td>Result type is recognized</td></tr>
  <tr><td>✅</td><td>Filename matches ID</td></tr>
</table>

Invalid rules are skipped with a warning.
