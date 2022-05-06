import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { ParallaxBanner } from 'react-scroll-parallax'
import { convertToBgImage } from 'gbimage-bridge'

const SpotlightTop = ({
  thisSectionId,
  nextSectionId,
  coverImage,
  coverImageAlt = '',
  heading,
  subheading,
  body
}) => {
  // console.log(body)

  return (
    <section id={thisSectionId} className="">
      <ParallaxBanner
        className="spotlight style1 bottom"
        // style={{ aspectRatio: '2 / 1' }}
        layers={[
          {
            image: convertToBgImage(coverImage.childImageSharp.gatsbyImageData)
              .fluid.src,
            speed: 40
          },
          {
            children: (
              <div className="content">
                <div className="container lg:flex lg:gap-x-7">
                  <div className="lg:basis-1/3 lg:my-auto">
                    <div className="lg:w-fit lg:mx-auto">
                      <h2 className="text-3xl">{heading}</h2>
                      <h3 className="text-lg">{subheading}</h3>
                    </div>
                  </div>
                  <div className="lg:col-end-2 lg:columns-2 lg:break-inside-auto lg:basis-2/3">
                    <MDXProvider>{body}</MDXProvider>
                  </div>
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

      {/* </BackgroundImage> */}
    </section>
  )
}

SpotlightTop.propTypes = {
  thisSectionId: PropTypes.string.isRequired,
  nextSectionId: PropTypes.string.isRequired,
  coverImage: PropTypes.object.isRequired,
  coverImageAlt: PropTypes.string.isRequired,
  content1: PropTypes.string,
  content2: PropTypes.string
}

export default SpotlightTop
