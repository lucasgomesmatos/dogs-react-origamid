import styles from './Button.module.sass';

export const Button = ({ children, ...pros }) => {
  return (
    <button {...pros} className={styles.button}>
      {children}
    </button>
  );
};
