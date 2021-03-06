import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Partner from '../../Partner/Partner';
import Subscribe from '../../Subscribe/Subscribe';
import Services from '../Services/Services';

const Home = () => {
    const { isLoading } = useFirebase();
    if (isLoading) {
        return  <div className="spinner-border text-danger mt-5 mb-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
    }
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