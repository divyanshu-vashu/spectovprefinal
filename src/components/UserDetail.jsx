import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../Styles/userDetails.css';

const UserDetails = () => {
  const [user, setUser] = useState({});
  const email = localStorage.getItem("email");

  useEffect(() => {
    const getCodeDetail = async () => {
      try {
        const { data } = await axios.get(`https://spectov-backend.onrender.com/api/details/${email}`);
        setUser(data);
        localStorage.setItem('name', data.firstName);
      } catch (error) {
        console.log(error);
      }
    };

    getCodeDetail();
  }, [email]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("courses");

    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <div id="user-details-container">
        <div id="user-details">
          <p id="user-firstname">First Name: {user.firstName}</p>
          <p id="user-lastname">Last Name: {user.lastName}</p>
          <p id="user-email">Email: {user.email}</p>
          <p id="user-email">User Referal Id : {user.referId}</p>
          <p id="user-email">Refer to : {user.referred} user</p>


        </div>
        <div id="user-header">
          <h1>Hi {user.firstName}</h1>
          <div id="user-actions">
            <Link to="/page">
              <button id="profile-button">Go Back</button>
            </Link>
            <button id="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <div id="enrolled-courses-container">
        <h1>Enrolled Courses:</h1>
        {user.courses && user.courses.map((course, index) => (
          course === 'true' && (
            <li key={index} id={`course-item-${index}`}>
              <p id={`course-status-${index}`}>Course Status: Approved by owner</p>
              <p id={`course-transaction-${index}`}>Transaction Id: {user.transaction[index]}</p>
              <p id={`course-name-${index}`}>Course Name: {user.coursename[index]}</p>
              <p id={`course-name-${index}`}>Referred By : {user.referal[index]==="0"?"Not Referred" :user.referal[index]+"@gmail.com"}</p>

            </li>
          )
        ))}
      </div>
      <div id="enrolled-courses-container">
        <h1>Pending Courses:</h1>
        {user.courses && user.courses.map((course, index) => (
          course === 'pending' && (
            <li key={index} id={`course-item-${index}`}>
              <p id={`course-status-${index}`}>Course Status: Pending</p>
              <p id={`course-transaction-${index}`}>Transaction Id: {user.transaction[index]}</p>
              <p id={`course-name-${index}`}>Course Name: {user.coursename[index]}</p>
              <p id={`course-name-${index}`}>Referred By : {user.referal[index]==="0"?"Not Referred" :user.referal[index]+"@gmail.com"}</p>

            </li>
          )
        ))}
      </div>
    </>
  );
};

export default UserDetails;
