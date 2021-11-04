import React from 'react';
import styles from './Save.module.scss';

interface Props {
  className: string;
}

const Save: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={`${styles.save} ${className}`}>
      <div>Hola Save</div>
    </div>
  );
};

export default Save;
