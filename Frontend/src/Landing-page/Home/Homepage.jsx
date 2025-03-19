import React from 'react';
import HomeHeroSection from './HomeHeroSection';
import Award from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Homepage() {
    return ( 
        <>
        <Navbar />
        <HomeHeroSection />
        <Award />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
        </>
     );
}

export default Homepage;