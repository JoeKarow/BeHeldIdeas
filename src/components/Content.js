import * as React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx'
import SocialLinks from './SocialLinks'
import Copyright from './Copyright'

const shortcodes = {SocialLinks, Copyright}


export const HTMLContent = ({ content, className }) => (
	<div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)


export class MDXContent extends React.Component {

	render() {
		console.log('i am running')
		return (
			<MDXProvider components={shortcodes}>
				<MDXRenderer>{this.props.content}</MDXRenderer>
			</MDXProvider>
		)
	}
}


const Content = ({ content, className }) => {
	console.log('i am the captain now')
	return (
	<div className={className}>{content}</div>
)
	}
Content.propTypes = {
	content: PropTypes.node,
	className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
