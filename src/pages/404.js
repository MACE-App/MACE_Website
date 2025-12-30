import React, {useState, useEffect} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './404.module.css';

const funnyMessages = [
  "Looks like this page failed its compliance audit.",
  "This page has been quarantined by Gatekeeper.",
  "Error: Page not signed by a trusted developer.",
  "SIP blocked your access to this page. Just kidding, it doesn't exist.",
  "This page requires a security baseline we haven't written yet.",
  "FileVault encrypted this page so well, we lost it.",
  "This page was removed during remediation.",
];

const terminalJokes = [
  { cmd: "defaults read /this-page", output: "Domain /this-page does not exist" },
  { cmd: "spctl --assess /this-page", output: "rejected (page not found on this planet)" },
  { cmd: "codesign -v /this-page", output: "/this-page: No such file or directory" },
  { cmd: "mdmclient QueryDevicePage", output: "Error: Page escaped MDM management" },
  { cmd: "security find-page /this-page", output: "security: SecKeychainSearchCopyNext: Page went to get coffee" },
];

export default function NotFound() {
  const [message] = useState(() =>
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
  );
  const [joke] = useState(() =>
    terminalJokes[Math.floor(Math.random() * terminalJokes.length)]
  );

  // Matrix rain effect - similar to homepage
  const matrixChars = ['0', '1', 'M', 'A', 'C', 'E', '4', '0', '4', '?', '!', '#', 'sudo', 'error', 'nil'];
  const columns = Array.from({ length: 50 }, (_, i) => {
    const chars = Array.from({ length: 5 }, () =>
      matrixChars[Math.floor(Math.random() * matrixChars.length)]
    ).join('\n');
    return { id: i, chars, delay: Math.random() * 15, duration: 18 };
  });

  return (
    <Layout title="404 - Page Not Found">
      <div className={styles.container}>
        <div className={styles.matrixBg}>
          {columns.map((col) => (
            <div
              key={col.id}
              className={styles.matrixCol}
              style={{
                left: `${col.id * 2}%`,
                animationDelay: `${col.delay}s`,
                animationDuration: `${col.duration}s`,
              }}
            >
              {col.chars}
            </div>
          ))}
        </div>
        <div className={styles.content}>
          <img
            src="/img/logo.png"
            alt="MACE mascot looking confused"
            className={styles.mascot}
          />
          <h1 className={styles.errorCode}>
            <span className={styles.glitch} data-text="404">404</span>
          </h1>
          <h2 className={styles.title}>sudo: page not found</h2>
          <p className={styles.subtitle}>Permission denied. Actually, the page just doesn't exist.</p>
          <p className={styles.message}>{message}</p>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalDot} style={{background: '#FF5F56'}}></span>
              <span className={styles.terminalDot} style={{background: '#FFBD2E'}}></span>
              <span className={styles.terminalDot} style={{background: '#27CA40'}}></span>
              <span className={styles.terminalTitle}>mace@404 ~ </span>
            </div>
            <div className={styles.terminalBody}>
              <p><span className={styles.prompt}>$</span> {joke.cmd}</p>
              <p className={styles.error}>{joke.output}</p>
              <p><span className={styles.prompt}>$</span> echo "Initiating remediation..."</p>
              <p className={styles.success}>Remediation: Click a button below</p>
              <p><span className={styles.prompt}>$</span> <span className={styles.cursor}>_</span></p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link to="/" className={styles.primaryButton}>
              Take Me Home
            </Link>
            <Link to="/docs/intro" className={styles.secondaryButton}>
              RTFM
            </Link>
          </div>
          <p className={styles.footer}>
            Error ID: MACE-404-{Math.random().toString(36).substring(2, 8).toUpperCase()}
          </p>
        </div>
      </div>
    </Layout>
  );
}
