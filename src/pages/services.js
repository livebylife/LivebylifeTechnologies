import React, {useRef, useEffect} from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from './services.module.css'
import {GatsbyImage} from 'gatsby-plugin-image'
import Contact from '../components/contact'

class ServicesIndex extends React.Component {
  
    render() {
      const domain = this.props?.data?.nodeDomain
      const servicesOriginal = domain.relationships
      const pageTitle = "What we're offering: " + domain.title
      let services = servicesOriginal.node__domain_services.map(function(service){
                      return{
              "title": service.title,
              "body": service.body.value,
              "images": service.relationships.field_ds_images,
              "menu-label": service.menulabel,
              "url": service.path.alias,
              "id": service.drupal_id
          }
      })
      const seoDescription = "services[(services.length - 1)].body"
      const seoImage = "services[(services.length - 1)].images[0].localFile.childImageSharp.gatsbyImageData"
      
      return (
        <> 
          
        <Layout 
          location={this.props.location} 
          siteTitle={domain.title} 
          navLogo={domain.relationships.field_domain_logo[1].uri.url}
          pageTitle={pageTitle}
          seoDescription={seoDescription}
          seoImage={seoImage}
          >
            {services.map((sItem) => {
              
              return(
                <div key={sItem.url} className={styles.serviceItem}>
                  <div className={styles.servicesHero}>
                    <div id={`${sItem.url}`}></div>   
                      <div className={styles.servicesHeroContainer}>
                          <GatsbyImage image={sItem.images[0].localFile.childImageSharp.gatsbyImageData} className={styles.image} alt={sItem.title} />
                          <div className={styles.details}>
                              <h1 className={styles.title}>{sItem.title}</h1>
                              <h2 className={styles.content}></h2>
                          </div>
                      </div>
                  </div>
                  <div className={styles.service}>
                    <div  dangerouslySetInnerHTML={{__html: sItem.body,
                      }}
                    />
                    
                  </div>
                  
                </div>
                
              )  
            })}
            <Contact/>
        </Layout>
      </>
    )
  }
}
export default ServicesIndex

export const pageQuery = graphql`query DomainServices {
  nodeDomain (drupal_internal__nid: {eq: 7}) {
    title
    body {
      processed
    }
    field_domain_slogan
    relationships {
      node__domain_services {
        title
        drupal_id
        body {
          value
        }
        relationships {
          field_ds_images {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1280)
              }
            }
            uri {
              url
            }
          }
        }
        field_ds_images {
          title
          alt
        }
        status
        drupal_id
        path {
          alias
        }
      }
      field_domain_logo {
        uri {
          url
        }
      }
    }
  }
}`