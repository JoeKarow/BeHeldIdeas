import React from 'react'
import Hero from '../section/Hero'
import ShowcaseTop from '../section/ShowcaseTop'

export const IndexPageTemplate = ({ hero, about }, body) => {
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
      <ShowcaseTop
        coverImage={about.image}
        coverImageAlt={about.imgAlt}
        heading={about.heading}
        subheading={about.subheading}
        body={about.content}
        thisSectionId="two"
        nextSectionId="three"
      />
    </>
  )
}
