import React from 'react'
import { Hero, Spotlight } from '../'

const IndexPageTemplate = ({ data: { mdx } }) => {
  const {
    frontmatter: { hero, about, spotleft, spotright }
  } = mdx

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
      <Spotlight
        layout="bottom"
        coverImage={about.image}
        coverImageAlt={about.imgAlt}
        heading={about.heading}
        subheading={about.subheading}
        body={about.content}
        thisSectionId="two"
        nextSectionId="three"
      />
      <Spotlight
        layout="left"
        coverImage={spotleft.image}
        coverImageAlt={spotleft.imgAlt}
        heading={spotleft.heading}
        subheading={spotleft.subheading}
        body={spotleft.content}
        thisSectionId="three"
        nextSectionId="four"
      />
      <Spotlight
        layout="right"
        coverImage={spotright.image}
        coverImageAlt={spotright.imgAlt}
        heading={spotright.heading}
        subheading={spotright.subheading}
        body={spotright.content}
        thisSectionId="four"
        nextSectionId="five"
      />
    </>
  )
}

export default IndexPageTemplate
