import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  // const blogLink: Link = {
  //   url: `${routes.blog.path}/`,
  // };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline font-semibold">projects</HyperLink>
    </span>
  );

  // const blogLinkElement = (
  //   <span className="inline-block">
  //     <HyperLink link={blogLink} className="underline font-semibold">articles</HyperLink>
  //   </span>
  // );

  return (
    <p className="font-light">
      Hi there!
        I&apos;m Bhavya. Graduated with a Bachelor's of Tech in Electronics and Communication Engineering from IIIT Delhi. I worked as a SWE intern @Autodesk Bangalore. Big Data, Machine Learning Challenges
        and Math behind them, etc. is my current forte. Also I am a little obssesed with fitness, movies, music and reading self-help books and philosophies.
    </p>
  );
};

export default Greeting;
