import React from 'react';
import styles from './Profile.modules.scss';
import title_help from './icons/help.svg';

const Profile = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.firstMarginTop} />
      <div className={styles.titlebar}>
        <div className={styles.titlebar_title}>Hola World</div>
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
