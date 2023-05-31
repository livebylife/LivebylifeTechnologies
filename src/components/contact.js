import React, {useState} from 'react'
import * as styles from './contact.module.css'
const LazyLoadMessenger = React.lazy(() => import('./MessengerChat'))

const Contact = () => {
  const [style, setStyle] = useState("show")
  const [buttonText, setButtonText] = useState("Send it")
  const pageId = process.env.META_PAGE_ID
  const appId = process.env.META_MESSENGER_TOKEN

  const handleChange = (e) => {
    const value = e.target.value
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target
    const url = process.env.GATSBY_SERVER_URL + '/api/submit'
    const webform_id = "reach_out"
    const name = e.target.name.value
    const email_address = e.target.email.value
    const message = e.target.message.value
    setButtonText('Sending it...')
    await fetch(url, {
      method:'POST',
      body: JSON.stringify({
        'webform_id':webform_id,
        "name_":name,
        "email_address": email_address,
        "message": message
      }),
    }).then((res) => {
      console.log(res.body)
      setButtonText('Thank you')
      e.target.name.value = ""
      e.target.email.value = ""
      e.target.message.value = ""
    })
    .catch((error) => {
    setButtonText('Something wrong happened :(')
    })
  } 
  
  return (
      <>
        <section id="contact">
            <div className={styles.sectionTitle}>
              <h1>
                contact us
              </h1>
            </div>  
            <div className={styles.mt5}>
              <form onSubmit={handleSubmit}>
                <div className={styles.colmd5}>
                  <input type="text" placeholder='Name' id='name' name='name' onChange={handleChange} />
                </div>
                <div className={styles.colmd5}>
                  <input type="email" placeholder='Email' id='email' name='email' onChange={handleChange} />
                </div>
                <div className={styles.colmd5}>
                  <textarea placeholder='Message' id='message' name='message' onChange={handleChange} />
                </div>
                <div className={styles.colmd5}>
                  <input type="submit" value={buttonText} className={styles.formButton}/>
                </div>
                
              </form>
            </div>
            
        </section><div className={styles.chat}>
            {/* <LazyLoadMessenger
              pageId={process.env.META_PAGE_ID}
              appId={process.env.META_MESSENGER_TOKEN}
              htmlRef={this?.props?.location.pathname}
            /> */}
            </div>
    </>
  )
}
export default Contact

