import React, {useState} from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
import MessengerChat from './MessengerChat';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
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
    
    /* axios.get(process.env.GATSBY_API_TOKEN_ADDRESS).then(result => {
      if(result.status === 200){
        const csrfToken = result.data;
        fetch(process.env.GATSBY_API_REACH_OUT_ADDRESS,{
          method: 'POST',
          headers: {
            'Content-Type': "application/json",
            'X-CSRF-Token': csrfToken,
            'api-key': process.env.API_KEY,
          },
          body: JSON.stringify({
            'webform_id':webform_id,
            "name_":name,
            "email_address": email_address,
            "message": message
          }),
        })
        .then(
          (data) => {
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.message.value = "";
            e.target.message.value = "Thank you for reaching out. I will be reacing out to you as soon as I can."
            handleServerResponse(true, "Thank you for reaching out too us. We will get back to you soon.", form)
          },(error) => {
            handleServerResponse(false, error, form)
          }
        )
      }
      
    })*/       
  } 
  
  /* 
  function handleMessage(sender_psid, received_message) {
    let response;

    // Checks if the message contains text
    if (received_message.text)  {   
      // Create the payload for a basic text message, which
      // will be added to the body of our request to the Send API
      response = {
        "text": `You sent the message: "${received_message.text}". Now send me an attachment!`
      }
    } else if (received_message.attachments) {
      // Get the URL of the message attachment
      let attachment_url = received_message.attachments[0].payload.url;
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": [{
              "title": "Is this the right picture?",
              "subtitle": "Tap a button to answer.",
              "image_url": attachment_url,
              "buttons": [
                {
                  "type": "postback",
                  "title": "Yes!",
                  "payload": "yes",
                },
                {
                  "type": "postback",
                  "title": "No!",
                  "payload": "no",
                }
              ],
            }]
          }
        }
      }
    } 

    // Send the response message
    callSendAPI(sender_psid, response); 
  }

  function callSendAPI(sender_psid, response) {
    // Construct the message body
    let request_body = {
      "recipient": {
        "id": sender_psid
      },
      "message": response
    }

    // Send the HTTP request to the Messenger Platform
    const request = ({
      "uri": "https://graph.facebook.com/v2.6/me/messages",
      "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
      "method": "POST",
      "json": request_body
    }, (err, res, body) => {
      if (!err) {
        console.log('message sent!')
      } else {
        console.error("Unable to send message:" + err);
      }
    }); 
  }

  function handlePostback(sender_psid, received_postback) {
    let response;
    
    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === 'yes') {
      response = { "text": "Thanks!" }
    } else if (payload === 'no') {
      response = { "text": "Oops, try sending another image." }
    }
    // Send the message to acknowledge the postback
    callSendAPI(sender_psid, response);
  } */

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

