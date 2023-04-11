import React from 'react';

import RD from '../../images/RD.svg';
import EY from '../../images/EY.png';
import Shopify from '../../images/Shopify.png';
import Premiyera from '../../images/Premiyera.png';

import styles from './Experience.module.css';
import Button from '../UI/Button/Button';

const Experience = () => {
  return (
    <>
      <div className={styles.experience}>
        {/* <h1>Experience</h1> */}
        <div className={styles.experienceTable}>
          <div className={styles.element}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                style={{ width: '220px', objectFit: 'cover' }}
                src={RD}
                alt="Ronwell Digital"
              />
            </div>
            <div className={styles.description}>
              <h2>Ronwell Digital</h2>
              <h3>Frontend Software Developer {'&'} Webpage Administrator</h3>
            </div>
            <p>May 2021 - January 2022</p>
          </div>
          <div className={styles.element}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={EY} alt="Ernst {'&'} Young" />
            </div>
            <div className={styles.description}>
              <h2>Ernst {'&'} Young</h2>
              <h3>IT Consulter Intern</h3>
            </div>
            <p>July 2019 - September 2019</p>
          </div>
          <div className={styles.element}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={Shopify} alt="Shopify" />
            </div>
            <div className={styles.description}>
              <h2>BeezyStore {'(Shopify Project)'}</h2>
              <h3>Product Manager</h3>
            </div>
            <p>August 2020 - June 2021</p>
          </div>
          <div className={styles.element}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={Premiyera} alt="Premiyera" />
            </div>
            <div className={styles.description}>
              <h2>Premiyera</h2>
              <h3>Human Support</h3>
            </div>
            <p>June 2016 - August 2016</p>
          </div>
        </div>
        <Button to="/skills" text="Skills" />
      </div>
    </>
  );
};

export default Experience;
