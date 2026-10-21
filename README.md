# bhavyaverma1.netlify.app

Personal site of Bhavya Verma: a single page with selected work, experience and contact details.
Built with [Gatsby 5](https://www.gatsbyjs.com/), [Tailwind CSS 3](https://tailwindcss.com/) and self-hosted
[Inter](https://rsms.me/inter/), hosted on Netlify.

## Run it locally

Requires Node 22 (see `.nvmrc`).

```bash
nvm use          # or install Node 22 any other way
npm ci           # install exact dependency versions from package-lock.json
npm run develop  # http://localhost:8000, reloads on save
```

Production build and preview:

```bash
npm run build    # outputs to ./public
npm run serve    # http://localhost:9000
```

Before pushing, run all checks (lint, type check, build) in one go:

```bash
npm run check
```

## Edit content

All content lives in **`src/data/site.ts`**. Components only read from it, so you never need
to touch them to change text, links, projects or experience. The field types are in
`src/types/Site.ts`; your editor will flag a missing or misspelled field, and so will `npm run type`.

| What | Where in `site.ts` |
|---|---|
| Name, role line, one-sentence headline, location, photo | `person` |
| Email, LinkedIn, GitHub, resume, other links | `links` |
| Featured project cards (keep to about 6; one-line `summary` on the card, the rest under "Details") | `featured` |
| One-line projects in the collapsed "More work" list | `more` |
| Jobs, education, tools (one line) | `experience`, `education`, `tools` |
| "Work with me" sentence | `workWithMe` |
| Google Analytics ID (remove to disable) | `analytics` |
| Browser tab title, search/social description | `seo` |

### Add a featured project

Add an object to `featured` (order in the file is order on the page):

```ts
{
  id: 'short-unique-id',            // used as the card's HTML id
  title: 'Plain-language title',
  context: 'Company · 2025',
  summary: 'One line shown on the card. Lead with the result.',
  problem: 'One sentence: what was slow, wrong or missing.',
  built: 'One or two sentences: what you built and the patterns that matter.',
  outcome: 'One sentence: the result, with a number if you can share one.',
  stack: ['Python', 'FastAPI'],
  link: { label: 'Code on GitHub', url: 'https://github.com/...' },  // public work
  // internal: true,                // instead of `link`, for work that isn't public
},
```

To demote a project, move it to `more` as `{ title, context, summary, link? }`.

**For internal (employer) work:** describe the problem shape, your role, the patterns and rounded
or relative outcomes. Leave out internal system names, data volumes from sensitive sources,
access-control or detection details, screenshots and prompts.

### Replace the photo or resume

- Photo: put a square image (about 512×512 px) at `static/images/avatar.jpg`. Optionally add
  `static/images/avatar.webp` too. Then update `person.photo` if the file names differ.
- Resume: replace `static/Bhavya_Verma_Resume.pdf` (keep the name, or update the `resume` link).
- Social share image: `static/images/og.png` (1200×630).

## Deploy

Netlify builds and deploys automatically on every push to `master`. Build settings are in
`netlify.toml` (`npm run build`, publish `public/`, Node 22), so nothing needs to be set in the
Netlify dashboard beyond linking the GitHub repo. On Netlify, Gatsby uses `gatsby-adapter-netlify`
(a dependency) to write cache headers and cache build output between deploys.

```bash
git add -A
git commit -m "Update site content"
git push origin master
```

GitHub Actions (`.github/workflows/CI.yml`) runs lint, type check and build on each push and
pull request. It does not deploy.

To deploy without pushing (e.g. to preview a branch), use the Netlify CLI:

```bash
npx netlify-cli login
npx netlify-cli link              # once, pick the existing site
npm run build
npx netlify-cli deploy --dir=public          # draft URL
npx netlify-cli deploy --dir=public --prod   # live
```

## Project layout

```
src/data/site.ts        all content
src/types/Site.ts       content types
src/components/         Layout, Hero, ProjectCard, MoreWork, Experience, WorkWithMe, SeoHead, Analytics, ...
src/pages/index.tsx     the page (section order lives here)
src/pages/404.tsx       not-found page
src/styles/global.css   Tailwind entry + focus styles
static/                 files served as-is (photo, resume PDF, favicon, share image)
gatsby-config.ts        plugins (PostCSS/Tailwind)
netlify.toml            Netlify build settings
```
