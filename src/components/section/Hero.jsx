import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { PreviewCompatibleImage } from '../'
import * as styles from './hero.module.scss'

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
    <section id={thisSectionId} className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>
        <span className={styles.image}>
          <PreviewCompatibleImage imageInfo={imgInfo} />
        </span>
      </div>
      <ScrollLink
        to={nextSectionId}
        className={styles.gotoNext}
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
