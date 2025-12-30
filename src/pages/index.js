import clsx from 'clsx';
import {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  // Matrix rain - macOS commands and configs
  const macTerms = [
    'sudo', 'defaults', 'write', 'read', 'killall', 'launchctl', 'pmset', 'nvram',
    'spctl', 'csrutil', 'firmwarepasswd', 'fdesetup', 'security', 'codesign',
    'systemsetup', 'networksetup', 'scutil', 'dscl', 'pwpolicy', 'profiles',
    'mdmclient', 'jamf', 'munki', 'autopkg', 'osascript', 'plutil', 'PlistBuddy',
    'com.apple.screensaver', 'com.apple.loginwindow', 'com.apple.Safari',
    'com.apple.Terminal', 'com.apple.finder', 'com.apple.dock', 'com.apple.mail',
    '/Library/Preferences', '/System/Library', '/usr/bin', '/var/db',
    'LoginwindowText', 'DisableGuestAccount', 'RequirePassword', 'askForPassword',
    'GlobalPreferences', 'NSGlobalDomain', 'ScreenSaverDelay', 'idleTime',
    'FirewallEnabled', 'StealthMode', 'BlockAllIncoming', 'LoggingEnabled',
    'FileVault', 'Gatekeeper', 'SIP', 'APFS', 'SecureBoot', 'MDM', 'SCEP',
    'STIG', 'CIS', 'NIST', 'CMMC', '800-53', '800-171', 'mSCP', 'MACE',
    'mobileconfig', 'plist', 'profile', 'payload', 'DDM', 'declaration',
    'audit', 'remediate', 'compliant', 'baseline', 'benchmark', 'hardening',
    'chmod', 'chown', 'xattr', 'ditto', 'hdiutil', 'diskutil', 'softwareupdate',
    'true', 'false', 'enabled', 'disabled', 'enforced', 'required', 'allowed',
    'kextload', 'kextunload', 'SystemPolicy', 'TCC', 'PrivacyPreferences',
    'Accessibility', 'FullDiskAccess', 'Camera', 'Microphone', 'ScreenRecording',
    'Keychain', 'SecKeychain', 'AuthorizationDB', 'AuthorizationRight',
    'com.apple.security', 'com.apple.SystemPolicy', 'com.apple.TCC',
    'PasswordPolicy', 'minLength', 'maxFailedAttempts', 'lockoutDuration',
    'requireAlphanumeric', 'requireSymbol', 'expirationDays', 'historyCount',
    'AirDrop', 'Handoff', 'Bluetooth', 'WiFi', 'Ethernet', 'VPN', 'Firewall',
    'ApplicationFirewall', 'SocketFilter', 'ContentFilter', 'PacketTunnel',
    'XProtect', 'MRT', 'Notarization', 'Hardened Runtime', 'Entitlements',
    'sandbox', 'quarantine', 'translocation', 'AppNap', 'PowerNap',
    'TimeMachine', 'Spotlight', 'LaunchDaemon', 'LaunchAgent', 'LoginItem',
    'StartupItem', 'kernel_task', 'WindowServer', 'loginwindow', 'SystemUIServer',
    'SSHEnabled', 'RemoteLogin', 'RemoteManagement', 'ARDAgent', 'ScreenSharing',
    'FileSharing', 'PrinterSharing', 'InternetSharing', 'BluetoothSharing',
    'TouchID', 'FaceID', 'SecureEnclave', 'T2', 'AppleSilicon', 'Rosetta',
    'UniversalControl', 'Sidecar', 'Continuity', 'iCloud', 'FindMy',
    'RecoveryOS', 'DFU', 'ASR', 'IPSW', 'OTA', 'DEP', 'ABM', 'ASM', 'VPP',
    'ConfigurationProfile', 'PayloadContent', 'PayloadType', 'PayloadUUID',
    'InstallApplication', 'RemoveApplication', 'RestrictedSoftware',
    'AllowedApplications', 'BlockedApplications', 'ManagedPreferences',
    'MCX', 'DirectoryService', 'OpenDirectory', 'ActiveDirectory', 'LDAP',
    'Kerberos', 'SAML', 'OAuth', 'OIDC', 'SSO', 'PlatformSSO', 'SmartCard',
    'PIV', 'CAC', 'CryptoTokenKit', 'SecureToken', 'Bootstrap', 'Volume',
  ];
  const columns = Array.from({ length: 60 }, (_, i) => {
    // Shuffle and pick unique terms for each column
    const shuffled = [...macTerms].sort(() => Math.random() - 0.5);
    const terms = shuffled.slice(0, 5).join('\n');
    // Random start times, consistent speed
    const delay = Math.random() * 20;
    const duration = 22;
    return { id: i, terms, delay, duration };
  });

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.matrixBackground}>
        {columns.map((col) => (
          <div
            key={col.id}
            className={styles.matrixColumn}
            style={{
              left: `${col.id * 1.7}%`,
              animationDelay: `${col.delay}s`,
              animationDuration: `${col.duration}s`,
            }}
          >
            {col.terms}
          </div>
        ))}
      </div>
      <div className="container">
        <img
          src="/img/logo.png"
          alt="MACE App Icon"
          className={styles.heroLogo}
        />
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          M.A.C.E.
        </Heading>
        <p className={styles.heroSubtitle}>macOS Advanced Compliance Editor</p>
        <p className={clsx('hero__subtitle', styles.heroTagline)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(styles.heroButton, styles.heroButtonPrimary)}
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={clsx(styles.heroButton, styles.heroButtonSecondary)}
            href="https://github.com/mace-app/mace/releases">
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'No Command Line Required',
      desc: 'Visual interface for creating and managing compliance baselines. Built with SwiftUI for a fast, native macOS experience.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: 'All-in-One Workflow',
      desc: 'Create, customize, audit, and export from a single app. Browse 500+ security rules with powerful search and filtering.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'MDM-Ready Exports',
      desc: 'Generate deployment-ready profiles for Jamf, Intune, and more. Export to mobileconfig, plist, DDM, and signed profiles.',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                {feature.icon}
              </div>
              <Heading as="h3">{feature.title}</Heading>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotCarousel() {
  const screenshots = [
    { src: '/img/screenshots/compliance_builder_hub.png', title: 'Compliance Editor', desc: 'Browse and customize 500+ security rules' },
    { src: '/img/screenshots/audit.png', title: 'Audit & Export', desc: 'Run audits and generate detailed reports' },
    { src: '/img/screenshots/new_project.png', title: 'Project Management', desc: 'Create and manage compliance baselines' },
    { src: '/img/screenshots/documentation.png', title: 'Built-in Documentation', desc: 'Access rule details and remediation steps' },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <section className={styles.carousel}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          See MACE in Action
        </Heading>
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(-${current * 100}%)` }}>
            {screenshots.map((shot, idx) => (
              <div key={idx} className={styles.carouselSlide}>
                <img src={shot.src} alt={shot.title} />
              </div>
            ))}
          </div>
          <div className={styles.carouselInfo}>
            <h3>{screenshots[current].title}</h3>
            <p>{screenshots[current].desc}</p>
          </div>
          <div className={styles.carouselDots}>
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                className={clsx(styles.carouselDot, idx === current && styles.carouselDotActive)}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <Heading as="h2" className="text--center">
          Ready to Simplify macOS Compliance?
        </Heading>
        <p className="text--center">
          Download MACE for free and start building your security baselines today.
        </p>
        <div className={styles.ctaButtons}>
          <Link
            className="button button--primary button--lg"
            href="https://github.com/mace-app/mace/releases">
            Download MACE
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read the Docs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="macOS Advanced Compliance Editor"
      description="Build, customize, audit, and deploy macOS security baselines — no command line required.">
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <ScreenshotCarousel />
        <CTASection />
      </main>
    </Layout>
  );
}
