import React from 'react';
import styles from './Location.module.scss';

interface Props {
  className: string;
}

const Location: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={`${styles.location} ${className}`}>
      <div>Google Map</div>
    </div>
  );
};

export default Location;
