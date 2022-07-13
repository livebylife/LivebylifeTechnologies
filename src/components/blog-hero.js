import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
// import {Link} from 'gatsby';

import * as styles from './blog-hero.module.css'

const blogHero = ({ image, title, content }) => (
    <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
)

export default blogHero