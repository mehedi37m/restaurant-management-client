import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Popular from '../Popular/Popular';
import { Helmet } from 'react-helmet-async';
import HomeCard from '../HomeCard/HomeCard';
import Paralax from '../Paralax/Paralax';

const Home = () => {
    return (
        <div className='my-10'>
            <Helmet>
                <title>CZNBURAK || Home</title>
            </Helmet>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <Paralax></Paralax>
            <Popular></Popular>

        </div>
    );
};

export default Home;
