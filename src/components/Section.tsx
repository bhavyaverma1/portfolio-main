import React from 'react';

type SectionProps = {
  id: string,
  title: string,
  children: React.ReactNode,
};

const Section = ({ id, title, children }: SectionProps): React.ReactElement => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8 py-12 sm:py-16">
    <h2 id={`${id}-title`} data-reveal className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
