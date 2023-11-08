import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import name from "../../assets/name.json"

const Navbar = () => {
   
    const { user, logOutEmail, setUser } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


    const handleLogOut = () => {
      logOutEmail()
        .then((result) => {
          console.log(result.user);
          setUser(null);
        })
        .catch((error) => {
          console.log(error);
        });
    };





    const navLinks = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allItems">All Food Items</NavLink>
          </li>
          <li>
          <NavLink to='/blog'>Blog</NavLink>
          </li>
        </>
      );




    return (
        <div>
            

            <div className="">
      <div className="navbar bg-cyan-100 px-10 py-5 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <a className=" normal-case font-extrabold text-blue-900 text-3xl">
          <Lottie style={{height:'100px'}} animationData={name} loop={true} />
          
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
       

<div>
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="w-full h-full rounded-full cursor-pointer"
                  >
                    <div className="w-10 rounded-full flex justify-center items-center">
                      {/* <FaUserAlt className="bg-white text-orange-500 w-8 h-8 rounded-full"> </FaUserAlt> */}
                      {user ? (
              <div className="mask h-12 w-12 mask-circle">
                <img src={user.photoURL} />
              </div> ): ( <FaUserAlt className="bg-white text-orange-500 w-8 h-8 rounded-full"> </FaUserAlt>
            )}

                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-500 rounded-box w-52"
                  >
                    <li className="text-white mb-3">
                      <Link to={`/addedList`} className="justify-between">
                       My Added Food Items
                      </Link>
                    </li>
                    <li className="text-white mb-3">
                      <Link to={`/addItems`} className="justify-between">
                      Add a Food Item
                      </Link>
                    </li>
                    <li className="text-white mb-3">
                      <Link to={`/orderFood`} className="justify-between">
                       My Order Food Items
                      </Link>
                    </li>

                    <li className="text-white mb-3">
                      <button onClick={handleLogOut}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <li className="text-white mb-3 list-none btn btn-primary">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </div>
    
        </div>
      </div>
    </div>





        </div>
    );
};

export default Navbar;