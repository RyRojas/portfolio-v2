import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false),
    [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //Grab form field data
    const data = {
      name: e.currentTarget[0].value,
      email: e.currentTarget[1].value,
      message: e.currentTarget[2].value,
    };

    //Intialize spinner
    setIsLoading(true);

    e.currentTarget.reset();

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setIsLoading(false);
        console.log('Response Received');
        if (res.status === 200) {
          setResponse('Thank you for your message');
        }
      })
      .catch(setResponse('Something went wrong'));

    e.currentTarget.reset();
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
        <h2 className={styles.fullWidth}>Get in Touch</h2>
        <div>
          <label htmlFor="contact-name">
            Name <span>(Required)</span>
          </label>
          <br />
          <input
            type="text"
            id="contact-name"
            name="contact-name"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label htmlFor="contact-email">
            Email <span>(Required)</span>
          </label>
          <br />
          <input
            type="email"
            id="contact-email"
            name="user_email"
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
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.fullWidth}>
          Submit
        </button>
      </form>
    </section>
  );
}
