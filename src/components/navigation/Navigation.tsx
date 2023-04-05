import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoImage from '../../images/TALogo.png';

import styles from './Navigation.module.css';

const Navigation = () => {
  let hlink = useLocation();
  let link: string = hlink.pathname.toString();

  return (
    <div className={styles.navigation}>
      <NavLink className={styles.navLinks} to="/">
        <div className={styles.logo}>
          <img src={logoImage} alt="logoImage" className={styles.image} />
          <h2>Software Developer</h2>
        </div>
      </NavLink>
      <div className={styles.links}>
        <NavLink className={styles.navLinks} to="/about">
          <div
            className={`${styles.linkButton} ${
              link === '/about' && styles.active
            } `}
          >
            <h3>About</h3>
          </div>
        </NavLink>
        <NavLink className={styles.navLinks} to="/experience">
          <div
            className={`${styles.linkButton} ${
              link === '/experience' && styles.active
            } `}
          >
            <h3>Experience</h3>
          </div>
        </NavLink>
        <NavLink className={styles.navLinks} to="/skills">
          <div
            className={`${styles.linkButton} ${
              link === '/skills' && styles.active
            } `}
          >
            <h3>Skills</h3>
          </div>
        </NavLink>
        <NavLink className={styles.navLinks} to="/contact">
          <div
            className={`${styles.linkButton} ${
              link === '/contact' && styles.active
            } `}
          >
            <h3>Contact Me</h3>
          </div>
        </NavLink>
      </div>
      <div className={styles.copyrightPolicy}>
        <p>Copyright © Tural Aliyev 2023</p>
      </div>
    </div>
  );
};

export default Navigation;
