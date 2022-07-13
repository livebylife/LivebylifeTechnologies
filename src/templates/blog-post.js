import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/blog-hero'
import * as styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const siteNavLogo = get(this, 'props.data.nodeDomain.relationships.field_domain_logo[1].uri.url')
    const siteName = get(this, 'props.data.nodeDomain.title')
    const post = get(this.props, 'data.nodeArticle')
    const dataPrevious = get(this.props, 'data.previous')
    const dataNext = get(this.props, 'data.next')
    const previous = dataPrevious.title.split(" ").join("-")
    const next = dataNext.title.split(" ").join("-")
    return (
      <Layout location={this.props.location} siteTitle={siteName} navLogo={siteNavLogo}>
        <Seo
          title={post.title}
          description={post.body.processed}
          image={`http:${post.relationships.field_image.localFile.childImageSharp.gatsbyImageData}`}
        />
        <Hero
          image={post.relationships.field_image.localFile.childImageSharp.gatsbyImageData}
          title={post.field_image.title}
          content={post.field_article_slug}
        />
        <div className={styles.container}>
          <span className={styles.meta}>
            {/* {post.author?.name} &middot;{' '}
            <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
            {post.body?.childMarkdownRemark?.timeToRead} minute read */}
          </span>
          <div className={styles.article}>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: post.body.processed,
              }}
            />
            {/* <Tags tags={post.tags} /> */}
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.url}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.url}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostById(
  $id: String!
  $previousId: String
  $nextId: String
 ){
  nodeArticle(drupal_id:{eq:$id})  {
    title
    field_article_slug
    body {
      processed
    }
    relationships {
      field_image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
    created(formatString: "MMMM DD, YYYY")
    drupal_id
    field_image {
      title
      alt
    }
  }
  previous: nodeArticle(drupal_id:{eq:$previousId}) {title}
  next:nodeArticle(drupal_id:{eq:$nextId}) {title}
  nodeDomain(drupal_internal__nid: {eq: 7}) {
    relationships {
      field_domain_logo {
        uri {
          url
        }
      }
    }
    field_domain_logo {
      title
      alt
    }
    drupal_internal__nid
    title
  }
 }
`
