import React from 'react';
import Banner from './Banner/Banner';
import Gender from './Gender/Gender';
import Services from './Services/Services';
import Specialist from './Specialist/Specialist';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gender></Gender>
            <Services></Services>
            <Specialist></Specialist>
        </div>
    );
};

export default Home;

