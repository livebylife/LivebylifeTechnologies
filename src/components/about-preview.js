import React from 'react'
import * as styles from './about-preview.module.css'
import Container from './container'

const aboutPreview = ({aboutContent}) =>{ 
    return(
        
            <div className={styles.aboutContent}>
                <div
                dangerouslySetInnerHTML={{__html:aboutContent,}} 
                className={styles.aboutContentInner}
                />
            </div>
        
    )
}

export default aboutPreview