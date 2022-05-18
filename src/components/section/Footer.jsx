import * as React from 'react'
import { SocialLinks, Copyright } from '../'
import * as styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer id="footer2" className={styles.footer}>
      <SocialLinks />
      <Copyright />
    </footer>
  )
}
export default Footer
