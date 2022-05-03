import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  // const imageStyle = { borderRadius: "5px" };
  const imageStyle = {}

  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    console.log('image component: first condition')
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    )
  } else if (!!childImageSharp) {
    console.log('image component: second condition')
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    )
    // for Netlify CMS
  } else if (image) {
    console.log('image component: third condition')
    return <img src={image} alt={alt} />
    // <img style={{ imageStyle }} src={image} alt={alt} />
  } else {
    console.log('image component: no condition')
    return null
  }
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
}

export default PreviewCompatibleImage