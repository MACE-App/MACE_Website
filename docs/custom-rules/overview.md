---
sidebar_position: 1
description: Create custom compliance rules using mSCP YAML format that integrate with MACE features.
---

# Custom Rules

<div className="editor-intro">
  <p className="editor-intro__lead">Create your own compliance rules using the mSCP YAML format.</p>
  <p className="editor-intro__sub">Custom rules integrate with baseline rules and work with Audit, Build, and Documentation.</p>
</div>

## Why Create Custom Rules?

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🏢</span>
      <strong>Organization-Specific Policies</strong>
    </div>
    <p>Enforce settings unique to your environment that aren't covered by standard baselines.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Internal Standards</strong>
    </div>
    <p>Codify your security team's requirements into auditable, enforceable rules.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔧</span>
      <strong>Third-Party Applications</strong>
    </div>
    <p>Check settings for applications not covered by mSCP baselines.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🚫</span>
      <strong>Gap Coverage</strong>
    </div>
    <p>Address controls not covered by existing NIST, CIS, or STIG baselines.</p>
  </div>
</div>

<div className="explanation-box">
  <h4>Custom Rules vs Customizing Rules</h4>
  <p><strong>Customizing Rules</strong> means modifying existing mSCP rules (change ODVs, edit scripts, adjust expected values). See <a href="../compliance-editor/customizing-rules">Customizing Rules</a>.</p>
  <p><strong>Custom Rules</strong> means creating entirely new rules that don't exist in any baseline.</p>
</div>

## Rule Builder Hub

The Rule Builder Hub provides a guided interface for creating mSCP-compliant security rules.

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/rule-builder-light.webp" alt="Rule Builder Hub" className="img-light" />
  <img src="/img/screenshots/rule-builder-dark.webp" alt="Rule Builder Hub" className="img-dark" />
</div>

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Open Rule Builder Hub</strong>
      <span>Click the + button in the Compliance Editor toolbar</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Fill in Basic Information</strong>
      <span>Category, Rule ID, Title, and Discussion</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Select Platforms & Benchmarks</strong>
      <span>Choose macOS versions and compliance benchmarks</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Save your rule</strong>
      <span>Click Save Rule to add it to your project</span>
    </div>
  </div>
</div>

## Rule Builder Interface

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Basic Information</strong>
    </div>
    <p>Define the rule's identity with Category (sets the ID prefix), Rule ID, Title, and Discussion. Required fields are clearly marked.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">💻</span>
      <strong>Platform & Benchmarks</strong>
    </div>
    <p>Select target platforms (macOS, iOS/iPadOS), versions (26.0, 15.0, 14.0), and compliance benchmarks (CIS Level 1, CIS Level 2, DISA STIG). References are auto-generated based on your selections.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">👁️</span>
      <strong>YAML Preview</strong>
    </div>
    <p>Live preview shows the generated YAML as you fill in fields. Copy the YAML or verify the structure before saving.</p>
  </div>
</div>

## Where Custom Rules Live

Custom rules are saved in your project's `custom/rules/` folder:

```
YourProject.maceproj
└── custom/
    └── rules/
        ├── os/                      ← Organize by category
        │   └── os_my_rule.yaml
        └── my_other_rule.yaml       ← Or use flat structure
```

The Rule Builder automatically saves rules to this folder when you click Save Rule.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📂</span>
      <strong>Organize by Section</strong>
    </div>
    <p>Place rules in subfolders matching section names (audit/, os/, pwpolicy/, etc.) or use a flat structure.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔄</span>
      <strong>Safe from Updates</strong>
    </div>
    <p>Custom rules are never overwritten when you update mSCP baseline rules.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📦</span>
      <strong>Portable</strong>
    </div>
    <p>Copy the custom/rules/ folder to share rules between projects or team members.</p>
  </div>
</div>

## What Custom Rules Can Do

Custom rules have the same capabilities as baseline rules:

<table className="icon-table">
  <tr><td>🔍</td><td><strong>Check commands</strong></td><td>Verify compliance with shell scripts</td></tr>
  <tr><td>🔧</td><td><strong>Fix commands</strong></td><td>Remediate non-compliant settings</td></tr>
  <tr><td>📱</td><td><strong>Configuration profiles</strong></td><td>Deploy via MDM with mobileconfig</td></tr>
  <tr><td>📲</td><td><strong>DDM declarations</strong></td><td>Use Declarative Device Management</td></tr>
  <tr><td>🔢</td><td><strong>ODV support</strong></td><td>Define organization-specific values</td></tr>
  <tr><td>🔗</td><td><strong>References</strong></td><td>Link to NIST, CIS, DISA standards</td></tr>
</table>

## Custom Rules in the UI

Custom rules are visually identified in the Compliance Editor:

<table className="icon-table">
  <tr><td>🔧</td><td><strong>Custom Rule Icon</strong></td><td>Wrench icon identifies rules you created</td></tr>
  <tr><td>+</td><td><strong>New Rule Status</strong></td><td>Plus sign shows newly created rules</td></tr>
  <tr><td>✏️</td><td><strong>Editable</strong></td><td>Custom rules can be modified or deleted</td></tr>
</table>

## Compatibility

Custom rules use the standard mSCP YAML format. This means your custom rules are:

<table className="icon-table">
  <tr><td>✅</td><td><strong>Compatible with mSCP</strong></td><td>Can be used directly with the mSCP project</td></tr>
  <tr><td>✅</td><td><strong>Shareable</strong></td><td>Share with other MACE or mSCP users</td></tr>
  <tr><td>✅</td><td><strong>Version controlled</strong></td><td>Track changes with git</td></tr>
</table>

