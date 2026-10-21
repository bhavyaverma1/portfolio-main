import React from 'react';

import type { Site } from '../types/Site';
import ContactLinks from './ContactLinks';

type HeroProps = {
  person: Site['person'],
  links: Site['links'],
};

const Hero = ({ person, links }: HeroProps): React.ReactElement => (
  <section
    aria-labelledby="hero-title"
    className="flex flex-col items-center gap-8 py-10 text-center sm:flex-row sm:gap-12 sm:py-20 sm:text-left"
  >
    <picture className="shrink-0">
      {person.photo.webp ? <source srcSet={person.photo.webp} type="image/webp" /> : null}
      <img
        src={person.photo.src}
        alt={person.photo.alt}
        width={256}
        height={256}
        className="h-48 w-48 rounded-full object-cover sm:h-64 sm:w-64"
      />
    </picture>
    <div className="max-w-xl">
      <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        {person.name}
      </h1>
      <p className="mt-2 text-lg text-slate-600">
        {/* Keep each " · "-separated part on one line so wrapping happens between parts. */}
        {person.role.split(' · ').map((part, i) => (
          <React.Fragment key={part}>
            {i > 0 ? ' · ' : null}
            <span className="whitespace-nowrap">{part}</span>
          </React.Fragment>
        ))}
      </p>
      <p className="mt-6 text-xl leading-snug text-slate-900 sm:text-2xl">{person.headline}</p>
      <p className="mt-4 text-sm text-slate-500">{person.location}</p>
      <ContactLinks
        links={links}
        kinds={['email', 'linkedin', 'github', 'resume']}
        className="mt-6 justify-center sm:justify-start"
      />
    </div>
  </section>
);

export default Hero;
