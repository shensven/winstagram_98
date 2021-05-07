import React from 'react';
import styles from './Button.module.scss';

const Button = (props: any) => {
  const { children, className, onClick, enabled } = props;

  switch (enabled) {
    case true:
      return (
        <button
          type="button"
          className={`${styles.enabled_btn} ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type="button"
          className={`${styles.init_btn} ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;
