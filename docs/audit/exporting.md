---
sidebar_position: 3
description: Export audit reports in nine formats — from PDF and HTML to spreadsheets, Markdown, and DISA STIG checklists.
title: "Exporting Reports"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Exporting Reports</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__figure">
      <img
        src="/img/mascots/export-reports.webp"
        alt="MACE mascot sending out a box of audit reports"
        className="doc-hero__mascot"
        width="440"
        height="440"
      />
    </div>
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Export audit results in nine formats — from PDF and HTML to spreadsheets, Markdown, and DISA STIG checklists.</p>
      <p className="doc-hero__sub">Generate professional reports for auditors, documentation, and compliance tracking.</p>
    </div>
  </div>
</div>

## Export Formats

MACE can export audit results in nine formats:

<div className="output-types-grid">
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">📄</span>
      <h3>PDF</h3>
    </div>
    <p>Professional report format. Ideal for sharing with auditors, management, or for official documentation. Includes charts and formatted tables.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">🌐</span>
      <h3>HTML</h3>
    </div>
    <p>Interactive web report. Can be opened in any browser. Includes responsive design and expandable details. Great for internal review.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">📊</span>
      <h3>CSV</h3>
    </div>
    <p>Spreadsheet format. Import into Excel, Google Sheets, or other tools. Useful for data analysis, filtering, and custom reporting.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">📋</span>
      <h3>XLSX</h3>
    </div>
    <p>Excel spreadsheet with formatted table, auto-filters, and frozen header row. Ideal for compliance teams who need to sort, filter, and analyze results in a spreadsheet.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">🧩</span>
      <h3>JSON</h3>
    </div>
    <p>Structured data format containing audit results and summary statistics. Ideal for automation, custom dashboards, or feeding results into other tools and scripts.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">📝</span>
      <h3>Markdown</h3>
    </div>
    <p>Plain-text report with Markdown formatting. Drop it into wikis, GitHub, or ticketing systems that render Markdown.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">📃</span>
      <h3>AsciiDoc</h3>
    </div>
    <p>Plain-text report in AsciiDoc format. Fits documentation pipelines built on Asciidoctor or Antora.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">🛡️</span>
      <h3>STIG CKL</h3>
    </div>
    <p>DISA STIG Checklist format (XML). Required for DoD compliance. Updates existing CKL templates with your audit results. Only available for STIG frameworks.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">🛡️</span>
      <h3>STIG CKLB</h3>
    </div>
    <p>DISA STIG Viewer 3.x checklist format (JSON). The modern replacement for the XML-based CKL. Can update an existing CKLB template or generate one from an XCCDF benchmark. Only available for STIG frameworks.</p>
  </div>
</div>

### Which Format Should I Use?

<table className="icon-table">
  <tbody>
  <tr><td>📄</td><td><strong>PDF</strong></td><td>Share with auditors or management</td></tr>
  <tr><td>🌐</td><td><strong>HTML</strong></td><td>Review results in a browser</td></tr>
  <tr><td>📊</td><td><strong>CSV</strong></td><td>Analyze data in Excel or Google Sheets</td></tr>
  <tr><td>📋</td><td><strong>XLSX</strong></td><td>Pre-formatted Excel file with filters and frozen headers</td></tr>
  <tr><td>🧩</td><td><strong>JSON</strong></td><td>Feed results into automation, dashboards, or other tools</td></tr>
  <tr><td>📝</td><td><strong>Markdown</strong></td><td>Paste into wikis, GitHub, or Markdown-aware tools</td></tr>
  <tr><td>📃</td><td><strong>AsciiDoc</strong></td><td>Use in Asciidoctor/Antora documentation pipelines</td></tr>
  <tr><td>🛡️</td><td><strong>STIG CKL</strong></td><td>Submit for DoD compliance (STIG Viewer 2.x) — STIG frameworks only</td></tr>
  <tr><td>🛡️</td><td><strong>STIG CKLB</strong></td><td>Submit for DoD compliance (STIG Viewer 3.x) — STIG frameworks only</td></tr>
  </tbody>
</table>

## Live Preview

When your audit finishes, click **Export Preview** in the footer bar to open the live export preview. The preview renders your report exactly as it will export, and updates in real time as you change options — what you see is what you get.

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/audit-export-preview-light.webp" alt="MACE Audit Export Preview" className="img-light" />
  <img src="/img/screenshots/audit-export-preview-dark.webp" alt="MACE Audit Export Preview" className="img-dark" />
</div>

<div className="output-types-grid">
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">🔄</span>
      <h3>Switch Formats Live</h3>
    </div>
    <p>Toggle between <strong>HTML</strong>, <strong>PDF</strong>, <strong>Markdown</strong>, <strong>AsciiDoc</strong>, <strong>XLSX</strong>, <strong>CSV</strong>, and <strong>JSON</strong> with the format tabs at the top — the preview re-renders instantly for each.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">🌓</span>
      <h3>Theme &amp; Zoom</h3>
    </div>
    <p>Preview in light, auto, or dark mode and adjust the zoom level to check exactly how the report will look before exporting.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">⚙️</span>
      <h3>Configure Everything</h3>
    </div>
    <p>The sidebar groups all options into <strong>Branding</strong>, <strong>Audit Info</strong>, <strong>Device Info</strong>, <strong>Structure</strong>, <strong>Rule Content</strong>, <strong>Check Output</strong>, <strong>Listing &amp; Status</strong>, and <strong>Format Options</strong>. Toggle content on or off and watch the preview update live. <strong>Remember for Quick Export</strong> at the top saves the set for one-click exports, and <strong>Reset to Defaults</strong> puts everything back.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">⚡</span>
      <h3>Remember for Quick Export</h3>
    </div>
    <p>Enable <strong>Remember for Quick Export</strong> to save your current settings — a <strong>Quick Export</strong> menu then appears in the footer bar with every format plus <strong>Export All Formats</strong>, no preview needed.</p>
  </div>
</div>

### How to Export

The flow is the same for every report format:

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Complete your audit</strong>
      <span>Run the audit and review the results</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Click Export Preview</strong>
      <span>In the results toolbar</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Select a format tab</strong>
      <span>HTML, PDF, Markdown, AsciiDoc, XLSX, CSV, or JSON</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Configure export options</strong>
      <span>Use the sidebar and watch the preview update live</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">5</span>
    <div className="build-step__content">
      <strong>Click Export</strong>
      <span>Choose a save location and you're done</span>
    </div>
  </div>
</div>

:::note[STIG CKL & CKLB]
The live preview covers all the report formats above. To produce a **STIG CKL** or **CKLB** checklist, use the **STIG Checklist** button in the footer bar instead — these formats map your results onto a DISA checklist rather than a formatted report. See [STIG Checklist Export](#stig-checklist-export-ckl--cklb) below.
:::

## Export Options

The export preview sidebar holds everything you can configure — toggle options on or off and the preview updates live. The exact set of options evolves with each release, but they fall into these groups:

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🎨</span>
      <strong>Branding</strong>
    </div>
    <p>Document Title and Subtitle with editable text, Date in Subtitle with a Date Source (audit run or today) and Date Format, Author Info, the Logo (None, MACE, or Custom), and MACE Branding. Useful for white-labeled or sanitized reports.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🧾</span>
      <strong>Audit Info</strong>
    </div>
    <p>Result Totals, Run Details, the Pass Rate with a Chart Style (Donut, Pie, Bar, or Gauge), Platform, Baseline Version, Framework, Format, and the Start Time, End Time, and Duration, which are off by default.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">💻</span>
      <strong>Device Info</strong>
    </div>
    <p>Identify the audited Mac. On by default with Serial Number, Model, and OS Version; Hostname, IP Address, and MAC Address are off until you enable them.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🗂️</span>
      <strong>Structure</strong>
    </div>
    <p>Table of Contents, Detailed ToC, Section Summary, Executive Summary, and Alphabetical Order. In PDF the ToC gets bookmarks and page numbers.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">📝</span>
      <strong>Rule Content</strong>
    </div>
    <p>Which identifier leads each row (Title or Rule ID), plus Check Commands, Fix Commands, Config Profiles, DDM Info, CIS ID, STIG ID, Section, and Rule Tags.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">💻</span>
      <strong>Check Output</strong>
    </div>
    <p>Outputs, Expected Result, Actual Result, and Execution Time.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🚦</span>
      <strong>Listing &amp; Status</strong>
    </div>
    <p>Which statuses to list (Passed, Failed, Exempt, Manual Review, Exclude Manual Rules, Discussions), the Review and Comments switches, Show Override Indicator, Show Modified Indicator, and the <strong>Exemptions</strong> controls: a Source picker (<strong>Compliance</strong> counts only exemptions marked in the project, <strong>As Scanned</strong> counts everything the scan honored), Exclude Exempt Rules, Show Exempt Indicator, Exemption Reasons, and Exempt in Own Section.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🎛️</span>
      <strong>Format Options</strong>
    </div>
    <p>PDF: Page Footer, Signature, and a Light, Dark, or Both color scheme. HTML: Auto, Light, or Dark. XLSX: References columns.</p>
  </div>
</div>

<div className="explanation-box">
  <h4>Some Options Are Contextual</h4>
  <p>Some options only make sense for certain formats: Format Options are split by PDF, HTML, and XLSX, and PDF is always paginated. The CIS ID and STIG ID switches are always offered but only have something to show on those frameworks. The exemption controls read "Exemptions (None)" when the audit has no exempt results.</p>
</div>

## PDF Export

The PDF export creates a professional compliance report suitable for auditors and official documentation.

<table className="icon-table">
  <tbody>
  <tr><td>🎨</td><td><strong>Header</strong></td><td>Logo, report title, author, organization, date</td></tr>
  <tr><td>📊</td><td><strong>Summary Statistics</strong></td><td>Total rules, pass/fail counts, pass rate percentage</td></tr>
  <tr><td>🍩</td><td><strong>Pass Rate Chart</strong></td><td>Donut by default, or Pie, Bar, or Gauge</td></tr>
  <tr><td>💻</td><td><strong>Device Information</strong></td><td>Serial number, model, OS version <em>(on by default)</em></td></tr>
  <tr><td>📋</td><td><strong>Executive Summary</strong></td><td>High-level findings overview <em>(optional)</em></td></tr>
  <tr><td>📈</td><td><strong>Section Summary</strong></td><td>Pass rates by category <em>(optional)</em></td></tr>
  <tr><td>🗂️</td><td><strong>Results Table</strong></td><td>All rules with status, expected/actual values, comments</td></tr>
  <tr><td>✍️</td><td><strong>Signature Section</strong></td><td>Sign-off lines for auditors <em>(optional)</em></td></tr>
  <tr><td>🦶</td><td><strong>Footer</strong></td><td>Generation timestamp and page numbers. Bookmarks give a clickable outline in Preview</td></tr>
  <tr><td>🌗</td><td><strong>Color Scheme</strong></td><td>Light, Dark, or Both, which writes <code>_Light.pdf</code> and <code>_Dark.pdf</code></td></tr>
  </tbody>
</table>

## HTML Export

The HTML export creates an interactive web report that can be opened in any browser.

<table className="icon-table">
  <tbody>
  <tr><td>📱</td><td><strong>Responsive Design</strong></td><td>Works on desktop, tablet, and mobile</td></tr>
  <tr><td>🌓</td><td><strong>Dark Mode Support</strong></td><td>Auto follows the reader's system setting; Light or Dark can be forced</td></tr>
  <tr><td>🔍</td><td><strong>Sticky Search</strong></td><td>Filter rules by ID, title, or section with a live "X of Y rules" count</td></tr>
  <tr><td>📑</td><td><strong>Table of Contents</strong></td><td>Collapsible sections and a back-to-top button</td></tr>
  <tr><td>🔽</td><td><strong>Expandable Details</strong></td><td>Click rows to see more information</td></tr>
  <tr><td>🚦</td><td><strong>Status Color Coding</strong></td><td>Visual pass/fail indicators</td></tr>
  <tr><td>🧭</td><td><strong>Section Navigation</strong></td><td>Jump to specific sections</td></tr>
  <tr><td>🍩</td><td><strong>Pass Rate Chart</strong></td><td>SVG donut, pie, bar, or gauge</td></tr>
  </tbody>
</table>

<div className="explanation-box">
  <h4>Viewing the Report</h4>
  <p>Open the exported <code>.html</code> file in any web browser (Safari, Chrome, Firefox, etc.). The report is self-contained with all styles embedded — no internet connection needed.</p>
</div>

## CSV Export

The CSV export creates a spreadsheet-compatible file for data analysis:

<table className="icon-table">
  <tbody>
  <tr><td>📊</td><td><strong>Summary Info</strong></td><td>Pass/fail counts at the top of the file</td></tr>
  <tr><td>🏷️</td><td><strong>Column Headers</strong></td><td>Based on your export options</td></tr>
  <tr><td>🗂️</td><td><strong>One Row Per Rule</strong></td><td>All the details for every checked rule</td></tr>
  </tbody>
</table>

<div className="explanation-box">
  <h4>Using the CSV</h4>
  <p>Import into <strong>Excel</strong> (File → Open), <strong>Google Sheets</strong> (File → Import), or <strong>Numbers</strong> (File → Open) to create custom pivot tables, apply your own filtering and sorting, generate charts, or combine audit data with other sources.</p>
</div>

## XLSX Export

The XLSX export creates a formatted Excel spreadsheet ready to open in Microsoft Excel or Numbers:

<table className="icon-table">
  <tbody>
  <tr><td>🎨</td><td><strong>Formatted Table</strong></td><td>Styled header row, ready to read on open</td></tr>
  <tr><td>🔽</td><td><strong>Auto-Filters</strong></td><td>Every column can be sorted and filtered instantly</td></tr>
  <tr><td>🧊</td><td><strong>Frozen Panes</strong></td><td>The header row and the first two columns stay visible as you scroll</td></tr>
  <tr><td>🗂️</td><td><strong>One Row Per Rule</strong></td><td>Status, rule ID, title, section, expected/actual output, comments, Exempt and Exemption Reason, and framework References columns</td></tr>
  <tr><td>📑</td><td><strong>Multiple Sheets</strong></td><td>Audit Results and Summary, plus Exempt Rules and Flagged for Review sheets when those options are on</td></tr>
  <tr><td>🚦</td><td><strong>Status Color Coding</strong></td><td>Visually distinguishes pass, fail, and other statuses</td></tr>
  </tbody>
</table>

<div className="explanation-box">
  <h4>XLSX vs CSV</h4>
  <p>XLSX is more structured than CSV — filters, column widths, and formatting are already set up when you open it. Choose CSV when you want raw data for pipelines; choose XLSX when a person will read it.</p>
</div>

## JSON Export

The JSON export creates a structured data file containing your audit results and summary statistics — ideal for automation, custom dashboards, or feeding results into other tools:

<table className="icon-table">
  <tbody>
  <tr><td>📊</td><td><strong>Summary</strong></td><td><code>totalRules</code>, <code>passed</code>, <code>failed</code>, <code>notApplicable</code>, <code>exempt</code>, <code>notReviewed</code>, and <code>passRate</code></td></tr>
  <tr><td>🧾</td><td><strong>Audit Metadata</strong></td><td>Platform, baseline version, framework, device info</td></tr>
  <tr><td>🗂️</td><td><strong>One Entry Per Rule</strong></td><td>Status, expected/actual output, comments, and <code>exempt</code> with <code>exemptReason</code></td></tr>
  </tbody>
</table>

<div className="explanation-box">
  <h4>Using the JSON</h4>
  <p>Parse the file in any language or pipeline to build dashboards, track compliance trends over time, or integrate results with ticketing and SIEM tools.</p>
</div>

## Markdown & AsciiDoc Export

Both create plain-text reports for documentation workflows:

<table className="icon-table">
  <tbody>
  <tr><td>📝</td><td><strong>Markdown</strong></td><td>Renders anywhere Markdown does — wikis, GitHub, ticketing systems, and note apps</td></tr>
  <tr><td>📃</td><td><strong>AsciiDoc</strong></td><td>Slots into Asciidoctor and Antora documentation pipelines</td></tr>
  <tr><td>🗂️</td><td><strong>Same Content</strong></td><td>Summary statistics and the full results table, following your export options</td></tr>
  </tbody>
</table>

<div className="explanation-box">
  <h4>Why Plain Text?</h4>
  <p>Text-based reports diff cleanly in version control — commit one per audit and your compliance history becomes reviewable over time.</p>
</div>

## STIG Checklist Export (CKL & CKLB)

For DoD security assessments, MACE can export your results as a DISA STIG checklist in two formats. Both are produced from the **STIG Checklist** button in the footer bar (rather than the live Export Preview):

<div className="option-grid">
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🛡️</span>
      <strong>CKL</strong>
      <span className="option-card__badge">STIG Viewer 2.x</span>
    </div>
    <p>The XML checklist format. Fill in an existing CKL, or generate a new one from a DISA STIG ZIP or XCCDF XML.</p>
  </div>
  <div className="option-card">
    <div className="option-card__header">
      <span className="option-card__icon">🛡️</span>
      <strong>CKLB</strong>
      <span className="option-card__badge">STIG Viewer 3.x</span>
    </div>
    <p>The modern JSON checklist format. Fill in an existing CKLB, or generate a new one from a DISA STIG ZIP or XCCDF XML with authoritative DISA metadata.</p>
  </div>
</div>

Both formats are the standard for DISA STIG checklists and contain device identification, vulnerability assessments, finding details and status, and comments.

### How Checklist Export Works

An external DISA source file is always required. The **STIG Checklist Export** sheet offers two cards: **Fill-in Existing Checklist** (Select CKL File or Select CKLB File) and **Generate from DISA STIG Source** (Generate CKL or Generate CKLB from a STIG ZIP or XCCDF XML). Either way, MACE merges your results in:

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>You provide a template</strong>
      <span>A CKL or CKLB file from DISA or your organization</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>MACE matches STIG IDs</strong>
      <span>Between your audit results and the template</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Results are merged</strong>
      <span>Statuses, findings, and comments flow into the template</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>The updated checklist is saved</strong>
      <span>Ready to open in STIG Viewer with your findings</span>
    </div>
  </div>
</div>

### Status Mapping

MACE audit statuses map to checklist statuses:

<table className="icon-table">
  <tbody>
  <tr><td><span className="status-card--pass status-card__pill"><span className="status-card__dot"></span>Pass</span></td><td><code>NotAFinding</code> / <code>not_a_finding</code></td><td>The control is in place</td></tr>
  <tr><td><span className="status-card--fail status-card__pill"><span className="status-card__dot"></span>Fail</span></td><td><code>Open</code> / <code>open</code></td><td>The control is not in place — an open finding</td></tr>
  <tr><td><span className="status-card--na status-card__pill"><span className="status-card__dot"></span>N/A</span></td><td><code>Not_Applicable</code> / <code>not_applicable</code></td><td>The control doesn't apply to this system</td></tr>
  <tr><td><span className="status-card--error status-card__pill"><span className="status-card__dot"></span>Error</span></td><td><code>Not_Reviewed</code> / <code>not_reviewed</code></td><td>The check couldn't run — needs review</td></tr>
  <tr><td><span className="status-card--manual status-card__pill"><span className="status-card__dot"></span>Manual Review</span></td><td><code>Not_Reviewed</code> / <code>not_reviewed</code></td><td>Human verification still required</td></tr>
  <tr><td><span className="status-card--pending status-card__pill"><span className="status-card__dot"></span>Pending</span></td><td><code>Not_Reviewed</code> / <code>not_reviewed</code></td><td>The rule wasn't checked</td></tr>
  </tbody>
</table>

(CKL uses the capitalized XML statuses; CKLB uses the lowercase JSON statuses.)

### How to Export a Checklist

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Complete your audit</strong>
      <span>Must use a STIG baseline</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Click STIG Checklist</strong>
      <span>In the results toolbar</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Choose CKL or CKLB</strong>
      <span>Match your STIG Viewer version</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Pick a source</strong>
      <span>Fill in an existing checklist file, or generate from a DISA STIG ZIP or XCCDF XML. The sheet links to MACE STIG Hub if you need a STIG Viewer on macOS</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">5</span>
    <div className="build-step__content">
      <strong>Choose where to save</strong>
      <span>The checklist exports with your findings merged in</span>
    </div>
  </div>
</div>

### What Gets Updated

For each matching STIG ID:

<table className="icon-table">
  <tbody>
  <tr><td>🚦</td><td><strong>STATUS</strong></td><td>Updated to match your audit result</td></tr>
  <tr><td>🔍</td><td><strong>FINDING_DETAILS</strong></td><td>"Command Input" and "Command Output", plus a note when the rule was modified and that option is on</td></tr>
  <tr><td>💬</td><td><strong>COMMENTS</strong></td><td>Your comment, plus "Exemption: reason" for exempt rules</td></tr>
  <tr><td>🖥️</td><td><strong>HOST_NAME</strong></td><td>Set from device information when a hostname is available</td></tr>
  </tbody>
</table>

<div className="explanation-box explanation-box--warning">
  <h4>Requirements</h4>
  <p>The audit must use a <strong>STIG baseline</strong>, and STIG IDs must match between your audit and the template. A DISA source file is always required: an existing CKL or CKLB to fill in, or a STIG ZIP or XCCDF XML to generate from. Nothing is generated from scratch.</p>
</div>

## Custom Logo

To use your organization's logo in reports, open the **Branding** section of the export preview:

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Find the Logo row</strong>
      <span>In the Branding section of the export preview sidebar</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Click Upload Logo</strong>
      <span>Choose a PNG, JPEG, or GIF. The Logo picker switches to Custom on its own</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Preview and export</strong>
      <span>The logo appears in the preview immediately and is used in the export</span>
    </div>
  </div>
</div>

<div className="explanation-box">
  <h4>Your Logo Travels With the Project</h4>
  <p>MACE saves your uploaded logo as <code>logo.png</code> in the project folder, so it's reused across exports. If a <code>logo.png</code> already exists in the project folder, MACE detects it automatically and offers it as the Custom logo. Use the trash button next to Upload Logo to delete it from the project folder (Logo falls back to MACE).</p>
</div>

**Logo recommendations:**

<table className="icon-table">
  <tbody>
  <tr><td>🖼️</td><td><strong>Format</strong></td><td>PNG with transparency</td></tr>
  <tr><td>📏</td><td><strong>Size</strong></td><td>200–400 pixels wide</td></tr>
  <tr><td>↔️</td><td><strong>Aspect Ratio</strong></td><td>Horizontal works best</td></tr>
  </tbody>
</table>

## Best Practices

<div className="best-practices">
  <div className="practice-item">
    <span className="practice-item__icon">📋</span>
    <div className="practice-item__content">
      <strong>Export before remediation</strong>
      <p>Create a "before" snapshot of your compliance state. This documents your starting point for comparison after fixes.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">✏️</span>
    <div className="practice-item__content">
      <strong>Include overrides for auditors</strong>
      <p>When sharing with auditors, turn on "Show Override Indicator" under Listing &amp; Status so they can see which results were manually changed. It's off by default.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">📊</span>
    <div className="practice-item__content">
      <strong>Use section summary for management</strong>
      <p>Keep "Section Summary" on (the default) when creating reports for management. It highlights problem areas at a glance. Add the Executive Summary for a one-page view.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">💾</span>
    <div className="practice-item__content">
      <strong>Keep CSV for analysis</strong>
      <p>Export to CSV if you need to do custom analysis, create charts, or combine audit data with other systems.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">🛡️</span>
    <div className="practice-item__content">
      <strong>Use CKL for DoD compliance</strong>
      <p>If you're submitting to a DoD security assessment, the CKL format is required. Keep your template CKL up to date.</p>
    </div>
  </div>
</div>
