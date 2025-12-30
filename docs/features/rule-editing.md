---
sidebar_position: 3
---

# Rule Editing

MACE provides comprehensive editing capabilities for every aspect of a security rule. All customizations are saved separately from baseline rules, preserving the original while tracking your changes.

{/* TODO: Add screenshot - rule_detail_view.png */}
:::tip Screenshot Needed
**Filename:** `rule_detail_view.png`
**Description:** Rule detail panel showing all editable fields including discussion, check, fix, and configuration sections.
:::

## Rule Detail View

When you select a rule, the detail panel displays all its components:

### Core Information

| Field | Description |
|-------|-------------|
| **Rule ID** | Unique identifier (read-only) |
| **Title** | Human-readable name |
| **Section** | Category/grouping |
| **Severity** | Impact level (CAT I, II, III for STIG) |

### Discussion
The rationale explaining why this rule matters. Edit this to:
- Add organization-specific context
- Document exceptions or compensating controls
- Include internal policy references

### Check Script
The shell command or script used to verify compliance:

```bash
/usr/bin/osascript -l JavaScript << EOS
$.NSUserDefaults.alloc.initWithSuiteName('com.apple.screensaver')\
.objectForKey('askForPassword').js
EOS
```

Customize the check logic for your environment or edge cases.

### Expected Result
What the check script should return for a passing result:

```
true
```

Modify expected values when your organization has different requirements.

### Fix Script
The remediation command to bring a system into compliance:

```bash
/usr/bin/defaults write /Library/Preferences/com.apple.screensaver askForPassword -bool true
```

### Additional Fix Information
Supplementary remediation steps that can't be automated, such as:
- Manual GUI steps required
- Prerequisites to check
- Post-fix verification

## Editable Fields

MACE supports editing all rule components:

| Field | YAML Key | Description |
|-------|----------|-------------|
| Discussion | `discussion` | Rule rationale and context |
| Check | `check` | Verification command |
| Expected Result | `result` | Expected check output |
| Fix Shell | `fix.shell` | Remediation script |
| Additional Info | `fix.additional_info` | Manual fix steps |
| References | `references` | Citations and links |
| Tags | `tags` | Categorization metadata |
| Mobileconfig | `mobileconfig` | Profile payload data |
| DDM Info | `ddm_info` | DDM declaration data |

## Organization Defined Values (ODVs)

ODVs are parameterized values that differ by organization. Common examples:

| ODV | Description | Example |
|-----|-------------|---------|
| `$ODV_PASSWORD_MIN_LENGTH` | Minimum password length | 15 |
| `$ODV_SCREENSAVER_TIMEOUT` | Screensaver idle time | 900 (seconds) |
| `$ODV_AUDIT_RETENTION` | Audit log retention | 7 (days) |
| `$ODV_SESSION_TIMEOUT` | Session lock timeout | 600 (seconds) |

### Editing ODVs

1. Select a rule with ODV variables
2. Look for the ODV section in the detail panel
3. Enter your organization's required value
4. The value is substituted in check/fix scripts during build

{/* TODO: Add screenshot - odv_editing.png */}
:::tip Screenshot Needed
**Filename:** `odv_editing.png`
**Description:** ODV editing interface showing example values and the substitution preview.
:::

## Mobileconfig Payloads

For rules that deploy via configuration profile, edit the payload directly:

```xml
<key>PayloadType</key>
<string>com.apple.screensaver</string>
<key>askForPassword</key>
<true/>
<key>askForPasswordDelay</key>
<integer>0</integer>
```

Changes here affect the generated `.mobileconfig` files.

## DDM Declarations

For rules using Declarative Device Management:

```json
{
  "Type": "com.apple.configuration.screensaver",
  "Payload": {
    "askForPassword": true
  }
}
```

Edit DDM configurations for modern Apple device management.

## References

Link rules to compliance framework identifiers:

| Reference Type | Example |
|---------------|---------|
| **STIG ID** | V-252520 |
| **CIS Control** | 2.5.1 |
| **NIST 800-53** | AC-11 |
| **CCI** | CCI-000057 |
| **SRG** | SRG-OS-000029-GPOS-00010 |

## Modification Tracking

MACE tracks all your customizations:

### Visual Indicators
- **Blue dot** on rule in list indicates modification
- **"Modified"** badge in detail view
- Fields with changes highlighted

### Comparison View
Compare your version against the baseline:

1. Select a modified rule
2. Click **Compare to Baseline**
3. View side-by-side diff
4. See exactly what changed

{/* TODO: Add screenshot - comparison_view.png */}
:::tip Screenshot Needed
**Filename:** `comparison_view.png`
**Description:** Side-by-side comparison showing baseline vs. customized rule values with differences highlighted.
:::

### Reset to Baseline
Revert any rule to its original state:

1. Select the modified rule
2. Click **Reset to Baseline**
3. Confirm the action
4. Rule returns to original values

## How Customizations are Saved

When you edit a rule:

1. **Original preserved** - Baseline rule in `builder_files/rules/` unchanged
2. **Override created** - Your changes saved to `builder_files/custom/rules/{id}.yaml`
3. **Smart merge** - Only changed fields are stored, not the entire rule
4. **Cache invalidated** - Rule reloads to reflect changes

This approach ensures:
- Baseline updates don't overwrite your customizations
- You can always see what you changed
- Custom rules are portable between project versions

## Best Practices

1. **Document changes** - Add notes in Discussion explaining why you modified the rule
2. **Test check scripts** - Verify modified checks work before deploying
3. **Use ODVs** - Prefer ODV variables over hardcoded values for flexibility
4. **Keep fixes reversible** - Remediation scripts should be safely re-runnable
5. **Track in version control** - Commit your `custom/rules/` folder to git
