import React from 'react';
import { useLocation } from 'react-router-dom';
import Window from './components/Window/Window';
import Nav from './components/Nav/Nav';
import styles from './Msg.module.scss';

const Msg: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Window className={styles.window}>
        <div className={styles.root}>
          <div>Hola Msg</div>
          <Nav location={location.pathname} />
        </div>
      </Window>
    </div>
  );
};

export default Msg;
