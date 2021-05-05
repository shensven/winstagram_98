import React from 'react';
import { useHistory } from 'react-router';
import Button from './component/Button';
import Window from './component/Window';
import styles from './Feed.module.scss';

const Feed: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <Window>
        <Button onClick={() => history.push('/Profile')}>Profile</Button>
        <Button>Test</Button>
      </Window>
    </div>
  );
};

export default Feed;
