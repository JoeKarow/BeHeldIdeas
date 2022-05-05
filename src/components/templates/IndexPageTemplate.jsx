import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Hero, ShowcaseTop } from '../'

const IndexPageTemplate = ({ hero, about, mdx }, body) => {
  // debugger
  console.log(mdx)
  return (
    <>
      <Hero
        heading={hero.heading}
        subheading={hero.subheading}
        image={hero.image}
        alt={hero.imgAlt}
        thisSectionId="one"
        nextSectionId="two"
      />
      <MDXProvider>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      {/* <MDXRenderer>{mdx.mdxAST}</MDXRenderer> */}
      <ShowcaseTop
        coverImage={about.image}
        coverImageAlt={about.imgAlt}
        heading={about.heading}
        subheading={about.subheading}
        body={about.content}
        thisSectionId="two"
        nextSectionId="three"
      />
      <ShowcaseTop
        coverImage={about.image}
        coverImageAlt={about.imgAlt}
        heading={about.heading}
        subheading={about.subheading}
        body={about.content}
        thisSectionId="three"
        nextSectionId="three"
      />
    </>
  )
}

export default IndexPageTemplate
