---
sidebar_position: 1
slug: /intro
---

# Introduction to MACE

**M.A.C.E. (macOS Advanced Compliance Editor)** is a native macOS application for building and managing macOS Security Compliance Project (mSCP) baselines. Built entirely in Swift with SwiftUI, MACE enables security professionals to create, customize, audit, and export compliance baselines without ever touching the command line.

## The Problem

The [macOS Security Compliance Project (mSCP)](https://github.com/usnistgov/macos_security) provides excellent security baselines, but working with them traditionally requires:

- Command line proficiency
- Python scripting knowledge
- YAML file editing expertise
- Manual profile generation
- Complex build processes

For security administrators, compliance officers, and IT teams who need to customize baselines for their organizations, this technical barrier can be overwhelming.

## The Solution

MACE provides a complete visual interface for the entire compliance workflow:

- **Browse 500+ security rules** organized by section with powerful search and filtering
- **Customize any rule** - edit discussions, checks, fixes, ODVs, and configurations
- **Run live audits** with real-time progress and detailed results
- **Export to any format** - PDF, HTML, CSV, CKL for STIG Viewer
- **Generate deployment artifacts** - scripts, mobileconfigs, DDM declarations
- **Support multiple frameworks** - STIG, CIS, NIST 800-53, CMMC, and more

## Supported Platforms

MACE supports compliance management for:

| Platform | Versions |
|----------|----------|
| **macOS** | 26 (Tahoe), 15 (Sequoia), 14 (Sonoma) |
| **iOS/iPadOS** | 26, 18, 17 |
| **visionOS** | 26 |

## Supported Compliance Frameworks

| Framework | Description |
|-----------|-------------|
| **DISA STIG** | Defense Information Systems Agency Security Technical Implementation Guides |
| **CIS Benchmarks** | Center for Internet Security Benchmarks (Level 1, Level 2, v8) |
| **NIST 800-53** | High, Moderate, Low, and Privacy control baselines |
| **NIST 800-171** | Protecting Controlled Unclassified Information |
| **CMMC** | Cybersecurity Maturity Model Certification levels |
| **Custom** | Build your own baseline from available rules |

## Key Capabilities

### Compliance Editor
- Three-panel interface: sections sidebar, searchable rule list, and detailed editor
- Filter by framework, section, tags, or modification status
- "Show All" mode to view rules across all frameworks
- Keyboard shortcuts for power users (Space to toggle rules)

### Rule Customization
- Edit all rule fields: discussion, check, fix, references, tags
- Modify ODVs (Organization Defined Values) for your requirements
- Customize mobileconfig payloads and DDM declarations
- Side-by-side comparison of baseline vs. custom values
- Automatic YAML structure preservation

### Build System
Generate deployment-ready artifacts:
- **Shell scripts** for audit and remediation
- **Configuration profiles** (.mobileconfig, Jamf plist, Intune XML)
- **DDM declarations** for modern Apple management
- **Documentation** (HTML, PDF) with customizable branding

### Audit Engine
- Run compliance checks with privileged helper for root-level access
- Real-time progress tracking with per-rule execution
- Color-coded results: Pass, Fail, Error, Manual Review, N/A
- Add comments and override statuses
- Export to PDF, HTML, CSV, or DISA STIG CKL format

## System Requirements

- **macOS 14 (Sonoma)** or later
- Apple Silicon or Intel Mac
- Administrator access for audit features

## Quick Start

1. **[Download](https://github.com/mace-app/mace/releases)** the latest release
2. **Create** a new project selecting your platform and compliance framework
3. **Customize** rules to fit your organization's requirements
4. **Build** scripts and configuration profiles for deployment
5. **Audit** your Mac and export compliance reports

## Architecture Overview

MACE is built with a modular architecture:

```
MACE/
├── App/                    # Application entry and settings
├── Core/
│   ├── Models/            # Data models (Rules, Compliance, etc.)
│   └── Services/          # Business logic and file operations
│       └── Build/         # Artifact generation
├── Features/
│   ├── Audit/            # Compliance auditing
│   ├── Build/            # Build configuration UI
│   ├── ComplianceEditor/ # Main rule editor
│   ├── Documentation/    # Doc generation
│   ├── MainMenu/         # Welcome screen
│   ├── ProjectCreation/  # New project wizard
│   ├── RuleDetail/       # Rule editing views
│   └── RulesList/        # Rule browsing
└── Shared/               # Utilities and helpers
```

## Project File Structure

When you create a MACE project, it uses this structure:

```
your_project/
├── MACE_Project.mace              # Project configuration (plist)
├── builder_files/
│   ├── rules/                     # Baseline rule YAML files
│   ├── custom/
│   │   └── rules/                 # Your rule customizations
│   └── build/
│       └── baselines/             # Exported baseline files
└── build_output/                  # Generated artifacts
    ├── scripts/
    ├── mobileconfigs/
    ├── documentation/
    └── ddm/
```

## Next Steps

- [Installation](./installation) - Install and configure MACE
- [Project Management](./features/project-management) - Create and manage projects
- [Compliance Editor](./features/compliance-editor) - Browse and customize rules
- [Build Capabilities](./build/overview) - Generate deployment artifacts
- [Audit & Verification](./audit/overview) - Run compliance audits
