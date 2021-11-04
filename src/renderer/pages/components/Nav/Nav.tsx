import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import styles from './Nav.module.scss';
import feedImg from '../../icons/shell32/nav_feed.png';
import searchImg from '../../icons/shell32/nav_search.png';
import msgImg from '../../icons/shell32/nav_msg.png';
import profileImg from '../../icons/shell32/nav_profile.png';

interface NavProps {
  location: string;
}

const Nav: React.FC<NavProps> = (props) => {
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
        <img alt="" src={feedImg} className={styles.icon_feed} />
      </Button>
      <Button
        className={styles.nav_item}
        active={isActive.search}
        onClick={() => {
          history.push('./Search');
        }}
      >
        <img alt="" src={searchImg} className={styles.icon_search} />
      </Button>
      <Button
        className={styles.nav_item}
        active={isActive.msg}
        onClick={() => {
          history.push('./Msg');
        }}
      >
        <img alt="" src={msgImg} className={styles.icon_msg} />
      </Button>
      <Button
        className={styles.nav_item}
        active={isActive.profile}
        onClick={() => {
          history.push('/Profile');
        }}
      >
        <img alt="" src={profileImg} className={styles.icon_profile} />
      </Button>
    </div>
  );
};

export default Nav;
