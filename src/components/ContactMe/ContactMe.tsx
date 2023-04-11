import React from 'react';

import Instagram from '../../images/Instagram.webp';
import Whatsapp from '../../images/Whatsapp.webp';

import styles from './ContactMe.module.css';

const ContactMe = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <div className={styles.icons}>
        <a
          href="https://www.instagram.com/aliyevtural_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.icon} src={Instagram} alt="Instagram" />
        </a>
        <a href="whatsapp://send?text=Hello Tural, how are you?">
          <img className={styles.icon} src={Whatsapp} alt="WhatsApp" />
        </a>
      </div>
    </>
  );
};

export default ContactMe;
