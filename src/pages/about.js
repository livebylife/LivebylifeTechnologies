import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from './about.module.css'
//import {GatsbyImage} from 'gatsby-plugin-image'
import Container from '../components/container'
import Contact from '../components/contact'
import ParallaxDivider from '../components/parallax-divider'

class AboutIndex extends React.Component {
    render() {
        const domain = this.props?.data?.nodeDomain
        const aboutData = domain.relationships.node__domain_about[0]
        const parallaxImages = this.props?.data?.allNodeParallaxDivider.edges[0].node
        console.log("about index:")
        console.log(parallaxImages)
        
        return(
            <>
           
                <Seo/>
                <Layout location={this.props.location} siteTitle={domain.title} navLogo={domain.relationships.field_domain_logo[1].uri.url}>
                     <Container>
                      <div className={styles.about}>
                        <h1 className={styles.title}>{aboutData.title}</h1>
                        <div className={styles.body} dangerouslySetInnerHTML={{__html: aboutData.body.processed}}></div>
                      </div>
                    </Container>
                    <ParallaxDivider imageUrl={'https://api.livebylife.com/' + parallaxImages.relationships.field_parallax_image[2].uri.url}/>
                    <Container>
                      <Contact/>
                    </Container>  
                </Layout>
            </>
        )
    }
}
export default AboutIndex

export const pageQuery = graphql`query DomainAbout {
  nodeDomain(drupal_internal__nid: {eq: 7}) {
    title
    body {
      processed
    }
    field_domain_slogan
    relationships {
      field_domain_logo {
        uri {
          url
        }
      }
      node__domain_about {
        title
        body {
          processed
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
            uri {
              url
            }
          }
        }
      }
    }
  }
  }`