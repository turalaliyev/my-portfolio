import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.css';

interface Props {
  text: string;
  to: string;
}

const Button = (props: Props) => {
  return (
    <NavLink to={props.to}>
      <button className={styles.contactMeButton}>{props.text}</button>
    </NavLink>
  );
};

export default Button;
