import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import homeStyles from './Home.module.scss';
import Button from '../Button/Button';
import SliderItem from '../Slider/SliderItem';
import Logo from '../Logo/Logo';
import { fartSounds, fartTimer, makeFart, makeFartNow } from '../Utility/Data';
import classNames from 'classnames/bind';
import { RESET_FART, RESET_TIMER, SET_FART, SET_TIMER } from '../../redux/actionTypes';
import Footer from '../Footer/Footer';

const cx = classNames.bind(homeStyles);

const Home = ({ selectedFart, selectedTimer }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleClickFart = (name) => {
    dispatch({ type: SET_FART, payload: name });
    makeFartNow(name);

  }
  const handleClickTimer = (name) => {
    dispatch({ type: SET_TIMER, payload: name });
  }

  const handleStartFartTimer = () => {
    if (selectedFart && selectedTimer) {
      makeFart(selectedFart, selectedTimer);
      history.push('/makefart');
    }
  }

  const resetFarts = () => {
    dispatch({ type: RESET_FART });
    dispatch({ type: RESET_TIMER });
  }

  useEffect(() => {
    resetFarts();
  }, []);

  return (
    <div className={'container-fluid'}>
      <div className={'container-main'}>
        <div className={'heading-container'}>
          <Logo />
          <h1 className={'txt-heading'}>Fartmaster Flex</h1>
        </div>
        <h3 className={homeStyles.steps}>Select fart:</h3>
        <div className={homeStyles['scroll-container']}>
          <SliderItem
            items={fartSounds}
            handleClick={handleClickFart}
            selected={selectedFart}
            isFart
          />
        </div>
        <h3 className={homeStyles.steps}>Select timer:</h3>
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
            {/* <AddIcon className={classes.btnIcon} /> */}
            Start Fart Timer
            </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  selectedFart: state.fartReducer,
  selectedTimer: state.timerReducer
});

export default connect(mapStateToProps)(Home);
