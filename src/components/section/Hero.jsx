import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { PreviewCompatibleImage } from '../'

const Hero = ({
  thisSectionId,
  nextSectionId,
  heading,
  subheading,
  image,
  alt = ''
}) => {
  const imgInfo = { image, alt }
  return (
    <section id={thisSectionId} className="banner">
      <div className="content">
        <div className="header">
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>
        <span className="image">
          <PreviewCompatibleImage imageInfo={imgInfo} />
        </span>
      </div>
      <ScrollLink
        to={nextSectionId}
        className="goto-next animate-bounce"
        activeClass="active"
        smooth={true}
        offset={0}
        duration={1000}
        spy={true}
        title="Next"
      />
    </section>
  )
}

export default Hero
