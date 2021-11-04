import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styles from './Profile.module.scss';
import Nav from './components/Nav/Nav';
import avatar from './images/avatar.jpg';
import Button from './components/Button/Button';
import Window from './components/Window/Window';
import Divider from './components/Divider/Divider';
import Grid from './containers/Grid';
import List from './containers/List';
import Location from './containers/Location';
import Save from './containers/Save';
import gridImg from './icons/shell32/tab_grid.png';
import listImg from './icons/shell32/tab_list.png';
import locationImg from './icons/shell32/tab_location.png';
import saveImg from './icons/shell32/tab_save.png';

const Profile: React.FC = () => {
  const location = useLocation();

  const [tabIndex, setTabIndex] = useState(1);

  return (
    <Window className={styles.root}>
      <div>
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
            <Button
              active={false}
              className={styles.header_btn}
              onClick={() => {}}
            >
              Edit Profile
            </Button>
          </div>
        </div>
        <div className={styles.profile_info}>
          <div className={styles.header_name}>GenSven</div>
          <div className={styles.header_bio}>Frontend Developer</div>
          <div className={styles.header_website}>blog.shensven.com</div>
        </div>
        <Divider />
        <div className={styles.tabs}>
          <Button
            active={false}
            className={`
              ${styles.tab_item}
              ${tabIndex === 1 ? styles.tab_item_active : null}`}
            onClick={() => {
              setTabIndex(1);
            }}
          >
            <img alt="" src={gridImg} className={styles.tab_item_icon} />
          </Button>
          <Button
            active={false}
            className={`
            ${styles.tab_item}
            ${tabIndex === 2 ? styles.tab_item_active : null}`}
            onClick={() => {
              setTabIndex(2);
            }}
          >
            <img alt="" src={listImg} className={styles.tab_item_icon} />
          </Button>
          <Button
            active={false}
            className={`
            ${styles.tab_item}
            ${tabIndex === 3 ? styles.tab_item_active : null}`}
            onClick={() => {
              setTabIndex(3);
            }}
          >
            <img alt="" src={locationImg} className={styles.tab_item_icon} />
          </Button>
          <Button
            active={false}
            className={`
            ${styles.tab_item}
            ${tabIndex === 4 ? styles.tab_item_active : null}`}
            onClick={() => {
              setTabIndex(4);
            }}
          >
            <img alt="" src={saveImg} className={styles.tab_item_icon} />
          </Button>
        </div>
        <Grid
          className={`
            ${styles.grid}
            ${tabIndex === 1 ? null : styles.tab_item_display_none}
          `}
        />
        <List
          className={`
            ${styles.list}
            ${tabIndex === 2 ? null : styles.tab_item_display_none}
         `}
        />
        <Location
          className={`
            ${styles.location}
            ${tabIndex === 3 ? null : styles.tab_item_display_none}
          `}
        />
        <Save
          className={`
            ${styles.save}
            ${tabIndex === 4 ? null : styles.tab_item_display_none}
          `}
        />
      </div>

      <Nav location={location.pathname} />
    </Window>
  );
};

export default Profile;
