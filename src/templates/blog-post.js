import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import {GatsbyImage} from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Layout from '../components/layout'

import * as styles from './blog-post.module.css'

function replaceSpecificImage(str, imageNum, newString) {
  return str.replace(new RegExp(`\\[IMAGE-${imageNum}\\]`, 'g'), newString);
}

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props.pageContext)
    const siteNavLogo = get(this, 'props.data.nodeDomain.relationships.field_domain_logo[1].uri.url')
    const siteName = get(this, 'props.data.nodeDomain.title')
    const heading = get(this,'props.data.nodeBook.title')
    var bodyData = get(this, 'props.data.nodeBook.body.value')
    let nextTitle = get(this, 'props.pageContext.ntitle')
    if(nextTitle){
      nextTitle = nextTitle + " >"
    }
    const nextPath = get(this, 'props.pageContext.npath')
    let previousTitle = get(this, 'props.pageContext.ptitle')
    if(previousTitle){
      previousTitle = "< " + previousTitle
    }
    const previousPath = get(this,'props.pageContext.ppath')
    const images = get(this, 'props.data.nodeBook.relationships.field_book_image_s_')
    const featureImage = get(this, 'props.data.nodeBook.relationships.field_feature_.localFile.childImageSharp.gatsbyImageData')
    
    for(let i = 0; i < images.length; i++){
      let imageString = '';
      if(i & 1){
        imageString = "<img src='" + images[i].localFile.childImageSharp.gatsbyImageData.images.fallback.src + "' class='embededImage' styles='float: left;' width='400px;'/>"
        
      }else{
        imageString = "<img src='" + images[i].localFile.childImageSharp.gatsbyImageData.images.fallback.src + "' class='embededImage' styles='float: right;' width='400px;'/>"
        
      }
      
      bodyData = replaceSpecificImage(bodyData, i, imageString)
      
    }
    const navLinks = () => {
      if(previousTitle === null){
        if(nextTitle === null){
          return(<div className={styles.navLinks}>
            No Links
          </div>)
        }else{
          return(<div className={styles.navLinks}>
            <div className={styles.navLinksRight}>
              <Link to={nextPath}>{nextTitle} &gt;</Link>
            </div>
          </div>)
        }
      }else if(nextTitle === null){
        return(<div className={styles.navLinks}>
            <div className={styles.navLinksLeft}>
              <Link to={previousPath}>{previousTitle} &gt;</Link>
            </div>
          </div>)
      }else{
          return(<div className={styles.navLinks}>
            <div className={styles.navLinksLeft}>
              <Link to={previousPath}>{previousTitle} &gt;</Link>
            </div>
            <div className={styles.navLinksRight}>
              <Link to={nextPath}>{nextTitle} &gt;</Link>
            </div>
          </div>)
      }
      
    }

    console.log(navLinks)
    return (
      <Layout location={this.props.location} siteTitle={siteName} navLogo={siteNavLogo}>
        <div className={styles.article}>
          <GatsbyImage image={featureImage} className={styles.featureImage} alt={heading}/>
          <h1 className={styles.heading}>{heading}</h1>
          <div className={styles.body} dangerouslySetInnerHTML={{__html:bodyData}}/>
          

          <div className={styles.navLinks}>
            <div className={styles.navLinksLeft}>
              <Link to={previousPath}> {previousTitle}</Link>
            </div>
            <div className={styles.navLinksRight}>
              <Link to={nextPath}>{nextTitle} </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const query = graphql`
query BlogPostById($id: Int!){
  nodeBook(drupal_internal__nid:{eq:$id}){
    title
    body {
      value
    }
    relationships {
      field_feature_ {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      field_book_image_s_ {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
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
