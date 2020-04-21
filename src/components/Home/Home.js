import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import PWAPrompt from 'react-ios-pwa-prompt';
import Seo from '../Seo/Seo';
import styles from './Home.module.scss';
import Layout from '../Layout/Layout';
import Button from '../Button/Button';
import SliderItem from '../Slider/SliderItem';
import Logo from '../Logo/Logo';
import { fartSounds, fartTimer, makeFart, makeFartNow, makeFartNowSilent } from '../Utility/Data';
import classNames from 'classnames/bind';
import { RESET_FART, RESET_TIMER, SET_FART, SET_TIMER } from '../../redux/actionTypes';
import Footer from '../Footer/Footer';
import Share from '../SocialMedia/Share';
import SneakMode from '../SneakMode/SneakMode';

const cx = classNames.bind(styles);

const Home = ({ selectedFart, selectedTimer, sneakMode }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [activeFartRequired, setActiveFartRequired] = useState(false);
  const [activeTimerRequired, setActiveTimerRequired] = useState(false);

  const handleClickFart = (name) => {
    dispatch({ type: SET_FART, payload: name });
    setActiveFartRequired(false);
    if (sneakMode) {
      makeFartNowSilent(name);
    } else {
      makeFartNow(name);
    }
  }
  const handleClickTimer = (name) => {
    dispatch({ type: SET_TIMER, payload: name });
    setActiveTimerRequired(false);
  }

  const handleStartFartTimer = () => {
    if (selectedFart && selectedTimer) {
      makeFart(selectedFart, selectedTimer);
      history.push('/makefart');
    } else {
      if (!selectedFart) {
        setActiveFartRequired(true);
      }
      if (!selectedTimer) {
        setActiveTimerRequired(true);
      }
    }
  }

  const resetFarts = () => {
    dispatch({ type: RESET_FART });
    dispatch({ type: RESET_TIMER });
    setActiveFartRequired(false);
    setActiveTimerRequired(false);
  }

  useEffect(() => {
    if (selectedFart && selectedTimer) {
      setActiveFartRequired(false);
      setActiveTimerRequired(false);
    }
  }, [selectedFart, selectedTimer]);

  useEffect(() => {
    window.scrollTo(0, 0);
    resetFarts();
  }, []);

  return (
    <Layout>
      <Seo title="FartMasterFlex" />
      <PWAPrompt
        copyBody={'FartMasterFlex has app functionality. Add it to your home screen to use it in fullscreen and while offline.'}
      />
      <div className={'heading-container'}>
        <Logo />
        <h1 className={'txt-heading'}>Fartmaster Flex</h1>
        <SneakMode />
      </div>
      <p className={cx('sneak-mode', { 'sneak-mode--active': sneakMode })}>Sneak attack</p>
      <h3 className={styles.steps}>Select fart: <span className={cx("required", {
        "required-show": activeFartRequired
      })}>*Required</span></h3>
      <div className={styles['scroll-container']}>
        <SliderItem
          items={fartSounds}
          handleClick={handleClickFart}
          selected={selectedFart}
          isFart
        />
      </div>
      <h3 className={styles.steps}>Select timer: <span className={cx("required", {
        "required-show": activeTimerRequired
      })}>*Required</span></h3>
      <div className={cx('scroll-container', 'scroll-container-timer')}>
        <SliderItem
          items={fartTimer}
          handleClick={handleClickTimer}
          selected={selectedTimer}
          isTimer
        />
      </div>
      <div className={"btn-checkout-container"}>
        <Button
          type="button"
          handleClick={handleStartFartTimer}
          selectedFart={selectedFart}
          selectedTimer={selectedTimer}
          primary
        >
          Set Fart Timer
            </Button>
      </div>
      <Share />
      <Footer />
    </Layout>
  );
}

const mapStateToProps = state => ({
  selectedFart: state.fartReducer,
  selectedTimer: state.timerReducer,
  sneakMode: state.sneakModeReducer
});

export default connect(mapStateToProps)(Home);
