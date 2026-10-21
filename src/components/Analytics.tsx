import React from 'react';
import { Script } from 'gatsby';

type AnalyticsProps = {
  googleAnalyticsId?: string,
};

// Google Analytics 4, loaded once the browser is idle after hydration so it
// doesn't compete with first render or input. Skipped when Do Not Track is on.
// @see: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-script/
const Analytics = ({ googleAnalyticsId }: AnalyticsProps): React.ReactElement | null => {
  if (!googleAnalyticsId || process.env.NODE_ENV !== 'production') {
    return null;
  }

  const init = `
    if (!(navigator.doNotTrack === '1' || window.doNotTrack === '1')) {
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}';
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', '${googleAnalyticsId}');
    }
  `;

  return <Script id="google-analytics" strategy="idle">{init}</Script>;
};

export default Analytics;
