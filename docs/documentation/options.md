---
sidebar_position: 2
description: Configure documentation content, structure, branding, and format-specific settings for compliance guides.
title: "Documentation Options"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Documentation Options</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Customize what goes into your documentation.</p>
      <p className="doc-hero__sub">The sidebar of the Documentation Builder is organized into five groups: Rule Content, Rule Options, Structure, Branding, and Format Options.</p>
    </div>
  </div>
</div>

:::info Defaults follow the document type
The defaults below are what you see when the builder opens. Picking a different **Document Type** applies that type's preset, so Full Report turns on Check Commands, Rule Tags, and Include Disabled, while Executive Summary turns most rule detail off. Every setting is saved per project in its `.mace` file, so the builder reopens the way you left it.
:::

## Rule Content

Control what information is included for each rule in your document.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">💬</span>
      <strong>Discussions (Default: ON)</strong>
    </div>
    <p>Include the discussion text for each rule. Explains why the rule exists, what it protects against, and provides context for compliance teams.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔍</span>
      <strong>Check Commands (Default: OFF)</strong>
    </div>
    <p>Show the command used to verify compliance for each rule. Useful for technical teams who need to manually verify settings.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🎯</span>
      <strong>Expected Result (Default: ON)</strong>
    </div>
    <p>The expected output of the check command, such as "Yes" or "1", shown as "If the result is not X, this is a finding." Sits under Check Commands and is grayed out when that option is off.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔧</span>
      <strong>Fix Commands (Default: ON)</strong>
    </div>
    <p>Include remediation commands that fix non-compliant settings. Shows exactly what needs to run to bring a system into compliance.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📱</span>
      <strong>Config Profiles (Default: ON)</strong>
    </div>
    <p>Show the configuration profile payload for each rule. Displays the mobileconfig keys and values that can be deployed via MDM.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📲</span>
      <strong>DDM Info (Default: ON)</strong>
    </div>
    <p>Include Declarative Device Management declaration details. Shows DDM keys and values for modern Apple device management.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔗</span>
      <strong>References (Default: ON)</strong>
    </div>
    <p>Include compliance framework references for each rule. Shows mappings to NIST, CIS, DISA STIG, and other standards. See <a href="#compliance-references">Compliance References</a>.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🏷️</span>
      <strong>CIS ID (Default: OFF)</strong>
    </div>
    <p>Display CIS Benchmark reference numbers below rule IDs, such as "2.6.6".</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🛡️</span>
      <strong>STIG ID (Default: OFF)</strong>
    </div>
    <p>Display DISA STIG IDs below rule IDs, such as "APPL-15-005001".</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔖</span>
      <strong>Rule Tags (Default: OFF)</strong>
    </div>
    <p>Compliance framework tags attached to each rule, such as <code>800-53r5_high</code>, <code>cisv8</code>, or <code>cmmc_lvl2</code>.</p>
  </div>
</div>

## Rule Options

Control how rules with a special status are handled. The group has five sub-headers: **Disabled**, **Added**, **Modified**, **Review**, and **Exempt**. They're always visible, and they only affect the output when your project actually has rules of that kind.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🚫</span>
      <strong>Disabled</strong>
    </div>
    <p>Rules you've turned off in the Compliance Editor. Disabled rules are left out by default. <strong>Include Disabled</strong> adds them, <strong>Include Comments</strong> prints the justification you entered, and <strong>Own Section</strong> groups them together instead of leaving them in place.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">➕</span>
      <strong>Added</strong>
    </div>
    <p>Rules you added to the baseline that aren't part of the framework's default selection. <strong>Show Added Indicator</strong> marks them, <strong>Include Comments</strong> prints your justification, and <strong>Own Section</strong> groups them.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">✏️</span>
      <strong>Modified</strong>
    </div>
    <p><strong>Show Modified Indicator</strong> (Default: ON) marks rules whose values you changed from the original mSCP rule.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🚩</span>
      <strong>Review</strong>
    </div>
    <p>Rules you flagged for review in the Compliance Editor. <strong>Show Flagged Indicator</strong> marks them, <strong>Include Comments</strong> prints your review comments, and <strong>Own Section</strong> groups them.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">➖</span>
      <strong>Exempt</strong>
    </div>
    <p>Rules marked exempt in the Compliance Editor: still audited, but not enforced. <strong>Show Exempt Indicator</strong> adds an indigo Exempt badge, <strong>Include Reasons</strong> prints the exemption reason, and <strong>Own Section</strong> groups them under "Exempt Rules". See <a href="/docs/compliance-editor/overview#exempting-rules">Exempting Rules</a>.</p>
  </div>
</div>

The Include Comments and Own Section switches stay grayed out until their parent option is on.

## Structure

Control which sections appear in your document.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📑</span>
      <strong>Table of Contents (Default: ON)</strong>
    </div>
    <p>Add a clickable table of contents at the beginning. In PDF it includes page numbers.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Detailed ToC (Default: ON)</strong>
    </div>
    <p>Expand the table of contents to show numbered sections with every rule listed. Follows mSCP guidance style. Only appears when Table of Contents is on.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📖</span>
      <strong>Foreword and Scope (Default: ON)</strong>
    </div>
    <p>The introductory pages that explain what the document is and what it covers. Only apply to PDF and HTML, so they're grayed out for the other formats.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📊</span>
      <strong>Section Summary (Default: ON)</strong>
    </div>
    <p>Include statistics for each section: total rules, configurable rules, manual rules, supplemental rules, and more. Not available for XLSX.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📝</span>
      <strong>Section Descriptions (Default: ON)</strong>
    </div>
    <p>Print the mSCP description at the top of each section.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔍</span>
      <strong>Quick Reference (Default: ON)</strong>
    </div>
    <p>Add an appendix table listing every rule for quick lookup. In PDF, the Page column is clickable.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📚</span>
      <strong>Acronyms (Default: ON)</strong>
    </div>
    <p>Include an "Acronyms and Definitions" section for readers unfamiliar with compliance terminology.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📄</span>
      <strong>Applicable Docs (Default: ON)</strong>
    </div>
    <p>List related compliance standards and reference documents the baseline is based on.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">👥</span>
      <strong>mSCP Authors (Default: ON)</strong>
    </div>
    <p>Credit the original mSCP project contributors on the authors page. The authors page itself is controlled by <strong>Author Info</strong> under Branding; this option adds or removes the mSCP names inside it. Not available for XLSX.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔤</span>
      <strong>Alphabetical Order (Default: OFF)</strong>
    </div>
    <p>Sort rules alphabetically A-Z within each section. By default, rules appear in their original mSCP order.</p>
  </div>
</div>

## Branding

Control document appearance and identifying information.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📛</span>
      <strong>Document Title</strong>
    </div>
    <p>Show the title on the cover. The field is pre-filled with the benchmark name, or "&lt;Platform&gt; Security Configuration" when there isn't one, and you can type your own.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">💬</span>
      <strong>Subtitle</strong>
    </div>
    <p>Show a subtitle under the title. The default depends on the document type, for example "Compliance Guide - cis_lvl2". Editable.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🖥️</span>
      <strong>Platform</strong>
    </div>
    <p>Include the platform and OS version on the cover. Turning it off also hides the version number.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">👤</span>
      <strong>Author Info</strong>
    </div>
    <p>Add the authors page with sub-toggles for <strong>Author Name</strong> and <strong>Organization</strong>. Set the values from the Author Info card in the Compliance Editor's sidebar.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">✨</span>
      <strong>MACE Branding (Default: ON)</strong>
    </div>
    <p>Show "Generated by M.A.C.E." attribution in the document. Turn off for white-labeled or sanitized documents.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📅</span>
      <strong>Show Date (Default: ON)</strong>
    </div>
    <p>Include the generation date, with a <strong>Date Format</strong> picker offering 14 formats. The default is YYYY-MM-DD.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🖼️</span>
      <strong>Logo</strong>
    </div>
    <p>Choose the logo shown on the cover and in headers: <strong>None</strong>, <strong>MACE</strong>, or <strong>Custom</strong>. Custom only appears once a logo exists in the project. See <a href="#custom-logo">Custom Logo</a>.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🎨</span>
      <strong>Primary and Secondary Color</strong>
    </div>
    <p>Pick the accent color from 16 named swatches (Default, Federal Blue, Navy, NIST Blue, Indigo, Purple, Teal, Green, DISA Red, Orange, Gold, Maroon, Steel, Silver, Dark Gray, Black) or open the system color picker for a custom value. <strong>Secondary</strong> is derived automatically from Primary, or switch it to Custom to set your own.</p>
  </div>
</div>

## Format Options

Settings that only apply to one output format.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📕</span>
      <strong>PDF: Page Footer (Default: ON)</strong>
    </div>
    <p>Adds a page header with the document title and a footer with the author or organization on the left and the date in the center. If no author is set and MACE Branding is on, the footer reads "Generated by M.A.C.E."</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">#️⃣</span>
      <strong>PDF: Page Numbers (Default: ON)</strong>
    </div>
    <p>Draws "Page X of Y" at the bottom right of every page.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📄</span>
      <strong>PDF: One Rule Per Page (Default: OFF)</strong>
    </div>
    <p>Put each rule on its own page. Easier to reference when printed, but a much longer document.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🌗</span>
      <strong>PDF: Color Scheme (Default: Light)</strong>
    </div>
    <p><strong>Light</strong>, <strong>Dark</strong>, or <strong>Both</strong>. Both generates two separate PDF files, named <code>_Light.pdf</code> and <code>_Dark.pdf</code>. Page size is always US Letter.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🌐</span>
      <strong>HTML: Color Scheme (Default: Auto)</strong>
    </div>
    <p><strong>Auto</strong> makes the HTML file follow the reader's system light or dark preference in any browser. <strong>Light</strong> and <strong>Dark</strong> pin it.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📗</span>
      <strong>XLSX: Color by Status (Default: ON)</strong>
    </div>
    <p>Color-codes spreadsheet rows by rule status: red for disabled, green for added, yellow for flagged for review, indigo for exempt.</p>
  </div>
</div>

## Remember for Build Output

The checkbox under the Document Type picker saves your current documentation settings and applies them automatically when you run a Build. With it on, the Build Hub's Generate button becomes a menu with **Generate with Documentation** and **Generate Files**. A build with documentation writes all seven formats to `build/documentation/` inside the project and opens that folder when it finishes.

## Custom Logo

To use your organization's logo in documents, open the **Branding** group of the Documentation Builder:

1. Click the upload button next to **Logo** and choose a PNG, JPEG, or GIF
2. MACE copies it into the project folder as `logo.png` and switches **Logo** to **Custom**
3. The logo appears in the preview immediately and is used in generated documents

If a `logo.png` already exists in the project folder, MACE detects it on open and selects Custom automatically. The same file is used by the mSCP engine's logo option. The trash button deletes `logo.png` from the project folder.

**Logo recommendations:**
- Format: PNG with transparency
- Size: 200-400 pixels wide
- Aspect ratio: Horizontal works best

## Compliance References

Documentation can include mappings to these compliance frameworks:

<table className="icon-table">
  <tr><td>🏛️</td><td><strong>NIST SP 800-53 (Rev 5)</strong></td><td>Security and Privacy Controls</td></tr>
  <tr><td>🔒</td><td><strong>NIST SP 800-171 (Rev 3)</strong></td><td>Protecting Controlled Unclassified Information</td></tr>
  <tr><td>🛡️</td><td><strong>DISA STIG</strong></td><td>Security Technical Implementation Guides</td></tr>
  <tr><td>📋</td><td><strong>DISA SRG</strong></td><td>Security Requirements Guides</td></tr>
  <tr><td>✓</td><td><strong>CIS Benchmarks</strong></td><td>Benchmark recommendation IDs for the Apple platform benchmarks</td></tr>
  <tr><td>🎛️</td><td><strong>CIS Controls v8</strong></td><td>Center for Internet Security Critical Security Controls</td></tr>
  <tr><td>🔢</td><td><strong>CCE</strong></td><td>Common Configuration Enumeration</td></tr>
  <tr><td>🔗</td><td><strong>CCI</strong></td><td>Control Correlation Identifier</td></tr>
  <tr><td>🎖️</td><td><strong>CMMC</strong></td><td>Cybersecurity Maturity Model Certification</td></tr>
</table>

## Best Practices

<div className="best-practices">
  <div className="practice-item">
    <span className="practice-item__icon">🎯</span>
    <div className="practice-item__content">
      <strong>Match your audience</strong>
      <p>Use Compliance Guide for auditors, Technical Reference or Remediation Guide for IT teams, and Executive Summary for management.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">📊</span>
    <div className="practice-item__content">
      <strong>Include section summaries</strong>
      <p>Statistics help readers understand the scope of compliance requirements at a glance.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🖼️</span>
    <div className="practice-item__content">
      <strong>Add your logo</strong>
      <p>Custom branding makes documents look professional and helps identify them as your organization's.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🖨️</span>
    <div className="practice-item__content">
      <strong>Keep page numbers on for print</strong>
      <p>PDF is always paginated. Leave Page Footer and Page Numbers on so printed pages are easy to reference, and consider One Rule Per Page for binders.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">💾</span>
    <div className="practice-item__content">
      <strong>Generate all formats once</strong>
      <p>Use <strong>Generate All Formats…</strong> to write all seven files to one folder. Hand out the PDF, link the HTML internally, and keep the JSON or CSV for tooling.</p>
    </div>
  </div>
</div>
