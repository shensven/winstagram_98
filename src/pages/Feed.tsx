import React from 'react';
import { useHistory } from 'react-router';
import Window from './component/Window';
import Nav from './Nav';
// import styles from './Feed.module.scss';

const Feed: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <Window>
        <Nav />
      </Window>
    </div>
  );
};

export default Feed;
