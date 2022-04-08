import React from 'react';
import About from '../About/About';
import EmailSubscribe from '../EmailSubscribe/EmailSubscribe';
import Features from '../Features/Features';
import MainSection from '../MainSection/MainSection';

const Home = () => {
    return (
        <div>
            <MainSection></MainSection>
            <Features></Features>
            <About></About>
            <EmailSubscribe></EmailSubscribe>
        </div>
    );
};

export default Home;