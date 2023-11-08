import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import error from "../assets/errorgift.json"

const ErrorPage = () => {
    return (
        <div>
             <Lottie style={{height:'700px'}} animationData={error} loop={true} />
              <div className='text-center'>
              <Link  to="/"><button className='btn  btn-success'>Return Home</button></Link>
              </div>
        </div>
    );
};

export default ErrorPage;