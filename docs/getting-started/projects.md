---
sidebar_position: 4
---

# Projects

<div className="project-intro">
  <p className="project-intro__lead">Projects are how MACE organizes your compliance work.</p>
  <p className="project-intro__sub">Each project contains your selected framework, customized rules, mSCP files, and everything MACE needs to build deployment-ready outputs.</p>
</div>

## Creating a Project

<div className="create-step-section">
  <div className="create-step">
    <div className="create-step__number">1</div>
    <div className="create-step__content">
      <strong>Launch MACE</strong>
      <span>Click <strong>New Project</strong> from the welcome screen</span>
    </div>
  </div>
  <div className="themed-image">
    <img src="/img/screenshots/main-menu-light.png" alt="MACE Main Menu" className="img-light" />
    <img src="/img/screenshots/main-menu-dark.png" alt="MACE Main Menu" className="img-dark" />
  </div>
</div>

<div className="create-step-section">
  <div className="create-step">
    <div className="create-step__number">2</div>
    <div className="create-step__content">
      <strong>Select Platform & Framework</strong>
      <span>Choose your platform, macOS version, and compliance framework</span>
    </div>
  </div>
  <div className="themed-image">
    <img src="/img/screenshots/new-project-step2-light.png" alt="New Compliance Project - Choose Platform and Framework" className="img-light" />
    <img src="/img/screenshots/new-project-step2-dark.png" alt="New Compliance Project - Choose Platform and Framework" className="img-dark" />
  </div>
</div>

<div className="create-step-section">
  <div className="create-step">
    <div className="create-step__number">3</div>
    <div className="create-step__content">
      <strong>Name & Save</strong>
      <span>Give it a name and choose where to save</span>
    </div>
  </div>
  <div className="themed-image">
    <img src="/img/screenshots/new-project-step3-light.png" alt="Choose Project Location" className="img-light" />
    <img src="/img/screenshots/new-project-step3-dark.png" alt="Choose Project Location" className="img-dark" />
  </div>
</div>

Once created, your project opens in the **Compliance Hub** where you can start building your baseline.

## What's Inside a Project

When you create a project, MACE sets up a folder structure that keeps everything organized:

<div className="project-structure-visual">
  <div className="project-folder">
    <div className="folder-header">
      <span className="folder-icon-inline">📁</span>
      <span className="folder-name">your-project/</span>
    </div>
    <div className="folder-contents">
      <div className="file-item file-item--mace">
        <span className="file-icon">📄</span>
        <span className="file-name">your-project.mace</span>
        <span className="folder-badge folder-badge--mace">MACE</span>
        <span className="file-desc">Project file — your customizations & settings</span>
      </div>
      <div className="file-item">
        <span className="file-icon">🖼️</span>
        <span className="file-name">Logo.png</span>
        <span className="folder-badge folder-badge--mace">MACE</span>
        <span className="file-desc">Your custom logo for documentation</span>
      </div>
      <div className="folder-item">
        <div className="folder-header folder-header--sub">
          <span className="folder-icon-inline">📁</span>
          <span className="folder-name">build/</span>
          <span className="folder-badge folder-badge--mace">MACE</span>
          <span className="folder-badge folder-badge--mscp">mSCP</span>
        </div>
        <div className="folder-contents folder-contents--nested">
          <div className="file-item">
            <span className="file-icon">📄</span>
            <span className="file-name">scripts, profiles, docs...</span>
            <span className="file-desc">Your build outputs</span>
          </div>
        </div>
      </div>
      <div className="folder-item">
        <div className="folder-header folder-header--sub">
          <span className="folder-icon-inline">📁</span>
          <span className="folder-name">MSCP_Project_Files/</span>
          <span className="folder-badge folder-badge--mscp">mSCP</span>
        </div>
        <div className="folder-contents folder-contents--nested">
          <div className="file-item">
            <span className="file-icon">📁</span>
            <span className="file-name">baselines/</span>
            <span className="file-desc">Framework baselines</span>
          </div>
          <div className="file-item">
            <span className="file-icon">📁</span>
            <span className="file-name">rules/</span>
            <span className="file-desc">Security rule definitions</span>
          </div>
          <div className="file-item">
            <span className="file-icon">📁</span>
            <span className="file-name">...</span>
            <span className="file-desc">Additional mSCP resources</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="project-files-explain">
  <div className="explain-card">
    <div className="explain-card__icon">📄</div>
    <div className="explain-card__content">
      <strong>.mace file</strong>
      <p>Stores your rule customizations, build settings, and project metadata. This is what MACE reads to load your project.</p>
    </div>
  </div>
  <div className="explain-card">
    <div className="explain-card__icon explain-card__icon--mace">📁</div>
    <div className="explain-card__content">
      <strong>build/</strong>
      <p>Where MACE outputs your built files: scripts, configuration profiles, DDM declarations, and documentation.</p>
    </div>
  </div>
  <div className="explain-card">
    <div className="explain-card__icon explain-card__icon--mscp">🐍</div>
    <div className="explain-card__content">
      <strong>MSCP_Project_Files/</strong>
      <p>The original mSCP project structure. Use the command line tools directly if you prefer, or let MACE handle it.</p>
    </div>
  </div>
</div>

## Opening Projects

There are a few ways to open an existing project:

<table className="icon-table">
  <tr><td>📄</td><td>Double-click a <code>.mace</code> file in Finder</td></tr>
  <tr><td>📂</td><td>Click <strong>Open Existing Project</strong> from the main menu</td></tr>
  <tr><td>🕐</td><td>Select from <strong>Recent Projects</strong> on the main menu</td></tr>
</table>

## Project Features

<table className="icon-table">
  <tr><td>💾</td><td><strong>Auto-Save</strong> — Every change is saved automatically. No manual saving required.</td></tr>
  <tr><td>🧠</td><td><strong>Remembers Your Settings</strong> — Pick up right where you left off on almost every screen.</td></tr>
  <tr><td>🔀</td><td><strong>mSCP Compatible</strong> — MACE keeps its files separate, so you can still use mSCP command line tools directly.</td></tr>
  <tr><td>📝</td><td><strong>Project Metadata</strong> — Your project name, description, author, and version are stored in the <code>.mace</code> file and used in documentation and builds.</td></tr>
</table>
