import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <Popular></Popular>
        </div>
    );
};

export default Home;
