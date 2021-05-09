import React from 'react';
import styles from './List.module.scss';

const List = (props: any) => {
  const { className } = props;
  return (
    <div className={`${styles.list} ${className}`}>
      <div className={styles.img}>12</div>
      <div className={styles.img}>13</div>
      <div className={styles.img}>14</div>
    </div>
  );
};

export default List;
