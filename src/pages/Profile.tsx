import React from 'react';
import styles from './Profile.module.scss';
import title_help from './icons/help.svg';
import logo from './icons/glyph-logo_May2016.svg';
import avatar from './images/avatar.jpg';

const Profile: React.FC = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.first_margin_top} />
      <div className={styles.titlebar}>
        <div className={styles.titlebar_title}>
          <img alt="" src={logo} className={styles.titlebar_title_logo} />
          <span className={styles.titlebar_title_typo}>Winstagram 98</span>
        </div>
        <button type="button" className={styles.titlebar_btn}>
          <img alt="" src={title_help} className={styles.titlebar_svg} />
        </button>
      </div>
      <div className={styles.header}>
        <div className={styles.header_username}>shensven</div>
        <div className={styles.header_divider} />

        <div className={styles.header_wing}>
          <div className={styles.header_base_info}>
            <div className={styles.header_avatar}>
              <img alt="" src={avatar} className={styles.header_avatar_img} />
            </div>
            <div>
              <div className={styles.header_stats}>
                <span className={styles.header_stats_post}>
                  <div className={styles.header_stats_post_num}>334</div>
                  <div className={styles.header_stats_post_title}> posts</div>
                </span>
                <span className={styles.header_stats_folowers}>
                  <div className={styles.header_stats_folowers_num}>221K</div>
                  <div className={styles.header_stats_folowers_title}>
                    folowers
                  </div>
                </span>
                <span className={styles.header_stats_folowing}>
                  <div className={styles.header_stats_folowing_num}>134</div>
                  <div className={styles.header_stats_folowing_title}>
                    foloweing
                  </div>
                </span>
              </div>
              <div className={styles.edit_profile_wing}>
                <button type="button" className={styles.edit_profile_btn}>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div className={styles.header_name}>GenSven</div>
          <div className={styles.header_bio}>Frontend Developer</div>
          <div className={styles.header_website}>blog.shensven.com</div>
        </div>

        <div className={styles.header_divider} />
      </div>
      <div style={{ marginTop: '10px' }}>React</div>
      <button type="button">BTN</button>
    </div>
  );
};

export default Profile;
