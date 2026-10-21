import React from 'react';
import type { HeadFC } from 'gatsby';

import { site } from '../data/site';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import MoreWork from '../components/MoreWork';
import Experience from '../components/Experience';
import WorkWithMe from '../components/WorkWithMe';
import SeoHead from '../components/SeoHead';

const IndexPage = (): React.ReactElement => (
  <Layout showName={false}>
    <Hero person={site.person} links={site.links} />

    <Section id="work" title="Selected work">
      <div data-reveal-group className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.featured.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <MoreWork projects={site.more} />
    </Section>

    <Section id="experience" title="Experience">
      <Experience experience={site.experience} education={site.education} tools={site.tools} />
    </Section>

    <Section id="contact" title="Work with me">
      <WorkWithMe workWithMe={site.workWithMe} links={site.links} />
    </Section>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead pathname={location.pathname} withPersonSchema />
);
