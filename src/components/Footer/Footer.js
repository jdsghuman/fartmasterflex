import React from 'react'
import { useHistory } from 'react-router';
import footerStyles from './Footer.module.scss';
import Icon from '../Utility/Icons/Icon';
import classNames from 'classnames/bind';

const cx = classNames.bind(footerStyles);

const Footer = () => {
  let history = useHistory();

  const getCopyrightYear = () => {
    let currentDate = new Date();
    return currentDate.getFullYear();
  }

  const handleAbout = () => {
    history.push('/about');
  }

  return (
    <footer>
      <button onClick={handleAbout} className={cx(footerStyles.icon, footerStyles.info)}>
        <Icon identifier='info'
          viewBox='0 0 300 512'
          dimensions={{ width: 12, height: 12 }}
          fill="#e82e37"
        />
        About
      </button>
      <div className={footerStyles["ftr-copyright"]}>FartMasterFlex &copy; {getCopyrightYear()}</div>
      <button className={cx(footerStyles.icon, footerStyles.email)}>
      <a
          href={`mailto:fart@fartmasterflex.com?subject=Farts`}
          target="_blank"
          rel="noopener noreferrer">
      <Icon identifier='email'
          viewBox='0 0 500 512'
          dimensions={{ width: 20, height: 20 }}
          fill="#e82e37"
        />
        </a>
      </button>
    </footer>
  )
}

export default Footer
