import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'
import ParallaxDivider from '../components/parallax-divider'
import { Helmet } from 'react-helmet'
import ContactForm from '../components/contact'
import * as styles from './contact.module.css'

class ContactIndex extends React.Component{
    render(){
        const siteData = this.props?.data?.allNodeDomain.edges[1].node
        
        const siteNavLogo = siteData.relationships.field_domain_logo[1].uri.url
        
        const siteName = siteData.title
        const pageTitle = "Full-Stack Development Company: "
        
        const parallaxImages = this.props.data.allNodeParallaxDivider.edges[0].node.relationships.field_parallax_image[3].uri.url
        console.log(parallaxImages)
        return(
          <>
            <Helmet title={siteName} defer={false} />
            <Layout location={this.props.location} siteTitle={siteName} pageTitle={pageTitle} navLogo={siteNavLogo}>
                  <ParallaxDivider imageUrl={'https://api.livebylife.com/'+ parallaxImages} header='Contact Live by Life Technologies' />
                <div className={styles.contactContent}>                    
                  <ContactForm/>
                </div>
            </Layout>
          </>
        )
    }
}

export default ContactIndex

export const pageQuery = graphql`
query ContactData {
    allNodeDomain {
      edges {
        node {
          title
          field_domain_slogan
          body {
            processed
          }
          relationships {
            field_domain_logo {
              filename
              uri {
                url
              }
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 412, layout: CONSTRAINED, placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    }
    
    allNodeParallaxDivider(
      filter: {field_dsmatch: {drupal_internal__target_id: {eq: 7}}, title: {eq: "Index"}}
    ) {
      edges {
        node {
          title
          relationships {
            field_parallax_image {
              uri{
                url
              }
            }
          }
        }
      }
    }
  }
  `