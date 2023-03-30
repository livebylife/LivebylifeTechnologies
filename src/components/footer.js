import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <div className={styles.floatLeft}>
        
      </div>
      <div className={styles.center}>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      <div className={styles.floatRight}>
          Built by <a href="https://livebylife.com">Livebylife Technologies</a>  &middot;{' '}
          <a href="https://github.com/livebylife">Source</a>
      </div>
    </div>
    <script type="text/javascript" dangerouslySetInnerHTML={{__html:`

      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '973050577159944');
      fbq('track', 'PageView');`}}>
    </script>

    <script type='text/javascript' dangerouslySetInnerHTML={{__html:`
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=973050577159944&ev=PageView&noscript=1"/>`}}>
    </script>
    
  </Container>
)

export default Footer
