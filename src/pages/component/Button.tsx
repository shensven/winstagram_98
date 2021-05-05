import React from 'react';
import styles from './Button.module.scss';

function Button(props: any) {
  const { children, onClick } = props;

  return (
    <button type="button" className={styles.init_btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
