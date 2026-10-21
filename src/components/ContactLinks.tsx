import React from 'react';

import type { ContactLink, LinkKind } from '../types/Site';
import Icon from './Icon';

type ContactLinksProps = {
  links: ContactLink[],
  // Only show these kinds, in the order given in the data file.
  kinds?: LinkKind[],
  // Show icons only (labels stay available to screen readers).
  iconOnly?: boolean,
  className?: string,
};

const isExternal = (url: string): boolean => /^https?:\/\//.test(url);

const ContactLinks = (props: ContactLinksProps): React.ReactElement => {
  const {
    links, kinds, iconOnly = false, className = '',
  } = props;
  const shown = kinds ? links.filter((link) => kinds.includes(link.kind)) : links;

  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {shown.map((link) => (
        <li key={link.kind}>
          <a
            href={link.url}
            aria-label={iconOnly ? link.label : undefined}
            title={iconOnly ? link.label : undefined}
            className={iconOnly
              ? 'inline-flex p-1 text-slate-500 hover:text-slate-900'
              : 'inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline'}
            {...(isExternal(link.url) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon kind={link.kind} className={iconOnly ? 'h-5 w-5' : 'h-4 w-4'} />
            {iconOnly ? null : link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactLinks;
