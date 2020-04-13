import React from 'react'
import { useHistory } from 'react-router';
import footerStyles from './Footer.module.scss';
import Icon from '../Utility/Icons/Icon';

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
      <div onClick={handleAbout} className={footerStyles["icon-info"]}>
          <Icon identifier='info'
            viewBox='0 0 300 512'
            dimensions={{ width: 20, height: 20 }}
            fill="#e82e37"
          />
        </div>
      <div className={footerStyles["ftr-copyright"]}>FartMasterFlex &copy; {getCopyrightYear()}</div>
    </footer>
  )
}

export default Footer
