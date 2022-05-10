import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import PropTypes from 'prop-types'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const SpotlightRight = ({
  thisSectionId,
  nextSectionId,
  coverImage,
  heading,
  subheading,
  body
}) => {
  const image = getImage(coverImage)
  return (
    <Parallax pages={1}>
      <section id={thisSectionId} className="spotlight style1 right">
        <ParallaxLayer speed="1">
          <GatsbyImage image={image} />
        </ParallaxLayer>
        <ParallaxLayer speed="2">
          <div className="content flex flex-col">
            <div className="py-7">
              <h2 className="text-3xl">{heading}</h2>
              <h3 className="text-2xl leading-loose">{subheading}</h3>
            </div>

            <div className="prose-neutral">
              <MDXRenderer>{body}</MDXRenderer>
              {/* <MDXContent content={body} /> */}
              {/* <MDXProvider>{body}</MDXProvider> */}
            </div>
          </div>
        </ParallaxLayer>
        <ScrollLink
          to={nextSectionId}
          className="goto-next"
          activeClass="active"
          // style={{ border: 'solid 10px red !important' }}
          smooth={true}
          offset={0}
          duration={1000}
          spy={true}
          title="Next"
        />
      </section>
    </Parallax>
  )
}

SpotlightRight.propTypes = {
  thisSectionId: PropTypes.string.isRequired,
  nextSectionId: PropTypes.string.isRequired,
  coverImage: PropTypes.object.isRequired,
  coverImageAlt: PropTypes.string.isRequired,
  content1: PropTypes.string,
  content2: PropTypes.string
}

export default SpotlightRight
