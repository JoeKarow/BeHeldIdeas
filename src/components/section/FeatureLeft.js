import React from 'react'
import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'gatsby'

const FeatureLeft = ({
  thisSectionId,
  nextSectionId,
  featureImage,
  featureImageAlt = ''
}) => {
  return (
    <section id={thisSectionId} className="spotlight style2 left">
      <span className="image fit main bottom">
        <img src={featureImage} alt={featureImageAlt} />
      </span>
      <div className="content">
        <header>
          <h2>Interdum amet non magna accumsan</h2>
          <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
        </header>
        <p>
          Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim
          mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet
          augue varius tempus lobortis porttitor lorem et accumsan consequat
          adipiscing lorem.
        </p>
        <ul className="actions">
          <li>
            <Link to="one" className="button">
              Learn More
            </Link>
          </li>
        </ul>
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

FeatureLeft.propTypes = {
  thisSectionId: PropTypes.string.isRequired,
  nextSectionId: PropTypes.string.isRequired,
  featureImage: PropTypes.string.isRequired,
  featureImageAlt: PropTypes.string.isRequired
}

export default FeatureLeft