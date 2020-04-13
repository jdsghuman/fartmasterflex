import React from 'react';
import classNames from 'classnames/bind';
import shareIconStyles from './ShareIcon.module.scss';

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

const cx = classNames.bind(shareIconStyles);

const ShareIcon = () => {
  const url = 'www.fartmasterflex.com';
  const displayIcons = () => {
    return (
      <div className={shareIconStyles["share-icon-container"]}>
        <FacebookShareButton
          url={url}
          quote={`FartMasterFlex - Share a fart`}
          hashtag={"fartMasterFlex"}
          className={shareIconStyles['share-icon-btn']}
        >
          <FacebookIcon
            size={'2rem'}
            round={true}
          />
        </FacebookShareButton>
        <EmailShareButton
          url={url}
          subject={"Check out FartMasterFlex!"}
          className={shareIconStyles['share-icon-btn']}
        >
          <EmailIcon size={'2rem'} round />
        </EmailShareButton>
        <WhatsappShareButton
          url={url}
          quote={"Check out FartMasterFlex"}
          className={shareIconStyles['share-icon-btn']}
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
    <div className={shareIconStyles['share-txt-container']}>
      <div className={shareIconStyles.heading}>Share a fart</div>
      {displayIcons()}
    </div>
  )
}

export default ShareIcon;