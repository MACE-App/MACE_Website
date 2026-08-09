import React, {useCallback, useEffect, useRef, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import LOGOS from './logos';
import styles from './styles.module.css';

// The 16 logos the board starts on. Fixed (not random) so the server-rendered
// markup matches the first client render and hydration stays quiet.
const INITIAL = [
  'pencil-checklist', 'terminal-wizard', 'national-pi-day', 'astronaut',
  'corporate', 'hipster', 'national-coffee-day', 'national-puzzle-day',
  'christmas', 'halloween', 'pride', 'national-ice-cream-day',
  'national-pizza-day', 'national-dog-day', 'hawaiian', 'binary',
];

// Must stay in sync with the swap animations in styles.module.css.
const SWAP_MS = 560;
// How often a new handful of tiles starts swapping. With 2-3 per round out of
// 16 tiles, any given logo sits for roughly 15-20 seconds before it changes.
const TICK_MS = 2600;
const MIN_PER_ROUND = 2;
const MAX_PER_ROUND = 3;
const MAX_OFFSET_MS = 400;
// A tile that just changed is off the table for a while, so the same square
// doesn't get picked twice in quick succession.
const TILE_COOLDOWN_MS = 10000;

const byFile = new Map(LOGOS.map((l) => [l.file.replace('.webp', ''), l]));

function preload(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = src;
    // Never let a stalled request hold up the board.
    setTimeout(resolve, 2000);
  });
}

export default function LogoFlipBoard() {
  const base = useBaseUrl('/img/logos/');
  const [tiles, setTiles] = useState(() =>
    INITIAL.map((slug, index) => ({
      // `id` is the React key for the layer showing this logo. The incoming
      // layer keeps its id when it settles, so the element that animated in
      // becomes the resting element - no unmount, no blank frame, no flicker.
      current: {logo: byFile.get(slug) ?? LOGOS[0], id: index},
      next: null,
    })),
  );
  const boardRef = useRef(null);
  const deckRef = useRef([]);
  const nextIdRef = useRef(INITIAL.length);
  const lastSwapRef = useRef(INITIAL.map(() => 0));
  const timeoutsRef = useRef(new Set());
  const tilesRef = useRef(tiles);
  tilesRef.current = tiles;

  const later = useCallback((fn, ms) => {
    const id = setTimeout(() => {
      timeoutsRef.current.delete(id);
      fn();
    }, ms);
    timeoutsRef.current.add(id);
    return id;
  }, []);

  // Draw the next logo that isn't already on the board, reshuffling the deck
  // once every logo has had a turn.
  const draw = useCallback(() => {
    const showing = new Set(
      tilesRef.current.map((t) => (t.next ?? t.current).logo.file),
    );
    for (let attempt = 0; attempt < 2; attempt += 1) {
      while (deckRef.current.length > 0) {
        const logo = deckRef.current.pop();
        if (!showing.has(logo.file)) return logo;
      }
      const shuffled = [...LOGOS];
      for (let i = shuffled.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      deckRef.current = shuffled;
    }
    return null;
  }, []);

  // Promote the incoming logo to resting. Dropping the `entering` class reverts
  // the element to its base style, which is identical to the animation's end
  // state, so nothing moves at the handover.
  const settle = useCallback((index) => {
    setTiles((prev) => {
      const tile = prev[index];
      if (!tile.next) return prev;
      const copy = [...prev];
      copy[index] = {current: tile.next, next: null};
      return copy;
    });
  }, []);

  const swapTile = useCallback(
    async (index) => {
      if (tilesRef.current[index].next) return;
      const logo = draw();
      if (!logo) return;

      await preload(`${base}${logo.file}`);

      const id = nextIdRef.current;
      nextIdRef.current += 1;
      lastSwapRef.current[index] = Date.now();

      setTiles((prev) => {
        if (prev[index].next) return prev;
        const copy = [...prev];
        copy[index] = {...copy[index], next: {logo, id}};
        return copy;
      });

      // onAnimationEnd settles this normally; the timer only covers the case
      // where the animation never fires (tab backgrounded mid-swap).
      later(() => settle(index), SWAP_MS + 400);
    },
    [base, draw, later, settle],
  );

  // Each round picks a random handful of idle tiles and starts them at slightly
  // different moments, so the board never swaps in a visible pattern.
  const round = useCallback(() => {
    const now = Date.now();
    const idle = tilesRef.current
      .map((tile, index) => (tile.next ? null : index))
      .filter((index) => index !== null);
    if (idle.length === 0) return;

    for (let i = idle.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [idle[i], idle[j]] = [idle[j], idle[i]];
    }

    // Shuffled first, then split on cooldown: picks stay random, but a tile
    // that changed recently is only reached once the fresh ones run out.
    const rested = idle.filter(
      (index) => now - lastSwapRef.current[index] >= TILE_COOLDOWN_MS,
    );
    const recent = idle
      .filter((index) => now - lastSwapRef.current[index] < TILE_COOLDOWN_MS)
      .sort((a, b) => lastSwapRef.current[a] - lastSwapRef.current[b]);
    const pool = [...rested, ...recent];

    const span = MAX_PER_ROUND - MIN_PER_ROUND + 1;
    const count = Math.min(
      pool.length,
      MIN_PER_ROUND + Math.floor(Math.random() * span),
    );

    pool.slice(0, count).forEach((index) => {
      later(() => swapTile(index), Math.random() * MAX_OFFSET_MS);
    });
  }, [later, swapTile]);

  useEffect(() => {
    const reduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    if (reduced) return undefined;

    let timer = null;
    const start = () => {
      if (timer) return;
      timer = setInterval(round, TICK_MS);
    };
    const stop = () => {
      clearInterval(timer);
      timer = null;
    };

    // Only run while the board is actually on screen.
    const node = boardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      {threshold: 0.1},
    );
    if (node) observer.observe(node);

    const onVisibility = () => {
      if (document.hidden) stop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const pending = timeoutsRef.current;
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      stop();
      pending.forEach(clearTimeout);
      pending.clear();
    };
  }, [round]);

  return (
    <div className={styles.board} ref={boardRef}>
      <div className={styles.grid}>
        {tiles.map((tile, index) => {
          const {current, next} = tile;
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div className={styles.tile} key={index}>
              <div
                key={current.id}
                className={`${styles.layer} ${next ? styles.leaving : ''}`}>
                <img
                  src={`${base}${current.logo.file}`}
                  alt={`MACE ${current.logo.name} logo`}
                  width="256"
                  height="256"
                  loading={index < 8 ? undefined : 'lazy'}
                />
              </div>
              {next && (
                <div
                  key={next.id}
                  className={`${styles.layer} ${styles.entering}`}
                  aria-hidden="true"
                  onAnimationEnd={() => settle(index)}>
                  <img
                    src={`${base}${next.logo.file}`}
                    alt=""
                    width="256"
                    height="256"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
