import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../components/layout';
import * as styles from './about.module.css';
import Container from '../components/container';
import Contact from '../components/contact';
import ParallaxDivider from '../components/parallax-divider';
import { Helmet } from 'react-helmet';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import tspOptions from '../components/tsparticle_options';

class AboutIndex extends React.Component {
  render() {
    const domain = this.props?.data?.nodeDomain;
    const aboutData = domain.relationships.node__domain_about[0];
    const parallaxImages = this.props?.data?.allNodeParallaxDivider.edges[0].node;

    // Function to prepend the image sources with "https://api.livebylife.com"
    const prependImageSrc = (html) => {
      const regex = /<img(.*?)src="(.*?)"(.*?)>/g;
      const replacedHtml = html.replace(regex, `<img$1src="https://api.livebylife.com$2"$3>`);
      return replacedHtml;
    };

    // Function to add "testimonial-image" class to images before blockquotes
    const addTestimonialImageClass = (html) => {
      const regex = /<p><img(.*?)><blockquote>/g;
      const replacedHtml = html.replace(regex, '<p><img$1 class="testimonial-image" style="width:80px"></p><blockquote>');
      return replacedHtml;
    };

    const removeImageDimensions = (html) => {
      const regex = /(<img[^>]+)width="[^"]+"([^>]+)height="[^"]+"/g;
      const replacedHtml = html.replace(regex, '$1$2');
      return replacedHtml;
    };
    const formattedBody = removeImageDimensions(addTestimonialImageClass(prependImageSrc(aboutData.body.processed)));
    // Load tsParticles
    const particlesInit = async (main) => {
      await loadFull(main);
    };
    const particlesLoaded = (container) => {};

    const pageTitle = aboutData.title + ' | ' + domain.title;
    const metaDescription = aboutData.field_meta_description;
    return (
      <>
        <Layout
          location={this.props.location}
          siteTitle={domain.title}
          navLogo={domain.relationships.field_domain_logo[1].uri.url}
        >
          <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDescription} />
          </Helmet>
          <Container>
            <div className={styles.about}>
              <h1 className={styles.title}>{aboutData.title}</h1>
              <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={tspOptions}
                className={styles.tsParticles}
              />
              <div
                className={styles.body}
                id="tsparticles"
                dangerouslySetInnerHTML={{ __html: formattedBody }}
              ></div>
            </div>
          </Container>
          <ParallaxDivider
            imageUrl={'https://api.livebylife.com/' + parallaxImages.relationships.field_parallax_image[2].uri.url}
          />
          <Container>
            <Contact />
          </Container>
        </Layout>
      </>
    );
  }
}

export const pageQuery = graphql`
  query DomainAbout {
    nodeDomain(drupal_internal__nid: { eq: 7 }) {
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
          field_meta_description
        }
      }
    }
    allNodeParallaxDivider(filter: { field_dsmatch: { drupal_internal__target_id: { eq: 7 } }, title: { eq: "Index" } }) {
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
  }
`;

export default AboutIndex;
