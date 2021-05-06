import React from 'react';
import Window from './component/Window';
import Nav from './Nav';
// import styles from './Feed.module.scss';

const Feed: React.FC = () => {
  return (
    <div>
      <Window>
        <Nav />
      </Window>
    </div>
  );
};

export default Feed;
