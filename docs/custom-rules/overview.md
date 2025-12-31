---
sidebar_position: 1
---

# Custom Rules

MACE lets you create your own security rules using the same YAML format as mSCP. Custom rules integrate seamlessly with baseline rules and can be audited, built, and documented just like any other rule.

## Why Create Custom Rules?

<table className="icon-table">
  <tr><td>🏢</td><td><strong>Organization-specific policies</strong> - Enforce settings unique to your environment</td></tr>
  <tr><td>📋</td><td><strong>Internal standards</strong> - Codify your security team's requirements</td></tr>
  <tr><td>🔧</td><td><strong>Custom applications</strong> - Check settings for third-party or in-house apps</td></tr>
  <tr><td>🚫</td><td><strong>Gap coverage</strong> - Address controls not covered by existing baselines</td></tr>
</table>

## Custom Rules vs. Customizing Rules

| Action | Use Case |
|--------|----------|
| **Customizing Rules** | Modify existing mSCP rules (change ODVs, edit scripts, etc.) |
| **Custom Rules** | Create entirely new rules that don't exist in any baseline |

See [Customizing Rules](../compliance-editor/customizing-rules) for modifying existing rules.

## How Custom Rules Work

1. **Create** a YAML file following the mSCP rule format
2. **Place** it in your project's `custom/rules/` folder
3. **MACE loads** it alongside baseline rules
4. **Use it** like any other rule (enable, audit, build, document)

## Where Custom Rules Live

```
your-project/
├── MACE_Project_Files/
│   └── custom/
│       └── rules/
│           ├── my_custom_rule.yaml
│           └── org_specific_check.yaml
└── your-project.mace
```

Custom rules are stored separately from mSCP baseline rules, making them:
- Easy to version control
- Portable between projects
- Safe from baseline updates

## Getting Started

<table className="icon-table">
  <tr><td>📖</td><td><strong><a href="./rule-structure">Rule Structure</a></strong> - Learn the YAML format and required fields</td></tr>
  <tr><td>💡</td><td><strong><a href="./examples">Examples</a></strong> - Sample rules to learn from and adapt</td></tr>
</table>

## Engine Support

Custom rules work with both build engines:

| Engine | Support |
|--------|---------|
| **MACE Engine** | Full support |
| **mSCP Engine** | Full support (uses standard mSCP YAML format) |

Since custom rules follow the mSCP format, they're compatible with the mSCP project directly if needed.
