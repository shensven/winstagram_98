import React from 'react';
import styles from './List.module.scss';
import avatar from '../images/avatar.jpg';
import Button from '../components/Button/Button';
import likeImg from '../icons/shell32/list_like.png';
import commentImg from '../icons/shell32/list_comment.png';
import shareImg from '../icons/shell32/list_share.png';

const List = (props: any) => {
  const { className } = props;
  const feedArr = [12, 13, 14];
  return (
    <div className={`${styles.root} ${className}`}>
      {feedArr.map((index: number, item: any) => (
        <div className={styles.post} key={index}>
          <div className={styles.header}>
            <img alt="" src={avatar} className={styles.header_img} />
            <div className={styles.header_username}>username</div>
          </div>
          <div className={styles.photo}>{feedArr[item]}</div>
          <div className={styles.contrbution}>
            <div className={styles.contrbution_btn_group}>
              <Button className={styles.contrbution_btn}>
                <img alt="" src={likeImg} className={styles.icon} />
              </Button>
              <Button className={styles.contrbution_btn}>
                <img alt="" src={commentImg} className={styles.icon} />
              </Button>
              <Button className={styles.contrbution_btn}>
                <img alt="" src={shareImg} className={styles.icon} />
              </Button>
            </div>
            <div className={styles.contrbution_caption}>
              <div className={styles.contrbution_caption_likes}>
                1,259 likes
              </div>
              <div className={styles.contrbution_caption_comment}>
                Nice weather!
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
