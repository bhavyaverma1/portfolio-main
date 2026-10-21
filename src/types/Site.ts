// Shape of src/data/site.ts. Components only read from that file.

export type LinkKind = 'email' | 'linkedin' | 'github' | 'twitter' | 'medium' | 'resume';

export type ContactLink = {
  kind: LinkKind,
  label: string,
  url: string,
};

export type ExternalLink = {
  label: string,
  url: string,
};

// A featured project card. The front shows title + summary; problem / built / outcome
// sit behind a "Details" toggle.
export type FeaturedProject = {
  id: string,
  title: string,
  // Where and when, e.g. "Novartis · 2024–present".
  context: string,
  // One line, shown on the card. Lead with the result.
  summary: string,
  problem: string,
  built: string,
  outcome: string,
  stack: string[],
  // Public repo or demo. Leave out for internal work and set `internal: true`.
  link?: ExternalLink,
  internal?: boolean,
};

// A one-line entry in the collapsed "More work" list.
export type MoreProject = {
  title: string,
  context: string,
  summary: string,
  link?: ExternalLink,
};

export type Role = {
  // Leave empty when the title says it all (e.g. "Freelance Data Scientist").
  company: string,
  title: string,
  period: string,
  // Optional one-line proof point shown under the title.
  highlight?: string,
};

export type ToolGroup = {
  label: string,
  items: string[],
};

export type Education = {
  school: string,
  degree: string,
  period: string,
};

export type Site = {
  seo: {
    title: string,
    description: string,
    url: string,
    // Path relative to /static, e.g. "/images/og.png".
    image: string,
  },
  person: {
    name: string,
    // Short role line under the name.
    role: string,
    // One sentence: what you help with.
    headline: string,
    location: string,
    // Path relative to /static. Square .jpg, about 512 px.
    // A .webp next to it is used when present.
    photo: { src: string, webp?: string, alt: string },
  },
  links: ContactLink[],
  featured: FeaturedProject[],
  more: MoreProject[],
  experience: Role[],
  education: Education[],
  // One short line per group, items separated by dots.
  tools: ToolGroup[],
  workWithMe: {
    body: string,
  },
  // Small print in the footer, e.g. an employer disclaimer.
  footerNote?: string,
  analytics?: {
    // Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX". Remove to disable analytics.
    googleAnalyticsId?: string,
  },
};
