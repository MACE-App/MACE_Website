import React from 'react';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';

// Client-side wildcard (*) route for URLs that match no other route.
// Wraps the shared custom content in a full Layout. Bad /docs/* URLs are
// handled separately by DocRoot, which renders @theme/NotFound/Content directly.
export default function NotFound() {
  return (
    <Layout title="404 - Page Not Found">
      <NotFoundContent />
    </Layout>
  );
}
