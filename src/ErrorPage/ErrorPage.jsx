import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
              <Link  to="/"><button className='btn btn-success'>Return Home</button></Link>
        </div>
    );
};

export default ErrorPage;