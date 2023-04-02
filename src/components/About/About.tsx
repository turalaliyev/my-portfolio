import React from 'react';

import myImage from '../../images/MyPhoto.jpeg';
import Button from '../UI/Button/Button';

import styles from './About.module.css';

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.imageBox}>
          <img className={styles.image} src={myImage} alt="My_Image" />
        </div>
        <p>
          I am pleased to introduce myself, Tural Aliyev, a frontend software
          developer with two years of extensive experience in developing
          user-friendly web applications. I have a deep understanding of HTML,
          CSS, and JavaScript, as well as the latest frontend frameworks like
          React and Vue. I excel at implementing responsive designs that work
          across multiple devices and platforms.
        </p>
        <p>
          As a team player, I thrive in collaborative environments and enjoy
          working closely with others to achieve project objectives. In addition
          to my technical skills, I am a natural problem solver and an excellent
          communicator. I believe that my ability to explain complex technical
          concepts in simple, easy-to-understand language is particularly
          valuable.
        </p>
        <p>
          Overall, I am a talented and passionate developer with a dedication to
          creating beautiful designs and delivering exceptional user
          experiences. If you are looking for a skilled frontend software
          developer, I would be happy to discuss how I can help you achieve your
          project goals.
        </p>
      </div>
      <Button to="/experience" text="Experience" />
    </>
  );
};

export default About;
