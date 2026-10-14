---
sidebar_position: 4
description: Generate Declarative Device Management declarations for Apple's modern autonomous device management.
title: "Declarative Device Management (DDM)"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Declarative Device Management (DDM)</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Apple's modern device management framework for autonomous policy enforcement.</p>
      <p className="doc-hero__sub">The device enforces settings on its own. No more waiting for MDM commands.</p>
    </div>
  </div>
</div>

## What is DDM?

Declarative Device Management (DDM) is Apple's next-generation approach to managing devices. Instead of the MDM server telling the device what to do step-by-step, DDM tells the device the **desired state**, and the device figures out how to get there on its own.

Think of the difference this way:

<div className="concept-comparison">
  <div className="concept-card">
    <h4>Traditional MDM (Command-Based)</h4>
    <p>The MDM server sends commands to the device. The device does exactly what it's told, then waits for the next command.</p>
    <div className="concept-example">
      <strong>Like a recipe:</strong> "Step 1: Preheat oven. Step 2: Mix ingredients. Step 3: Bake for 30 minutes." The device follows each step when told.
    </div>
  </div>
  <div className="concept-card">
    <h4>DDM (Declarative)</h4>
    <p>The MDM tells the device "here's what should be true." The device continuously ensures those things stay true, even without further commands.</p>
    <div className="concept-example">
      <strong>Like a thermostat:</strong> "Keep it 72 degrees." The device handles everything needed to maintain that state, automatically adjusting when conditions change.
    </div>
  </div>
</div>

## Why DDM Matters

<div className="ddm-benefits">
  <div className="ddm-benefit">
    <span className="ddm-benefit__icon">📱</span>
    <div className="ddm-benefit__content">
      <strong>Device-Driven</strong>
      <span>The device enforces policies autonomously. It doesn't wait for the MDM server to tell it what to do.</span>
    </div>
  </div>
  <div className="ddm-benefit">
    <span className="ddm-benefit__icon">⚡</span>
    <div className="ddm-benefit__content">
      <strong>Instant Response</strong>
      <span>Changes take effect immediately. No polling intervals or waiting for the next check-in.</span>
    </div>
  </div>
  <div className="ddm-benefit">
    <span className="ddm-benefit__icon">🔄</span>
    <div className="ddm-benefit__content">
      <strong>Self-Healing</strong>
      <span>If a user changes a managed setting, the device automatically reverts it. Compliance is maintained without MDM intervention.</span>
    </div>
  </div>
  <div className="ddm-benefit">
    <span className="ddm-benefit__icon">📉</span>
    <div className="ddm-benefit__content">
      <strong>Reduced Load</strong>
      <span>Less back-and-forth communication. The device handles enforcement, freeing up your MDM server.</span>
    </div>
  </div>
</div>

## DDM vs Configuration Profiles

You might wonder: "How is DDM different from the configuration profiles we already use?" Here's the key distinction:

<div className="explanation-box">
  <strong>Configuration Profiles</strong> are installed on the device and enforced by macOS. They work great, but the MDM has to install them, and the MDM decides when to check on things.

  <strong>DDM Declarations</strong> go a step further. The device itself becomes responsible for maintaining the declared state. It reports its status to the MDM proactively, and it reacts to changes immediately without waiting for an MDM command.
</div>

### Practical Example

Let's say you want to require a 12-character password:

**With Traditional Profiles:**
1. MDM pushes a profile with password requirements
2. macOS enforces the requirement
3. If you want to change to 14 characters, MDM removes old profile and pushes new one
4. Device waits for MDM to initiate the change

**With DDM:**
1. MDM sends a declaration: "Password must be 12 characters"
2. Device acknowledges and enforces
3. If you update declaration to 14 characters, device immediately knows and enforces new requirement
4. Device proactively reports its compliance status to MDM

## What MACE Generates

When you enable DDM in MACE's build options, it creates three types of files:

<div className="ddm-outputs">
  <div className="ddm-output">
    <div className="ddm-output__header">
      <span className="ddm-output__icon">⚙️</span>
      <h3>Configurations</h3>
    </div>
    <p>JSON files that define the actual settings you want on devices. These are the "desired state" declarations.</p>
    <div className="ddm-output__example">
      <strong>Example:</strong> A configuration declaring that screen lock must activate after 5 minutes of inactivity.
    </div>
  </div>
  <div className="ddm-output">
    <div className="ddm-output__header">
      <span className="ddm-output__icon">✅</span>
      <h3>Activations</h3>
    </div>
    <p>JSON files that switch configurations on. MACE writes one activation per configuration, so each setting can be delivered on its own.</p>
    <div className="ddm-output__example">
      <strong>Example:</strong> An activation that turns on the screen saver configuration.
    </div>
  </div>
  <div className="ddm-output">
    <div className="ddm-output__header">
      <span className="ddm-output__icon">📦</span>
      <h3>Assets</h3>
    </div>
    <p>Supporting files for configuration-file declarations such as SSH, sudo, or PAM settings. MACE writes a zip of the files plus an asset declaration that points at where you'll host it.</p>
    <div className="ddm-output__example">
      <strong>Example:</strong> An <code>sshd.zip</code> asset that a services configuration references for the SSH daemon config.
    </div>
  </div>
</div>

## Inside a DDM Declaration

DDM declarations are JSON files with a specific structure. Here's what a configuration declaration looks like:

```json
{
  "Type": "com.apple.configuration.screensaver.settings",
  "Identifier": "org.mscp.cis_lvl1.config.screensaver.settings",
  "Payload": {
    "askForPassword": true,
    "askForPasswordDelay": 0,
    "loginWindowIdleTime": 300
  }
}
```

<div className="explanation-box">
  <strong>Type</strong>: The kind of configuration. Apple defines these types, similar to profile payload types.

  <strong>Identifier</strong>: A unique ID for this declaration. Each declaration needs a unique identifier.

  <strong>Identifier pattern</strong>: MACE uses <code>org.mscp.&lt;baseline&gt;.config.&lt;type&gt;</code> for configurations and <code>org.mscp.&lt;baseline&gt;.activation.&lt;type&gt;</code> for activations, and names each file after its identifier. Your MDM adds its own server token when it sends the declaration.

  <strong>Payload</strong>: The actual settings. This is where you define what you want configured.
</div>

### How Activations Work

Activations are like switches that turn configurations on or off. Here's an example:

```json
{
  "Type": "com.apple.activation.simple",
  "Identifier": "org.mscp.cis_lvl1.activation.screensaver.settings",
  "Payload": {
    "StandardConfigurations": [
      "org.mscp.cis_lvl1.config.screensaver.settings"
    ]
  }
}
```

This activation says: "Turn on this configuration." The device receives the activation and immediately begins enforcing it. MACE writes one activation per configuration rather than one grouped activation, so you can deliver settings individually.

### How Assets Work

Assets provide external resources that configurations can reference. MACE only writes them for <code>com.apple.configuration.services.configuration-files</code> declarations, which carry whole config files for services like SSH, sudo, and PAM:

```json
{
  "Type": "com.apple.asset.data",
  "Identifier": "org.mscp.cis_lvl1.asset.sshd",
  "Payload": {
    "Reference": {
      "ContentType": "application/zip",
      "DataURL": "https://hostname.site.com/sshd.zip",
      "Hash-SHA-256": "abc123..."
    },
    "Authentication": { "Type": "None" }
  }
}
```

MACE writes the matching <code>sshd.zip</code> next to it. Host the zip somewhere your Macs can reach, update the <code>DataURL</code>, and the device downloads it when the configuration activates.

## Output Structure

After building with DDM enabled, you'll find this structure in your build folder:

```
{baseline}_declarative/
├── configurations/
│   ├── org.mscp.cis_lvl1.config.screensaver.settings.json
│   ├── org.mscp.cis_lvl1.config.passcode.settings.json
│   └── ...
├── activations/
│   ├── org.mscp.cis_lvl1.activation.screensaver.settings.json
│   ├── org.mscp.cis_lvl1.activation.passcode.settings.json
│   └── ...
└── assets/
    ├── org.mscp.cis_lvl1.asset.sshd.json
    ├── sshd.zip
    └── ...
```

Each folder contains JSON files that show the exact settings and values for each declaration.

## Deploying DDM

<div className="explanation-box explanation-box--warning">
  <h4>Most MDMs Still Need GUI Configuration</h4>
  <p>Few MDMs accept declaration JSON files for direct import today, so for most of them the files MACE generates serve as a <strong>reference</strong> showing the exact values to enter in the MDM's own DDM section.</p>
  <p>The exception is <strong>Fleet</strong>. MACE's Fleet upload sends the declarations itself, and a rule delivered by DDM is dropped from the profiles and script fixes in that same export so nothing doubles up. The Fleet GitOps kit includes them too.</p>
</div>

:::info DDM coverage note
Most rules with a DDM form also have a profile payload or script fix, so they're enforced either way. A few are DDM only. The build results and every MDM review screen list those rules and flag them as not enforced until the declarations reach the Mac.
:::

## What Happens on the Mac

When your MDM sends DDM declarations to a device:

<div className="what-happens">
  <div className="what-happens__list">
    <div className="what-happens__item">
      <span className="what-happens__icon">📥</span>
      <div className="what-happens__content">
        <strong>Device receives the declaration</strong>
        <p>During check-in, the MDM sends declarations to the device.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">✅</span>
      <div className="what-happens__content">
        <strong>macOS validates and applies</strong>
        <p>The device validates the declaration format and immediately applies the settings.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">📤</span>
      <div className="what-happens__content">
        <strong>Device reports status</strong>
        <p>The device proactively reports its compliance status back to the MDM.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">🔄</span>
      <div className="what-happens__content">
        <strong>Continuous enforcement</strong>
        <p>The device maintains the declared state autonomously, even when offline.</p>
      </div>
    </div>
  </div>
</div>

## MDM Compatibility

DDM is supported by major MDM solutions. Each MDM has its own interface for configuring DDM settings:

<div className="mdm-compat-grid">
  <div className="mdm-compat-item">
    <span className="mdm-compat-item__icon">🟢</span>
    <div className="mdm-compat-item__details">
      <strong>Jamf Pro</strong>
      <span>DDM configuration in Devices → Declarative Device Management</span>
    </div>
  </div>
  <div className="mdm-compat-item">
    <span className="mdm-compat-item__icon">🔵</span>
    <div className="mdm-compat-item__details">
      <strong>Microsoft Intune</strong>
      <span>DDM via Settings catalog for supported settings</span>
    </div>
  </div>
  <div className="mdm-compat-item">
    <span className="mdm-compat-item__icon">🟣</span>
    <div className="mdm-compat-item__details">
      <strong>Iru</strong>
      <span>DDM integrated into library items</span>
    </div>
  </div>
  <div className="mdm-compat-item">
    <span className="mdm-compat-item__icon">⚫</span>
    <div className="mdm-compat-item__details">
      <strong>Workspace ONE</strong>
      <span>DDM support for macOS devices</span>
    </div>
  </div>
  <div className="mdm-compat-item">
    <span className="mdm-compat-item__icon">🟤</span>
    <div className="mdm-compat-item__details">
      <strong>Addigy</strong>
      <span>DDM via declarative library items and status subscriptions</span>
    </div>
  </div>
  <div className="mdm-compat-item">
    <span className="mdm-compat-item__icon">🔴</span>
    <div className="mdm-compat-item__details">
      <strong>Fleet</strong>
      <span>DDM for OS updates and supported declarations</span>
    </div>
  </div>
</div>

<div className="explanation-box">
  <strong>Check Your MDM's Documentation:</strong> DDM is still evolving. Each MDM implements DDM differently and supports different declaration types. Always check your specific MDM's documentation for current capabilities.
</div>

## DDM Requirements

<div className="ddm-requirements">
  <div className="requirement-item">
    <span className="requirement-item__icon">💻</span>
    <div className="requirement-item__content">
      <strong>macOS 13 (Ventura) or later</strong>
      <p>DDM was introduced in macOS 13. Older Macs running macOS 12 or earlier cannot use DDM. Use configuration profiles instead.</p>
    </div>
  </div>
  <div className="requirement-item">
    <span className="requirement-item__icon">📱</span>
    <div className="requirement-item__content">
      <strong>MDM Enrollment</strong>
      <p>Devices must be enrolled in an MDM that supports DDM. Unenrolled devices cannot receive declarations.</p>
    </div>
  </div>
  <div className="requirement-item">
    <span className="requirement-item__icon">🔒</span>
    <div className="requirement-item__content">
      <strong>Supervision (for some features)</strong>
      <p>Certain DDM capabilities require the device to be supervised. User-enrolled devices may have limited DDM functionality.</p>
    </div>
  </div>
  <div className="requirement-item">
    <span className="requirement-item__icon">🌐</span>
    <div className="requirement-item__content">
      <strong>Network Connectivity</strong>
      <p>Devices need network access to receive declarations. However, once received, enforcement continues offline.</p>
    </div>
  </div>
</div>

## When to Use DDM vs Profiles

DDM isn't a replacement for everything. It's another tool in your toolbox:

<table className="icon-table">
  <tr><td>✅</td><td><strong>Use DDM when...</strong></td><td>You need immediate enforcement, self-healing, or want to reduce MDM server load</td></tr>
  <tr><td>✅</td><td><strong>Use DDM when...</strong></td><td>Your MDM and macOS version support the specific setting you need</td></tr>
  <tr><td>📋</td><td><strong>Use Profiles when...</strong></td><td>You're managing older Macs (macOS 12 or earlier)</td></tr>
  <tr><td>📋</td><td><strong>Use Profiles when...</strong></td><td>The setting you need isn't available as a DDM declaration</td></tr>
  <tr><td>📜</td><td><strong>Use Scripts when...</strong></td><td>You need to check/audit settings that can't be managed by profiles or DDM</td></tr>
</table>

<div className="explanation-box">
  <strong>Most deployments use a combination.</strong> DDM for what it supports, profiles for broader coverage, and scripts for auditing and edge cases. MACE can generate all three from the same rule set.
</div>

## Best Practices

<div className="best-practices">
  <div className="practice-item">
    <span className="practice-item__icon">🧪</span>
    <div className="practice-item__content">
      <strong>Test on Pilot Devices First</strong>
      <p>DDM behavior differs from profiles. Always test declarations on a small group before broad deployment.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🔢</span>
    <div className="practice-item__content">
      <strong>Version Your Declarations</strong>
      <p>Use meaningful ServerToken values. Increment them when you make changes so devices know to apply updates.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">👁️</span>
    <div className="practice-item__content">
      <strong>Monitor Declaration Status</strong>
      <p>Check your MDM's reporting regularly. DDM provides detailed status about each declaration's state on each device.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🚀</span>
    <div className="practice-item__content">
      <strong>Start Simple</strong>
      <p>Begin with a few declarations for well-understood settings. Expand as you gain confidence with DDM behavior.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">📋</span>
    <div className="practice-item__content">
      <strong>Have a Fallback Plan</strong>
      <p>Keep your profiles and scripts ready. If a DDM declaration doesn't work as expected, you can fall back to traditional methods.</p>
    </div>
  </div>
</div>

## Troubleshooting DDM

Common issues and solutions:

<div className="troubleshooting-section">
  <div className="troubleshooting-item">
    <strong>Declaration Not Applying</strong>
    <ul>
      <li>Verify the device is running macOS 13 or later</li>
      <li>Check that the device is enrolled in your MDM</li>
      <li>Confirm the declaration type is supported by your MDM</li>
      <li>Look for errors in the MDM's declaration status report</li>
    </ul>
  </div>
  <div className="troubleshooting-item">
    <strong>Declaration Shows as "Failed"</strong>
    <ul>
      <li>Check the JSON syntax is valid</li>
      <li>Verify the declaration Type is correct</li>
      <li>Ensure required Payload keys are present</li>
      <li>Check if the setting requires supervision</li>
    </ul>
  </div>
  <div className="troubleshooting-item">
    <strong>Settings Revert After User Changes Them</strong>
    <ul>
      <li>This is expected DDM behavior. The device enforces the declared state</li>
      <li>If you need users to modify the setting, remove the declaration</li>
    </ul>
  </div>
  <div className="troubleshooting-item">
    <strong>Conflict with Existing Profile</strong>
    <ul>
      <li>DDM declarations and profiles can conflict if they manage the same setting</li>
      <li>Remove conflicting profiles before deploying DDM for the same settings</li>
      <li>Choose one method per setting: DDM or profile, not both. The Fleet export handles this automatically</li>
    </ul>
  </div>
</div>
