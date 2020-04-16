import React from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Icon from '../Utility/Icons/Icon';
import styles from './SneakMode.module.scss';
import { SET_SNEAK_MODE } from '../../redux/actionTypes';


const SneakMode = ({ sneakMode }) => {
  const dispatch = useDispatch();

  const toggleSneakMode = () => {
    dispatch({ type: SET_SNEAK_MODE });
  }

  return (
    <div onClick={toggleSneakMode} className={styles.sneak}>
      <Icon identifier='volume'
        viewBox='0 0 512 512'
        dimensions={{ width: 25, height: 25 }}
        fill={sneakMode ? "#e82e37" : "#6c3737"}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  sneakMode: state.sneakModeReducer
});

export default connect(mapStateToProps)(SneakMode);
