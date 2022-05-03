import React from 'react'
// import { Content, HTMLContent } from '../Content'
import { Link as ScrollLink } from 'react-scroll'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const ShowcaseTop = ({
  thisSectionId,
  nextSectionId,
  coverImage,
  coverImageAlt = '',
  heading,
  subheading,
  body
}) => {
  const imgInfo = { image: coverImage, alt: coverImageAlt }

  return (
    <section id={thisSectionId} className="spotlight style1 bottom">
      <span className="image fit main">
        <PreviewCompatibleImage imageInfo={imgInfo} />
      </span>
      <div className="content">
        <div className="container">
          {/* <div className='row'> */}
          <div className="lg:flex">
            {/* <div className='col-4 col-12-medium'> */}
            <div className="lg:basis-1/3 lg:my-auto">
              <div className="lg:w-fit lg:mx-auto">
                <h2>{heading}</h2>
                <h3>{subheading}</h3>
              </div>
            </div>
            <div className="lg:col-end-2 lg:columns-2 lg:break-inside-auto lg:basis-2/3">
              <MDXProvider>{body}</MDXProvider>
            </div>
          </div>
        </div>
      </div>
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
    </section>
  )
}

ShowcaseTop.propTypes = {
  thisSectionId: PropTypes.string.isRequired,
  nextSectionId: PropTypes.string.isRequired,
  coverImage: PropTypes.object.isRequired,
  coverImageAlt: PropTypes.string.isRequired,
  content1: PropTypes.string,
  content2: PropTypes.string
}

export default ShowcaseTop
