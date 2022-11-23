import React from 'react'
import {Link} from 'gatsby'
import ParallaxDivider from './parallax-divider'
import * as styles from './service-preview.module.css'

const ServicePreview = ({service}) => {
    const sTitle =""
    const sSlug = ""
    const sDescription = ""
    const sImage = ""
    console.log(service)
    return (
        <div className={styles.service}>
            <ParallaxDivider imageUrl={pImage} header={sTitle}/>
            <div className={styles.sBody}>
                <div className={styles.serviceSlug} dangerouslySetInnerHTML={{__html:sSlug}}/>
                <div className={styles.serviceDescription} dangerouslySetInnerHTML={{__html:sDescription}}/>
            </div>
        </div>
    )
}
export default ServicePreview


