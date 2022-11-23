import React from 'react'
import {css} from '@emotion/react'
import * as styles from './parallax-divider.module.css'



const ParallaxDivider = ({imageUrl, header}) =>{
    return(
        <div className={styles.parallaxDivider} css={css`
             background-image: url(${imageUrl});
             height: 65vh;
             background-attachment:fixed;
             background-position:center;
             background-repeat: no-repeat;
             background-size:cover;
        `}>
            {/* <div
                dangerouslySetInnerHTML={{__html:header,}} 
                className={styles.parallaxHeader}
                /> */}

            <div className={styles.parallaxHeader}>
                <h1>{header}</h1>
            </div>
        </div>
    )
}
export default ParallaxDivider