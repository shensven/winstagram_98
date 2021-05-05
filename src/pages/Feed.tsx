import React from 'react';
import { useHistory } from 'react-router';
import Window from './component/Window';
import styles from './Feed.module.scss';

const Feed: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <Window>
        <div className={styles.test}>test</div>
        <button type="button" onClick={() => history.push('/Profile')}>
          go profile
        </button>
      </Window>
    </div>
  );
};

export default Feed;
