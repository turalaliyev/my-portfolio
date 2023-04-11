import React from 'react';

import styles from './Skill.module.css';

interface Props {
  title: string;
  image: string;
}

const Skill = (props: Props) => {
  return (
    <div className={styles.skill}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={props.image} alt={props.title} />
      </div>
      <p>{props.title}</p>
    </div>
  );
};

export default Skill;
