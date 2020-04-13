import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { RESET_FART, RESET_TIMER } from '../../redux/actionTypes';

import logoStyles from './Logo.module.scss';

const Logo = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const resetFarts = () => {
    history.push('/');
    dispatch({ type: RESET_FART });
    dispatch({ type: RESET_TIMER });
  }
  return (
    <h3 onClick={resetFarts} className={logoStyles.logo}>fM</h3>
  )
}

export default Logo;
