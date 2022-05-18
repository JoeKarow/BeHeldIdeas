import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from './navbar.module.scss'

const Navbar = () => {
  const { settingsJson, navigationJson } = useStaticQuery(graphql`
    {
      settingsJson {
        siteMetadata {
          title
        }
      }
      navigationJson {
        items {
          text
          url
        }
      }
    }
  `)
  const li = navigationJson.items.map((navitem) => {
    return (
      <li key={navitem.text}>
        <Link to={navitem.url}>{navitem.text}</Link>
      </li>
    )
  })
  const { title } = settingsJson.siteMetadata
  return (
    <header className={styles.header}>
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
