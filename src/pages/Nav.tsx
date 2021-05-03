import React from 'react';
import { useHistory } from 'react-router';
import styles from './Nav.module.scss';

const Nav = () => {
  const history = useHistory();
  return (
    <div className={styles.nav}>
      <button
        type="button"
        className={styles.nav_item}
        onClick={() => history.push('/Feed')}
      >
        Feed
      </button>
      <button type="button" className={styles.nav_item}>
        Search
      </button>
      <button type="button" className={styles.nav_item}>
        Msg
      </button>
      <button type="button" className={styles.nav_item}>
        Profile
      </button>
    </div>
  );
};

export default Nav;
