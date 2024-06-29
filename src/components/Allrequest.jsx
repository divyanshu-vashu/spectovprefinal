import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Styles/allRequest.css";
import { Link, useNavigate } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const navigate=useNavigate()
  useEffect(() => {
    const fetchUsers = async () => {
      try {

       // window.location.reload()

        const response = await axios.get('https://spectov-backend.onrender.com/api/all-request');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e, email, courseIndex) => {
    e.preventDefault();
   // alert(`User ID: ${userId}, Course Index: ${courseIndex}`);
    try {
      await axios.put(`https://spectov-backend.onrender.com/api/enroll/permission/${email}/${courseIndex}`, { index: courseIndex });
      alert('Enrollment Successful.');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitReject = async (e, email, courseIndex) => {
    e.preventDefault();
   // alert(`User ID: ${userId}, Course Index: ${courseIndex}`);
    try {
      await axios.put(`https://spectov-backend.onrender.com/api/reject/permission/${email}/${courseIndex}`, { index: courseIndex });
      alert('You have rejected this enrollment.');
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout=()=>{
   // navigate("/login")

    localStorage.removeItem("AdminEmail");
    window.location.reload();

  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredUsers = users.filter(user => user.courses.includes("pending"));

  return (
    <div className='parent'>
      <div className="container">
        <div id="user-actions">
        <h1 className="header">Pending Requests</h1>
            <Link  >
              <button onClick={handleLogout} id="profile-button">Logout</button>
            </Link>
          </div>
        {filteredUsers.length === 0 ? (
          <p className="no-users">No users with pending courses found.</p>
        ) : (
          filteredUsers.map(user => (
            <div key={user._id} className="user-card">
              <h2 className="user-name">{user.firstName} {user.lastName}</h2>
              <p className="user-email">Email: {user.email}</p>
              <h3 className="section-title">Pending Courses:</h3>
              <ul className="course-list">
                {user.courses.map((course, index) => (
                  course === 'pending' && (
                    <li key={index} className="course-item">
                      <p className="course-status">Course Status:&emsp;&emsp;&emsp; {course}</p>
                      <p className="course-transaction">Transaction Id:&emsp;&emsp;&emsp; {user.transaction[index]}</p>
                      <p className="course-name">Course Name:&emsp;&emsp;&emsp; {user.coursename[index]}</p>
                      <p className="course-name">Referred By:&emsp;&emsp;&emsp; {user.referal[index]==="0"?"Not Referred":user.referal[index]+"@gmail.com"}</p>

                      <button className="approve-button" onClick={(e) => handleSubmit(e, user.email, index,)}>Approve</button>
                      <button className="reject-button"  onClick={(e) => handleSubmitReject(e, user.email, index,)}>Reject</button>
                    </li>
                  )
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UsersList;
