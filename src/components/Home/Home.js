import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import homeStyles from './Home.module.scss';
import Button from '../Button/Button';
import SliderItem from '../Slider/SliderItem';
import Logo from '../Logo/Logo';
import { fartSounds } from '../Utility/Data';
import { fartTimer } from '../Utility/Data';
import { makeFartNow } from '../Utility/Data';
import classNames from 'classnames/bind';


const cx = classNames.bind(homeStyles);

const Home = () => {
  const [selectedFart, setSelectedFart] = useState('');
  const [selectedTimer, setSelectedTimer] = useState('');

  const handleClickFart = (name) => {
    setSelectedFart(name);
    makeFartNow(name);

  }
  const handleClickTimer = (name) => {
    console.log('fart timer');
    setSelectedTimer(name, selectedTimer);
  }

  const handleStartFartTimer = () => {
    console.log('start timer');
  }

  const resetFarts = () => {
    setSelectedFart('');
    setSelectedTimer('');
  }

  useEffect(() => {
    resetFarts();
  }, []);

  return (
    <div className={homeStyles['container-fluid']}>
      <div className={homeStyles['container-main']}>
        <div className={homeStyles['heading-container']}>
          <Link to="/">
            <Logo click={resetFarts} />
          </Link>
          <h1 className={homeStyles['txt-heading']}>Fartmaster Flex</h1>
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
        <div className={homeStyles["btn-checkout-container"]}>
          <Link to="/makefart">
            <Button
              type="button"
              onClick={handleStartFartTimer}
              selectedFart={selectedFart}
              selectedTimer={selectedTimer}
              primary
            >
              {/* <AddIcon className={classes.btnIcon} /> */}
              Start Fart Timer
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
