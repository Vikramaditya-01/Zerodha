import React from 'react';
import HomeHeroSection from './HomeHeroSection';
import Award from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

function Homepage() {
    return ( 
        <>
        <HomeHeroSection />
        <Award />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        </>
     );
}

export default Homepage;