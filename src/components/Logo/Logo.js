import React from 'react'

import logoStyles from './Logo.module.scss';

const Logo = ({ click }) => {

  return (
    <h3 onClick={click} className={logoStyles.logo}>fM</h3>
  )
}

export default Logo;
