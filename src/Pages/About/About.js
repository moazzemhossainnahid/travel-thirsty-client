import React from 'react';
import AboutHeader from '../Header/AboutHeader';
import Counter from './AboutCounter/Counter';
import HeroAbout from './HeroAbout';
import Partners from './Partners';
import WhyUs from './WhyUs/WhyUs';

const About = () => {
    return (
        <div className=''>
            <AboutHeader/>
            <HeroAbout/>
            <Counter/>
            <WhyUs/>
            <Partners/>
        </div>
    );
};

export default About;