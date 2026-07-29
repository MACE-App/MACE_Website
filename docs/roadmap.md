---
sidebar_position: 9
sidebar_label: Roadmap
title: Roadmap
description: What's being worked on now and the features planned for future versions of MACE, shaped by community feedback.
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Roadmap</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__figure">
      <img
        src="/img/mascots/roadmap-lookout.webp"
        alt="MACE mascot peering through a spyglass with a signpost and folded map"
        className="doc-hero__mascot"
        width="440"
        height="440"
      />
    </div>
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Where MACE is headed.</p>
      <p className="doc-hero__sub">No dates and no version promises. Priorities shift with community feedback, and everything below the current focus is a future goal, not a commitment.</p>
    </div>
  </div>
</div>

## Current Focus

Right now the priority is <strong>you</strong>: addressing bugs reported by users and polishing the existing experience, making what's already shipped feel rock solid before piling on new features.

<div className="roadmap-grid">
  <div className="roadmap-card roadmap-card--red">
    <span className="roadmap-card__icon">🐛</span>
    <div className="roadmap-card__body">
      <h3>Fixing User-Reported Bugs</h3>
      <p>Issues reported on <a href="https://github.com/mace-app/mace/issues">GitHub</a> and in Slack get first priority. If something is broken for you, it goes to the top of the list.</p>
    </div>
  </div>
  <div className="roadmap-card roadmap-card--purple">
    <span className="roadmap-card__icon">✨</span>
    <div className="roadmap-card__body">
      <h3>Polishing the Experience</h3>
      <p>Smoothing rough edges across the app based on real-world feedback, so everyday workflows feel effortless.</p>
    </div>
  </div>
  <div className="roadmap-card roadmap-card--teal">
    <span className="roadmap-card__icon">📚</span>
    <div className="roadmap-card__body">
      <h3>Revamping the Website</h3>
      <p>Reworking and expanding these docs to help new users get from download to their first deployed baseline with less guesswork.</p>
    </div>
  </div>
</div>

## Future Features

Once the current round of fixes and polish settles, these are the things I want to try and add next.

<div className="roadmap-grid">
  <div className="roadmap-card roadmap-card--blue">
    <span className="roadmap-card__icon">🌐</span>
    <div className="roadmap-card__body">
      <h3>More MDM Direct Upload Integrations</h3>
      <p>Expanding direct upload beyond the current integrations so more MDM platforms can receive profiles straight from MACE, with no export-then-upload dance.</p>
    </div>
  </div>
</div>

## Further Out

The bigger swings. Each of these will take a fair bit of rework to make happen, so they sit further down the road, and community feedback helps decide which one comes first.

<div className="roadmap-grid">
  <div className="roadmap-card roadmap-card--orange">
    <span className="roadmap-card__icon">🚀</span>
    <div className="roadmap-card__body">
      <h3>MDM Direct Uploads, Reworked</h3>
      <p>A cleaner direct-upload experience: <strong>preview exactly what will be sent</strong> to your MDM before anything uploads, and a streamlined screen with consolidated actions instead of duplicate buttons.</p>
    </div>
  </div>
  <div className="roadmap-card roadmap-card--green">
    <span className="roadmap-card__icon">🛡️</span>
    <div className="roadmap-card__body">
      <h3>Audit Rule Exemptions</h3>
      <p>A dedicated UI for the audit exemption plist. Exempt a rule <strong>with a documented reason</strong> in a couple of clicks, see exemptions reflected in audit results, and manage the full exemption workflow without hand-editing plists.</p>
    </div>
  </div>
</div>

## Have an Idea?

The fastest way to influence this page is to post and vote on the Ideas board. Popular requests get prioritized. And to see what has already landed, check the changelogs on <a href="https://github.com/mace-app/mace/releases">GitHub Releases</a>.

<div style={{textAlign: 'center', margin: '2rem 0'}}>
  <a href="https://github.com/mace-app/mace/discussions/categories/ideas" className="community-cta">💡 Suggest &amp; Vote on Ideas →</a>
</div>
