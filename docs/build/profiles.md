---
sidebar_position: 3
---

# Configuration Profiles

MACE generates configuration profiles for deploying security settings via MDM.

## Profile Formats

### Apple Configuration Profiles (.mobileconfig)

Standard Apple configuration profiles that can be:
- Installed manually
- Deployed via MDM
- Signed for trust

**Options:**
- **Combined** - All settings in one profile
- **Individual** - Separate profile per rule/section

### Plist Format

Property list format for Jamf Pro Custom Settings:
- Upload directly to Jamf Pro
- Use with Custom Settings payloads
- Specify preference domain

### XML Format (Intune)

XML configuration for Microsoft Intune:
- Properly formatted for Intune ingestion
- Supports Intune's custom profile format

## Profile Signing

MACE supports digitally signing profiles:

1. Open Build Settings
2. Enable Profile Signing
3. Select your signing certificate
4. Build profiles

### Certificate Requirements

Use a certificate that:
- Is trusted by target Macs
- Has code signing capability
- Is in your Keychain

Signed profiles show as "Verified" when installed.

## Building Profiles

1. Configure your baseline
2. Open Build dialog
3. Select profile format(s)
4. Choose combined or individual
5. Optionally enable signing
6. Build

## Profile Contents

Generated profiles include:

| Payload Type | Examples |
|--------------|----------|
| **Restrictions** | Disable AirDrop, Control screenshots |
| **Security & Privacy** | Firewall, FileVault |
| **Login Items** | Screensaver settings |
| **Custom Settings** | Preference domain values |

## Deployment

### Manual Installation

Double-click the `.mobileconfig` file and approve in System Settings.

### MDM Deployment

Upload to your MDM for automatic deployment:

**Jamf Pro:**
1. Go to Configuration Profiles
2. Upload the profile
3. Scope to target computers

**Microsoft Intune:**
1. Create Custom profile
2. Upload XML configuration
3. Assign to device groups

## Troubleshooting

### Profile Won't Install

- Check for signing issues
- Verify payload compatibility
- Review Console.app for errors

### Settings Not Applied

- Confirm profile is installed
- Check for conflicting profiles
- Verify MDM enrollment
