---
sidebar_position: 2
---

# Installation

<div style={{textAlign: 'center'}}>

<img src="/img/app-icon.png" alt="MACE" style={{width: '100px', height: '100px', marginBottom: '1.5rem'}} />

<p style={{fontSize: '1.3rem', fontWeight: '500', marginBottom: '0.5rem'}}>
  Simple. Native. Ready in seconds.
</p>
<p style={{fontSize: '1rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '2rem'}}>
  No installers, no dependencies, no configuration required.
</p>

</div>

<div className="icon-table-centered">
<table className="icon-table">
  <tr><td>✅</td><td><strong>Free & Open Source</strong></td></tr>
  <tr><td>⚡</td><td><strong>Native macOS App</strong> built in Swift</td></tr>
  <tr><td>📦</td><td><strong>Single download</strong> with no extra dependencies</td></tr>
</table>
</div>

<h3 style={{textAlign: 'center'}}>Requirements</h3>

<div className="icon-table-centered">
<table className="icon-table">
  <tr><td>💻</td><td><strong>macOS 14 (Sonoma)</strong> or later</td></tr>
  <tr><td>🖥️</td><td><strong>Apple Silicon</strong> or <strong>Intel</strong> Mac</td></tr>
  <tr><td>🔐</td><td><strong>Admin access</strong> only needed for audits</td></tr>
</table>
</div>

<p style={{textAlign: 'center', marginTop: '1.5rem'}}>
<a href="https://github.com/MACE-App/MACE/releases" class="button button--primary button--lg">Download MACE</a>
</p>

---

## Quick Start

<table className="icon-table">
  <tr><td>1️⃣</td><td><strong>Download</strong> the latest <code>.dmg</code> from <a href="https://github.com/mace-app/mace/releases">GitHub Releases</a></td></tr>
  <tr><td>2️⃣</td><td><strong>Open</strong> the downloaded <code>.dmg</code> file</td></tr>
  <tr><td>3️⃣</td><td><strong>Drag</strong> MACE into your <strong>Applications</strong> folder</td></tr>
</table>

<div className="install-drag-visual">
  <div className="drag-item">
    <img src="/img/app-icon.png" alt="MACE" className="app-icon" />
    <svg className="cursor-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L10.5 20L12.5 13.5L19 11.5L4 4Z" fill="#ffffff" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
  <div className="drag-arrow">
    <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </div>
  <div className="folder-icon">
    <div className="folder-glow"></div>
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="folderBack" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6BB9F0"/>
          <stop offset="100%" stopColor="#1E90FF"/>
        </linearGradient>
        <linearGradient id="folderFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5DADE2"/>
          <stop offset="100%" stopColor="#2E86DE"/>
        </linearGradient>
        <linearGradient id="folderTab" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#85C1E9"/>
          <stop offset="100%" stopColor="#3498DB"/>
        </linearGradient>
      </defs>
      <path d="M4 16 L4 52 Q4 56 8 56 L56 56 Q60 56 60 52 L60 20 Q60 16 56 16 L30 16 L26 10 Q24 8 22 8 L8 8 Q4 8 4 12 Z" fill="url(#folderBack)"/>
      <path d="M4 24 L4 52 Q4 56 8 56 L56 56 Q60 56 60 52 L60 24 Q60 20 56 20 L8 20 Q4 20 4 24 Z" fill="url(#folderFront)"/>
      <path d="M4 12 Q4 8 8 8 L22 8 Q24 8 26 10 L30 16 L8 16 Q4 16 4 12 Z" fill="url(#folderTab)"/>
    </svg>
    <span>Applications</span>
  </div>
</div>

<table className="icon-table">
  <tr><td>4️⃣</td><td><strong>Launch</strong> MACE from your Applications folder</td></tr>
  <tr><td>5️⃣</td><td><strong>Clean up</strong> by ejecting the disk image and deleting the <code>.dmg</code></td></tr>
</table>

That's it! You're ready to start building your first compliance baseline.

## Automatic Updating

MACE keeps itself up to date so you don't have to.

<table className="icon-table">
  <tr><td>🔄</td><td><strong>Automatic checks</strong> on every launch</td></tr>
  <tr><td>🔔</td><td><strong>Manual check</strong> anytime via <strong>Check for Updates</strong></td></tr>
  <tr><td>📋</td><td><strong>Release notes</strong> show what's new in each update</td></tr>
  <tr><td>⬇️</td><td><strong>One click</strong> to download and install</td></tr>
</table>

<div className="themed-image">
  <img src="/img/screenshots/update-light.png" alt="MACE Update Available" className="img-light" />
  <img src="/img/screenshots/update-dark.png" alt="MACE Update Available" className="img-dark" />
</div>

View the full changelog on the [GitHub Releases](https://github.com/mace-app/mace/releases) page.

:::tip
You may be prompted for admin credentials if the application is not owned by your user account. Older versions may not support automatic updates. Download the latest version from [GitHub Releases](https://github.com/mace-app/mace/releases) to enable this feature.
:::

## Uninstalling

To completely remove MACE from your Mac:

### Remove the App

<table className="icon-table">
  <tr><td>⛔</td><td>Quit MACE if running</td></tr>
  <tr><td>🗑️</td><td>Drag MACE from <strong>Applications</strong> to Trash</td></tr>
</table>

### Remove Project Files

<table className="icon-table">
  <tr><td>📁</td><td>Delete the MACE project folder, or just the <code>.mace</code> file inside it</td></tr>
  <tr><td>💾</td><td>Keep the <code>MSCP_Project_Files</code> folder if you want to preserve your mSCP project</td></tr>
</table>

### Remove App Data

<table className="icon-table">
  <tr><td>📂</td><td>Delete <code>~/Library/Application Support/MACE</code></td></tr>
  <tr><td>🔧</td><td>If you installed the audit helper, delete <code>/Library/LaunchDaemons/com.mace.helper.plist</code></td></tr>
</table>

:::tip Coming Soon
A built-in uninstaller is planned for a future release to make this process even easier.
:::

## Need Help?

<table className="icon-table">
  <tr><td>🐛</td><td>Check <a href="https://github.com/mace-app/mace/issues">GitHub Issues</a> for known issues and feature requests</td></tr>
  <tr><td>💬</td><td>Join the <a href="https://github.com/mace-app/mace/discussions">GitHub Discussions</a> for questions and help</td></tr>
</table>

