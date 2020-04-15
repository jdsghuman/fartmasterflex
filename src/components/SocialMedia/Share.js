import React from 'react';
import styles from './Share.module.scss';

import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const Share = () => {
  const url = 'www.fartmasterflex.com';
  const displayIcons = () => {
    return (
      <div className={styles["share-icon-container"]}>
        <FacebookShareButton
          url={url}
          quote={`FartMasterFlex - Share a fart`}
          hashtag={"fartMasterFlex"}
          className={styles['share-icon-btn']}
        >
          <FacebookIcon
            size={'2rem'}
            round={true}
          />
        </FacebookShareButton>
        <EmailShareButton
          url={url}
          subject={"Check out FartMasterFlex!"}
          className={styles['share-icon-btn']}
        >
          <EmailIcon size={'2rem'} round />
        </EmailShareButton>
        <WhatsappShareButton
          url={url}
          quote={"Check out FartMasterFlex"}
          className={styles['share-icon-btn']}
        >
          <WhatsappIcon
            size={"2rem"}
            round={true}
          />
        </WhatsappShareButton>
      </div>
    )
  }
  return (
    <div className={styles['share-txt-container']}>
      <div className={styles.heading}>Share a fart</div>
      {displayIcons()}
    </div>
  )
}

export default Share;