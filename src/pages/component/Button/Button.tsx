import React, { useEffect, useState } from 'react';
import styles from './Button.module.scss';

const Button = (props: any) => {
  const { children, className, onClick, active } = props;

  const [btnType, setBtnType] = useState(styles.init_btn);

  const timestamp = new Date().getTime().toString();

  useEffect(() => {
    switch (active) {
      case true:
        setBtnType(styles.active_btn);
        break;
      default:
        setBtnType(styles.init_btn);
    }
  }, [timestamp]);

  return (
    <button
      type="button"
      className={`${btnType} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
