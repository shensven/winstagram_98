import React from 'react';
import styles from './Location.module.scss';

const Location = (props: any) => {
  const { className } = props;

  return (
    <div className={`${styles.location} ${className}`}>
      <div>Google Map</div>
    </div>
  );
};

export default Location;
