import React from 'react';
import styles from './Grid.module.scss';

const Grid = (props: any) => {
  const { className } = props;
  const feedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className={`${styles.grid} ${className}`}>
      {feedArr.map((index: number, item: any) => (
        <div className={styles.img} key={index}>
          {feedArr[item]}
        </div>
      ))}
    </div>
  );
};

export default Grid;
