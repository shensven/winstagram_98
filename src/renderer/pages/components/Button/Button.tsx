import React, { useEffect, useState } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
  active: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { children, className, onClick, active } = props;

  const [btnType, setBtnType] = useState(styles.init_btn);

  useEffect(() => {
    switch (active) {
      case true:
        setBtnType(styles.active_btn);
        break;
      default:
        setBtnType(styles.init_btn);
    }
  }, [active]);

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
