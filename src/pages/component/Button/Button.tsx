import React from 'react';
import styles from './Button.module.scss';

const Button = (props: any) => {
  const { children, className, onClick } = props;

  return (
    <button
      type="button"
      className={`${styles.init_btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
