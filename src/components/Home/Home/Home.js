import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Partner from '../../Partner/Partner';
import Subscribe from '../../Subscribe/Subscribe';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Subscribe></Subscribe>
            <About></About>
            <Partner></Partner>
           
        </div>
    );
};

export default Home;