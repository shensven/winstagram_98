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

  const timestamp = new Date().getTime().toString();

  useEffect(() => {
    switch (location) {
      case '/Feed':
        setIsActive({ ...isActive, feed: true });
        break;
      case '/Profile':
        setIsActive({ ...isActive, profile: true });
        break;
      default:
        break;
    }
  }, [timestamp]);

  return (
    <div className={styles.nav}>
      <Button
        className={styles.nav_item}
        enabled={isActive.feed}
        onClick={() => {
          history.push('/Feed');
        }}
      >
        Feed
      </Button>
      <Button enabled={false} className={styles.nav_item} onClick={() => {}}>
        Search
      </Button>
      <Button enabled={false} className={styles.nav_item} onClick={() => {}}>
        Msg
      </Button>
      <Button
        className={styles.nav_item}
        enabled={isActive.profile}
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
