import React from 'react'
import './src/css/main.scss'
import './src/css/tailwind.scss'

import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks'
import Layout from './src/components/Layout'
import { MDXProvider } from '@mdx-js/react'
import { SocialLinks } from './src/components'

// React-Socks Breakpoints
setDefaultBreakpoints([
  { sm: '481px' },
  { md: '737px' },
  { lg: '981px' },
  { xl: '1281px' }
])

// MDX Components
const mdxShortcodes = {
  SocialLinks
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={mdxShortcodes}>
      <BreakpointProvider>{element}</BreakpointProvider>)
    </MDXProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
