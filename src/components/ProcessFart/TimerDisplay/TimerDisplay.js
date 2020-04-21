import React, { useEffect } from 'react'
import timerStyles from './TimerDisplay.module.scss';

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
