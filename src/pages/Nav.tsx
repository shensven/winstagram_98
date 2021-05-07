import React from 'react';
import { useHistory } from 'react-router';
import Button from './component/Button/Button';
import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  const history = useHistory();
  return (
    <div className={styles.nav}>
      <Button className={styles.nav_item} onClick={() => history.push('/Feed')}>
        Feed
      </Button>
      <Button className={styles.nav_item}>Search</Button>
      <Button className={styles.nav_item}>Msg</Button>
      <Button
        className={styles.nav_item}
        onClick={() => history.push('/Profile')}
      >
        Profile
      </Button>
    </div>
  );
};

export default Nav;
