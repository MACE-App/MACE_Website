---
sidebar_position: 1
description: Generate deployment-ready compliance artifacts including scripts, configuration profiles, and DDM declarations.
title: "Build"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Build</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Generate deployment-ready artifacts from your compliance baseline.</p>
      <p className="doc-hero__sub">Scripts, configuration profiles, DDM declarations, and more with a single build operation.</p>
    </div>
  </div>
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
      <span>Creates the output folders</span>
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
      <span>Digitally signs the selected profiles with your certificate (if enabled), then generates the Advanced offline package when that mode is on</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">6</span>
    <div className="pipeline-phase__content">
      <strong>Generating DDM</strong>
      <span>Creates Declarative Device Management JSON files (if enabled)</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">7</span>
    <div className="pipeline-phase__content">
      <strong>Generating CSV</strong>
      <span>Exports all rules to a spreadsheet (if enabled)</span>
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
      <strong>Baseline, Tenable, Manifest, Documentation</strong>
      <span>Each of these runs only when its output is on, including documentation when Remember for Build Output is set</span>
    </div>
  </div>
  <div className="pipeline-phase">
    <span className="pipeline-phase__number">10</span>
    <div className="pipeline-phase__content">
      <strong>Finishing</strong>
      <span>Writes the Fleet GitOps files and the README with deployment instructions and the exemption list</span>
    </div>
  </div>
</div>

## Build Options

The **Local Build** screen has two columns. **Build Output** on the right is the core of every build: the baseline name, the profile format, and the switches for configuration profiles, compliance scripts, and audit preferences. The left column holds **Additional Outputs**, **Attribution**, and **Signing**. Compliance rules can be enforced via shell scripts, configuration profiles, or DDM, so you choose the output formats that match your deployment workflow.

### Build Output

*The baseline name, profile format, and the three main outputs.*

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🎛️</span>
      <strong>Standard / Advanced</strong>
    </div>
    <p>The chip in the Build Output header switches between two script modes. <strong>Standard</strong> builds the compliance script as a plain shell script that you or your MDM run on demand, or on the MDM's own schedule. <strong>Advanced</strong> builds the <a href="#advanced-offline-compliance-script">Offline Compliance Script</a> instead: the same script packaged as a self-installing LaunchDaemon that runs on a local schedule, even when the Mac is offline or not checking in to MDM. It swaps the Compliance Scripts row for the installer, uninstaller, and suppression profile rows. Profiles, audit preferences, and the other outputs are the same in both modes. macOS only.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🏷️</span>
      <strong>Baseline Name</strong>
    </div>
    <p>One name for everything this project builds. It sets the script's <code>baseline_name</code>, the <code>org.&lt;name&gt;.audit</code> preference domain that audit exemptions are read from, the audit plist and schema file names, and the profile and declaration identifiers, so they always match. Leave it empty to use the compliance ID, such as <code>cis_lvl2</code>. Set it to mark a tailored baseline as your own, for example <code>company_macos</code>. Lowercase letters, digits, and underscores only.</p>
    <p>The name is saved with the project and shared with every MDM tab's Upload Settings. Changing it on Macs that already run this baseline moves the exemption domain and log files, so re-export the audit preferences and script together.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📂</span>
      <strong>Format</strong>
    </div>
    <p>One format for every profile this build writes, so the configuration profiles and the audit preferences profile always land on the same MDM in the same shape:<br/>
    <strong>Mobileconfig:</strong> standard Apple format. Works with every MDM and can be installed by hand.<br/>
    <strong>Mobileconfig (Jamf Compatible):</strong> wraps the payloads in Custom Settings so Jamf Pro keeps every key when you upload.<br/>
    <strong>Plist Format:</strong> raw preference files for Jamf Custom Settings.<br/>
    <strong>XML Format (Intune Compatible):</strong> raw preference files for Intune.</p>
    <p>Plist and XML are always one file per preference domain, so choosing them switches Configuration Profiles to Individual, and neither can be signed.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">⚙️</span>
      <strong>Configuration Profiles</strong>
    </div>
    <p>Standard mobileconfig profiles for device settings. Rules that map to preference payloads, like screen saver or software update settings, are delivered this way and can't be changed by the user.<br/>
    <strong>Off:</strong> no profiles.<br/>
    <strong>Combined:</strong> all settings in one mobileconfig, using the name you set.<br/>
    <strong>Individual:</strong> each preference domain in its own file under <code>build/mobileconfigs</code>, named with your prefix.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📜</span>
      <strong>Compliance Scripts</strong>
    </div>
    <p>A zsh shell script generated from your baseline that runs on each Mac, by hand or through any MDM. It checks every rule and records pass/fail results, logging failures to <code>/Library/Logs</code>.<br/>
    <strong>Off:</strong> no script.<br/>
    <strong>Combined:</strong> one script containing all rules. Easier to manage and run everything at once.<br/>
    <strong>Individual:</strong> a separate script per rule. Not recommended for most setups, since it can mean 100+ files.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔧</span>
      <strong>Remediation</strong>
    </div>
    <p>Lets the script fix failing rules in fix mode. The audit check always runs first and records what failed; fixes only run against those results. With remediation off, the script only audits and reports and never changes anything on the Mac.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🎚️</span>
      <strong>Forced Mode</strong>
    </div>
    <p>Bakes the chosen run mode into the script by setting <code>FORCED_MODE</code>. Pin a mode when the script is launched by something that can't pass arguments.<br/>
    <strong>None (Empty):</strong> read the mode at runtime (command-line argument or Jamf <code>$4</code>).<br/>
    <strong>--check:</strong> audit only.<br/>
    <strong>--fix:</strong> remediate only.<br/>
    <strong>--cfc:</strong> check, fix, then check again.</p>
    <p>The <code>--fix</code> and <code>--cfc</code> options are hidden when Remediation is off.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Audit Preferences</strong>
    </div>
    <p>A configuration profile that manages the baseline's audit settings on each Mac, primarily rule exemptions. Rules marked exempt in this profile are skipped by the compliance script and don't count against the Mac's compliance status. It follows the shared Format above. Deploy via MDM or <code>~/Library/Preferences</code>.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🧾</span>
      <strong>Write JSON Schema instead</strong>
    </div>
    <p>Writes the audit preferences as a JSON Schema manifest for Jamf Pro's Custom Settings UI, so exemptions can be managed from Jamf's editor rather than by hand. This is a manifest, not a profile, so it ignores the Format row and can't be signed. Leave it off to have the audit profile follow the shared Format like everything else.</p>
  </div>
</div>

### Advanced: Offline Compliance Script

*Switch the Build Output chip to Advanced for a self-scheduling installer. macOS only.*

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📡</span>
      <strong>Offline Compliance Script</strong>
    </div>
    <p>The compliance script packaged as a self-installing LaunchDaemon. The installer drops a LaunchDaemon, a 60-second starter, and your script onto the Mac. The starter checks a timestamp every minute and runs the script when your interval elapses, whether or not the device is online. To update, push the installer once; one check-in covers every future run.</p>
    <p><strong>When to use:</strong> Devices that aren't always online, environments where you want continuous compliance without waiting for MDM check-ins, or when you want to ship one installer and have it self-maintain.</p>
    <div className="explanation-box">
      <h4>Standard vs Offline Script</h4>
      <p><strong>Standard scripts</strong> run when your MDM triggers them. Each execution depends on a policy or check-in.</p>
      <p><strong>Offline Script</strong> installs a LaunchDaemon. The Mac runs the script on your chosen interval whether or not it's online or has checked in.</p>
    </div>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">⏱️</span>
      <strong>Run every</strong>
    </div>
    <p>The local schedule, in minutes or hours. The embedded script is locked to <code>--cfc</code> (check, fix, check) mode. This isn't configurable in Offline Script builds.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🪪</span>
      <strong>Daemon Label and Org Folder</strong>
    </div>
    <p><strong>Daemon Label</strong> is the LaunchDaemon's reverse-DNS identifier, such as <code>com.yourorg.cis_lvl2</code>. <strong>Org Folder</strong> is the install folder under <code>/Library/Scripts</code>, which defaults to <code>MACE</code>.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🗑️</span>
      <strong>Uninstaller Script</strong>
    </div>
    <p>Boots the daemon out and removes the script and LaunchDaemon plist from the Mac. Logs in <code>/Library/Logs/</code> are preserved. Both the installer and uninstaller must run as root. There's no MDM "unassign" that takes the daemon back, so keep the uninstaller handy.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🤫</span>
      <strong>Suppression Profile</strong>
    </div>
    <p>A single mobileconfig with one Managed Background Items payload that pre-approves the daemon by label. Without it, users see a "Background Items Added" notification and can disable the daemon in Login Items. It's always a standalone profile, even when other profiles are Combined, and it can be signed with the <strong>Suppression</strong> checkbox under Signing.</p>
  </div>
</div>

### Additional Outputs

*Reporting, DDM, and extra export formats for scanning, automation, and legacy workflows.*

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📊</span>
      <strong>Compliance Reporting &amp; Other MDM Files</strong>
    </div>
    <p>Per-vendor artifacts that read each Mac's latest audit results and report its compliance status to your MDM, for Smart Groups and dashboards. One build writes a script for every vendor, so you keep the ones your MDM uses and ignore the rest. They land in <code>build/extension_attributes</code> alongside a README with setup steps:</p>
    <p><strong>Jamf Pro</strong> extension attribute · <strong>Intune</strong> custom attribute · <strong>Workspace ONE</strong> sensor and custom attribute · <strong>Iru</strong> custom attribute · <strong>Addigy</strong> custom fact · <strong>Fleet</strong> osquery policies (<code>.sql</code>)</p>
    <p>They read the results the compliance script leaves behind, so that script has to be running on the Mac. The same switch also writes <strong>Fleet GitOps</strong> files to <code>build/fleet_gitops</code>: this build's profiles, scripts, and declarations in a <code>lib/</code> tree plus the matching YAML entries to merge into your repo. macOS only.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📱</span>
      <strong>DDM Declarations</strong>
    </div>
    <p>Writes rules that have a DDM form as <code>.json</code> declarations under <code>build/</code>. DDM is Apple's newer management protocol, where the Mac enforces the declared state itself. Most of these rules also have a profile payload or script fix, so they're enforced either way. A few are DDM only, and the build pane names them. Few MDMs accept declaration files for direct import today, so check that yours does. MACE delivers them itself only through Export to Fleet.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📝</span>
      <strong>Baseline YAML</strong>
    </div>
    <p>The baseline in mSCP's own format, listing every included rule by section. Use it with the mSCP Python scripts, such as <code>generate_guidance.py</code>, to rebuild this baseline outside MACE.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📊</span>
      <strong>CSV Export</strong>
    </div>
    <p>One row per included rule with its ID, title, section, and references, for spreadsheets, auditor reviews, and tracking systems.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔭</span>
      <strong>Tenable Audit</strong>
    </div>
    <p>A <code>.audit</code> file for Tenable Nessus that checks Macs against this baseline during a vulnerability scan. Import it into Tenable as a custom audit. macOS only.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🧩</span>
      <strong>Vendor Manifest</strong>
    </div>
    <p>A JSON Vendor Manifest in the mSCP community format: every automated rule with its check command, expected result, references, severity, and fix, plus where the compliance script writes its audit plist and log. Security vendors and automation tooling read this to evaluate the baseline without parsing the rule YAML. Inherent, permanent, manual, and n_a rules are left out.</p>
  </div>
</div>

### Attribution

*Who produced the baseline, and whether MACE says so.*

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">👤</span>
      <strong>Author Info</strong>
    </div>
    <p>Stamps the project's author name and organization into the generated files, including script headers and profile metadata, so teams can see who produced the baseline. Set them from the Author Info card in the Compliance Editor's left sidebar. With no author configured, the checkbox is disabled and the row reads "No author configured".</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🏷️</span>
      <strong>Hide Branding</strong>
    </div>
    <p>Strips the short M.A.C.E. attribution comment from the generated files, so the output carries only your own author info.</p>
  </div>
</div>

### Signing

*Pre-sign profiles with a certificate from your Keychain.*

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔐</span>
      <strong>Sign Exported Profiles</strong>
    </div>
    <p>Most MDMs sign profiles automatically when deployed, but can modify them first. Pre-signing locks each profile and shows it as "Verified" when installed. Pick one signing certificate from your login keychain. Signed copies are written to <code>build/signed</code> next to the unsigned originals. Signing only applies to mobileconfig output; Plist and XML formats are never signed.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">☑️</span>
      <strong>Signed Outputs</strong>
    </div>
    <p>Picks which of this build's profiles are signed with the certificate. <strong>Config Profiles</strong> covers every configuration profile. <strong>Audit Prefs</strong> covers the audit preferences profile. <strong>Suppression</strong> appears in Advanced mode and covers the offline package's Managed Background Items profile, so the pre-approval can't be edited before install. Anything left unchecked is written unsigned, and a target is disabled when it has nothing to sign.</p>
  </div>
</div>

## Output Directory Structure

After building, you'll find these files organized in your project's `build/` folder:

```
build/
├── {baseline}_compliance_script.sh         # Combined compliance script
├── {baseline}_configuration_profiles.mobileconfig   # Combined configuration profile
├── {baseline}_audit.mobileconfig           # Audit preferences (exemptions); .plist, .xml, or
│                                           #   _jamf_schema.json depending on Format
├── {baseline}_csv_spreadsheet.csv          # Spreadsheet export (if enabled)
├── {baseline}_baseline_yaml.yaml           # mSCP-compatible baseline (if enabled)
├── {baseline}_tenable.audit                # Tenable Nessus audit (if enabled)
├── {baseline}_manifest.json                # Vendor manifest (if enabled)
├── README.md / README.txt                  # Deployment instructions and exemption list
├── scripts/                                # "MACE - <rule>.sh", one per rule (Individual)
├── mobileconfigs/                          # "MACE - <payload>.mobileconfig" (Individual)
├── plists/                                 # "MACE - <domain>.plist" + manifest.plist (Plist format)
├── intune/                                 # "MACE_<domain>.xml" (XML format)
├── signed/                                 # Signed copies next to the originals (if enabled)
├── extension_attributes/                   # MDM compliance reporting scripts + README
├── fleet_gitops/                           # Fleet GitOps lib/ tree and YAML (if enabled)
├── advanced_scripts/                       # Offline installer, uninstaller, suppression profile (Advanced)
└── {baseline}_declarative/                 # DDM declarations (if enabled)
    ├── activations/
    ├── assets/
    └── configurations/
```

The `MACE` prefix on individual files comes from the Name or Prefix field on each row, so every name above can be changed. Only one audit preferences file is written, in whichever shape the Format row selects.

## Build Engines

<div className="engine-comparison">
  <div className="engine-card">
    <div className="engine-card__header">
      <img src="/img/engine-mscp.webp" alt="mSCP" className="engine-card__icon-img" />
      <h3>mSCP Build Engine</h3>
    </div>
    <p>Integration with the original mSCP Python scripts for organizations that need compatibility with existing workflows.</p>
    <ul>
      <li>Standard mSCP output formats</li>
      <li>Python-based execution</li>
      <li>Full mSCP compatibility</li>
    </ul>
    <span className="engine-card__tag">Official Scripts</span>
  </div>
  <div className="engine-card engine-card--primary">
    <div className="engine-card__header">
      <img src="/img/engine-mace.webp" alt="M.A.C.E." className="engine-card__icon-img" />
      <h3>M.A.C.E. Build Engine</h3>
    </div>
    <p>MACE's native Swift build engine. Fast, fully featured, and supports all customizations.</p>
    <ul>
      <li>Full ODV substitution</li>
      <li>All output formats</li>
      <li>Profile signing</li>
      <li>Custom rule support</li>
      <li>Direct MDM export</li>
    </ul>
    <span className="engine-card__tag">Fast &amp; Customizable</span>
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
      <strong>Open the Build Hub</strong>
      <span>Click <strong>Build</strong> in the editor's bottom bar, pick <strong>M.A.C.E. Build</strong> or <strong>mSCP Build</strong> in the Select Engine sheet, and click Continue</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Choose a destination</strong>
      <span>In the sidebar, pick <strong>Local Build</strong>, or one of the <strong>MDM Upload</strong> entries (Jamf Pro, Workspace ONE, Intune, Fleet, Iru, Addigy) to upload directly. <strong>Don't see your MDM?</strong> opens a request</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Configure outputs</strong>
      <span>Set the Baseline Name and Format, switch Configuration Profiles, Compliance Scripts, and Audit Preferences on or off, and pick any Additional Outputs</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">5</span>
    <div className="build-step__content">
      <strong>Attribution and signing</strong>
      <span>Choose Author Info or Hide Branding under Attribution, and pick a certificate under Signing if you want pre-signed profiles</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">6</span>
    <div className="build-step__content">
      <strong>Click Generate</strong>
      <span>The stepper moves from <strong>Settings</strong> to <strong>Build</strong> while MACE generates, then to <strong>Done</strong>, where every file is listed with a preview, deploy hints, and <strong>Open Build Folder</strong> and <strong>View README</strong> buttons</span>
    </div>
  </div>
</div>

:::tip Before you click Generate
Generating replaces same-named files in the project's `build/` folder, which is what the **Overwrites files in build/** chip in the footer is warning about. Files from earlier runs that this build doesn't write are left in place. The **Output Drift** pill in the title bar turns orange whenever rules change after a build, and goes back to **Output Synced** once you generate again. See [Settings](../reference/settings#sync-indicator) to hide it or swap the label for per-output icons.
:::

## MDM Export

In addition to generating files locally, the Build Hub can upload your compliance artifacts directly to your MDM. Select the MDM tab in the Build window to configure a connection and export.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🟢</span>
      <strong>Jamf Pro</strong>
    </div>
    <p>Connect to your Jamf Pro server with API Client credentials or username/password. MACE generates scripts, profiles, and the extension attribute, then uploads them to Jamf's Scripts, Configuration Profiles, and Extension Attributes objects automatically. Profiles can be combined or split per payload type, scripts per rule. It can also create <strong>Smart Groups</strong> (Compliant and Non-Compliant), an <strong>Audit Policy</strong> on a schedule, pick a <strong>Category</strong> and <strong>Site</strong>, and upload the Audit Preferences or JSON schema. Password policy and FileVault go up as native payloads.</p>
    <p>In <strong>Advanced</strong> mode MACE uploads the offline installer, uninstaller, and suppression profile, and the audit policy runs once per computer.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🟠</span>
      <strong>Workspace ONE</strong>
    </div>
    <p>Connect to your Workspace ONE UEM tenant with the API URL, REST API key, and token region. MACE generates compliance scripts, profiles, and reporting as either <strong>Sensors</strong> or <strong>Custom Attributes</strong>, then uploads them. Choose your Organization Group, deliver scripts as Scripts or a Product, and select which artifacts to upload.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔵</span>
      <strong>Intune</strong>
    </div>
    <p>Connect with the Directory (tenant) ID, Application (client) ID, and client secret from the Entra admin center. MACE generates compliance scripts with a Script Frequency, Settings Catalog profiles, custom attributes, and an optional <strong>Compliance Policy</strong> that marks Macs noncompliant when rules fail, with assignment filters. Configure naming and select which artifacts to push.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🟣</span>
      <strong>Iru</strong>
    </div>
    <p>Connect with your Iru API URL and token. MACE uploads compliance scripts into audit and remediation slots, profiles, and a <strong>Failed Rules Report</strong> custom attribute, and can assign everything to a new or existing <strong>Blueprint</strong> or leave it in the Library.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🟤</span>
      <strong>Addigy</strong>
    </div>
    <p>Connect with an Addigy API key, pick an Organization, and MACE pushes compliance profiles, scripts, and a <strong>Compliance Fact</strong>, optionally assigned to a Policy.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔴</span>
      <strong>Fleet</strong>
    </div>
    <p>Connect with an API token or email and password. MACE deploys profiles, audit preferences, scripts, <strong>DDM declarations</strong>, labels, and a combined or per-rule <strong>Compliance Policy</strong> with a Failed Rules report. <strong>Hold for Scoping</strong> targets an empty staging label so nothing reaches hosts until you scope it, and a custom profile prefix or name lets you stage rollouts side by side. A GitOps kit is written with every export.</p>
  </div>
</div>

<div className="explanation-box">
  <h4>Local Build vs MDM Export</h4>
  <p><strong>Local Build</strong> generates files to a folder on your Mac. You then upload them to your MDM manually.</p>
  <p><strong>MDM Export</strong> generates the same files and uploads them directly to your MDM in one step. Every MDM follows the same <strong>Settings → Review → Upload → Verify</strong> flow: saved servers live in the Keychain, <strong>Test</strong> checks the connection and permissions, the Review screen shows exactly what will be sent and nothing goes up until you confirm, and after the upload MACE verifies each object on the server. An activity history is kept per project, and an archive of every upload lands in a folder such as <code>jamf_uploads/</code> next to <code>build/</code>. Each MDM has its own options and connection settings, while the Baseline Name is shared with Local Build.</p>
</div>

## What's Next?

After building, you need to deploy the generated files to your Macs. See these guides for detailed instructions:

- **[Scripts](./scripts)**: How audit and remediation scripts work, and how to deploy them via MDM
- **[Configuration Profiles](./profiles)**: How profiles enforce settings, and how to deploy them via MDM
- **[DDM Declarations](./ddm)**: How Apple's declarative management works
