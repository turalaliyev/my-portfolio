import React from 'react';

import styles from './Welcome.module.css';

interface Props {
  handleClick: (num: number) => void;
}

const Welcome = (props: Props) => {
  const handleClick = () => {
    props.handleClick(3);
  };

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
      <button onClick={handleClick} className={styles.contactMeButton}>
        Contact Me
      </button>
    </>
  );
};

export default Welcome;
