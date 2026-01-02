---
sidebar_position: 3
description: Sample custom rules for preference checks, third-party apps, ODV values, and profile-based enforcement.
---

# Examples

<div className="editor-intro">
  <p className="editor-intro__lead">Sample custom rules to learn from and adapt.</p>
  <p className="editor-intro__sub">Copy these examples and modify them for your organization's needs.</p>
</div>

## Basic Preference Check

A simple rule that checks a system preference:

```yaml
id: os_finder_show_extensions
title: Ensure Finder Shows All File Extensions
discussion: |
  File extensions _MUST_ be visible in Finder.
  Displaying file extensions helps users identify potentially malicious files
  that may be disguised with misleading names (e.g., "document.pdf.exe").

references:
  nist:
    cce:
      macos_15:
        - CCE-XXXXX-X
  disa:
    disa_stig:
      macos_15:
        - APPL-15-XXXXXX

platforms:
  macOS:
    '15.0':
      benchmarks:
        - name: cis_lvl1
    enforcement_info:
      check:
        shell: /usr/bin/defaults read NSGlobalDomain AppleShowAllExtensions
        result:
          string: '1'
      fix:
        shell: /usr/bin/defaults write NSGlobalDomain AppleShowAllExtensions -bool true

tags:
  - cis_lvl1
```

## Third-Party Application

Check settings for an application not covered by baselines:

```yaml
id: os_slack_disable_link_previews
title: Disable Slack Link Previews
discussion: |
  Slack link previews _SHOULD_ be disabled for organizations handling sensitive data.

  The link preview feature automatically fetches content from URLs shared in messages,
  which can reveal your IP address to external servers and trigger requests to
  potentially malicious URLs.

references:
  nist:
    cce:
      macos_15:
        - CCE-XXXXX-X
  disa:
    disa_stig:
      macos_15:
        - APPL-15-XXXXXX

platforms:
  macOS:
    '15.0':
      benchmarks:
        - name: cis_lvl2
    enforcement_info:
      check:
        shell: /usr/bin/defaults read com.tinyspeck.slackmacgap ShowLinkPreviews 2>/dev/null || echo "not set"
        result:
          string: '0'
      fix:
        shell: /usr/bin/defaults write com.tinyspeck.slackmacgap ShowLinkPreviews -bool false

tags:
  - cis_lvl2
```

## Rule with ODV

Using Organization Defined Values for configurable thresholds:

```yaml
id: system_settings_screensaver_timeout
title: Set Screen Saver Timeout
discussion: |
  The screen saver timeout _MUST_ be set to $ODV seconds or less.

  The screen saver should activate after a period of inactivity to protect
  unattended workstations.

references:
  nist:
    cce:
      macos_15:
        - CCE-XXXXX-X
  disa:
    disa_stig:
      macos_15:
        - APPL-15-XXXXXX

platforms:
  macOS:
    '15.0':
      benchmarks:
        - name: cis_lvl1
        - name: cis_lvl2
        - name: disa_stig
          severity: medium
    enforcement_info:
      check:
        shell: /usr/bin/defaults read com.apple.screensaver idleTime
        result:
          integer: $ODV
      fix:
        shell: /usr/bin/defaults write com.apple.screensaver idleTime -int $ODV

odv:
  hint:
    datatype: number
    description: Screen saver timeout in seconds (e.g., 300 for 5 minutes)
    validation:
      min: 60
      max: 3600
  recommended: 300
  cis_lvl1: 1200
  cis_lvl2: 300
  stig: 900

mobileconfig_info:
  - PayloadType: com.apple.screensaver
    PayloadContent:
      - idleTime: $ODV

tags:
  - cis_lvl1
  - cis_lvl2
  - 800-53r5_moderate
```

## Profile-Based Rule

A rule enforced via configuration profile:

```yaml
id: system_settings_airdrop_contacts_only
title: Restrict AirDrop to Contacts Only
discussion: |
  AirDrop _MUST_ be restricted to Contacts Only or disabled entirely.

  When set to "Everyone", any nearby device can send files, which could be
  used for social engineering or sending malicious content.

references:
  nist:
    cce:
      macos_15:
        - CCE-XXXXX-X
  disa:
    disa_stig:
      macos_15:
        - APPL-15-XXXXXX

platforms:
  macOS:
    '15.0':
      benchmarks:
        - name: cis_lvl1
    enforcement_info:
      check:
        shell: /usr/bin/defaults read com.apple.sharingd DiscoverableMode
        result:
          string: 'Contacts Only'
      fix:
        shell: /usr/bin/defaults write com.apple.sharingd DiscoverableMode -string "Contacts Only"

mobileconfig_info:
  - PayloadType: com.apple.sharingd
    PayloadContent:
      - DiscoverableMode: Contacts Only

tags:
  - cis_lvl1
```

## Rule with References

Including compliance framework mappings:

```yaml
id: audit_flags_configure
title: Configure Audit Flags
discussion: |
  The audit system _MUST_ be configured to log specific events for
  security monitoring and incident response.

references:
  nist:
    cce:
      macos_15:
        - CCE-12345-6
    800-53r5:
      - AU-2
      - AU-12
    800-171r3:
      - 03.03.01
  disa:
    cci:
      - CCI-000130
      - CCI-000131
    srg:
      - SRG-OS-000037-GPOS-00015
    disa_stig:
      macos_15:
        - APPL-15-001001
  cis:
    benchmark:
      macos_15:
        - '3.2 (level 2)'
    controls_v8:
      - '8.2'
      - '8.5'

platforms:
  macOS:
    '15.0':
      benchmarks:
        - name: cis_lvl2
        - name: disa_stig
          severity: medium
    enforcement_info:
      check:
        shell: /usr/bin/grep -c "^flags:" /etc/security/audit_control
        result:
          integer: 1
      fix:
        shell: |
          /usr/bin/sed -i '' 's/^flags:.*/flags:lo,aa,ad,fd,fm,-all/' /etc/security/audit_control
          /usr/sbin/audit -s

tags:
  - cis_lvl2
  - 800-53r5_moderate
```

## Tips for Writing Rules

<div className="best-practices">
  <div className="practice-item">
    <span className="practice-item__icon">🧪</span>
    <div className="practice-item__content">
      <strong>Test thoroughly</strong>
      <p>Run check and fix commands manually before adding to MACE.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">📝</span>
    <div className="practice-item__content">
      <strong>Document clearly</strong>
      <p>Write detailed discussions explaining why the rule matters.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🔄</span>
    <div className="practice-item__content">
      <strong>Make fixes idempotent</strong>
      <p>Running the fix multiple times should be safe.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🛡️</span>
    <div className="practice-item__content">
      <strong>Handle errors</strong>
      <p>Use <code>2>/dev/null</code> or <code>|| echo "default"</code> for commands that might fail.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🏷️</span>
    <div className="practice-item__content">
      <strong>Tag consistently</strong>
      <p>Use meaningful tags for filtering and organization.</p>
    </div>
  </div>
</div>
