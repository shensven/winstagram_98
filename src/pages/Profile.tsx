import React from 'react';
import styles from './Profile.module.scss';
import title_help from './icons/help.svg';
import logo from './icons/glyph-logo_May2016.svg';
import avatar from './images/avatar.jpg';

const Profile: React.FC = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.firstMarginTop} />
      <div className={styles.titlebar}>
        <div className={styles.titlebar_title}>
          <img alt="" src={logo} className={styles.titlebar_title_logo} />
          <span className={styles.titlebar_title_typo}>Winstagram 98</span>
        </div>
        <button type="button" className={styles.titlebar_btn}>
          <img alt="" src={title_help} className={styles.titlebar_svg} />
        </button>
      </div>
      <div className={styles.main}>
        <div className={styles.main_username}>shensven</div>
        <div className={styles.main_divider} />
        <div className={styles.main_base_info_data}>
          <div className={styles.main_avatar}>
            <img alt="" src={avatar} className={styles.mian_avatar_pic} />
          </div>
          <span className={styles.mian_base_info_post}>
            <div className={styles.mian_base_info_post_num}>334</div>
            <div className={styles.mian_base_info_post_title}> posts</div>
          </span>
          <span className={styles.mian_base_info_folowers}>
            <div className={styles.mian_base_info_folowers_num}>221K</div>
            <div className={styles.mian_base_info_folowers_title}>folowers</div>
          </span>
          <span className={styles.mian_base_info_folowing}>
            <div className={styles.mian_base_info_folowing_num}>134</div>
            <div className={styles.mian_base_info_folowing_title}>
              foloweing
            </div>
          </span>
        </div>
        <div className={styles.main_base_info_nickname}>GenSven</div>
        <div className={styles.main_base_info_bio}>Frontend Developer</div>
        <div className={styles.main_base_info_website}>blog.shensven.com</div>
        <div className={styles.main_divider} />
      </div>
      <div style={{ marginTop: '10px' }}>React</div>
      <button type="button">BTN</button>
    </div>
  );
};

export default Profile;
