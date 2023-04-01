import React from 'react';
import logoImage from '../../images/TALogo.png';

import styles from './Navigation.module.css';

interface Props {
  id: number | null;
  handleClick: (num: number) => void;
}

const Navigation = (props: Props) => {
  const links: string[] = ['About', 'Experience', 'Projects', 'Contact me'];

  // Links button handler
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    props.handleClick(+button.value);
  };

  const logoHandler = () => {
    props.handleClick(4);
  };

  return (
    <div className={styles.navigation}>
      <div className={styles.logo} onClick={logoHandler}>
        <img src={logoImage} alt="/" className={styles.image} />
        <h2>Software Developer</h2>
      </div>
      <div>
        {links.map((link, i) => {
          return (
            <div className={styles.link}>
              <button
                className={`${styles.linkButton} ${
                  props.id === i ? styles.active : undefined
                }`}
                value={i}
                onClick={buttonHandler}
              >
                <h3>{link}</h3>
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.copyrightPolicy}>
        <p>Copyright © Tural Aliyev 2023</p>
      </div>
    </div>
  );
};

export default Navigation;
