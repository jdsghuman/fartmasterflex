import React, { useEffect } from 'react'
import Logo from '../Logo/Logo';
import aboutStyles from './About.module.scss';
import Footer from '../Footer/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={'container-fluid'}>
      <div className={'container-main'}>
        <div className={'heading-container'}>
          <Logo />
          <h1 className={'txt-heading'}>About Me</h1>
        </div>
        <p className={aboutStyles['about-txt']}>
          Hi, my name is Simran and I am 6 years old. My dad helped me
          build this site during the corona virus. I want to build games
          when I get older. I also like farts.
        </p>
        <Footer />
      </div>
    </div>
  )
}

export default About
