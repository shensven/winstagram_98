import React from 'react';
import { useLocation } from 'react-router-dom';
import Window from './component/Window/Window';
import Nav from './Nav';
import styles from './Feed.module.scss';

const Feed: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Window className={styles.window}>
        <div className={styles.root}>
          <div>Hola</div>
          <Nav location={location.pathname} />
        </div>
      </Window>
    </div>
  );
};

export default Feed;
