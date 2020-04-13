import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import classNames from 'classnames/bind';
import Layout from '../Layout/Layout';
import Seo from '../Seo/Seo';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Icon from '../Utility/Icons/Icon';
import processStyles from './ProcessFart.module.scss';
import { cancelFart, convertMillisToMinutesAndSeconds, getTimer } from '../Utility/Data';
import Footer from '../Footer/Footer';
import TimerDisplay from './TimerDisplay/TimerDisplay';

const cx = classNames.bind(processStyles);

const ProcessFart = ({ selectedFart, selectedTimer }) => {
  const [buttonName, setButtonName] = useState('Cancel Fart Mix');
  const [buttonClass, setButtonClass] = useState({ primary: 'primary' });
  const [counter, setCounter] = useState(null);

  let history = useHistory();
  let process = '';
  const handleCancelFart = () => {
    cancelFart();
    history.push('/');
  }

  const startProcessing = () => {
    const fartTimer = getTimer(selectedTimer);
    process = setTimeout(() => {
      setButtonName('Create New Fart Remix');
      setButtonClass({ continueButton: 'continue' });
    }, fartTimer);
  }

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    console.log('timer', counter)
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    setCounter(convertMillisToMinutesAndSeconds(selectedTimer));
  }, []);

  useEffect(() => {
    if (!selectedFart || !selectedTimer) {
      history.push('/');
    }
    startProcessing();
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(process);
    };
  }, []);

  return (
    <Layout>
      <Seo title="Processing | FartMasterFlex" />
      <div className={'heading-container'}>
        <Logo />
        <h1 className={'txt-heading'}>Fart Mix Processing</h1>
      </div>
      <div className={cx("item", {
        "item-process": buttonName === 'Cancel Fart Mix',
      })}>
        <Icon identifier='record'
          viewBox='0 0 512 512'
          dimensions={{ width: 140, height: 140 }}
          fill="#e82e37"
        />
      </div>
      <TimerDisplay counter={counter} setCounter={setCounter} />
      <div className={"btn-checkout-container"}>
        <Button
          type="button"
          handleClick={handleCancelFart}
          {...buttonClass}
        >
          {buttonName}
        </Button>
      </div>
      <Footer />
    </Layout>
  )
}

const mapStateToProps = state => ({
  selectedFart: state.fartReducer,
  selectedTimer: state.timerReducer
});

export default connect(mapStateToProps)(ProcessFart);
