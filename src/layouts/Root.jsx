import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Navbar/Navbar';

const Root = () => {
    return (
       <div className=' bg-cyan-100 '>
         <div className='container mx-auto'>
          <div >
        <Navbar></Navbar>
        
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
       </div>
    );
};

export default Root;