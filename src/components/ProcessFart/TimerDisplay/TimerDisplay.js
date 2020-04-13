import React, { useEffect } from 'react'
import classNames from 'classnames/bind';
import timerStyles from './TimerDisplay.module.scss';

const cx = classNames.bind(timerStyles);

const TimerDisplay = ({ counter, setCounter }) => {

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className={timerStyles.container}>
      <p className={timerStyles.time}>: {counter}</p>
    </div>
  )
}

export default TimerDisplay
