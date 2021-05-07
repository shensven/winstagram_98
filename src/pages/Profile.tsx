import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Nav from './Nav';
import styles from './Profile.module.scss';
import avatar from './images/avatar.jpg';
import Button from './component/Button/Button';
import Window from './component/Window/Window';
import Divider from './component/Divider/Divider';

const Profile: React.FC = () => {
  const location = useLocation();

  return (
    <Window className={styles.root}>
      <div className={styles.username}>shensven</div>
      <Divider />
      <div className={styles.header_base_info}>
        <img alt="" src={avatar} className={styles.header_avatar} />
        <div>
          <div className={styles.header_stats}>
            <div className={styles.header_stats_posts}>
              <div className={styles.header_stats_posts_num}>334</div>
              <div className={styles.header_stats_posts_title}>posts</div>
            </div>
            <div className={styles.header_stats_followers}>
              <div className={styles.header_stats_followers_num}>221K</div>
              <div className={styles.header_stats_followers_title}>
                followers
              </div>
            </div>
            <div className={styles.header_stats_followering}>
              <div className={styles.header_stats_following_num}>134</div>
              <div className={styles.header_stats_following_title}>
                following
              </div>
            </div>
          </div>
          <Button className={styles.header_btn}>Edit Profile</Button>
        </div>
      </div>
      <div className={styles.profile_info}>
        <div className={styles.header_name}>GenSven</div>
        <div className={styles.header_bio}>Frontend Developer</div>
        <div className={styles.header_website}>blog.shensven.com</div>
      </div>
      <Divider />
      <div className={styles.tabs}>
        <Button className={styles.tab_item}>Grid</Button>
        <Button className={styles.tab_item}>List</Button>
        <Button className={styles.tab_item}>Location</Button>
        <Button className={styles.tab_item}>Save</Button>
      </div>
      <div className={styles.grid}>
        <div className={styles.img}>1</div>
        <div className={styles.img}>2</div>
        <div className={styles.img}>3</div>
        <div className={styles.img}>4</div>
        <div className={styles.img}>5</div>
        <div className={styles.img}>6</div>
        <div className={styles.img}>7</div>
        <div className={styles.img}>8</div>
        <div className={styles.img}>9</div>
        <div className={styles.img}>10</div>
        <div className={styles.img}>11</div>
      </div>
      <Nav location={location.pathname} />
    </Window>
  );
};

export default Profile;
