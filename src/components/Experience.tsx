import React from 'react';

import type { Site } from '../types/Site';

type ExperienceProps = {
  experience: Site['experience'],
  education: Site['education'],
  tools: Site['tools'],
};

type RowProps = {
  period: string,
  title: string,
  place?: string,
  highlight?: string,
};

const Row = (props: RowProps): React.ReactElement => {
  const {
    period, title, place, highlight,
  } = props;
  return (
    <li className="flex flex-col gap-0.5 py-3 sm:flex-row sm:gap-6">
      <span className="text-sm text-slate-500 sm:w-44 sm:shrink-0 sm:pt-0.5">{period}</span>
      <div>
        <p className="text-slate-900">
          <span className="font-medium">{title}</span>
          {place ? <span className="text-slate-600"> · {place}</span> : null}
        </p>
        {highlight ? <p className="mt-0.5 text-sm text-slate-600">{highlight}</p> : null}
      </div>
    </li>
  );
};

const Experience = ({ experience, education, tools }: ExperienceProps): React.ReactElement => (
  <>
    <ol data-reveal-group className="divide-y divide-slate-100">
      {experience.map((role) => (
        <Row
          key={`${role.title}-${role.period}`}
          period={role.period}
          title={role.title}
          place={role.company}
          highlight={role.highlight}
        />
      ))}
      {education.map((item) => (
        <Row key={item.school} period={item.period} title={item.degree} place={item.school} />
      ))}
    </ol>
    <dl data-reveal className="mt-8 space-y-2 text-sm">
      {tools.map((group) => (
        <div key={group.label} className="sm:flex sm:gap-6">
          <dt className="font-medium text-slate-900 sm:w-44 sm:shrink-0">{group.label}</dt>
          <dd className="text-slate-600">{group.items.join(' · ')}</dd>
        </div>
      ))}
    </dl>
  </>
);

export default Experience;
