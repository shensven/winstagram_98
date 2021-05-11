import React from 'react';
import styles from './List.module.scss';
import avatar from '../images/avatar.jpg';
import Button from '../components/Button/Button';

const List = (props: any) => {
  const { className } = props;
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.post}>
        <div className={styles.header}>
          <img alt="" src={avatar} className={styles.header_img} />
          <div className={styles.header_username}>username</div>
        </div>
        <div className={styles.photo}>12</div>
        <div className={styles.contrbution}>
          <div className={styles.contrbution_btn_group}>
            <Button className={styles.contrbution_btn}>L</Button>
            <Button className={styles.contrbution_btn}>C</Button>
            <Button className={styles.contrbution_btn}>S</Button>
          </div>
          <div className={styles.contrbution_caption}>
            <div className={styles.contrbution_caption_likes}>1,259 likes</div>
            <div className={styles.contrbution_caption_comment}>
              Nice weather!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.header}>
          <img alt="" src={avatar} className={styles.header_img} />
          <div className={styles.header_username}>username</div>
        </div>
        <div className={styles.photo}>13</div>
        <div className={styles.contrbution}>
          <div className={styles.contrbution_btn_group}>
            <Button className={styles.contrbution_btn}>L</Button>
            <Button className={styles.contrbution_btn}>C</Button>
            <Button className={styles.contrbution_btn}>S</Button>
          </div>
          <div className={styles.contrbution_caption}>
            <div className={styles.contrbution_caption_likes}>1,259 likes</div>
            <div className={styles.contrbution_caption_comment}>
              Nice weather!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.header}>
          <img alt="" src={avatar} className={styles.header_img} />
          <div className={styles.header_username}>username</div>
        </div>
        <div className={styles.photo}>14</div>
        <div className={styles.contrbution}>
          <div className={styles.contrbution_btn_group}>
            <Button className={styles.contrbution_btn}>L</Button>
            <Button className={styles.contrbution_btn}>C</Button>
            <Button className={styles.contrbution_btn}>S</Button>
          </div>
          <div className={styles.contrbution_caption}>
            <div className={styles.contrbution_caption_likes}>1,259 likes</div>
            <div className={styles.contrbution_caption_comment}>
              Nice weather!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
