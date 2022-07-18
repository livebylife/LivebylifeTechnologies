import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ServicePreview from '../components/services-preview'
import ParallaxDivider from '../components/parallax-divider'
import { Helmet } from "react-helmet"
import Topbanner from '../components/Topbanner'
import ContactForm from '../components/contact'
import AboutPreview from '../components/about-preview'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component{
  render(){
    
    const siteData = this.props?.data?.allNodeDomain.edges[0].node
    
    const siteNavLogo = siteData.relationships.field_domain_logo[1].uri.url
    const siteName = siteData.title
    const siteSlogan = siteData.field_domain_slogan
    const siteLogoURL = siteData.relationships.field_domain_logo[0].localFile.childImageSharp
    const services = siteData.relationships.node__domain_services
    const parallaxImages = this.props?.data?.allNodeParallaxDivider.edges[0].node
    
    return(
      <>
        <Helmet title={siteName} defer={false}/>
        <Topbanner/>
        <Hero imageUrl={siteLogoURL} title={siteName} content={siteSlogan} />
        <Layout location={this.props.location} siteTitle={siteName} navLogo={siteNavLogo} >
        <ParallaxDivider imageUrl={parallaxImages.relationships.field_parallax_image[0].uri.url}/>
        {/* <ArticlePreview posts={posts}/> */}
        <AboutPreview aboutContent={siteData.relationships.node__domain_about[0].body.processed}/>  
        <ServicePreview services={services} />
        <ParallaxDivider imageUrl={parallaxImages.relationships.field_parallax_image[1].uri.url}/>
        <ContactForm location={this.props.location}/>
        </Layout>
      </>
    )
  }
}
export default RootIndex

export const pageQuery = graphql`
query DomainData {
  allNodeDomain {
    edges {
      node {
        title
        field_domain_slogan
        body {
          processed
        }
        relationships {
          node__domain_services {
            title
            status
            path{
              alias
            }
            drupal_id
            body {
              processed
            }
            field_domain_service_slug {
              processed
            }
            relationships {
              field_ds_images {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 300)
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
          }
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
          },
          node__domain_about{
            body{
              processed
            }
          }
        }
      }
    }
  }
  allFileFile {
    edges {
      node {
        filename
        drupal_internal__fid
        uri {
          url
        }
      }
    }
  }
  allNodeArticle(
    sort: {order: DESC, fields: created}
    limit: 3
    filter: {status: {eq: true}}
  ) {
    pageInfo {
      perPage
    }
    nodes {
      title
      field_article_slug
      body {
        processed
      }
      relationships {
        field_image {
          uri {
            url
          }
          filename
          filesize
          children {
            id
          }
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 424
                height: 212
              )
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


