---
sidebar_position: 3
description: Build mobileconfig profiles that enforce macOS security settings through MDM.
---

# Configuration Profiles

<div className="editor-intro">
  <p className="editor-intro__lead">XML files that configure macOS settings automatically via MDM.</p>
  <p className="editor-intro__sub">Settings are enforced by macOS itself. Users can't change them.</p>
</div>

## What Are Configuration Profiles?

Configuration profiles are XML files (`.mobileconfig`) that declare settings macOS should enforce. Unlike scripts that run commands, profiles tell macOS "this is how this setting should be configured" and macOS takes over from there.

### Why Use Profiles Instead of Scripts?

<div className="concept-comparison">
  <div className="concept-card">
    <h4>⚙️ Profiles Are Enforced</h4>
    <p>When you install a profile, macOS continuously enforces those settings. If a user tries to change a managed setting, macOS blocks it or reverts it. The setting is "locked down."</p>
    <div className="concept-example">
      <strong>Example:</strong> A profile sets screensaver password to required. The checkbox in System Settings is grayed out. Users can't disable it.
    </div>
  </div>
  <div className="concept-card">
    <h4>📜 Scripts Are One-Time</h4>
    <p>Scripts change a setting when they run, but don't prevent future changes. A user (or another process) could change it back. You'd need to run the script again.</p>
    <div className="concept-example">
      <strong>Example:</strong> A script enables the firewall. A user could disable it afterward. The script would need to run again to re-enable it.
    </div>
  </div>
</div>

**Bottom line:** Use profiles when a profile payload exists for that setting. Use scripts for settings that don't have profile payloads, or when you need to audit/report compliance status.

## How Profiles Work

<div className="what-happens">
  <div className="what-happens__list">
    <div className="what-happens__item">
      <span className="what-happens__icon">📤</span>
      <div className="what-happens__content">
        <strong>MDM pushes the profile</strong>
        <p>Your MDM server sends the profile to the Mac via the MDM protocol. This happens over HTTPS to Apple's APNs and then to the device.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">📥</span>
      <div className="what-happens__content">
        <strong>Mac receives and installs it</strong>
        <p>The MDM client on the Mac receives the profile and passes it to the system. macOS validates the profile and installs it.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">⚙️</span>
      <div className="what-happens__content">
        <strong>macOS reads the payloads</strong>
        <p>The profile contains one or more "payloads". Each payload configures a specific system feature (screensaver, firewall, passwords, etc.).</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">🔒</span>
      <div className="what-happens__content">
        <strong>Settings are applied and locked</strong>
        <p>macOS applies each setting and marks it as "managed." Users see the setting grayed out in System Settings (Preferences).</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">🔄</span>
      <div className="what-happens__content">
        <strong>Enforcement is continuous</strong>
        <p>As long as the profile is installed, macOS enforces the settings. Even after reboots, the settings remain locked.</p>
      </div>
    </div>
  </div>
</div>

## Inside a Profile

A `.mobileconfig` file is XML containing:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "...">
<plist version="1.0">
<dict>
    <!-- Profile metadata -->
    <key>PayloadDisplayName</key>
    <string>Security Baseline</string>
    <key>PayloadIdentifier</key>
    <string>com.yourorg.security.baseline</string>
    <key>PayloadType</key>
    <string>Configuration</string>

    <!-- Array of payloads -->
    <key>PayloadContent</key>
    <array>
        <!-- Screensaver payload -->
        <dict>
            <key>PayloadType</key>
            <string>com.apple.screensaver</string>
            <key>askForPassword</key>
            <true/>
            <key>askForPasswordDelay</key>
            <integer>0</integer>
        </dict>
        <!-- More payloads... -->
    </array>
</dict>
</plist>
```

### Understanding Payloads

Each payload in a profile controls a specific macOS feature:

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔒</span>
      <strong>com.apple.screensaver</strong>
    </div>
    <p>Controls screensaver settings including password requirement, timeout, and which screensaver to use.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔥</span>
      <strong>com.apple.security.firewall</strong>
    </div>
    <p>Controls firewall settings including enable/disable, stealth mode, allow signed apps, and block all incoming.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🚫</span>
      <strong>com.apple.applicationaccess</strong>
    </div>
    <p>Restrictions payload. Control AirDrop, iCloud, Game Center, camera, and many other features.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔑</span>
      <strong>com.apple.mobiledevice.passwordpolicy</strong>
    </div>
    <p>Password requirements including minimum length, complexity, expiration, and history.</p>
  </div>
</div>

**MACE reads the `mobileconfig_info` from each rule's YAML and combines them into profiles.**

## Profile Output Options

### Combined vs Individual

<div className="concept-comparison">
  <div className="concept-card">
    <h4>📦 Combined Profile</h4>
    <p>All payloads merged into a single .mobileconfig file.</p>
    <div className="concept-example">
      <strong>Pros:</strong> Simpler to manage with just one profile to deploy. Easier to track in your MDM.<br/>
      <strong>Cons:</strong> Can't scope individual settings to different groups. If you need to change one setting, you redeploy the whole profile.
    </div>
  </div>
  <div className="concept-card">
    <h4>📂 Individual Profiles</h4>
    <p>Separate .mobileconfig file for each PayloadType.</p>
    <div className="concept-example">
      <strong>Pros:</strong> Granular control. Deploy firewall settings to all devices, but stricter password policy only to executives. Easier to update individual settings.<br/>
      <strong>Cons:</strong> More profiles to manage in your MDM.
    </div>
  </div>
</div>

### Format Options

MACE can generate profiles in different formats for different MDMs:

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📱</span>
      <strong>.mobileconfig (Standard Apple)</strong>
    </div>
    <p>The standard format that works with any MDM. Can also be double-clicked to install manually (for testing).</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🟢</span>
      <strong>.plist (Jamf Pro)</strong>
    </div>
    <p>Jamf Pro's "Custom Settings" payload expects a plist file. This contains the settings for a specific preference domain (like <code>com.apple.screensaver</code>). You upload this plist and specify the domain in Jamf.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔵</span>
      <strong>.xml (Microsoft Intune)</strong>
    </div>
    <p>Intune uses a specific XML schema for custom macOS profiles. MACE generates files in Intune's expected format.</p>
  </div>
</div>

## Profile Signing

### What Is Profile Signing?

Profile signing uses a digital certificate to cryptographically sign the profile. This proves:
1. The profile came from your organization (authenticity)
2. The profile hasn't been modified since signing (integrity)

### Why Sign Profiles?

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">✅</span>
      <strong>Verified in System Settings</strong>
    </div>
    <p>Signed profiles show as "Verified" when users view them in System Settings → Privacy & Security → Profiles. Unsigned profiles show as "Unverified."</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔒</span>
      <strong>Tamper Protection</strong>
    </div>
    <p>If anyone modifies a signed profile, the signature breaks and macOS won't install it. This prevents tampering.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Compliance Requirements</strong>
    </div>
    <p>Some security frameworks require profile signing. Your security team or auditors may mandate it.</p>
  </div>
</div>

### How to Sign Profiles

<div className="deployment-steps">
  <div className="deployment-step">
    <span className="deployment-step__number">1</span>
    <div className="deployment-step__content">
      <strong>Get a signing certificate</strong>
      <p>You need a certificate with code signing capability in your Keychain. This could be from Apple Developer Program, your organization's CA, or a public CA.</p>
    </div>
  </div>
  <div className="deployment-step">
    <span className="deployment-step__number">2</span>
    <div className="deployment-step__content">
      <strong>Enable signing in MACE</strong>
      <p>In Build options, toggle "Sign Profiles" on. Select your certificate from the dropdown.</p>
    </div>
  </div>
  <div className="deployment-step">
    <span className="deployment-step__number">3</span>
    <div className="deployment-step__content">
      <strong>Build</strong>
      <p>MACE signs each profile and outputs them to the <code>signed/</code> folder.</p>
    </div>
  </div>
</div>

<div className="explanation-box explanation-box--warning">
  <h4>⚠️ Important: Signed Profiles Can't Be Modified</h4>
  <p>Once signed, a profile can't be edited. If you need to change a setting, you must generate a new profile and sign it again. Plan your baseline carefully before signing.</p>
</div>

## Deploying Profiles via MDM

### Jamf Pro

<div className="mdm-guide">
  <div className="mdm-guide__section">
    <h4>📱 Uploading a .mobileconfig Profile</h4>
    <div className="deployment-steps">
      <div className="deployment-step">
        <span className="deployment-step__number">1</span>
        <div className="deployment-step__content">
          <strong>Go to Configuration Profiles</strong>
          <p>In Jamf Pro, navigate to Computers → Configuration Profiles.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">2</span>
        <div className="deployment-step__content">
          <strong>Click Upload</strong>
          <p>Click "Upload" and select your .mobileconfig file. Jamf parses it and shows the payloads.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">3</span>
        <div className="deployment-step__content">
          <strong>Review and name it</strong>
          <p>Give the profile a clear name. Review the payloads to confirm they're correct.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">4</span>
        <div className="deployment-step__content">
          <strong>Set scope</strong>
          <p>In the Scope tab, choose which computers receive this profile. You can target all computers, specific groups, or individual devices.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">5</span>
        <div className="deployment-step__content">
          <strong>Save</strong>
          <p>Click Save. Jamf pushes the profile to scoped devices. They receive it at next check-in (or immediately if you force).</p>
        </div>
      </div>
    </div>
  </div>

  <div className="mdm-guide__section">
    <h4>🟢 Using Custom Settings with .plist Files</h4>
    <div className="deployment-steps">
      <div className="deployment-step">
        <span className="deployment-step__number">1</span>
        <div className="deployment-step__content">
          <strong>Create a new Configuration Profile</strong>
          <p>Go to Computers → Configuration Profiles → New.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">2</span>
        <div className="deployment-step__content">
          <strong>Add Custom Settings payload</strong>
          <p>In the left sidebar, click "Application & Custom Settings" → "Custom Settings".</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">3</span>
        <div className="deployment-step__content">
          <strong>Upload your .plist</strong>
          <p>Click "Upload" and select the .plist file from your build (e.g., <code>com.apple.screensaver.plist</code>).</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">4</span>
        <div className="deployment-step__content">
          <strong>Set the Preference Domain</strong>
          <p>Enter the domain that matches your plist filename (e.g., <code>com.apple.screensaver</code>).</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">5</span>
        <div className="deployment-step__content">
          <strong>Scope and Save</strong>
          <p>Set scope and save. The settings apply to targeted devices.</p>
        </div>
      </div>
    </div>
  </div>
</div>

### Microsoft Intune

<div className="mdm-guide">
  <div className="mdm-guide__section">
    <h4>🔵 Deploying Profiles in Intune</h4>
    <div className="deployment-steps">
      <div className="deployment-step">
        <span className="deployment-step__number">1</span>
        <div className="deployment-step__content">
          <strong>Go to Configuration profiles</strong>
          <p>In Intune admin center, go to Devices → macOS → Configuration profiles.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">2</span>
        <div className="deployment-step__content">
          <strong>Create a new profile</strong>
          <p>Click "Create profile". Select "macOS" as platform and "Templates" as profile type.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">3</span>
        <div className="deployment-step__content">
          <strong>Choose Custom template</strong>
          <p>Select "Custom" from the template list. This lets you upload your own configuration.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">4</span>
        <div className="deployment-step__content">
          <strong>Upload your XML file</strong>
          <p>In the configuration settings, upload the .xml file from your <code>intune/</code> folder.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">5</span>
        <div className="deployment-step__content">
          <strong>Assign to groups</strong>
          <p>In Assignments, select which device or user groups receive this profile.</p>
        </div>
      </div>
      <div className="deployment-step">
        <span className="deployment-step__number">6</span>
        <div className="deployment-step__content">
          <strong>Review and create</strong>
          <p>Review settings and click Create. Intune pushes the profile to assigned devices.</p>
        </div>
      </div>
    </div>
  </div>
</div>

## What Happens on the Mac

When a profile is pushed to a Mac:

<div className="what-happens">
  <div className="what-happens__list">
    <div className="what-happens__item">
      <span className="what-happens__icon">📥</span>
      <div className="what-happens__content">
        <strong>Profile is installed</strong>
        <p>You can see it in System Settings → Privacy & Security → Profiles. It shows the profile name, payloads, and whether it's verified (signed).</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">⚙️</span>
      <div className="what-happens__content">
        <strong>Settings are applied immediately</strong>
        <p>As soon as the profile installs, macOS applies the settings. No reboot required for most settings.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">🔒</span>
      <div className="what-happens__content">
        <strong>Settings are locked</strong>
        <p>In System Settings, managed settings show a message like "Some settings are managed by your organization" or the control is grayed out.</p>
      </div>
    </div>
    <div className="what-happens__item">
      <span className="what-happens__icon">🛡️</span>
      <div className="what-happens__content">
        <strong>User can't remove the profile</strong>
        <p>If deployed via MDM, users can't remove the profile. Only the MDM can remove it (or the device must be unenrolled).</p>
      </div>
    </div>
  </div>
</div>

## Common Issues and Troubleshooting

<div className="troubleshooting-section">
  <div className="troubleshooting-item">
    <strong>Profile Shows as "Unverified"</strong>
    <ul>
      <li>The profile wasn't signed, or the signing certificate isn't trusted</li>
      <li>Sign the profile with a trusted certificate</li>
      <li>Or deploy the signing certificate's root CA to your Macs</li>
    </ul>
  </div>
  <div className="troubleshooting-item">
    <strong>Settings Not Applied</strong>
    <ul>
      <li>Check that the profile actually installed (System Settings → Profiles)</li>
      <li>Some settings require a logout or reboot to take effect</li>
      <li>Check for conflicting profiles that might override settings</li>
      <li>Verify the payload type is correct for that setting</li>
    </ul>
  </div>
  <div className="troubleshooting-item">
    <strong>Need to Update a Setting</strong>
    <ul>
      <li>Generate a new profile with the updated setting</li>
      <li>Upload to your MDM (it will replace the old version if same identifier)</li>
      <li>MDM pushes updated profile to devices</li>
    </ul>
  </div>
</div>

## Best Practices

<div className="best-practices">
  <div className="practice-item">
    <span className="practice-item__icon">🧪</span>
    <div className="practice-item__content">
      <strong>Test profiles on pilot devices</strong>
      <p>Before deploying to all devices, test on a small group. Verify settings apply correctly and don't break workflows.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">📝</span>
    <div className="practice-item__content">
      <strong>Use descriptive names</strong>
      <p>Name profiles clearly (e.g., "Security Baseline - Screensaver Settings") so you can identify them easily in your MDM and on devices.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🎯</span>
    <div className="practice-item__content">
      <strong>Scope appropriately</strong>
      <p>Not all devices need all settings. Use MDM groups to target profiles to the right devices (e.g., stricter settings for finance Macs).</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">📚</span>
    <div className="practice-item__content">
      <strong>Document your baseline</strong>
      <p>Keep records of what profiles you deploy and why. The CSV export from MACE helps with this documentation.</p>
    </div>
  </div>
</div>
