import React, {useState} from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
import MessengerChat from './MessengerChat';

import * as styles from './contact.module.css'

const Contact = () => {
   
  const [serverState, setServerState] = useState({submitting: false, status: null});
  const [style, setStyle] = useState("show")
  const pageId = process.env.META_PAGE_ID
  const appId = process.env.META_MESSENGER_TOKEN
  const showHide = () => {setStyle("hide")}
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target
    const webform_id = "reach_out"
    const name = e.target.name.value
    const email_address = e.target.email.value
    const message = e.target.message.value
    
    fetch('/api/submit', {
      method:'POST',
      body: JSON.stringify({
        'webform_id':webform_id,
        "name_":name,
        "email_address": email_address,
        "message": message
      }),
    }).then((data) => {
      console.log('Response from server:')
      console.log(data)
    })
     
  } 
  
  return (
      <>
        <section id="contact">
          <div className={styles.container}>
            <div className={styles.sectionTitle}>
              <h1>
                Contact
              </h1>
            </div>
            <div className={styles.mt5}>
              <form onSubmit={handleSubmit}>
                <div className={styles.colmd5}>
                  <input type="text" placeholder='Name' id='name' name='name' onChange={handleChange}/>
                </div>
                <div className={styles.colmd5}>
                  <input type="text" placeholder='Email' id='email' name='email' onChange={handleChange}/>
                </div>
                <div className={styles.colmd5}>
                  <textarea placeholder='Message' id='message' name='message' onChange={handleChange}/>
                </div>
                <div className={styles.colmd5}>
                  <input type="submit" value="Send it"/>
                </div>
                <div className={styles.serverResponse} id="serverResponse">
                  <span id="serverResponse" name="serverResponse"></span>
                </div>
              </form>
            </div>
            <div className={styles.chat}>
            <MessengerChat
              pageId={process.env.META_PAGE_ID}
              appId={process.env.META_MESSENGER_TOKEN}
              htmlRef={this?.props?.location.pathname}
            />
            </div>
          </div>
        </section>
    </>
  )
}
export default Contact

