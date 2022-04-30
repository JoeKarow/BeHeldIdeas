import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      allNavigationJson {
        nodes {
          text
          url
          id
        }
      }
      settingsJson {
        siteMetadata {
          title
        }
      }
    }
  `)
  const li = data.allNavigationJson.nodes.map(navitem => {
    return (
      <li key={navitem.id}>
        <Link to={navitem.url}>{navitem.text}</Link>
      </li>
    )
  })
  console.log(data)
  const { title } = data.settingsJson.siteMetadata
  console.log(title)
  return (
    <header id="header">
      <h1 id="logo">
        <Link to="/">{title}</Link>
      </h1>
      <nav id="nav">
        <ul>{li}</ul>
      </nav>
    </header>
  )
}

export default Navbar
