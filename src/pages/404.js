import React from 'react';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';

// Standalone /404 page. GitHub Pages serves the built 404.html for any
// unknown URL on a hard navigation. The actual markup lives in the shared
// @theme/NotFound/Content so the page, the client-side wildcard route, and
// DocRoot's /docs/* not-found fallback all render the identical custom design.
export default function NotFound() {
  return (
    <Layout title="404 - Page Not Found">
      <NotFoundContent />
    </Layout>
  );
}
