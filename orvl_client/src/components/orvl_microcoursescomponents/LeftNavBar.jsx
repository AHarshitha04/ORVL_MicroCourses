import React, { useState, useEffect } from 'react';
import '../orvl_mc_styles/OrvlMicroCourses.css';
import {  useParams } from 'react-router-dom';

import axios from 'axios';
import { FaUserGraduate } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LeftNavbar = ({ userId }) => {
  const [activeButton, setActiveButton] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { id } = useParams();
  


  useEffect(() => {
    const path = window.location.pathname;
    if (path === `/UserDashboard/${userId}`) {
      setActiveButton('Dashboard');
    } else if (path === `/MyCourses/${userId}`) {
      setActiveButton('MyCourses');
    } else if (path === `/BuyCourses/${userId}`) {
      setActiveButton('BuyCourses');
    } else if (path === `/MyAccount/${userId}`) {
      setActiveButton('MyAccount');
    }
  }, [userId]);



  

  return (
    <div>
 
      {/* <div className="hamburger" >
        &#9776; 
      </div> */}
      <div className={`sidebar udsidebar ${isMenuOpen ? 'open' : ''}`}>
        {/* <div className="close-buttonsbhb" >
          &times; 
        </div> */}
        <a href={`/UserDashboard/${userId}`}>
          <div className={`btnudnb nav-button ${activeButton === 'Dashboard' ? 'active' : ''}`}>
            Dashboard
          </div>
        </a>
        <a href={`/MyCourses/${userId}`}>
          <div className={`btnudnb nav-button ${activeButton === 'MyCourses' ? 'active' : ''}`}>
            My Courses
          </div>
        </a>
        <a href={`/BuyCourses/${userId}`}>
          <div className={`btnudnb nav-button ${activeButton === 'BuyCourses' ? 'active' : ''}`}>
            Buy Courses
          </div>
        </a>
        <a href={`/MyAccount/${userId}`}>
          <div className={`btnudnb nav-button ${activeButton === 'MyAccount' ? 'active' : ''}`}>
            My Account
          </div>
        </a>
      </div>
     
    </div>
  );
};

export default LeftNavbar;