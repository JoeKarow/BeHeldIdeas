import React from 'react'
import { Hero, SpotlightTop } from '../'

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
      <SpotlightTop
        coverImage={about.image}
        coverImageAlt={about.imgAlt}
        heading={about.heading}
        subheading={about.subheading}
        body={about.content}
        thisSectionId="two"
        nextSectionId="three"
      />
      <SpotlightTop
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
