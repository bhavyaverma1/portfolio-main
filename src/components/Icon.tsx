import React from 'react';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FiFileText } from '@react-icons/all-files/fi/FiFileText';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaMedium } from '@react-icons/all-files/fa/FaMedium';

import type { LinkKind } from '../types/Site';

const icons: Record<LinkKind, React.ComponentType<{ className?: string, 'aria-hidden'?: boolean }>> = {
  email: FiMail,
  resume: FiFileText,
  linkedin: FaLinkedin,
  github: FaGithub,
  twitter: FaTwitter,
  medium: FaMedium,
};

type IconProps = {
  kind: LinkKind,
  className?: string,
};

const Icon = ({ kind, className = 'w-4 h-4' }: IconProps): React.ReactElement => {
  const Component = icons[kind];
  return <Component className={className} aria-hidden />;
};

export default Icon;
