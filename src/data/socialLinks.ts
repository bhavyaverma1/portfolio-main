// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/bhavyaverma1/',
    secondary: false,
    caption: 'Bhavya Verma on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/bhavyaverma1',
    secondary: false,
    caption: 'Bhavya Verma on GitHub',
  },
  {
    type: socialLinkTypes.twitter,
    url: 'https://twitter.com/_vermabhavya',
    secondary: false,
    caption: 'Bhavya Verma on Twitter',
  },
  {
    type: socialLinkTypes.instagram,
    url: 'https://www.instagram.com/bhavyaverm.a',
    secondary: true,
    hidden: true,
    caption: 'Bhavya Verma on Instagram',
  },
  {
    type: socialLinkTypes.medium,
    url: 'https://medium.com/@bhavya17142',
    secondary: true,
    caption: 'Bhavya Verma on Medium',
  },
];
