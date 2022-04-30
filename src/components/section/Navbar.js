import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import { title } from "process";
import useSiteMetadata from '../SiteMetadata'

const Navbar = () => {
	const { title, description } = useSiteMetadata()
	return (
		<header id='header'>
			<h1 id='logo'>
				<a href='/'>{title}</a>
			</h1>
			<nav id='nav'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/resume'>Resume</Link>
					</li>
					<li>
						<Link to='/blog'>Blog</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
