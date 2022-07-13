import React from 'react'
import {Link } from 'gatsby'

import * as styles from './Topbanner.module.css'

const TopBanner = () => 

(
            <div >
                <div className={styles.topBannerContainer}>
                    <Link to='/contact'>
                        <span className={styles.topBannerItem}>Get Support Now</span>
                    </Link>
                    <Link to='https://pay.gocardless.com/AL0004GN6XHWGQ'>
                        <span className={styles.topBannerItem}>Manage Payments</span>
                    </Link>
                </div>
            </div>
        )
    

export default TopBanner