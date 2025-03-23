import React from 'react';
import PricingHeroSection from './PricingHeroSection';
import Brokrage from './Brokrage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>
        < PricingHeroSection />
        < OpenAccount />
        < Brokrage />
        </>
     );
}

export default PricingPage;