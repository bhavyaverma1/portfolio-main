import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight } from '@react-icons/all-files/fi/FiArrowUpRight';
import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown';

import type { FeaturedProject } from '../types/Site';

type ProjectCardProps = {
  project: FeaturedProject,
};

type FieldProps = {
  label: string,
  children: React.ReactNode,
};

const Field = ({ label, children }: FieldProps): React.ReactElement => (
  <div>
    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</dt>
    <dd className="mt-0.5 leading-relaxed text-slate-700">{children}</dd>
  </div>
);

const ProjectCard = ({ project }: ProjectCardProps): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const detailsRef = useRef<HTMLDListElement>(null);
  const detailsId = `${project.id}-details`;

  // Fade the details in when opened (skipped for reduced motion).
  useEffect(() => {
    const el = detailsRef.current;
    if (!open || !el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    import(/* webpackExports: ["animate"] */ 'animejs').then(({ animate }) => {
      animate(el, {
        opacity: [0, 1],
        translateY: [-6, 0],
        duration: 260,
        ease: 'outQuad',
        onComplete: () => {
          el.style.removeProperty('opacity');
          el.style.removeProperty('transform');
        },
      });
    });
  }, [open]);

  const link = project.link ? (
    <a
      href={project.link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
    >
      {project.link.label}
      <span className="sr-only"> for {project.title}</span>
      <FiArrowUpRight className="h-4 w-4" aria-hidden />
    </a>
  ) : (
    <span className="text-slate-500">{project.internal ? 'Internal' : null}</span>
  );

  return (
    <article
      id={project.id}
      className="flex flex-col rounded-xl border border-slate-200 p-5 transition duration-200 hover:border-slate-300 hover:shadow-md motion-safe:hover:-translate-y-0.5 sm:p-6"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{project.context}</p>
      <h3 className="mt-1.5 text-lg font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 leading-relaxed text-slate-700">{project.summary}</p>

      <dl ref={detailsRef} id={detailsId} hidden={!open} className="mt-4 space-y-3 border-t border-slate-100 pt-4 text-sm">
        <Field label="Problem">{project.problem}</Field>
        <Field label="Built">{project.built}</Field>
        <Field label="Outcome">{project.outcome}</Field>
        <Field label="Stack">{project.stack.join(' · ')}</Field>
      </dl>

      <div className="mt-auto flex items-center justify-between gap-4 pt-5 text-sm">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={(): void => setOpen(!open)}
          className="inline-flex items-center gap-1 font-medium text-slate-700 hover:text-slate-900"
        >
          {open ? 'Hide details' : 'Details'}
          <FiChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
          <span className="sr-only"> for {project.title}</span>
        </button>
        {link}
      </div>
    </article>
  );
};

export default ProjectCard;
