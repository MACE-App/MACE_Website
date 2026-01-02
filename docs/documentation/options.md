---
sidebar_position: 2
description: Configure documentation content, structure, and format-specific settings for compliance guides.
---

# Documentation Options

<div className="editor-intro">
  <p className="editor-intro__lead">Customize what goes into your documentation.</p>
  <p className="editor-intro__sub">Control content, structure, branding, and format-specific settings.</p>
</div>

## Rule Content Options

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
      <span className="build-option-item__icon">🔧</span>
      <strong>Fix Commands (Default: ON)</strong>
    </div>
    <p>Include remediation commands that fix non-compliant settings. Shows exactly what needs to run to bring a system into compliance.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📱</span>
      <strong>Configuration Profiles (Default: ON)</strong>
    </div>
    <p>Show the configuration profile payload for each rule. Displays the mobileconfig XML that can be deployed via MDM.</p>
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
    <p>Include compliance framework references for each rule. Shows mappings to NIST, CIS, DISA STIG, and other standards.</p>
  </div>
</div>

## Document Structure Options

Control what sections appear in your document.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📑</span>
      <strong>Table of Contents (Default: ON)</strong>
    </div>
    <p>Add a clickable table of contents at the beginning. Links to each section for easy navigation.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Detailed Table of Contents (Default: OFF)</strong>
    </div>
    <p>Expand the table of contents to show numbered sections with every rule listed. Follows mSCP guidance style. More comprehensive but longer.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📊</span>
      <strong>Section Summary (Default: ON)</strong>
    </div>
    <p>Include statistics for each section. Shows total rules, configurable rules, manual rules, supplemental rules, and more.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔍</span>
      <strong>Quick Reference (Default: OFF)</strong>
    </div>
    <p>Add an appendix table with all rules listed for quick lookup. Useful for finding specific rules without reading through the full document.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📚</span>
      <strong>Acronyms & Glossary (Default: OFF)</strong>
    </div>
    <p>Include a section defining technical terms and abbreviations used in the document. Helpful for readers unfamiliar with compliance terminology.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📄</span>
      <strong>Applicable Documents (Default: OFF)</strong>
    </div>
    <p>List related compliance standards and reference documents. Shows what frameworks and publications the baseline is based on.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">👥</span>
      <strong>mSCP Authors (Default: OFF)</strong>
    </div>
    <p>Include information about the original mSCP project contributors. Gives credit to the community that created the baseline rules.</p>
  </div>
</div>

## Branding & Metadata Options

Control document appearance and identifying information.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🖼️</span>
      <strong>Include Logo (Default: ON)</strong>
    </div>
    <p>Add a logo to the document cover and headers. MACE looks for <code>logo.png</code> in your project folder. If not found, uses the default MACE logo.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📛</span>
      <strong>Benchmark Name</strong>
    </div>
    <p>The compliance framework title shown on the cover. Automatically set based on your selected baseline (e.g., "CIS Apple macOS 15 Benchmark").</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">👤</span>
      <strong>Author Information</strong>
    </div>
    <p>Your name and organization displayed on the cover page. Set these in your project's author settings.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔢</span>
      <strong>Version Info (Default: ON)</strong>
    </div>
    <p>Show the document version number on the cover page. Helps track which version of the documentation is being used.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📅</span>
      <strong>Generation Date (Default: ON)</strong>
    </div>
    <p>Include the date and time when the document was generated. Useful for knowing when the documentation was last updated.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🏷️</span>
      <strong>Show CIS ID (CIS baselines only)</strong>
    </div>
    <p>Display CIS Benchmark reference numbers below rule IDs. Shows identifiers like "2.6.6" for CIS compliance documentation.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🛡️</span>
      <strong>Show STIG ID (STIG baselines only)</strong>
    </div>
    <p>Display DISA STIG IDs below rule IDs. Shows identifiers like "APPL-15-005001" for STIG compliance documentation.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">✨</span>
      <strong>Include MACE Branding (Default: ON)</strong>
    </div>
    <p>Show "Generated by M.A.C.E." attribution in the document. Turn off for white-labeled or sanitized documents.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🎨</span>
      <strong>Primary Color</strong>
    </div>
    <p>Set the accent color used for headings and highlights. Enter a hex color value (e.g., #007AFF) to match your organization's branding.</p>
  </div>
</div>

## PDF-Only Options

These options only apply when generating PDF documents.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🦶</span>
      <strong>Page Footer (Default: OFF)</strong>
    </div>
    <p>Add a footer to each page showing the document name and generation date. Helps identify printed pages.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">#️⃣</span>
      <strong>Page Numbers (Default: OFF)</strong>
    </div>
    <p>Add page numbers in "Page X of Y" format. Requires pagination to be enabled. Useful for printed documents.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📄</span>
      <strong>One Rule Per Page (Default: OFF)</strong>
    </div>
    <p>Put each rule on its own page. Makes it easier to reference specific rules when printed, but creates a longer document.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🖨️</span>
      <strong>Pagination for Printing (Default: OFF)</strong>
    </div>
    <p>Format the PDF for US Letter paper with automatic page breaks. When off, creates a continuous single-page document (better for digital viewing).</p>
  </div>
</div>

## Custom Logo

To use your organization's logo in documents:

1. Create a PNG image named `logo.png`
2. Place it in your MACE project folder
3. MACE automatically uses it in generated documents

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
  <tr><td>✓</td><td><strong>CIS Benchmarks</strong></td><td>Center for Internet Security Controls</td></tr>
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
      <p>Use Compliance Guide for auditors, Technical Reference for IT teams, and Executive Summary for management.</p>
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
      <strong>Enable pagination for printing</strong>
      <p>If the document will be printed, enable pagination and page numbers for easier reference.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">💾</span>
    <div className="practice-item__content">
      <strong>Save both formats</strong>
      <p>Generate both PDF and HTML. Use PDF for formal distribution and HTML for internal team reference.</p>
    </div>
  </div>
</div>
