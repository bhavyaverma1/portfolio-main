import React from 'react';

import { site } from '../data/site';

type SeoHeadProps = {
  title?: string,
  description?: string,
  pathname?: string,
  // Adds schema.org Person data so search engines can show a profile result.
  withPersonSchema?: boolean,
};

// @see: https://schema.org/Person
const personSchema = (): string => {
  const current = site.experience[0];
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.person.name,
    url: site.seo.url,
    image: `${site.seo.url}${site.person.photo.src}`,
    jobTitle: current?.title,
    worksFor: current ? { '@type': 'Organization', name: current.company } : undefined,
    description: site.seo.description,
    knowsAbout: site.tools.flatMap((group) => group.items),
    sameAs: site.links.filter((link) => /^https?:\/\//.test(link.url)).map((link) => link.url),
  });
};

// Used from each page's Gatsby Head export.
// @see: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
const SeoHead = (props: SeoHeadProps): React.ReactElement => {
  const {
    title = site.seo.title,
    description = site.seo.description,
    pathname = '/',
    withPersonSchema = false,
  } = props;
  const url = `${site.seo.url}${pathname}`;
  const image = `${site.seo.url}${site.seo.image}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {withPersonSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personSchema() }} />
      ) : null}
    </>
  );
};

export default SeoHead;
