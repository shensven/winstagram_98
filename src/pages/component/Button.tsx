import React from 'react';
import styles from './Button.module.scss';

function Button(props: any) {
  const { children, className, onClick } = props;

  return (
    <button
      type="button"
      // className={[styles.init_btn, className].join(' ')}
      className={`${styles.init_btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
