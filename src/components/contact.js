import React, { useState } from 'react';
import * as styles from './contact.module.css';
const LazyLoadMessenger = React.lazy(() => import('./MessengerChat'));

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [style, setStyle] = useState('show');
  const [buttonText, setButtonText] = useState('Send it');
  const pageId = process.env.META_PAGE_ID;
  const appId = process.env.META_MESSENGER_TOKEN;

  const validateForm = () => {
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'Name is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (message.trim() === '') {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const form = e.target;
    const url = process.env.GATSBY_SERVER_URL + '/api/submit';
    const webform_id = 'reach_out';
    const name = e.target.name.value;
    const email_address = e.target.email.value;
    const message = e.target.message.value;

    setButtonText('Sending it...');

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        webform_id: webform_id,
        name_: name,
        email_address: email_address,
        message: message,
      }),
    })
      .then((res) => {
        console.log(res.body);
        setButtonText('Thank you');
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
      })
      .catch((error) => {
        setButtonText('Something wrong happened :(');
      });
  };

  return (
    <>
      <section id="contact">
        <div className={styles.sectionTitle}>
          <h1>contact us</h1>
        </div>
        <div className={styles.mt5}>
          <form onSubmit={handleSubmit}>
            <div className={styles.colmd5}>
              <input
                type="text"
                placeholder={errors.name || 'Name'}
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className={styles.colmd5}>
              <input
                type="email"
                placeholder={errors.email || 'Email'}
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.colmd5}>
              <textarea
                placeholder={errors.message || 'Message'}
                id="message"
                name="message"
                onChange={handleChange}
              />
            </div>
            <div className={styles.colmd5}>
              <input
                type="submit"
                value={buttonText}
                className={styles.formButton}
              />
            </div>
          </form>
        </div>
      </section>
      <div className={styles.chat}>
        {/* <LazyLoadMessenger
          pageId={process.env.META_PAGE_ID}
          appId={process.env.META_MESSENGER_TOKEN}
          htmlRef={this?.props?.location.pathname}
        /> */}
      </div>
    </>
  );
};

export default Contact;
