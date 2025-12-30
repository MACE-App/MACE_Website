---
sidebar_position: 4
---

# Declarative Device Management (DDM)

MACE generates DDM declarations and artifacts for Apple's modern management approach.

## What is DDM?

Declarative Device Management is Apple's next-generation device management framework:

- Device-driven instead of server-driven
- Autonomous policy enforcement
- Faster response to configuration changes
- Reduced server load

## DDM Outputs

### Declarations

JSON-based configuration declarations:
- Configuration declarations
- Activation declarations
- Asset declarations

### Artifacts

Supporting files referenced by declarations:
- Scripts
- Configuration files
- Certificate references

## Service Configuration

Configure service paths for system services:
- Login window settings
- Background services
- System extensions

## Building DDM Content

1. Enable DDM in Build Settings
2. Select declaration types to generate
3. Configure service paths if needed
4. Build

## Output Structure

```
ddm/
├── declarations/
│   ├── configuration/
│   │   └── security-settings.json
│   ├── activation/
│   │   └── security-activation.json
│   └── assets/
│       └── audit-script.json
└── artifacts/
    └── scripts/
        └── audit.sh
```

## DDM Requirements

DDM support requires:
- macOS 13 or later
- MDM with DDM support
- Supervised devices (for some features)

## MDM Compatibility

DDM is supported by:
- Jamf Pro (with DDM features)
- Microsoft Intune
- Mosyle
- Kandji
- Other modern MDMs

## Best Practices

1. **Start Simple** - Begin with basic declarations
2. **Test Thoroughly** - DDM behavior differs from profiles
3. **Monitor Status** - Check declaration status in MDM
4. **Version Carefully** - Declaration updates are immediate
