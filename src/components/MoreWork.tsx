import React from 'react';

import type { MoreProject } from '../types/Site';

type MoreWorkProps = {
  projects: MoreProject[],
};

const MoreWork = ({ projects }: MoreWorkProps): React.ReactElement => (
  <details data-reveal className="mt-6 rounded-xl border border-slate-200">
    <summary className="cursor-pointer select-none px-5 py-4 font-medium text-slate-900 sm:px-6">
      More work ({projects.length})
    </summary>
    <ul className="divide-y divide-slate-100 px-5 pb-2 sm:px-6">
      {projects.map((project) => (
        <li key={project.title} className="py-3">
          <p className="text-slate-900">
            <span className="font-medium">{project.title}</span>
            <span className="text-slate-600"> · {project.context}</span>
          </p>
          <p className="mt-0.5 text-sm text-slate-700">
            {project.summary}
            {project.link ? (
              <>
                {' '}
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  {project.link.label}
                  <span className="sr-only"> for {project.title}</span>
                </a>
              </>
            ) : null}
          </p>
        </li>
      ))}
    </ul>
  </details>
);

export default MoreWork;
