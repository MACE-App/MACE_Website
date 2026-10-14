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

Beta always carries the **upcoming** release. Whatever version the stable channel is on, the beta channel is already testing what comes next, whether that is the next major release or the next round of fixes. Each part of the version number tells you the size of the release:

<div className="version-anatomy">
  <div className="version-anatomy__display">
    <span className="version-anatomy__part version-anatomy__part--major">1</span>
    <span className="version-anatomy__dot">.</span>
    <span className="version-anatomy__part version-anatomy__part--minor">2</span>
    <span className="version-anatomy__dot">.</span>
    <span className="version-anatomy__part version-anatomy__part--patch">0</span>
    <span className="version-anatomy__suffix">-beta.7</span>
  </div>
  <div className="version-anatomy__legend">
    <div className="version-anatomy__item version-anatomy__item--major">
      <span className="version-anatomy__rule" aria-hidden="true"></span>
      <div>
        <strong className="version-anatomy__label">🏛️ Landmark</strong>
        <code className="version-anatomy__pos">1.X.X</code>
        <p>Reserved for complete overhauls of the app.</p>
      </div>
    </div>
    <div className="version-anatomy__item version-anatomy__item--minor">
      <span className="version-anatomy__rule" aria-hidden="true"></span>
      <div>
        <strong className="version-anatomy__label">🚀 Major</strong>
        <code className="version-anatomy__pos">X.2.X</code>
        <p>New features and capabilities.</p>
      </div>
    </div>
    <div className="version-anatomy__item version-anatomy__item--patch">
      <span className="version-anatomy__rule" aria-hidden="true"></span>
      <div>
        <strong className="version-anatomy__label">🔧 Minor</strong>
        <code className="version-anatomy__pos">X.X.1</code>
        <p>Fixes and small improvements.</p>
      </div>
    </div>
  </div>
</div>

So a build labeled `1.2.0-beta.7` is the seventh beta of the upcoming `1.2.0` major release, on its way to becoming the next stable.

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

<ol className="beta-steps">
  <li><span className="beta-steps__num">1</span><div>Open <strong>MACE ▸ App Settings… → Updates</strong></div></li>
  <li><span className="beta-steps__num">2</span><div>Set <strong>Release Channel</strong> to <strong>Beta</strong> instead of <strong>Stable</strong></div></li>
</ol>

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--purple">📦</span>
      <strong>Release Channel</strong>
      <span className="build-option-item__control build-option-item__control--menu build-option-item__control--auto">
        <select className="build-option-item__menu" aria-label="Release Channel" defaultValue="Stable">
          <option>Beta</option>
          <option className="is-default-option">Stable</option>
        </select>
        <span className="build-option-item__label build-option-item__label--value">
          <span className="is-default">Default: <b>Stable</b></span>
          <span className="is-restore">Restore Default: <b>Stable</b></span>
        </span>
      </span>
    </div>
    <p>Ships as <strong>Stable</strong>, so you have to opt in. See <a href="/docs/reference/settings#updates">Settings → Updates</a> for the full reference.</p>
  </div>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/beta-settings-light.webp" alt="MACE Settings Updates pane with Release Channel set to Beta" className="img-light" />
  <img src="/img/screenshots/beta-settings-dark.webp" alt="MACE Settings Updates pane with Release Channel set to Beta" className="img-dark" />
</div>

MACE checks for an update as soon as you close Settings, and from then on picks up beta and pre-release builds exactly the way it handles stable updates. Switch back to **Stable** anytime to return to release builds only.

### Option 2: Download a Pre-Release

Grab the latest pre-release `.dmg` from the [pre-releases list on GitHub](https://github.com/mace-app/mace/releases?q=prerelease%3Atrue&expanded=true) (the newest one is at the top) and install it like any other build.

:::caution[Set your channel to Beta after installing]
If you download a pre-release but **don't** switch the release channel to **Beta** in **Settings → Updates**, the app stays on the Stable channel. It will still update when the next stable release ships, but it won't see any later betas. Set the channel to Beta so you keep receiving new beta builds.
:::

## Beta OS Versions from mSCP

Beta isn't just about app builds. mSCP maintains **development branches** such as `dev_27` where it tests rules for things that aren't out yet, like macOS 27. MACE can create projects straight from one of those branches.

<ol className="beta-steps">
  <li><span className="beta-steps__num">1</span><div>Open <strong>MACE ▸ App Settings… → General</strong></div></li>
  <li><span className="beta-steps__num">2</span><div>Under <strong>Rules</strong>, set <strong>Rules Source</strong> to a <strong>Beta (dev_…)</strong> branch. Click <strong>Refresh branches</strong> if the one you want isn't listed yet</div></li>
  <li><span className="beta-steps__num">3</span><div>Create a new project. The versions, frameworks, and rules now come entirely from that branch</div></li>
</ol>

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--blue">🌿</span>
      <strong>Rules Source</strong>
      <span className="build-option-item__control build-option-item__control--menu build-option-item__control--auto">
        <select className="build-option-item__menu" aria-label="Rules Source" defaultValue="Release (main)">
          <option className="is-default-option">Release (main)</option>
          <option>Beta (dev_27)</option>
        </select>
        <span className="build-option-item__label build-option-item__label--value">
          <span className="is-default">Default: <b>Release (main)</b></span>
          <span className="is-restore">Restore Default: <b>Release (main)</b></span>
        </span>
      </span>
    </div>
    <p>Ships as <strong>Release (main)</strong>. See <a href="/docs/reference/settings#rules">Settings → General → Rules</a> for the full reference, including how to add forks under Additional Sources.</p>
  </div>
</div>

What to expect once a dev branch is selected:

<table className="icon-table">
  <tr><td>🏷️</td><td>The New Project sheet shows an orange <strong>Using beta branch</strong> badge. Click it to jump to the Rules Source setting.</td></tr>
  <tr><td>⚠️</td><td>Before the project is created, a <strong>Beta mSCP Content</strong> alert reminds you the rules are pre-release and may not match what ships. Click <strong>Continue Anyway</strong>.</td></tr>
  <tr><td>📥</td><td>The first project on a branch downloads it from GitHub. The branch is kept for offline use while <strong>Auto-Download Rules</strong> is on.</td></tr>
  <tr><td>🔀</td><td>Each project remembers its branch. To move an existing project, use <strong>Rules ▸ Switch Branch…</strong> in the Compliance Editor, then <strong>Switch &amp; Check for Updates</strong>.</td></tr>
  <tr><td>🧹</td><td>Dev branches are retired once their rules ship on <code>main</code>. When that happens, opening the project shows <strong>Branch No Longer Available</strong> and offers the switch sheet so you can move to Release.</td></tr>
  <tr><td>⚖️</td><td>Want to see what's coming before you switch? <a href="/docs/baseline-compare/overview">Baseline Compare</a> can put a dev branch next to <code>main</code>.</td></tr>
</table>

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

Not for you? Set the release channel back to **Stable** in **Settings → Updates**. Switching back does not downgrade the app; you simply stop seeing beta updates. From there you have two options:

<div className="beta-choices">
  <div className="beta-choice">
    <div className="beta-choice__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--blue">⬇️</span>
      <strong>Go back now</strong>
    </div>
    <p>Download the latest stable release from <a href="https://github.com/mace-app/mace/releases/latest">GitHub Releases</a> and install it over your beta build.</p>
  </div>
  <div className="beta-choice">
    <div className="beta-choice__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--gray">⏳</span>
      <strong>Stay put</strong>
    </div>
    <p>Remain on your current version until the next stable release comes out and updates you normally.</p>
  </div>
</div>
