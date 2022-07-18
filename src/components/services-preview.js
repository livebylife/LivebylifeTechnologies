import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './services-preview.module.css'

const ServicePreview = ({services}) => {
    if (!services) return null
    if (!Array.isArray(services)) return null
    return (
        <Container>
            <div className={styles.titleWrap}>
                <h1 className='servicesTitle'>What can I do for you</h1>
            </div>
            <div className={styles.services}>
                <ul className={styles.serviceList}>
                    {services.map((service) => {
                        return (
                            <li key={service.path.alias}>
                                <Link to={`/services#${service.path.alias}`} className={styles.link}>
                                    <GatsbyImage 
                                        image={service.relationships.field_ds_images[0].localFile.childImageSharp.gatsbyImageData} 
                                        alt=""
                                    />
                                    <br/>
                                    <h2 className={styles.title}>{service.title}</h2>
                                </Link>
                                <div
                                    dangerouslySetInnerHTML={{__html:service.field_domain_service_slug.processed,}} 
                                    className={styles.services_slug}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Container>
    )
}

export default ServicePreview