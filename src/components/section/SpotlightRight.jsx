import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { ParallaxBanner } from 'react-scroll-parallax'
import { convertToBgImage } from 'gbimage-bridge'
import { MDXContent } from '../Content'

const SpotlightRight = ({
  thisSectionId,
  nextSectionId,
  coverImage,
  heading,
  subheading,
  body
}) => {
  return (
    <section id={thisSectionId} className="">
      <ParallaxBanner
        className="spotlight style1 right"
        layers={[
          {
            image: convertToBgImage(coverImage.childImageSharp.gatsbyImageData)
              .fluid.src,
            speed: 30
          },
          {
            children: (
              <div className="content flex flex-col">
                <div className="py-7">
                  <h2 className="text-3xl">{heading}</h2>
                  <h3 className="text-2xl leading-loose">{subheading}</h3>
                </div>

                <div className="prose-neutral">
                  {/* <MDXRenderer>{body}</MDXRenderer> */}
                  {/* <MDXContent content={body} /> */}
                  <MDXProvider>{body}</MDXProvider>
                </div>
              </div>
            ),
            // speed: [-10, 5],
            disabled: true
          }
        ]}
      />
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
