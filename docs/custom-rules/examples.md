---
sidebar_position: 3
---

# Rule Examples

Learn from these example custom rules. Copy and adapt them for your organization's needs.

## Basic Script Check

A simple rule that checks a preference value:

```yaml
id: org_finder_show_extensions
title: "Ensure Finder Shows All File Extensions"
discussion: |
  Displaying file extensions helps users identify potentially malicious files
  that may be disguised with misleading names (e.g., "document.pdf.exe").

  This setting should be enabled for all users to improve security awareness.
check: |
  /usr/bin/defaults read NSGlobalDomain AppleShowAllExtensions
result:
  string: "1"
fix: |
  /usr/bin/defaults write NSGlobalDomain AppleShowAllExtensions -bool true
references:
  cis:
    benchmark:
      - "N/A (Custom)"
    controls v8:
      - "N/A"
tags:
  - custom
  - finder
  - your-organization
severity: "low"
mobileconfig: false
mobileconfig_info: {}
```

## Application-Specific Rule

Check settings for a third-party application:

```yaml
id: org_slack_disable_link_previews
title: "Disable Slack Link Previews for Security"
discussion: |
  Slack's link preview feature automatically fetches content from URLs
  shared in messages. This can:
  - Reveal your IP address to external servers
  - Trigger requests to potentially malicious URLs
  - Leak information about internal discussions

  Organizations handling sensitive data should disable this feature.
check: |
  /usr/bin/defaults read com.tinyspeck.slackmacgap ShowLinkPreviews 2>/dev/null || echo "not set"
result:
  string: "0"
fix: |
  /usr/bin/defaults write com.tinyspeck.slackmacgap ShowLinkPreviews -bool false
references:
  cis:
    benchmark:
      - "N/A (Custom)"
    controls v8:
      - "N/A"
tags:
  - custom
  - applications
  - slack
  - privacy
severity: "medium"
mobileconfig: false
mobileconfig_info: {}
```

## Check with Complex Logic

Using JavaScript for more complex checks:

```yaml
id: org_safari_developer_menu_disabled
title: "Ensure Safari Developer Menu is Disabled"
discussion: |
  The Safari Developer menu provides access to debugging tools that could
  be used to bypass security controls or inspect sensitive data. For most
  users, this menu should remain disabled.
check: |
  /usr/bin/osascript -l JavaScript << EOS
  $.NSUserDefaults.alloc.initWithSuiteName('com.apple.Safari')\
  .objectForKey('IncludeDevelopMenu').js
  EOS
result:
  string: "false"
fix: |
  /usr/bin/defaults write com.apple.Safari IncludeDevelopMenu -bool false
references:
  cis:
    benchmark:
      - "N/A (Custom)"
    controls v8:
      - "N/A"
tags:
  - custom
  - safari
  - browsers
severity: "low"
mobileconfig: true
mobileconfig_info:
  com.apple.Safari:
    IncludeDevelopMenu: false
```

## Rule with ODV

Using Organization Defined Values for flexibility:

```yaml
id: org_max_failed_logins
title: "Set Maximum Failed Login Attempts"
discussion: |
  Limiting the number of failed login attempts helps protect against
  brute force password attacks. After the specified number of failures,
  the account should be locked.

  The ODV allows each organization to set their own threshold based
  on their security policy.
check: |
  /usr/bin/pwpolicy -getaccountpolicies 2>/dev/null | /usr/bin/grep -A1 "policyAttributeMaximumFailedAuthentications" | /usr/bin/tail -1 | /usr/bin/awk -F'[<>]' '{print $3}'
result:
  integer: $ODV
odv:
  hint: "Maximum number of failed login attempts before lockout"
  recommended: 5
  cis_lvl1: 5
  cis_lvl2: 3
  stig: 3
fix: |
  /usr/bin/pwpolicy -setaccountpolicies << EOP
  <?xml version="1.0" encoding="UTF-8"?>
  <plist version="1.0">
  <dict>
    <key>policyCategoryAuthentication</key>
    <array>
      <dict>
        <key>policyAttributeMaximumFailedAuthentications</key>
        <integer>$ODV</integer>
      </dict>
    </array>
  </dict>
  </plist>
  EOP
references:
  cis:
    benchmark:
      - "5.2.1"
    controls v8:
      - "4.1"
tags:
  - custom
  - authentication
  - password
severity: "high"
mobileconfig: false
mobileconfig_info: {}
```

## Profile-Based Rule

A rule that can be enforced via configuration profile:

```yaml
id: org_airdrop_contacts_only
title: "Restrict AirDrop to Contacts Only"
discussion: |
  AirDrop allows file sharing between Apple devices. When set to "Everyone",
  any nearby device can send files, which could be used for:
  - Sending malicious files
  - Social engineering attacks
  - Privacy violations

  Restricting to "Contacts Only" limits exposure while maintaining functionality.
check: |
  /usr/bin/defaults read com.apple.sharingd DiscoverableMode
result:
  string: "Contacts Only"
fix: |
  /usr/bin/defaults write com.apple.sharingd DiscoverableMode -string "Contacts Only"
references:
  cis:
    benchmark:
      - "2.4.1"
    controls v8:
      - "4.8"
tags:
  - custom
  - airdrop
  - sharing
severity: "medium"
mobileconfig: true
mobileconfig_info:
  com.apple.applicationaccess:
    allowAirDrop: true
  com.apple.sharingd:
    DiscoverableMode: "Contacts Only"
```

## Manual Review Rule

A rule that requires human verification:

```yaml
id: org_physical_security_review
title: "Verify Physical Security Controls"
discussion: |
  Physical security is a critical component of overall security posture.
  This rule requires manual verification that:

  - Device is stored in a secure location when not in use
  - Screen lock is enabled and functioning
  - No unauthorized USB devices are connected
  - Privacy screen is installed (if required by policy)

  This check cannot be automated and requires visual inspection.
check: |
  echo "MANUAL_REVIEW_REQUIRED"
result:
  string: "MANUAL_REVIEW_REQUIRED"
fix: |
  echo "This rule requires manual verification. Please review physical security controls."
references:
  cis:
    benchmark:
      - "N/A (Custom)"
    controls v8:
      - "N/A"
tags:
  - custom
  - physical-security
  - manual-review
severity: "medium"
mobileconfig: false
mobileconfig_info: {}
```

## Tips for Writing Rules

<table className="icon-table">
  <tr><td>🧪</td><td><strong>Test thoroughly</strong> - Run check and fix scripts manually before using in MACE</td></tr>
  <tr><td>📝</td><td><strong>Document clearly</strong> - Write detailed discussions explaining the "why"</td></tr>
  <tr><td>🔄</td><td><strong>Make fixes idempotent</strong> - Running the fix twice should be safe</td></tr>
  <tr><td>🛡️</td><td><strong>Handle errors</strong> - Use <code>2>/dev/null</code> or <code>|| echo "default"</code></td></tr>
  <tr><td>🏷️</td><td><strong>Tag consistently</strong> - Use meaningful tags for filtering</td></tr>
</table>
