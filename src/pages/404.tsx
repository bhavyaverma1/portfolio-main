import React from 'react';
import type { HeadFC } from 'gatsby';

import Layout from '../components/Layout';
import SeoHead from '../components/SeoHead';

const NotFoundPage = (): React.ReactElement => (
  <Layout>
    <section className="py-24">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-4 text-slate-700">
        This page doesn’t exist. <a href="/" className="font-medium text-accent hover:underline">Go to the home page</a>.
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead title="Page not found · Bhavya Verma" pathname={location.pathname} />
);
