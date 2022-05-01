import React from 'react'
import { Content, HTMLContent } from '../Content'
import { Link as ScrollLink } from 'react-scroll'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const ShowcaseTop = ({
  thisSectionId,
  nextSectionId,
  coverImage,
  coverImageAlt = '',
  content1,
  content2
}) => {
  return (
    <section id={thisSectionId} className="spotlight style1 bottom">
      <span className="image fit main">
        <img src={coverImage} alt={coverImageAlt} />
      </span>
      <div className="content">
        <div className="container">
          {/* <div className='row'> */}
          <div className="lg:flex">
            {/* <div className='col-4 col-12-medium'> */}
            <div className="lg:basis-1/3 lg:my-auto">
              <HTMLContent content={content1} className="lg:w-fit lg:mx-auto" />
            </div>
            <div className="lg:col-end-2 lg:columns-2 lg:break-inside-auto lg:basis-2/3">
              <HTMLContent content={content2} />
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
  coverImage: PropTypes.string.isRequired,
  coverImageAlt: PropTypes.string.isRequired,
  content1: PropTypes.string,
  content2: PropTypes.string
}

export default ShowcaseTop
