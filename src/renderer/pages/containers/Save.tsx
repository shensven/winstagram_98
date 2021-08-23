import React from 'react';
import styles from './Save.module.scss';

const Save = (props: any) => {
  const { className } = props;
  return (
    <div className={`${styles.save} ${className}`}>
      <div>Hola Save</div>
    </div>
  );
};

export default Save;
