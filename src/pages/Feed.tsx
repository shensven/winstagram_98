import React from 'react';
import { useLocation } from 'react-router-dom';
import Window from './components/Window/Window';
import Nav from './components/Nav/Nav';
import styles from './Feed.module.scss';
import logo from './images/logo.svg';
import List from './containers/List';

const Feed: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Window className={styles.root}>
        <div>
          <div className={styles.header}>
            <img alt="" src={logo} className={styles.logo} />
          </div>
          <List className={styles.feed} />
        </div>
        <Nav location={location.pathname} />
      </Window>
    </div>
  );
};

export default Feed;
