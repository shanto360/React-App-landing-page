import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import EmailSubscribe from '../EmailSubscribe/EmailSubscribe';
import Features from '../Features/Features';
import MainSection from '../MainSection/MainSection';
import Pricing from '../Pricing/Pricing';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <MainSection></MainSection>
            <Features></Features>
            <About></About>
            <EmailSubscribe></EmailSubscribe>
            <Review></Review>
            <Pricing></Pricing>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;