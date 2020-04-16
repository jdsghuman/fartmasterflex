import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import Layout from '../Layout/Layout';
import Seo from '../Seo/Seo';
import Logo from '../Logo/Logo';
import styles from './About.module.scss';
import Footer from '../Footer/Footer';

const cx = classNames.bind(styles);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Seo title="About | FartMasterFlex" />
      <div className={'heading-container'}>
        <Logo />
        <h1 className={'txt-heading'}>About Me</h1>
      </div>
      <p className={styles['about-txt']}>
        Hi, my name is Simran and I am 6 years old. My dad helped me
        build this site during the corona virus. I want to build games
        when I get older. I also like farts.
        </p>
        <h3 className={styles.heading}>Fart Timer:</h3>
        <p className={styles.timer}>
        Pick a fart, set the timer, and run! This app will hopefully 
        give you something to laugh about during the covid-19 stay at 
        home quarantine. It'll also get your family off the couch 
        after they hear someone fart!<br/>
        </p>
        <span class={cx('timer', 'sneak')}>Press the mute button in the homepage nav and activate sneak
          attack mode!</span>
      <Footer />
    </Layout>
  )
}

export default About
