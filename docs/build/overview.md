---
sidebar_position: 1
description: Generate deployment-ready compliance artifacts including scripts, configuration profiles, and DDM declarations.
---

# Build

<div className="editor-intro">
  <p className="editor-intro__lead">Generate deployment-ready artifacts from your compliance baseline.</p>
  <p className="editor-intro__sub">Scripts, configuration profiles, DDM declarations, and more with a single build operation.</p>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/build-light.webp" alt="MACE Build" className="img-light" />
  <img src="/img/screenshots/build-dark.webp" alt="MACE Build" className="img-dark" />
</div>

## What Does Build Do?

When you click Build, MACE takes all your enabled compliance rules and generates files you can actually deploy to your Macs. Think of it like compiling code: you've configured your rules, now MACE creates the deliverables.

These deliverables fall into several categories:

<div className="output-types-grid">
  <div className="output-type-card output-type-card--scripts">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">📜</span>
      <h3>Scripts</h3>
    </div>
    <p>Shell scripts that run on Macs to check compliance status and fix non-compliant settings. Your MDM runs these scripts and reports results back.</p>
  </div>
  <div className="output-type-card output-type-card--profiles">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">⚙️</span>
      <h3>Configuration Profiles</h3>
    </div>
    <p>XML files that configure Mac settings automatically. Your MDM pushes these to devices and macOS applies the settings. No scripts needed.</p>
  </div>
  <div className="output-type-card output-type-card--ddm">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">📱</span>
      <h3>DDM Declarations</h3>
    </div>
    <p>Apple's modern management format. The device enforces settings autonomously instead of waiting for MDM commands.</p>
  </div>
  <div className="output-type-card output-type-card--docs">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">📄</span>
      <h3>Supporting Files</h3>
    </div>
    <p>CSV exports, audit plists, and baseline files for documentation, tracking, and compatibility with other tools.</p>
  </div>
</div>

## Why You Need All Three

A complete security baseline requires a combination of scripts, configuration profiles, and DDM. No single method can enforce everything.

<div className="explanation-box">
  <h4>Why not just use one?</h4>
  <p><strong>Scripts alone won't work</strong> because some settings can only be enforced by macOS through profiles. A script can enable the firewall, but a user could disable it afterward. A profile locks it so they can't.</p>
  <p><strong>Profiles alone won't work</strong> because Apple doesn't provide profile payloads for every security setting. Many settings (like checking SIP status or audit configurations) have no profile equivalent and must be checked via script.</p>
  <p><strong>DDM alone won't work</strong> because it's newer (macOS 13+), not all MDMs fully support it, and not all settings have DDM declarations yet.</p>
</div>

**The solution:** MACE generates all three from the same rule set. Each rule knows whether it needs a script, a profile, DDM, or a combination. When you build, MACE creates the right output for each rule automatically.

## Understanding the Output Types

### Scripts vs Profiles: What's the Difference?

This is one of the most important concepts to understand:

<div className="concept-comparison">
  <div className="concept-card">
    <h4>🔍 Scripts Check & Fix</h4>
    <p>Scripts <strong>run commands</strong> on the Mac. They can read current settings, compare against expected values, and execute fixes. Scripts are flexible but require the MDM to trigger them.</p>
    <div className="concept-example">
      <strong>Example:</strong> A script runs <code>defaults read</code> to check if the firewall is enabled, then runs <code>socketfilterfw --setglobalstate on</code> to enable it if not.
    </div>
  </div>
  <div className="concept-card">
    <h4>⚙️ Profiles Configure</h4>
    <p>Profiles <strong>declare settings</strong> that macOS enforces automatically. Once installed, the Mac maintains those settings. Users often can't change them.</p>
    <div className="concept-example">
      <strong>Example:</strong> A profile declares <code>askForPassword = true</code> for the screensaver. macOS enforces this setting and grays out the checkbox in System Settings.
    </div>
  </div>
</div>

**When to use which?**
- **Profiles** are preferred when available because they're enforced by macOS itself
- **Scripts** are needed when there's no profile payload for that setting, or when you need to check/report compliance status
- Most deployments use **both**: profiles to enforce settings, scripts to audit and fix what profiles can't handle

### Why Multiple Profile Formats?

Different MDM solutions expect different file formats:

<table className="icon-table">
  <tr><td>📱</td><td><strong>.mobileconfig</strong></td><td>Standard Apple format. Works with any MDM and can be installed manually.</td></tr>
  <tr><td>🟢</td><td><strong>.plist (Jamf)</strong></td><td>Jamf Pro's Custom Settings payload expects this format for preference domains.</td></tr>
  <tr><td>🔵</td><td><strong>.xml (Intune)</strong></td><td>Microsoft Intune uses a specific XML schema for custom macOS settings.</td></tr>
</table>

## Build Pipeline

When you click Build, MACE processes your rules through these phases:

<div className="build-pipeline">
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">1</span>
    <div className="pipeline-phase__content">
      <strong>Preparing</strong>
      <span>Creates output folders and validates your build settings</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">2</span>
    <div className="pipeline-phase__content">
      <strong>Loading Rules</strong>
      <span>Reads all enabled rules, applying any customizations you've made</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">3</span>
    <div className="pipeline-phase__content">
      <strong>Generating Scripts</strong>
      <span>Creates shell scripts from each rule's check and fix commands</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">4</span>
    <div className="pipeline-phase__content">
      <strong>Generating Profiles</strong>
      <span>Builds configuration profiles from each rule's mobileconfig payloads</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">5</span>
    <div className="pipeline-phase__content">
      <strong>Signing Profiles</strong>
      <span>Digitally signs profiles with your certificate (if enabled)</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">6</span>
    <div className="pipeline-phase__content">
      <strong>Generating DDM</strong>
      <span>Creates Declarative Device Management JSON files</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">7</span>
    <div className="pipeline-phase__content">
      <strong>Generating CSV</strong>
      <span>Exports all rules to a spreadsheet for documentation</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">8</span>
    <div className="pipeline-phase__content">
      <strong>Generating Audit Plist</strong>
      <span>Creates preferences files for tracking exemptions</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">9</span>
    <div className="pipeline-phase__content">
      <strong>Finishing</strong>
      <span>Generates baseline YAML, README with instructions, and cleanup</span>
    </div>
  </div>
</div>

## Build Options

### Script Options

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📜</span>
      <strong>Generate Scripts</strong>
    </div>
    <p>Master toggle for script generation. When enabled, MACE creates shell scripts from the check and fix commands defined in your rules.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔍</span>
      <strong>Include Audit Functions</strong>
    </div>
    <p>Adds the check/audit commands to your script. These verify whether each setting is compliant and report pass/fail status.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔧</span>
      <strong>Include Remediation Functions</strong>
    </div>
    <p>Adds the fix commands to your script. These apply the correct settings when a check fails.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📊</span>
      <strong>Generate Extension Attributes</strong>
    </div>
    <p>Creates individual scripts formatted for your MDM's extension attribute feature. These let your MDM collect compliance data and display it in device inventory.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📦</span>
      <strong>Output Mode: Combined vs Individual</strong>
    </div>
    <p><strong>Combined:</strong> One script containing all rules. Easier to manage and run everything at once.<br/>
    <strong>Individual:</strong> Separate script per rule. Useful when you need to deploy specific checks to your MDM.</p>
  </div>
</div>

### Profile Options

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📱</span>
      <strong>Combined Mobileconfig</strong>
    </div>
    <p>Creates one .mobileconfig file containing all payloads merged together. Simpler to deploy with just one profile to push to all devices.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📂</span>
      <strong>Individual Mobileconfigs</strong>
    </div>
    <p>Creates separate .mobileconfig files grouped by PayloadType (e.g., one for screensaver settings, one for firewall). Useful when you want granular control or need to scope different settings to different device groups.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🟢</span>
      <strong>Jamf Plist</strong>
    </div>
    <p>Generates .plist files for Jamf Pro's Custom Settings payload. Use these when configuring preference domains in Jamf.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔵</span>
      <strong>Intune XML</strong>
    </div>
    <p>Generates .xml files formatted for Microsoft Intune's custom profile format.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔐</span>
      <strong>Sign Profiles</strong>
    </div>
    <p>Digitally signs profiles using a certificate from your Keychain. Signed profiles show as "Verified" when installed and can't be modified after deployment. Required by some organizations for security.</p>
  </div>
</div>

### Other Options

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📱</span>
      <strong>Generate DDM</strong>
    </div>
    <p>Creates Declarative Device Management declarations. Apple's modern management format where the device enforces settings autonomously. Requires macOS 13+ and MDM support.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📊</span>
      <strong>Generate CSV</strong>
    </div>
    <p>Exports all rules to a spreadsheet. Includes rule IDs, titles, check/fix commands, and all framework references (NIST, DISA, CIS). Great for documentation, auditor reviews, or importing into other systems.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Generate Audit Plist</strong>
    </div>
    <p>Creates a preferences file that tracks which rules have exemptions. The compliance script reads this to skip rules you've marked as exempt for specific reasons.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📝</span>
      <strong>Generate Baseline</strong>
    </div>
    <p>Creates a YAML file compatible with the original mSCP Python scripts. Use this if you need to work with mSCP's generate_guidance.py or other mSCP tools.</p>
  </div>
</div>

### Author Settings

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">👤</span>
      <strong>Author Name & Organization</strong>
    </div>
    <p>Your name and organization appear in generated files including script headers, profile metadata, and documentation. Helps identify who created this baseline.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🏷️</span>
      <strong>Hide Branding</strong>
    </div>
    <p>Removes MACE attribution from generated files if your organization prefers unbranded outputs.</p>
  </div>
</div>

## Output Directory Structure

After building, you'll find these files organized in your project's `build/` folder:

```
build/
├── {baseline}_compliance.sh              # Main compliance script
├── {baseline}.mobileconfig               # Combined configuration profile
├── org.{baseline}.audit.plist            # Audit preferences (for exemptions)
├── org.{baseline}.audit.mobileconfig     # Audit prefs as profile (for MDM)
├── {baseline}.csv                        # Spreadsheet export
├── {baseline}.yaml                       # mSCP-compatible baseline
├── README.md                             # Deployment instructions
├── scripts/                              # Individual scripts (if enabled)
├── mobileconfigs/                        # Individual profiles (if enabled)
├── plists/                               # Jamf plist files (if enabled)
├── intune/                               # Intune XML files (if enabled)
├── signed/                               # Signed profiles (if enabled)
└── declarative/                          # DDM declarations (if enabled)
    ├── activations/
    ├── assets/
    └── configurations/
```

## Build Engines

<div className="engine-comparison">
  <div className="engine-card engine-card--primary">
    <div className="engine-card__header">
      <span className="engine-card__icon">⚡</span>
      <h3>M.A.C.E. Build Engine</h3>
    </div>
    <p>MACE's native Swift build engine. Fast, fully featured, and supports all customizations.</p>
    <ul>
      <li>Full ODV substitution</li>
      <li>All output formats</li>
      <li>Profile signing</li>
      <li>Custom rule support</li>
    </ul>
  </div>
  <div className="engine-card">
    <div className="engine-card__header">
      <span className="engine-card__icon">🐍</span>
      <h3>mSCP Build Engine</h3>
    </div>
    <p>Integration with the original mSCP Python scripts for organizations that need compatibility with existing workflows.</p>
    <ul>
      <li>Uses mSCP's generate_guidance.py</li>
      <li><em>(Planned for future release)</em></li>
    </ul>
  </div>
</div>

## Starting a Build

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Open your project</strong>
      <span>Load or create a compliance project with your selected baseline</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Click Build</strong>
      <span>Use the toolbar button or press <code>Cmd+B</code></span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Select build engine</strong>
      <span>Choose M.A.C.E. engine (recommended)</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Configure output options</strong>
      <span>Select which scripts, profiles, and other files to generate</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">5</span>
    <div className="build-step__content">
      <strong>Enter author info</strong>
      <span>Add your name and organization for attribution</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">6</span>
    <div className="build-step__content">
      <strong>Click Build</strong>
      <span>Watch progress as MACE generates your files</span>
    </div>
  </div>
</div>

## What's Next?

After building, you need to deploy the generated files to your Macs. See these guides for detailed instructions:

- **[Scripts](./scripts)**: How audit and remediation scripts work, and how to deploy them via MDM
- **[Configuration Profiles](./profiles)**: How profiles enforce settings, and how to deploy them via MDM
- **[DDM Declarations](./ddm)**: How Apple's declarative management works
