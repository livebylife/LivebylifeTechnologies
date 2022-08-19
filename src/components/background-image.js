import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

const BackgroundImage = () => {
  const { mobileImage, desktopImage } = useStaticQuery(
          graphql`
      query {
        mobileImage: nodeParallaxDivider(
          field_dsmatch: {drupal_internal__target_id: {eq: 7}}
        ) {
          title
          relationships {
            field_parallax_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 490, quality: 100) {
                    srcWebp
                  }
                }
              }
            }
          }
        }
        desktopImage: nodeParallaxDivider(
          field_dsmatch: {drupal_internal__target_id: {eq: 7}}
        ) {
          title
          relationships {
            field_parallax_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 4160, quality: 100) {
                    srcWebp
                  }
                }
              }
            }
          }
        }
      }
     `
    );

  console.log(mobileImage.relationships.field_parallax_image)
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    ...getImage(mobileImage.relationships.field_parallax_image),
    {
      ...getImage(desktopImage.relationships.field_parallax_image),
      media: `(min-width: 491px)`,
    },
  ];

  return (
          <BgImage image={sources} style={{ minWidth: 200, minHeight: 200 }}>
            <div>Hello from BgImage!</div>
          </BgImage>
  );
};
export default BackgroundImage