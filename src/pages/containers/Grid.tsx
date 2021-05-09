import React from 'react';
import styles from './Grid.module.scss';

const Grid = (props: any) => {
  const { className } = props;
  return (
    <div className={`${styles.grid} ${className}`}>
      <div className={styles.img}>1</div>
      <div className={styles.img}>2</div>
      <div className={styles.img}>3</div>
      <div className={styles.img}>4</div>
      <div className={styles.img}>5</div>
      <div className={styles.img}>6</div>
      <div className={styles.img}>7</div>
      <div className={styles.img}>8</div>
      <div className={styles.img}>9</div>
      <div className={styles.img}>10</div>
      <div className={styles.img}>11</div>
    </div>
  );
};

export default Grid;
