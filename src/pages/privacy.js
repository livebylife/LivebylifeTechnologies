import React from 'react'
import Layout from "../components/layout"
import Container from '../components/container'
import ParallaxDivider from '../components/parallax-divider'
import ContactForm from '../components/contact'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import * as styles from './privacy.module.css'


class PrivacyIndex extends React.Component {
    render(){
        const siteData = this.props?.data?.nodeDomain
        const siteName = siteData?.title
        const siteNavLogo = siteData?.relationships.field_domain_logo[0].uri.url
        const parallaxImages = siteData?.relationships.node__parallax_divider[0].relationships.field_parallax_image[3].uri.url
        const policy = siteData?.field_privacy_policy.processed
        //console.log(parallaxImages)
        return(
            <>
                <Seo/>
                <Layout location={this.props.location} siteTitle={siteName} navLogo={siteNavLogo}>
                    <div>
                        <ParallaxDivider imageUrl={parallaxImages}/>
                    </div>
                    <Container>
                        <div className={styles.Policy} dangerouslySetInnerHTML={{__html:policy}}/>
                        <ContactForm/>
                    </Container>
                </Layout>
            </>
        )
    }
}

export default PrivacyIndex

export const pageQuery = graphql`
query DomainPrivacyData {
    nodeDomain(drupal_internal__nid: {eq: 7}) {
      title
      drupal_id
      drupal_internal__nid
      relationships {
        field_domain_logo {
          uri {
            url
          }
        }
        node__parallax_divider {
          relationships {
            field_parallax_image {
              uri {
                url
              }
            }
          }
        }
      }
      field_privacy_policy {
        processed
      }
      field_domain_slogan
    }
  }`