---
sidebar_position: 1
slug: /intro
description: MACE is a native macOS app for managing security compliance baselines. Built on mSCP, it provides a visual interface for Mac admins.
---

# Introduction

**M.A.C.E. (macOS Advanced Compliance Editor)** is a native macOS application for managing security compliance baselines. Built in Swift and SwiftUI, it gives you a visual interface to create, customize, audit, and export compliance configurations without touching the command line.

**Built by a Mac admin, for Mac admins.** MACE started from a simple frustration. As a Mac admin using [mSCP (macOS Security Compliance Project)](https://github.com/usnistgov/macos_security) day-to-day, the project was incredible, but the workflow wasn't. Bouncing between terminal windows, editing YAML files by hand, and running Python scripts just to see what changed got old fast.

I wanted something I could actually *see*. A way to browse rules visually, tweak settings without memorizing syntax, and build outputs with a click instead of a command. Something I could hand to a newer Mac admin without a 30-minute crash course on Git and terminal basics.

So I built it.

<div class="themed-image">
  <img src="/img/screenshots/main-menu-light.webp" alt="MACE Main Menu" class="img-light" />
  <img src="/img/screenshots/main-menu-dark.webp" alt="MACE Main Menu" class="img-dark" />
</div>

## Why MACE?

mSCP is the gold standard for Apple security baselines, backed by federal government Mac admins all coming together to build something better. The rules, frameworks, and compliance logic in MACE all come directly from mSCP. The expertise stays with the experts.

But mSCP traditionally requires Python, Ruby, Git, and terminal knowledge. That's a real barrier for admins who just want to secure their fleet without becoming command-line warriors first.

MACE removes that learning curve. It's the visual layer mSCP deserves, bringing more Mac admins to the project by making it accessible to everyone, regardless of their terminal comfort level.

mSCP should focus on what it does best: more rules, more frameworks, more baselines. MACE is here to grow the mSCP community by lowering the barrier to entry.

## What MACE Does

MACE takes mSCP and gives it a GUI. All original mSCP files and folders remain the same in the project you create, letting you work in or outside of MACE at any point.

MACE handles the entire compliance workflow:

<table class="icon-table">
  <tr><td>📁</td><td><strong>Create</strong> projects for <span class="platform-badge">macOS</span> <span class="platform-badge">iOS</span> <span class="platform-badge">iPadOS</span> <span class="platform-badge">visionOS</span></td></tr>
  <tr><td>🔍</td><td><strong>Browse</strong> hundreds of security rules organized by section</td></tr>
  <tr><td>✏️</td><td><strong>Customize</strong> your baseline and rules, or create new rules from scratch</td></tr>
  <tr><td>🔨</td><td><strong>Build</strong> deployment-ready scripts and configuration profiles</td></tr>
  <tr><td>✅</td><td><strong>Audit</strong> devices with real-time compliance checks</td></tr>
  <tr><td>📄</td><td><strong>Export</strong> reports and documentation in multiple formats</td></tr>
</table>

<div class="themed-image themed-image--wide">
  <img src="/img/screenshots/compliance-hub-light.webp" alt="MACE Compliance Builder Hub" class="img-light" />
  <img src="/img/screenshots/compliance-hub-dark.webp" alt="MACE Compliance Builder Hub" class="img-dark" />
</div>

All powered by your choice of two engines:

<table class="icon-table">
  <tr><td>🐍</td><td><strong>mSCP Scripts</strong> - The original Python scripts with their standard outputs</td></tr>
  <tr><td>⚡</td><td><strong>MACE Engine</strong> - Built entirely in Swift for speed, with additional export customization options</td></tr>
</table>

## Ready to Try It?

Runs on **macOS 14 (Sonoma) or later**, Apple Silicon or Intel. Admin access only needed for audits.

<a href="https://github.com/MACE-App/MACE/releases" class="button button--primary button--lg">Download MACE</a>

Free and open source. Create your first project in minutes.

