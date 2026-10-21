import React from 'react';
import { FiMail } from '@react-icons/all-files/fi/FiMail';

import type { Site } from '../types/Site';

type WorkWithMeProps = {
  workWithMe: Site['workWithMe'],
  links: Site['links'],
};

const WorkWithMe = ({ workWithMe, links }: WorkWithMeProps): React.ReactElement => {
  const email = links.find((link) => link.kind === 'email');

  return (
    <div data-reveal className="max-w-xl">
      <p className="text-lg leading-relaxed text-slate-700">{workWithMe.body}</p>
      {email ? (
        <div className="mt-6">
          <a
            href={email.url}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:bg-teal-800"
          >
            <FiMail className="h-4 w-4" aria-hidden />
            {email.url.replace(/^mailto:/, '')}
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default WorkWithMe;
