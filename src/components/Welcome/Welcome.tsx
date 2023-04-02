import React from 'react';
import Button from '../UI/Button/Button';

import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <>
      <div className={styles.welcome}>
        <p>{`<html>`}</p>
        <div>
          <p>{`<body>`}</p>
          <p>{`<h1>`}</p>
          <div>
            <h1 className={styles.header}>Hi,</h1>
            <h1 className={styles.header}>
              <span className={styles.red}>I</span>'m{' '}
              <span className={styles.red}>T</span>ural Aliyev
            </h1>
          </div>
          <p>{`</h1>`}</p>
          <p>{`<p>`}</p>
          <div>
            <p>
              <h3>{'/* Front-end Software Developer */'}</h3>
            </p>
          </div>
          <p>{`</p>`}</p>
          <p>{`</body>`}</p>
        </div>
        <p>{`</html>`}</p>
      </div>
      <Button to="/about" text="About" />
    </>
  );
};

export default Welcome;
