import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [name, setName] = useState(''),
    [email, setEmail] = useState(''),
    [message, setMessage] = useState(''),
    [response, setResponse] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Grab form field data
    const data = {
      name: e.currentTarget[0].value,
      email: e.currentTarget[1].value,
      message: e.currentTarget[2].value,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setResponse('Thank you for your message');
          resetForm();
        }
      })
      .catch((res) => setResponse('Something went wrong. Please try again.'));
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <form
        action="#"
        method="post"
        id="contact-form"
        onSubmit={handleSubmit}
        className={styles.contactForm}
      >
        <h2 className={styles.fullWidth}>Get in Touch </h2>

        <div>
          <label htmlFor="contact-name">
            Name<span>*</span>
          </label>
          <br />
          <input
            type="text"
            id="contact-name"
            name="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label htmlFor="contact-email">Email</label>
          <br />
          <input
            type="email"
            id="contact-email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className={styles.fullWidth}>
          <label htmlFor="contact-message">Message</label>
          <br />
          <textarea
            id="contact-message"
            name="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit" className={'inverse-button'}>
          Submit
        </button>
        {response && <p className={styles.formResponse}>{response}</p>}
      </form>
    </section>
  );
}
