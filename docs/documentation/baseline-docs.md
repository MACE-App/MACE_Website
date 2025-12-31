---
sidebar_position: 2
---

# Baseline Documentation

Generate comprehensive documentation of your compliance baseline. This documents what your baseline contains, not whether a device is compliant.

## Use Cases

<table className="icon-table">
  <tr><td>📋</td><td><strong>Compliance audits</strong> - Provide auditors with complete baseline documentation</td></tr>
  <tr><td>📝</td><td><strong>Change management</strong> - Document baselines for CAB reviews</td></tr>
  <tr><td>📚</td><td><strong>Training</strong> - Use as security awareness materials</td></tr>
  <tr><td>🗂️</td><td><strong>Historical reference</strong> - Archive baseline versions</td></tr>
</table>

## Available Formats

### HTML

Web-viewable documentation featuring:
- Interactive table of contents
- Searchable content
- Responsive design
- Print-friendly styling

### PDF

Professional print-ready documents:
- Cover page with metadata
- Table of contents
- Formatted rule details
- Page numbers and headers

### CSV

Spreadsheet exports for analysis:
- One row per rule
- All rule fields as columns
- Easy filtering and sorting
- Import into other tools

## Document Contents

Each generated document includes:

| Section | Content |
|---------|---------|
| **Overview** | Baseline description, author, version |
| **Summary** | Rule counts by section and status |
| **Rule Details** | Full information for each rule |
| **References** | Citations and external links |

### Per-Rule Information

For each rule, documentation includes:

<table className="icon-table">
  <tr><td>🆔</td><td>Rule ID and title</td></tr>
  <tr><td>💬</td><td>Discussion/rationale</td></tr>
  <tr><td>✅</td><td>Check criteria</td></tr>
  <tr><td>🔧</td><td>Remediation steps</td></tr>
  <tr><td>🔢</td><td>ODV values (if applicable)</td></tr>
  <tr><td>📎</td><td>References and citations</td></tr>
  <tr><td>🏷️</td><td>Tags and metadata</td></tr>
</table>

## Generating Baseline Docs

1. Open your project
2. Click **Build** in the toolbar
3. Select documentation formats:
   - HTML Documentation
   - PDF Documentation
   - CSV Export
4. Configure metadata:
   - Document title
   - Author name
   - Version number
5. Click **Build**

## Configuration Options

### Include/Exclude

| Option | Description |
|--------|-------------|
| **Include Disabled** | Show disabled rules in documentation |
| **Include References** | Add compliance framework citations |
| **Include ODVs** | Show Organization Defined Values |

### Metadata

| Field | Description |
|-------|-------------|
| **Title** | Document title (default: baseline name) |
| **Author** | Your name or organization |
| **Version** | Baseline version number |
| **Description** | Brief baseline description |

## Output Location

Documentation is generated in your build output folder:

```
build_output/
├── documentation/
│   ├── compliance_guide.html
│   ├── compliance_guide.pdf
│   └── rules_export.csv
└── ...
```

## Sharing Documentation

Generated documentation can be:

<table className="icon-table">
  <tr><td>🌐</td><td>Hosted on internal wikis</td></tr>
  <tr><td>📎</td><td>Attached to tickets</td></tr>
  <tr><td>📤</td><td>Shared via file sharing</td></tr>
  <tr><td>🖨️</td><td>Printed for meetings</td></tr>
</table>
