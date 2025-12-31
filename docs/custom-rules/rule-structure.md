---
sidebar_position: 2
---

# Rule Structure

Custom rules use the same YAML format as mSCP rules. This page covers the structure and required fields.

## Basic Structure

```yaml
id: org_custom_example
title: "Example Custom Rule"
discussion: |
  This is the rationale for the rule. Explain why this
  setting matters for security and what risk it mitigates.
check: |
  /usr/bin/defaults read /Library/Preferences/com.example.app EnableSecurity
result:
  string: "1"
fix: |
  /usr/bin/defaults write /Library/Preferences/com.example.app EnableSecurity -bool true
references:
  cis:
    benchmark:
      - N/A (Custom)
    controls v8:
      - N/A
tags:
  - custom
  - your-organization
severity: "medium"
mobileconfig: false
mobileconfig_info: {}
```

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (lowercase, underscores) |
| `title` | string | Human-readable name |
| `discussion` | string | Rationale and explanation |
| `check` | string | Shell command to verify compliance |
| `result` | object | Expected output from check command |
| `fix` | string | Shell command to remediate |
| `tags` | array | Categorization tags |

## Field Details

### id

The unique identifier for your rule. Must be:
- Lowercase letters and underscores only
- Unique across all rules (baseline and custom)
- Descriptive of what the rule checks

```yaml
id: org_chrome_autoupdate_enabled
```

### title

Human-readable name shown in the UI:

```yaml
title: "Ensure Chrome Auto-Update is Enabled"
```

### discussion

Multi-line explanation of the rule's purpose:

```yaml
discussion: |
  Google Chrome should be configured to automatically update to ensure
  the latest security patches are applied. Outdated browsers are a
  common attack vector for malware and exploits.

  This rule verifies that Chrome's auto-update mechanism is enabled
  and not blocked by local policy.
```

### check

Shell command that returns the current state. The output is compared against `result`:

```yaml
check: |
  /usr/bin/defaults read com.google.Keystone.Agent checkInterval 2>/dev/null
```

Tips:
- Use full paths to binaries (`/usr/bin/defaults`, not `defaults`)
- Redirect stderr if the command might fail (`2>/dev/null`)
- Return a simple, comparable value

### result

The expected output from the check command. Supports different types:

**String match:**
```yaml
result:
  string: "18000"
```

**Integer match:**
```yaml
result:
  integer: 1
```

**Boolean match:**
```yaml
result:
  boolean: true
```

**Regex match:**
```yaml
result:
  regex: "^(true|1)$"
```

### fix

Shell command to remediate a non-compliant setting:

```yaml
fix: |
  /usr/bin/defaults write com.google.Keystone.Agent checkInterval -int 18000
```

Tips:
- Use full paths to binaries
- Ensure the command is idempotent (safe to run multiple times)
- Test thoroughly before deploying

### tags

Array of categorization tags:

```yaml
tags:
  - custom
  - browsers
  - your-organization
  - cis_lvl1
```

Common tags:
- `custom` - Identifies as a custom rule
- `cis_lvl1`, `cis_lvl2` - CIS benchmark levels
- `stig` - STIG compliance
- Section names like `authentication`, `auditing`, etc.

## Optional Fields

### severity

Impact level if the rule fails:

```yaml
severity: "high"  # high, medium, low
```

### references

Links to compliance framework identifiers:

```yaml
references:
  cis:
    benchmark:
      - "2.5.1"
    controls v8:
      - "4.1"
  800-53r5:
    - CM-7
  disa_stig:
    - N/A
  srg:
    - N/A
  cci:
    - N/A
```

### mobileconfig

Whether this rule can be enforced via configuration profile:

```yaml
mobileconfig: true
mobileconfig_info:
  com.google.Chrome:
    AutoUpdate: true
```

If `mobileconfig: false`, the rule can only be checked/fixed via scripts.

### ddm_info

For Declarative Device Management support:

```yaml
ddm_info:
  declarationtype: com.apple.configuration.services.configuration-files
  payload:
    ServiceType: com.google.Chrome
    Settings:
      AutoUpdate: true
```

### macOS

Specify supported macOS versions:

```yaml
macOS:
  - "14.0"
  - "15.0"
```

### platforms

Specify supported platforms:

```yaml
platforms:
  - macOS
```

## File Naming

Save custom rules as:
```
{rule_id}.yaml
```

Example: `org_chrome_autoupdate_enabled.yaml`

The filename should match the `id` field in the YAML.

## Validation

MACE validates custom rules when loading:

<table className="icon-table">
  <tr><td>✅</td><td>Required fields present</td></tr>
  <tr><td>✅</td><td>ID is unique</td></tr>
  <tr><td>✅</td><td>YAML syntax is valid</td></tr>
  <tr><td>✅</td><td>Result type is recognized</td></tr>
</table>

Invalid rules are skipped with a warning in the console.
