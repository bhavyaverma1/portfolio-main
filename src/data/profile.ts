import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Bhavya',
  lastName: 'Verma',
  position: 'Data Scientist [at] BlackCoffer',
  summary: [
    'ECE Undergrad from IIIT Delhi ❤',
  ],
  avatar: {
    // srcPath: 'profile/avatar_500x500.jpg',
    srcPath: 'profile/avatar_500.jpg',
    caption: 'Bhavya Verma',
  },
  location: {
    name: 'Jaipur, Rajasthan • from 🇮🇳',
  },
  tags: [
    { name: 'Python' },
    { name: 'Data Analysis' },
    { name: 'Machine Learning' },
    { name: 'NLP' },
    { name: 'ReactJS + Django' },
    { name: 'Git' },
  ],
  socialLinks,
};
