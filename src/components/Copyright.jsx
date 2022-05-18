import React from 'react'
import * as styles from './copyright.module.scss'
import { useStaticQuery, graphql } from 'gatsby'

const Copyright = () => {
  const data = useStaticQuery(graphql`
    {
      settingsJson {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <ul className={styles.copyright}>
      <li>
        &copy; {data.settingsJson.siteMetadata.author}. All rights reserved.
      </li>
      <li>
        Development: <a href="https://joekarow.dev">JoeKarow.dev</a>
      </li>
      <li>
        Design: <a href="http://html5up.net">HTML5 UP</a>
      </li>
    </ul>
  )
}

export default Copyright
