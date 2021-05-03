import React from 'react';
import { useHistory } from 'react-router';

const Feed: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <button type="button" onClick={() => history.push('/Profile')}>
        go profile
      </button>
    </div>
  );
};

export default Feed;
