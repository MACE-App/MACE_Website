---
sidebar_position: 3
---

# Customizing Rules

MACE provides comprehensive editing capabilities for every aspect of a security rule. All customizations are saved separately from baseline rules, preserving the original while tracking your changes.

## Editable Fields

You can customize any part of a rule:

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

## Check and Fix Scripts

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

<table className="icon-table">
  <tr><td>📝</td><td><strong>Document changes</strong> - Add notes in Discussion explaining why you modified the rule</td></tr>
  <tr><td>🧪</td><td><strong>Test check scripts</strong> - Verify modified checks work before deploying</td></tr>
  <tr><td>🔧</td><td><strong>Use ODVs</strong> - Prefer ODV variables over hardcoded values for flexibility</td></tr>
  <tr><td>↩️</td><td><strong>Keep fixes reversible</strong> - Remediation scripts should be safely re-runnable</td></tr>
  <tr><td>📂</td><td><strong>Track in version control</strong> - Commit your <code>custom/rules/</code> folder to git</td></tr>
</table>
