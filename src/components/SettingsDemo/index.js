import React, {useEffect, useState} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import {LOGO_OPTIONS, LOGO_GROUPS, ASSET_TO_FILE, ASSET_TO_LABEL} from './logoOptions';
import {scheduledLogo} from './logoSchedule';

/** Grey "Default: X" pill, turning orange once the control leaves its default. */
function DefaultPill({value, changed, tone = 'value', bareAtRest = false}) {
  const cls = [
    'build-option-item__label',
    `build-option-item__label--${tone}`,
    changed && 'build-option-item__label--changed',
  ]
    .filter(Boolean)
    .join(' ');
  // "Default: Default" reads badly, so the Logo Override pill drops the value
  // until it actually has something to restore.
  if (!changed && bareAtRest) {
    return <span className={cls}>Default</span>;
  }

  return (
    <span className={cls}>
      {changed ? 'Restore Default: ' : 'Default: '}
      <b>{value}</b>
    </span>
  );
}

/**
 * Theme picker that really drives the site's light/dark mode.
 * Docusaurus treats a null color mode as "follow the system".
 */
export function ThemePicker() {
  // colorModeChoice is null when the visitor is following their system setting,
  // which is exactly the distinction this menu needs. It also keeps the menu in
  // sync when the navbar toggle is used instead.
  const {colorModeChoice, setColorMode} = useColorMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const choice = !mounted
    ? 'System'
    : colorModeChoice === 'dark'
      ? 'Dark'
      : colorModeChoice === 'light'
        ? 'Light'
        : 'System';

  const onChange = (e) => {
    const next = e.target.value;
    setColorMode(next === 'System' ? null : next.toLowerCase());
  };

  return (
    <span className="build-option-item__control build-option-item__control--menu">
      <select
        className="build-option-item__menu"
        aria-label="Theme"
        value={choice}
        onChange={onChange}>
        <option>Light</option>
        <option>System</option>
        <option>Dark</option>
      </select>
      <DefaultPill value="System" changed={choice !== 'System'} />
    </span>
  );
}

/**
 * Holiday Logo and Logo Override, which are coupled in the app: the override
 * only applies once Holiday Logo is off, and turning Holiday Logo back on
 * drops any override you had picked.
 */
export function LogoSettings() {
  const [holiday, setHoliday] = useState(true);
  const [override, setOverride] = useState('logo');
  const [today, setToday] = useState(null);
  const [randomPick, setRandomPick] = useState('logo');

  // Date-dependent, so resolve it after mount to keep hydration stable.
  useEffect(() => {
    setToday(scheduledLogo(new Date()));
    const pool = LOGO_OPTIONS.filter((o) => o.file && o.value !== 'logo');
    setRandomPick(pool[Math.floor(Math.random() * pool.length)].value);
  }, []);

  const toggleHoliday = (on) => {
    setHoliday(on);
    if (on) setOverride('logo'); // back to Default, as the app does
  };

  const resolved = holiday
    ? today ?? 'logo'
    : override === 'random'
      ? randomPick
      : override;

  const file = ASSET_TO_FILE[resolved] ?? 'default';
  const caption = holiday
    ? `Today's pick: ${ASSET_TO_LABEL[resolved] ?? 'Default'}`
    : `Showing: ${ASSET_TO_LABEL[override] ?? 'Default'}${
        override === 'random' ? ` (${ASSET_TO_LABEL[randomPick]})` : ''
      }`;

  return (
    <>
      <div className="build-option-item">
        <div className="build-option-item__header">
          <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--orange">
            ✨
          </span>
          <strong>Holiday Logo</strong>
          <span className="build-option-item__control">
            <input
              type="checkbox"
              id="sw-holiday-logo"
              className="build-option-item__input"
              aria-label="Holiday Logo"
              checked={holiday}
              onChange={(e) => toggleHoliday(e.target.checked)}
            />
            <label className="build-option-item__track" htmlFor="sw-holiday-logo" />
            <DefaultPill value="On" changed={!holiday} tone="on" />
          </span>
        </div>
        <p>
          Show seasonal and holiday themed logos on the main menu. MACE ships with more
          than 75 seasonal, holiday, and character logos that switch automatically by
          date.
        </p>
      </div>

      <div className="build-option-item">
        <div className="build-option-item__header">
          <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--purple">
            🖼️
          </span>
          <strong>Logo Override</strong>
          <span className="build-option-item__control build-option-item__control--menu">
            <select
              className="build-option-item__menu"
              aria-label="Logo Override"
              value={override}
              disabled={holiday}
              onChange={(e) => setOverride(e.target.value)}>
              {LOGO_GROUPS.map((group) => (
                <optgroup key={group} label={group}>
                  {LOGO_OPTIONS.filter((o) => o.group === group).map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <DefaultPill
              value="Default"
              changed={!holiday && override !== 'logo'}
              bareAtRest
            />
          </span>
        </div>
        <p>
          Pick one specific logo to use all year instead of the automatic rotation. Turn
          off <strong>Holiday Logo</strong> above to enable this menu. Turning it back on
          returns the override to <strong>Default</strong>.
        </p>
        <div className="logo-preview">
          <img
            className="logo-preview__img"
            src={`/img/logos/${file}.webp`}
            alt={`MACE ${ASSET_TO_LABEL[resolved] ?? 'Default'} logo`}
            width="120"
            height="120"
          />
          <span className="logo-preview__caption">{caption}</span>
        </div>
      </div>
    </>
  );
}
