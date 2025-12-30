---
sidebar_position: 1
---

# Project Management

MACE organizes your compliance work into projects. Each project contains your selected framework, customized rules, and build configurations.

## Creating a New Project

1. Launch MACE
2. Click **New Project** or use `Cmd + N`
3. Select your target platform:
   - macOS
   - iOS/iPadOS
   - visionOS
4. Choose your compliance framework (STIG, CIS, NIST, etc.)
5. Name your project and select a save location

## Project File Format

MACE projects are saved with the `.mace` extension. These files contain:

- Your selected compliance framework
- All rule customizations
- Build settings and preferences
- Metadata (author, version, etc.)

## Recent Projects

MACE maintains a list of recently opened projects for quick access. Find this on the welcome screen when you launch the app.

## Opening Existing Projects

Open an existing project in several ways:

- Double-click a `.mace` file in Finder
- Use **File > Open** (`Cmd + O`)
- Select from the Recent Projects list

## Auto-Save

MACE automatically saves your work as you make changes. You never need to manually save your project.

## Project Settings

Access project settings to configure:

- Project name and description
- Author information
- Baseline versioning
- Output directory preferences

## Supported Compliance Frameworks

MACE supports multiple compliance frameworks:

| Framework | Description |
|-----------|-------------|
| **DISA STIG** | Defense Information Systems Agency Security Technical Implementation Guides |
| **CIS Benchmarks** | Center for Internet Security Benchmarks |
| **NIST 800-53** | National Institute of Standards and Technology controls |
| **CMMC** | Cybersecurity Maturity Model Certification |
| **Custom** | Create your own baseline from available rules |

## "Show All" Mode

Enable "Show All" mode to view all available security rules regardless of your selected framework. This is useful when:

- Exploring available rules
- Building a custom baseline
- Comparing rules across frameworks
