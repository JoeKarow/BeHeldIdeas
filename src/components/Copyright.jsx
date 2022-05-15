import React from 'react'
import { siteMetadata } from '../data/settings/settings.json'
import * as styles from './copyright.module.scss'

const Copyright = () => {
  return (
    <ul className={styles.copyright}>
      <li>&copy; {siteMetadata.author}. All rights reserved.</li>
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
