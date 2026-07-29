---
sidebar_position: 1
title: "Beta Testers"
description: Join the MACE beta channel to test cutting-edge features before they reach stable. Your feedback shapes what ships.
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Beta Testers</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__figure">
      <img
        src="/img/mascots/beta-lab.webp"
        alt="MACE mascot in a lab coat and safety goggles holding a bubbling flask"
        className="doc-hero__mascot"
        width="440"
        height="440"
      />
    </div>
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Be on the cutting edge of MACE.</p>
      <p className="doc-hero__sub">Test new features before they roll out to everyone, and help shape them with your feedback.</p>
    </div>
  </div>
</div>

## What Is the Beta Channel?

The beta channel gives you early access to the newest MACE features while they're still being tested. When issues are reported or features are requested, fixes and new capabilities are deployed to the beta app **first**, before the stable release. That means everything you get in beta has a real purpose: it's being validated by real users on real systems before it goes out to the masses.

Running beta is how you stay on the cutting edge, and how you directly influence what ships in the next stable release.

### How Version Numbers Work

Beta always carries the **upcoming** release. When the stable channel is on 1.0, the beta channel is already testing what comes next, like 1.1 or 1.0.1. Each part of the version number tells you the size of the release:

<table className="icon-table">
  <tr><td>🏛️</td><td><strong>First number</strong> (1.x.x): landmark releases, reserved for complete overhauls of the app</td></tr>
  <tr><td>🚀</td><td><strong>Second number</strong> (x.1.x): major releases with new features and capabilities</td></tr>
  <tr><td>🔧</td><td><strong>Third number</strong> (x.x.1): minor releases with fixes and small improvements</td></tr>
</table>

So a beta build labeled 1.1.0-beta.7 is the seventh beta of the upcoming 1.1 major release, on its way to becoming the next stable.

## Why Your Feedback Matters

Beta is where MACE needs the biggest community support. Quality requires testing, and the more people exercising new features and reporting what they find, the better every stable release becomes.

<div className="community-grid community-grid--three">
  <a href="https://github.com/mace-app/mace/issues" className="community-card community-card--link">
    <img src="/img/mascots/bug-hunter.webp" alt="" className="community-card__mascot" width="440" height="440" loading="lazy" />
    <div className="community-card__title">Found a Bug?</div>
    <p className="community-card__desc">Report it on GitHub Issues so it gets fixed before stable ships.</p>
  </a>
  <a href="https://github.com/mace-app/mace/issues" className="community-card community-card--link">
    <img src="/img/mascots/idea-spark.webp" alt="" className="community-card__mascot" width="440" height="440" loading="lazy" />
    <div className="community-card__title">Have an Idea?</div>
    <p className="community-card__desc">Request features on GitHub Issues. Popular requests get prioritized.</p>
  </a>
  <a href="https://github.com/mace-app/mace/discussions" className="community-card community-card--link">
    <img src="/img/mascots/discussion-bubble.webp" alt="" className="community-card__mascot" width="440" height="440" loading="lazy" />
    <div className="community-card__title">Questions or Feedback?</div>
    <p className="community-card__desc">Join the conversation in GitHub Discussions and connect with other testers.</p>
  </a>
</div>

## Joining the Beta

There are two ways to get on the beta channel:

### Option 1: Switch Channels in the App (Recommended)

<table className="icon-table">
  <tr><td>⚙️</td><td>Open <strong>MACE Settings → Updates</strong></td></tr>
  <tr><td>🧪</td><td>Set <strong>Release Channel</strong> to <strong>Beta</strong> instead of <strong>Stable</strong></td></tr>
</table>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/beta-settings-light.webp" alt="MACE Settings Updates pane with Release Channel set to Beta" className="img-light" />
  <img src="/img/screenshots/beta-settings-dark.webp" alt="MACE Settings Updates pane with Release Channel set to Beta" className="img-dark" />
</div>

From then on MACE automatically picks up beta and pre-release builds, exactly the way it handles stable updates. Switch back to **Stable** anytime to return to release builds only.

### Option 2: Download a Pre-Release

Grab the latest pre-release `.dmg` from the [pre-releases list on GitHub](https://github.com/mace-app/mace/releases?q=prerelease%3Atrue&expanded=true) (the newest one is at the top) and install it like any other build.

:::caution[Set your channel to Beta after installing]
If you download a pre-release but **don't** switch the release channel to **Beta** in **Settings → Updates**, the app will stay pinned on that version and won't see any updates. Always set the channel to Beta so you keep receiving new builds.
:::

## Beta OS Versions from mSCP

Beta isn't just about app builds. mSCP maintains **beta branches** where it tests rules for things that aren't out yet, like macOS 27. MACE can offer these beta OS versions when creating projects, and keep their rules downloaded for offline use. Turn it on in **Settings → General → Show mSCP Beta Versions**:

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/mscp-beta-light.webp" alt="MACE Settings General pane showing the Show mSCP Beta Versions toggle" className="img-light" />
  <img src="/img/screenshots/mscp-beta-dark.webp" alt="MACE Settings General pane showing the Show mSCP Beta Versions toggle" className="img-dark" />
</div>

### mSCP Needs Beta Testers Too

MACE isn't the only project that needs beta testers. The [macOS Security Compliance Project](https://github.com/usnistgov/macos_security) lives on being cutting edge, and testing rules from its dev branches is how new OS versions ship ready on day one. If you spot a problem with a beta OS rule, report it upstream so the whole community benefits:

<div className="community-grid community-grid--compact">
  <a href="https://github.com/usnistgov/macos_security/issues" className="community-card community-card--link">
    <img src="/img/mscp-logo.webp" alt="" className="community-card__mascot" width="440" height="440" loading="lazy" />
    <div className="community-card__title">Report mSCP Issues</div>
    <p className="community-card__desc">Found a problem with a rule or baseline from a dev branch? File it on the mSCP GitHub Issues.</p>
  </a>
  <a href="https://macadmins.slack.com/archives/C0158JKQTC5" className="community-card community-card--link">
    <img src="/img/mascots/mscp-compliance.webp" alt="" className="community-card__mascot" width="440" height="440" loading="lazy" />
    <div className="community-card__title">#macos_security_compliance</div>
    <p className="community-card__desc">Talk beta rules with the mSCP community on Mac Admins Slack.</p>
  </a>
</div>

## Going Back to Stable

Not for you? Set the release channel back to **Stable** in **Settings → Updates**. Switching back does not downgrade the app, you simply stop seeing beta updates. From there you have two options:

<table className="icon-table">
  <tr><td>⬇️</td><td><strong>Go back now:</strong> download the latest stable release from <a href="https://github.com/mace-app/mace/releases/latest">GitHub Releases</a> and install it over your beta build</td></tr>
  <tr><td>⏳</td><td><strong>Stay put:</strong> remain on your current version until the next stable release comes out and updates you normally</td></tr>
</table>
