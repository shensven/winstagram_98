import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Window from './components/Window/Window';
import Nav from './components/Nav/Nav';
import styles from './Feed.module.scss';
import logo from './images/logo.svg';
import List from './containers/List';

const Feed: React.FC = () => {
  const location = useLocation();
  const [timestamp] = useState(new Date().getTime().toString());

  // useEffect(() => {
  //   axios
  //     .get('https://api.instagram.com/oauth/authorize', {
  //       params: {
  //         client_id: '',
  //         redirect_uri: 'https://www.shensven.com/auth',
  //         scope: 'user_profile,user_media',
  //         response_type: 'code',
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       return null;
  //     })
  //     .catch((res) => {
  //       console.log(res);
  //       return null;
  //     });
  //   axios
  //     .post('//api.instagram.com/oauth/access_token', {
  //       params: {
  //         client_id: '',
  //         client_secret: '',
  //         code: '',
  //         grant_type: 'authorization_code',
  //         redirect_uri: 'https://www.shensven.com/auth',
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       return null;
  //     })
  //     .catch((res) => {
  //       console.log(res);
  //       return null;
  //     });
  // }, [timestamp]);

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
