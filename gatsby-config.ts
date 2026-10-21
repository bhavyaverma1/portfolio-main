import type { GatsbyConfig } from 'gatsby';

import { site } from './src/data/site';

const config: GatsbyConfig = {
  siteMetadata: {
    title: site.seo.title,
    description: site.seo.description,
    siteUrl: site.seo.url,
  },
  trailingSlash: 'always',
  plugins: [
    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/
    'gatsby-plugin-postcss',
  ],
};

export default config;
