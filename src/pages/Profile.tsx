import React from 'react';
import styles from './Profile.module.scss';
import title_help from './icons/help.svg';
import logo from './icons/glyph-logo_May2016.svg';

const Profile: React.FC = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.firstMarginTop} />
      <div className={styles.titlebar}>
        <div className={styles.titlebar_title}>
          <img alt="" src={logo} className={styles.titlebar_title_logo} />
          <div className={styles.titlebar_title_typo}>Winstagram 98</div>
        </div>
        <button type="button" className={styles.titlebar_btn}>
          <img alt="" src={title_help} className={styles.titlebar_svg} />
        </button>
      </div>
      <div className={styles.main}>Electron</div>
      <div>React</div>
      <button type="button">BTN</button>
    </div>
  );
};

export default Profile;
