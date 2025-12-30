---
sidebar_position: 2
---

# Compliance Editor

The Compliance Editor is the central workspace in MACE for browsing, searching, and customizing security rules. It provides a powerful three-panel interface designed for efficient compliance management.

{/* TODO: Add screenshot - compliance_editor_overview.png */}
:::tip Screenshot Needed
**Filename:** `compliance_editor_overview.png`
**Description:** Full Compliance Editor interface showing the three-panel layout with sections sidebar, rules list, and rule detail panel.
:::

## Interface Layout

### Left Sidebar - Sections
The sections sidebar organizes rules by category:

- **All Rules** - View every rule regardless of section
- **Authentication** - Login, password, and authentication policies
- **Auditing** - System logging and audit configuration
- **iCloud** - iCloud services and sync settings
- **macOS** - Core operating system settings
- **Password Policy** - Password complexity and requirements
- **System Settings** - System preferences and configurations
- And more...

Each section shows the count of rules it contains.

### Center Panel - Rules List
The searchable, sortable list of all rules matching your current filters:

| Column | Description |
|--------|-------------|
| **Checkbox** | Enable/disable rule in baseline |
| **Rule ID** | Unique identifier (e.g., `os_firewall_log_enable`) |
| **Title** | Human-readable rule name |
| **Section** | Category the rule belongs to |
| **Modified** | Indicator if rule has been customized |

### Right Panel - Rule Detail
Detailed view and editor for the selected rule. See [Rule Editing](./rule-editing) for full details.

## Searching Rules

### Quick Search
Type in the search bar to filter rules by:
- Rule ID
- Title text
- Discussion content
- Keywords

Search is performed in real-time as you type with optimized performance for large rule sets.

### Advanced Filtering

| Filter | Options |
|--------|---------|
| **Section** | Select one or more sections |
| **Framework** | STIG, CIS, NIST 800-53, etc. |
| **Status** | Enabled, Disabled, or All |
| **Modified** | Show only customized rules |
| **Tags** | Filter by metadata tags |

### Show All Mode
Toggle "Show All" to view every available rule regardless of your project's selected compliance framework. Useful for:
- Exploring available rules
- Building custom baselines
- Comparing rules across frameworks
- Finding additional controls to add

## Rule Selection

### Single Selection
Click any rule to select it and view its details in the right panel.

### Bulk Operations
- **Shift+Click** - Select a range of rules
- **Cmd+Click** - Add/remove individual rules from selection
- **Cmd+A** - Select all visible rules

### Keyboard Navigation

| Shortcut | Action |
|----------|--------|
| `↑` / `↓` | Navigate between rules |
| `Space` | Toggle selected rule enabled/disabled |
| `Enter` | Open rule in detail view |
| `Cmd+F` | Focus search field |
| `Escape` | Clear search/selection |

## Sorting Options

Click column headers to sort the rules list:

| Sort By | Description |
|---------|-------------|
| **Rule ID** | Alphabetical by identifier |
| **Title** | Alphabetical by name |
| **Section** | Grouped by category |
| **Modified** | Customized rules first |

Click again to reverse sort order.

## Rule Status Indicators

Visual indicators help you understand rule state at a glance:

| Indicator | Meaning |
|-----------|---------|
| **Checkbox filled** | Rule is enabled in baseline |
| **Checkbox empty** | Rule is disabled/excluded |
| **Blue dot** | Rule has been modified from baseline |
| **Yellow badge** | Rule requires ODV configuration |

## Performance Optimizations

MACE handles large rule sets (500+ rules) efficiently through:

- **Async Loading** - Rules load in the background without blocking UI
- **Smart Caching** - File timestamps tracked to avoid re-parsing unchanged rules
- **Lazy Rendering** - Only visible rules are rendered (virtualized list)
- **Deferred Details** - Rule details load only when selected
- **Cancellable Operations** - Switching rules cancels pending loads

## Compliance Matching

Rules are filtered based on your project's compliance settings:

1. **Platform Match** - Rule must support your selected platform (macOS, iOS, etc.)
2. **Version Match** - Rule must apply to your OS version
3. **Framework Match** - Rule's tags or benchmarks must include your compliance framework

When "Show All" is disabled, only rules matching all three criteria appear.

## Section Organization

Sections are displayed in a logical order optimized for compliance workflows:

1. Authentication
2. Auditing
3. iCloud
4. macOS
5. Password Policy
6. System Settings
7. *(Additional sections as available)*

Custom sections from imported baselines appear alphabetically.
