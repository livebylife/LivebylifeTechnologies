import React from 'react'
import Container from './container'
import * as styles from './articlepreview.module.css'

const aboutPreview = ({aboutContent}) => {
    return (
        <Container>
            <div className={styles.aboutContent}>
                <div
                dangerouslySetInnerHTML={{__html:aboutContent,}} 
                className={styles.aboutContent}
                />
            </div>
        </Container>
    )
}
export default aboutPreview

