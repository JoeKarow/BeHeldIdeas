import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Icon } from '@iconify/react'
import * as styles from './socialLinks.module.scss'

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    {
      socialsJson(Socials: { elemMatch: { active: { eq: true } } }) {
        Socials {
          service
          url
          icon
        }
      }
    }
  `)
  const { socialsJson } = data
  const li = socialsJson.Socials.map((social) => {
    return (
      <li key={`socialLink-${social.service}`}>
        <a href={social.url} className={styles.icon}>
          <Icon icon={social.icon.toLowerCase()} height="2rem" />
          <span className={styles.label}>{social.service}</span>
        </a>
      </li>
    )
  })
  return <ul className={styles.icons}>{li}</ul>
}

export default SocialLinks
