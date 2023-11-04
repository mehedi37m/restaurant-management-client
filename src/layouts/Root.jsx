import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';

const Root = () => {
    return (
        <div className='container mx-auto'>
          <div >
          <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Root;