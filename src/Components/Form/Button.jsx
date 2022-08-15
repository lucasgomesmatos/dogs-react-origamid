import React from 'react';
import styles from './Button.module.css';
const Button = ({ children, ...pros }) => {
  return (
    <button className={styles.button} {...pros}>
      {children}
    </button>
  );
};

export default Button;
