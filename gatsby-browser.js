import React from 'react'
import './src/css/tailwind.scss'
import './src/css/main.scss'

import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks'
import Layout from './src/components/Layout'

setDefaultBreakpoints([
  { sm: '481px' },
  { md: '737px' },
  { lg: '981px' },
  { xl: '1281px' }
])

export const wrapRootElement = ({ element }) => {
  return <BreakpointProvider>{element}</BreakpointProvider>
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
