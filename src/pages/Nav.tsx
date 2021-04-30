import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <button type="button" className={styles.nav_item}>
        nav a
      </button>
      <button type="button" className={styles.nav_item}>
        nav b
      </button>
      <button type="button" className={styles.nav_item}>
        nav c
      </button>
      <button type="button" className={styles.nav_item}>
        nav d
      </button>
    </div>
  );
};

export default Nav;
