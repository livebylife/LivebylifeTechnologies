import React from 'react'
import {css} from '@emotion/react'


export default function ParallaxDivider(imageUrl){
    
    return(
        <div css={css`
             background-image: url(${process.env.GATSBY_API_URL + imageUrl.imageUrl});
             height: 40vh;
             background-attachment:fixed;
             background-position:center;
             background-repeat: no-repeat;
             background-size:cover;
        `}>
            
        </div>
    )
}