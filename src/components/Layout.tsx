import React from 'react';

import { site } from '../data/site';
import ContactLinks from './ContactLinks';
import Analytics from './Analytics';
import useScrollReveal from './useScrollReveal';

type LayoutProps = {
  children: React.ReactNode,
  // The home page shows the name in the hero, so the header doesn't repeat it.
  showName?: boolean,
};

const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
];

const Layout = ({ children, showName = true }: LayoutProps): React.ReactElement => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-10 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className={`flex items-center py-5 ${showName ? 'justify-between' : 'justify-end'}`}>
          {showName ? <a href="/" className="font-semibold text-slate-900">{site.person.name}</a> : null}
          <nav aria-label="Main">
            <ul className="flex gap-6 text-sm text-slate-600">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-slate-900 hover:underline">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main id="main">
          {children}
        </main>
        <footer className="flex flex-col-reverse items-center gap-4 border-t border-slate-200 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {site.person.name}
            {site.footerNote ? <span className="block text-xs sm:mt-0.5">{site.footerNote}</span> : null}
          </p>
          <ContactLinks links={site.links} iconOnly className="gap-x-3" />
        </footer>
      </div>
      <Analytics googleAnalyticsId={site.analytics?.googleAnalyticsId} />
    </div>
  );
};

export default Layout;
