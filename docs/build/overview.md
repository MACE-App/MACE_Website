---
sidebar_position: 1
---

# Build

MACE's build system generates deployment-ready artifacts from your compliance baseline. With a single build operation, you can create scripts, configuration profiles, and DDM declarations.

<div className="themed-image">
  <img src="/img/screenshots/build-light.png" alt="MACE Build" className="img-light" />
  <img src="/img/screenshots/build-dark.png" alt="MACE Build" className="img-dark" />
</div>

## Build Pipeline

MACE uses a 9-phase build pipeline:

| Phase | Description |
|-------|-------------|
| 1. **Preparing** | Create output directories and validate settings |
| 2. **Loading Rules** | Load rule YAML files with custom overrides |
| 3. **Generating Scripts** | Create audit and remediation shell scripts |
| 4. **Generating Profiles** | Build configuration profiles |
| 5. **Signing Profiles** | Digitally sign profiles (if enabled) |
| 6. **Generating DDM** | Create DDM declarations and artifacts |
| 7. **Generating Excel** | Export rule data to CSV |
| 8. **Generating Audit Plist** | Create audit configuration files |
| 9. **Finishing** | Generate README and cleanup |

## Output Types

### Scripts
- **Audit Script** - Checks compliance status for all enabled rules
- **Remediation Script** - Applies fixes for non-compliant settings
- **Extension Attributes** - MDM-ready scripts for Jamf Pro, etc.

### Configuration Profiles
- **Combined Mobileconfig** - Single `.mobileconfig` with all payloads
- **Individual Mobileconfigs** - Separate profile per payload type
- **Jamf Plist** - Formatted for Jamf Pro Custom Settings
- **Intune XML** - Microsoft Intune compatible format
- **Signed Profiles** - Digitally signed for trust verification

### Declarative Device Management
- **DDM Declarations** - Apple's modern management format
- **Configuration Declarations** - Policy configurations
- **Activation Declarations** - Enable/disable declarations
- **Assets** - Supporting scripts and files

### Documentation
- **HTML** - Interactive web-based documentation
- **PDF** - Print-ready compliance guides
- **CSV** - Spreadsheet export of all rules
- **Baseline YAML** - mSCP-compatible baseline file

## Build Configuration

### Author Metadata

| Setting | Description |
|---------|-------------|
| **Author Name** | Your name or organization |
| **Benchmark Name** | Name for this baseline |
| **Version** | Baseline version identifier |

### Output Options

| Option | Description |
|--------|-------------|
| **Output Directory** | Where to save generated files |
| **Combined Profiles** | Merge all payloads into one profile |
| **Individual Profiles** | Create separate profile per type |
| **Sign Profiles** | Apply digital signature |
| **Include Disabled** | Include disabled rules in docs |

## Output Directory Structure

A complete build creates this structure:

```
build_output/
├── scripts/
│   ├── audit_compliance.sh
│   ├── fix_compliance.sh
│   └── extension_attributes/
│       ├── ea_os_firewall_enable.sh
│       ├── ea_os_password_min_length.sh
│       └── ...
├── mobileconfigs/
│   ├── combined/
│   │   └── compliance_baseline.mobileconfig
│   └── individual/
│       ├── com.apple.screensaver.mobileconfig
│       ├── com.apple.security.firewall.mobileconfig
│       └── ...
├── signed/
│   └── compliance_baseline_signed.mobileconfig
├── plists/
│   ├── com.apple.screensaver.plist
│   └── ...
├── intune/
│   ├── com.apple.screensaver.xml
│   └── ...
├── ddm/
│   ├── declarations/
│   │   ├── configuration/
│   │   ├── activation/
│   │   └── assets/
│   └── artifacts/
├── documentation/
│   ├── compliance_guide.html
│   ├── compliance_guide.pdf
│   └── rules_export.csv
├── baselines/
│   └── baseline.yaml
├── audit_plist/
│   └── audit_config.plist
└── README.md
```

## Build Engines

### M.A.C.E. Build Engine (Default)
The native Swift build engine offers:
- Full customization support
- ODV substitution
- All output formats
- Digital signing
- Fast, native performance

### mSCP Build Engine
Integration with official mSCP Python scripts:
- Compatibility with existing mSCP workflows
- Python-based generation
- *(Planned for future release)*

## Starting a Build

1. Open your project
2. Click **Build** in the toolbar or use `Cmd+B`
3. Configure build options
4. Select output types
5. Choose destination folder
6. Click **Build**

{/* TODO: Add screenshot - build_progress.png */}
:::tip Screenshot Needed
**Filename:** `build_progress.png`
**Description:** Build progress dialog showing current phase and progress bar.
:::

## Build Summary

After completion, MACE displays:
- Total rules processed
- Files generated per category
- Any warnings or errors
- Output directory location

## Next Steps

<table className="icon-table">
  <tr><td>📜</td><td><strong><a href="./scripts">Scripts</a></strong> - Details on generated audit and remediation scripts</td></tr>
  <tr><td>⚙️</td><td><strong><a href="./profiles">Configuration Profiles</a></strong> - Profile formats and deployment options</td></tr>
  <tr><td>📱</td><td><strong><a href="./ddm">DDM Declarations</a></strong> - Declarative Device Management</td></tr>
  <tr><td>📄</td><td><strong><a href="../documentation/baseline-docs">Documentation</a></strong> - Generate baseline documentation</td></tr>
</table>
