import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import PropTypes from 'prop-types'
import { ParallaxBanner } from 'react-scroll-parallax'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { SpotlightContent } from '..'

const Spotlight = ({
  thisSectionId,
  nextSectionId,
  coverImage,
  coverImageAlt,
  heading,
  subheading,
  body,
  layout
}) => {
  const image = getImage(coverImage)
  return (
    <section id={thisSectionId}>
      <ParallaxBanner
        className={`spotlight style1 ${layout}`}
        layers={[
          {
            speed: -20,
            easing: 'ease',
            children: (
              <GatsbyImage
                image={image}
                alt={coverImageAlt}
                className="w-auto min-h-screen"
              />
            )
          },
          {
            speed: 0,
            opacity: [4, 0],
            children: (
              <SpotlightContent
                content={{ heading, subheading, body }}
                layout={layout}
                className={`content ${layout}`}
              />
            )
          },
          {
            speed: 3,
            easing: 'ease',
            children: (
              <ScrollLink
                to={nextSectionId}
                className="goto-next"
                activeClass="active"
                smooth={true}
                offset={0}
                duration={1000}
                spy={true}
                title="Next"
              />
            )
          }
        ]}></ParallaxBanner>
    </section>
  )
}

Spotlight.propTypes = {
  thisSectionId: PropTypes.string.isRequired,
  nextSectionId: PropTypes.string.isRequired,
  coverImage: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(['bottom', 'left', 'right']).isRequired
}

export default Spotlight
