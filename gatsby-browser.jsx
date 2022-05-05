/** @format */

import React from 'react';
import './src/css/main.scss';
import './src/css/tailwind.scss';

import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import { MDXProvider } from '@mdx-js/react';
import Layout from './src/components/Layout';
import { SocialLinks } from './src/components';

// React-Socks Breakpoints
setDefaultBreakpoints([
  { sm: '481px' },
  { md: '737px' },
  { lg: '981px' },
  { xl: '1281px' },
]);

// MDX Components
const mdxShortcodes = {
  SocialLinks,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={mdxShortcodes}>
    <BreakpointProvider>{element}</BreakpointProvider>
  </MDXProvider>
);

export const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);
