import React from 'react';

import styles from './Experience.module.css';

const Experience = () => {
  return (
    <>
      <div className={styles.experience}>
        <div className={styles.grid}>
          <div className={styles.gridElement}>
            <div className={styles.card}>
              <h2>Ronwell Digital</h2>
              <h4>Front-End Software Developer</h4>
              <div className={styles.details}>
                <p>
                  Worked on “Ronwell Academy” project by creating user-friendly
                  web-site with Vue.js. Mostly worked on setting up the design,
                  additionally dealt with API requests for receiving data from
                  the server.
                </p>
                <p>
                  Worked on the design of the components with Figma and
                  implementing it to the webpage.
                </p>
                <p>
                  Designed components for the “Nifsy” project through Figma,
                  like “Registration page”. “Nifsy” was an Online-Shop project.
                </p>
                <p>
                  Administrated the Online-Shop by creating categories and
                  adding the products to the webpage through the admin panel.
                  Monitored various online-shops like “Namshi”, “Trendyol” for
                  competition and market analysis.
                </p>
                <p>
                  Participated in signing of a contract with “Fetchr” logistics
                  company for the “Nifsy” project. Implemented the shipping
                  policy and pricing, including taxes, into the system through
                  the admin panel.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.gridElement}>
            <div className={styles.card}>
              <h2>BeezyStore</h2>
              <h4>Product Manager</h4>
            </div>
          </div>
          <div className={styles.gridElement}>
            <div className={styles.card}>
              <h2>Erns {'&'} Young</h2>
              <h4>Intern</h4>
            </div>
          </div>
          <div className={styles.gridElement}>
            <div className={styles.card}>
              <h2>Premiyera</h2>
              <h4>Customer Support</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
