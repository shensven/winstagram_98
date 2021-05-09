import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from './component/Button/Button';
import styles from './Nav.module.scss';

const Nav = (props: any) => {
  const { location } = props;

  const [isActive, setIsActive] = useState({
    feed: false,
    search: false,
    msg: false,
    profile: false,
  });

  const history = useHistory();

  useEffect(() => {
    switch (location) {
      case '/Feed':
        setIsActive({ ...isActive, feed: true });
        break;
      case '/Search':
        setIsActive({ ...isActive, search: true });
        break;
      case '/Msg':
        setIsActive({ ...isActive, msg: true });
        break;
      case '/Profile':
        setIsActive({ ...isActive, profile: true });
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <div className={styles.nav}>
      <Button
        className={styles.nav_item}
        active={isActive.feed}
        onClick={() => {
          history.push('/Feed');
        }}
      >
        Feed
      </Button>
      <Button
        className={styles.nav_item}
        active={isActive.search}
        onClick={() => {
          history.push('./Search');
        }}
      >
        Search
      </Button>
      <Button
        className={styles.nav_item}
        active={isActive.msg}
        onClick={() => {
          history.push('./Msg');
        }}
      >
        Msg
      </Button>
      <Button
        className={styles.nav_item}
        active={isActive.profile}
        onClick={() => {
          history.push('/Profile');
        }}
      >
        Profile
      </Button>
    </div>
  );
};

export default Nav;
