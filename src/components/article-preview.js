import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import * as styles from './article-preview.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          
          return (
            
            <li key={post.url}>
              
              <Link to={`/blog/${post.url}`} className={styles.link}>
                <GatsbyImage alt="" image={post.articleImageURL.childImageSharp.gatsbyImageData} />
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.slug,
                }}
              />
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
