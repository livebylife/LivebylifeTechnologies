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
  </Container>
)

export default Footer
