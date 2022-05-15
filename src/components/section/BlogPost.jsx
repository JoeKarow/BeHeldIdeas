import React from 'react'
import * as styles from './blogPost.module.scss'

const BlogPost = () => {
  return (
    <div id="main" class={styles.wrapper}>
      <div class={styles.container}>
        <div class={[styles.major, styles.header]}>
          <h2>No Sidebar</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </div>
        <article>
          <a href="#" class="image fit">
            <img src="images/pic07.jpg" alt="" />
          </a>
          <h3>Dolore Amet Consequat</h3>
          <p>
            Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est.{' '}
          </p>
        </article>
      </div>
    </div>
  )
}

export default BlogPost
