import React from 'react';
import { useHistory } from 'react-router';
import Button from './component/Button';
import styles from './Nav.module.scss';

const Nav = () => {
  const history = useHistory();
  return (
    <div className={styles.nav}>
      <Button
        type="button"
        className={styles.nav_item}
        onClick={() => history.push('/Feed')}
      >
        Feed
      </Button>
      <Button type="button" className={styles.nav_item}>
        Search
      </Button>
      <Button type="button" className={styles.nav_item}>
        Msg
      </Button>
      <Button type="button" className={styles.nav_item}>
        Profile
      </Button>
    </div>
  );
};

export default Nav;
