// Click-to-zoom for documentation screenshots.
//
// Targets app screenshots specifically: anything under /img/screenshots/, plus
// whatever a .themed-image wrapper holds. Mascots, engine logos, and the app
// icon are deliberately left alone, so only real UI shots expand.
// A single delegated listener on the document survives client-side navigation,
// so there is nothing to re-bind when the route changes.
if (typeof window !== 'undefined') {
  const SELECTOR = [
    'img[src*="/img/screenshots/"]',
    '.themed-image img',
    '.zoomable img',
    'img.zoomable',
  ].join(', ');

  // How much bigger the source has to be than the on-screen fit before a
  // second zoom step is worth offering.
  const ZOOM_THRESHOLD = 1.15;

  let overlay = null;
  let on_resize = null;

  function close() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    if (on_resize) {
      window.removeEventListener('resize', on_resize);
      on_resize = null;
    }
    const node = overlay;
    overlay = null;
    // Let the fade-out finish before removing the node.
    window.setTimeout(() => node.remove(), 200);
  }

  // Only advertise zoom when there is genuinely more detail to reveal. A small
  // screenshot already shown at (or above) its natural size gains nothing from
  // a second step, so it must not sit under a zoom-in cursor.
  function measure_zoomability(img) {
    if (!overlay) return;
    const fitted_width = img.clientWidth;
    const fitted_height = img.clientHeight;
    if (!fitted_width || !fitted_height) return;
    const can_zoom =
      img.naturalWidth > fitted_width * ZOOM_THRESHOLD ||
      img.naturalHeight > fitted_height * ZOOM_THRESHOLD;
    overlay.classList.toggle('can-zoom', can_zoom);
    if (!can_zoom) overlay.classList.remove('is-zoomed');
  }

  // Zoom in on the point that was clicked rather than jumping to the corner:
  // remember where in the image the click landed, then scroll that spot back
  // to the middle of the viewport once the image is at full size.
  function toggle_zoom(event, img) {
    // Nothing more to show: behave like the backdrop and dismiss.
    if (!overlay.classList.contains('can-zoom')) {
      close();
      return;
    }

    const rect = img.getBoundingClientRect();
    const ratio_x = (event.clientX - rect.left) / rect.width;
    const ratio_y = (event.clientY - rect.top) / rect.height;

    const zoomed = overlay.classList.toggle('is-zoomed');
    if (!zoomed) {
      overlay.scrollLeft = 0;
      overlay.scrollTop = 0;
      return;
    }

    window.requestAnimationFrame(() => {
      if (!overlay) return;
      overlay.scrollLeft = img.offsetWidth * ratio_x - overlay.clientWidth / 2;
      overlay.scrollTop = img.offsetHeight * ratio_y - overlay.clientHeight / 2;
    });
  }

  function open(src, alt) {
    close();

    overlay = document.createElement('div');
    overlay.className = 'image-lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', alt || 'Expanded image');

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.className = 'image-lightbox__img';

    // An SVG rather than a "×" glyph: font metrics leave the glyph sitting
    // slightly high in the circle, and the offset varies by platform font.
    const close_button = document.createElement('button');
    close_button.type = 'button';
    close_button.className = 'image-lightbox__close';
    close_button.setAttribute('aria-label', 'Close image');
    close_button.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" ' +
      'stroke-width="2.2" stroke-linecap="round"/></svg>';

    overlay.appendChild(img);
    overlay.appendChild(close_button);
    document.body.appendChild(overlay);
    document.body.classList.add('lightbox-open');

    // Next frame, so the opening transition actually runs and the image has
    // been laid out enough to compare its fitted size against the source.
    window.requestAnimationFrame(() => {
      if (!overlay) return;
      overlay.classList.add('is-open');
      measure_zoomability(img);
    });

    // A cached image is already complete; otherwise wait for the decode.
    if (!img.complete) {
      img.addEventListener('load', () => measure_zoomability(img));
    }

    // The fitted size changes with the viewport, and so can the answer.
    on_resize = () => {
      if (!overlay || overlay.classList.contains('is-zoomed')) return;
      measure_zoomability(img);
    };
    window.addEventListener('resize', on_resize);

    // Clicking the image toggles full-resolution zoom; clicking the backdrop
    // (or the close button) dismisses.
    overlay.addEventListener('click', (event) => {
      // Already dismissed and mid fade-out: ignore anything further.
      if (!overlay) return;
      if (event.target === img) {
        toggle_zoom(event, img);
        return;
      }
      close();
    });

    close_button.focus();
  }

  document.addEventListener('click', (event) => {
    if (overlay) return;
    if (!event.target.closest) return;
    // The overlay's own image matches SELECTOR too. Without this guard, a click
    // that closes the lightbox bubbles up here and immediately reopens it.
    if (event.target.closest('.image-lightbox')) return;
    const img = event.target.closest(SELECTOR);
    if (!img) return;
    // Leave linked images alone so the link still wins.
    if (img.closest('a')) return;
    event.preventDefault();
    open(img.currentSrc || img.src, img.alt);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}
