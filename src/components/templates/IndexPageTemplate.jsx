import React from 'react'
import { Hero, SpotlightTop, SpotlightLeft, SpotlightRight } from '../'

const IndexPageTemplate = ({ data: { mdx } }) => {
  const {
    frontmatter: { hero, about, spotleft, spotright },
    body
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
      <SpotlightTop
        coverImage={about.image}
        coverImageAlt={about.imgAlt}
        heading={about.heading}
        subheading={about.subheading}
        body={about.content}
        thisSectionId="two"
        nextSectionId="three"
      />
      <SpotlightLeft
        coverImage={spotleft.image}
        coverImageAlt={spotleft.imgAlt}
        heading={spotleft.heading}
        subheading={spotleft.subheading}
        body={spotleft.content}
        thisSectionId="three"
        nextSectionId="three"
      />
      <SpotlightRight
        coverImage={spotright.image}
        coverImageAlt={spotright.imgAlt}
        heading={spotright.heading}
        subheading={spotright.subheading}
        body={spotright.content}
        thisSectionId="three"
        nextSectionId="three"
      />
    </>
  )
}

export default IndexPageTemplate
