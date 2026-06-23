---
sidebar_position: 3
description: Export audit reports to PDF, HTML, XLSX, CSV, JSON, or DISA STIG CKL/CKLB format for documentation and auditors.
---

# Exporting Reports

<div className="editor-intro">
  <p className="editor-intro__lead">Export audit results to PDF, HTML, XLSX, CSV, JSON, or DISA STIG CKL/CKLB format.</p>
  <p className="editor-intro__sub">Generate professional reports for auditors, documentation, and compliance tracking.</p>
</div>

## Export Formats

MACE can export audit results in seven formats:

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
      <span className="output-type-card__icon">🛡️</span>
      <h3>STIG CKL</h3>
    </div>
    <p>DISA STIG Checklist format (XML). Required for DoD compliance. Updates existing CKL templates with your audit results.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">🛡️</span>
      <h3>STIG CKLB</h3>
    </div>
    <p>DISA STIG Viewer 3.x checklist format (JSON). The modern replacement for the XML-based CKL. Can update an existing CKLB template or generate one from an XCCDF benchmark.</p>
  </div>
</div>

### Which Format Should I Use?

<table className="icon-table">
  <tr><td>📄</td><td><strong>PDF</strong></td><td>Share with auditors or management</td></tr>
  <tr><td>🌐</td><td><strong>HTML</strong></td><td>Review results in a browser</td></tr>
  <tr><td>📊</td><td><strong>CSV</strong></td><td>Analyze data in Excel or Google Sheets</td></tr>
  <tr><td>📋</td><td><strong>XLSX</strong></td><td>Pre-formatted Excel file with filters and frozen headers</td></tr>
  <tr><td>🧩</td><td><strong>JSON</strong></td><td>Feed results into automation, dashboards, or other tools</td></tr>
  <tr><td>🛡️</td><td><strong>STIG CKL</strong></td><td>Submit for DoD compliance (STIG Viewer 2.x)</td></tr>
  <tr><td>🛡️</td><td><strong>STIG CKLB</strong></td><td>Submit for DoD compliance (STIG Viewer 3.x)</td></tr>
</table>

## Live Preview

When your audit finishes, click **Export Preview** in the results toolbar to open the live export preview. The preview renders your report exactly as it will export, and updates in real time as you change options — what you see is what you get.

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
    <p>Toggle between <strong>HTML</strong>, <strong>PDF</strong>, <strong>XLSX</strong>, <strong>CSV</strong>, and <strong>JSON</strong> with the format tabs at the top — the preview re-renders instantly for each.</p>
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
    <p>The sidebar groups all options into <strong>Branding</strong>, <strong>Audit Info</strong>, <strong>Device Info</strong>, and <strong>Structure</strong>. Toggle content on or off and watch the preview update live.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">⚡</span>
      <h3>Remember for Quick Export</h3>
    </div>
    <p>Enable <strong>Remember for Quick Export</strong> to save your current settings, so future exports use the same configuration without reopening the preview.</p>
  </div>
</div>

When the preview looks right, click **Export** and choose a save location.

:::note STIG CKL & CKLB
The live preview covers HTML, PDF, XLSX, CSV, and JSON. To produce a **STIG CKL** or **CKLB** checklist, use the **STIG Checklist** button in the results toolbar instead — these formats map your results onto a DISA checklist rather than a formatted report.
:::

## Export Options

Before exporting, you can configure what to include in your report:

### Author and Metadata

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">👤</span>
      <strong>Include Author Data (Default: ON)</strong>
    </div>
    <p>Adds your name, organization, and benchmark name to the report header. Helps identify who performed the audit.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🏢</span>
      <strong>Author Name & Organization</strong>
    </div>
    <p>Your name and organization appear in the report header. Set these in the export options.</p>
  </div>
</div>

### Device Information

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">💻</span>
      <strong>Include Device Info (Default: OFF)</strong>
    </div>
    <p>Adds the audited Mac's serial number, model name, and macOS version to the report. Identifies which specific device was checked.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🖥️</span>
      <strong>Include Hostname (Default: OFF)</strong>
    </div>
    <p>Adds the computer's hostname to the device information section.</p>
  </div>
</div>

### Logo and Branding

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🖼️</span>
      <strong>Logo Source</strong>
    </div>
    <p>Choose the logo shown in the report header:<br/>
    <strong>M.A.C.E.</strong> — the built-in M.A.C.E. logo (default).<br/>
    <strong>Custom</strong> — your own image, added with the <strong>Upload Logo</strong> button.<br/>
    <strong>None</strong> — no logo.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🏷️</span>
      <strong>Hide M.A.C.E. Branding (Default: OFF)</strong>
    </div>
    <p>Removes "Generated by M.A.C.E." attribution from the report. Use this for sanitized or white-labeled reports.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🦶</span>
      <strong>Hide Footer (Default: OFF)</strong>
    </div>
    <p>Removes the entire footer section from the report, including generation timestamp and any branding.</p>
  </div>
</div>

### Content Options

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Hide Outputs (Default: OFF)</strong>
    </div>
    <p>Hides the Expected Output and Actual Output columns. Simplifies the report if these details aren't needed.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📝</span>
      <strong>Hide Discussions (Default: OFF)</strong>
    </div>
    <p>Hides the Discussion/Notes column. Reduces report length if rule explanations aren't needed.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">⏱️</span>
      <strong>Hide Execution Time (Default: OFF)</strong>
    </div>
    <p>Hides the time taken for each check. Simplifies the output if timing isn't relevant.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📜</span>
      <strong>Include Check Script (Default: OFF)</strong>
    </div>
    <p>Shows the command that was run for each rule. Useful for technical reviewers who want to see exactly what was tested.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔧</span>
      <strong>Include Fix Script (Default: OFF)</strong>
    </div>
    <p>Shows the remediation command for each rule. Helps teams understand how to fix failing items.</p>
  </div>
</div>

### Analysis Options

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📊</span>
      <strong>Include Section Summary (Default: OFF)</strong>
    </div>
    <p>Adds a breakdown of pass/fail rates by section. Highlights problem areas with lowest pass rates first.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">✏️</span>
      <strong>Include Override Indicators (Default: OFF)</strong>
    </div>
    <p>Adds a column showing which results were manually modified. Important for audit trails where changes must be documented.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Include Executive Summary (Default: OFF, PDF only)</strong>
    </div>
    <p>Adds a high-level overview at the beginning of the report. Summarizes key findings and critical areas for management review.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🚩</span>
      <strong>Include Flagged for Review (Default: OFF)</strong>
    </div>
    <p>Includes results you've flagged for follow-up, along with any review comments you added. Useful for tracking items that need further investigation or stakeholder sign-off before final reporting.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">✍️</span>
      <strong>Include Signature Section (Default: OFF)</strong>
    </div>
    <p>Adds signature lines at the end of the report for auditor sign-off. Includes fields for Signature, Date, Printed Name, and Title/Role.</p>
  </div>
</div>

### Format-Specific Options

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🖨️</span>
      <strong>Paginate for Printing (Default: OFF, PDF only)</strong>
    </div>
    <p>Formats the PDF for US Letter paper with page breaks. When off, creates a continuous single-page document (better for digital viewing).</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔢</span>
      <strong>Show STIG ID (STIG compliance only)</strong>
    </div>
    <p>Displays STIG IDs (like APPL-15-005001) instead of Rule IDs in the table. Standard for STIG documentation.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📑</span>
      <strong>Include CIS ID (CIS compliance only)</strong>
    </div>
    <p>Adds a column showing CIS Benchmark reference numbers (like 2.6.6).</p>
  </div>
</div>

## PDF Export

The PDF export creates a professional compliance report suitable for auditors and official documentation.

### What's Included

- **Header**: Logo, report title, author, organization, date
- **Summary Statistics**: Total rules, pass/fail counts, pass rate percentage
- **Pie Chart**: Visual breakdown of results by status
- **Device Information** (optional): Serial number, model, OS version
- **Executive Summary** (optional): High-level findings overview
- **Section Summary** (optional): Pass rates by category
- **Results Table**: All rules with status, expected/actual values, comments
- **Signature Section** (optional): Sign-off lines for auditors
- **Footer**: Generation timestamp, page numbers (if paginated)

### How to Export PDF

1. Complete your audit
2. Click **Export Preview** in the results toolbar
3. Select the **PDF** tab
4. Configure export options in the sidebar
5. Click **Export** and choose a save location

## HTML Export

The HTML export creates an interactive web report that can be opened in any browser.

### Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Mode Support**: Automatically adapts to system preferences
- **Expandable Details**: Click rows to see more information
- **Status Color Coding**: Visual pass/fail indicators
- **Section Navigation**: Jump to specific sections
- **Pie Chart**: SVG visualization of results

### How to Export HTML

1. Complete your audit
2. Click **Export Preview** in the results toolbar
3. Select the **HTML** tab
4. Configure export options in the sidebar
5. Click **Export** and choose a save location

### Viewing the Report

Open the exported `.html` file in any web browser (Safari, Chrome, Firefox, etc.). The report is self-contained with all styles embedded.

## CSV Export

The CSV export creates a spreadsheet-compatible file for data analysis.

### What's in the File

- **Summary info** at the top with pass/fail counts
- **Column headers** based on your export options
- **One row per rule** with all the details

### How to Export CSV

1. Complete your audit
2. Click **Export Preview** in the results toolbar
3. Select the **CSV** tab
4. Configure export options in the sidebar
5. Click **Export** and choose a save location

### Using the CSV

Import into:
- **Microsoft Excel**: File → Open → Select the CSV
- **Google Sheets**: File → Import → Upload the CSV
- **Numbers**: File → Open → Select the CSV

The CSV format allows you to:
- Create custom pivot tables
- Apply your own filtering and sorting
- Generate charts and graphs
- Combine with other data sources

## XLSX Export

The XLSX export creates a formatted Excel spreadsheet ready to open in Microsoft Excel or Numbers.

### What's in the File

- **Formatted table** with styled header row
- **Auto-filters** on every column for quick sorting and filtering
- **Frozen header row** so column names stay visible as you scroll
- **One row per rule** with status, rule ID, title, section, expected/actual output, and comments
- **Status color coding** to visually distinguish pass, fail, and other statuses

### How to Export XLSX

1. Complete your audit
2. Click **Export Preview** in the results toolbar
3. Select the **XLSX** tab
4. Configure export options in the sidebar
5. Click **Export** and choose a save location

### Opening the File

Open the exported `.xlsx` file in:
- **Microsoft Excel**: Double-click or use File → Open
- **Numbers**: File → Open → Select the file
- **Google Sheets**: File → Import → Upload the file

XLSX is more structured than CSV — filters, column widths, and formatting are already set up when you open it.

## JSON Export

The JSON export creates a structured data file containing your audit results and summary statistics — ideal for automation, custom dashboards, or feeding results into other tools.

### What's in the File

- **Summary** with total rules, pass/fail/manual counts, and pass rate
- **Audit metadata** (platform, baseline version, framework, device info)
- **One entry per rule** with status, expected/actual output, and comments

### How to Export JSON

1. Complete your audit
2. Click **Export Preview** in the results toolbar
3. Select the **JSON** tab
4. Configure export options in the sidebar
5. Click **Export** and choose a save location

### Using the JSON

Parse the file in any language or pipeline to build dashboards, track compliance trends over time, or integrate results with ticketing and SIEM tools.

## STIG Checklist Export (CKL & CKLB)

For DoD security assessments, MACE can export your results as a DISA STIG checklist in two formats:

- **CKL** — the XML format used by STIG Viewer 2.x
- **CKLB** — the JSON format used by STIG Viewer 3.x (the modern replacement for CKL)

Both are produced from the **STIG Checklist** button in the results toolbar (rather than the live Export Preview).

### What's in a Checklist?

Both formats are the standard for DISA STIG checklists and contain:
- Device identification
- Vulnerability assessments
- Finding details and status
- Comments and notes

### How Checklist Export Works

For **CKL** and for updating an existing **CKLB**, MACE merges your results into a template:

1. **You provide a template** (CKL or CKLB, from DISA or your organization)
2. **MACE matches STIG IDs** between your audit and the template
3. **Results are merged** into the template
4. **The updated checklist is saved** with your findings

For **CKLB**, MACE can also generate a checklist from scratch — including directly from an XCCDF benchmark, which supplies authoritative DISA metadata.

### Status Mapping

MACE audit statuses map to checklist statuses:

<table className="icon-table">
  <tr><td>✅</td><td><strong>Pass</strong></td><td>NotAFinding / not_a_finding</td></tr>
  <tr><td>❌</td><td><strong>Fail</strong></td><td>Open / open</td></tr>
  <tr><td>➖</td><td><strong>N/A</strong></td><td>Not_Applicable / not_applicable</td></tr>
  <tr><td>⚠️</td><td><strong>Error</strong></td><td>Not_Reviewed / not_reviewed</td></tr>
  <tr><td>👁️</td><td><strong>Manual Review</strong></td><td>Not_Reviewed / not_reviewed</td></tr>
  <tr><td>⏳</td><td><strong>Pending</strong></td><td>Not_Reviewed / not_reviewed</td></tr>
</table>

(CKL uses the capitalized XML statuses; CKLB uses the lowercase JSON statuses.)

### How to Export a Checklist

1. Complete your audit (must use a STIG baseline)
2. Click **STIG Checklist** in the results toolbar
3. Choose **CKL** or **CKLB**
4. Select a template file (or, for CKLB, generate from scratch / an XCCDF benchmark)
5. Choose where to save the checklist and export

### What Gets Updated

For each matching STIG ID:
- **STATUS**: Updated to match audit result
- **FINDING_DETAILS**: Populated with check command and output
- **COMMENTS**: Filled with user comments or rule discussion
- **HOST_NAME**: Set from device information

### Requirements

- Audit must use a STIG baseline
- STIG IDs must match between your audit and the template
- A template file is required for CKL and for updating an existing CKLB (CKLB can also be generated from scratch or from an XCCDF benchmark)

## Custom Logo

To use your organization's logo in reports, open the **Branding** section of the export preview:

1. Set **Logo Source** to **Custom**
2. Click **Upload Logo** and choose your image
3. The logo appears in the preview immediately and is used in the export

MACE saves your uploaded logo as `logo.png` in the project folder, so it's reused across exports. If a `logo.png` already exists in the project folder, MACE detects it automatically and offers it as the Custom logo. Use the trash button next to Upload Logo to remove a custom logo (Logo Source falls back to M.A.C.E.).

**Logo recommendations:**
- Format: PNG with transparency
- Size: 200-400 pixels wide
- Aspect ratio: Horizontal works best

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
      <p>When sharing with auditors, enable "Include Override Indicators" so they can see which results were manually changed.</p>
    </div>
  </div>
  <div className="practice-item">
    <span className="practice-item__icon">📊</span>
    <div className="practice-item__content">
      <strong>Use section summary for management</strong>
      <p>Enable "Section Summary" when creating reports for management. It highlights problem areas at a glance.</p>
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
