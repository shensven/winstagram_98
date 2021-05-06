import React from 'react';
import styles from './Window.module.scss';
import icon from '../icons/glyph-logo_May2016.svg';
import title_help from '../icons/help.svg';

const Window = (props: any) => {
  const { children, className } = props;
  return (
    <div className={styles.bg}>
      <div className={styles.first_margin_top} />
      <div className={styles.titlebar}>
        <div className={styles.titlebar_title}>
          <img alt="" src={icon} className={styles.titlebar_title_icon} />
          <span className={styles.titlebar_title_typo}>Winstagram 98</span>
        </div>
        <button type="button" className={styles.titlebar_btn}>
          <img alt="" src={title_help} className={styles.titlebar_svg} />
        </button>
      </div>
      <div className={`${styles.children} ${className}`}>{children}</div>
    </div>
  );
};

export default Window;
