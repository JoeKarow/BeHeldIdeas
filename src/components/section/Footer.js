import * as React from 'react'
import { Link } from 'gatsby'

import SocialLinks from '../SocialLinks'
import Copyright from '../Copyright'

const Footer = () => {
	return (
		<footer id='footer'>
			<SocialLinks />
			<Copyright />
		</footer>
	)
}
export default Footer
