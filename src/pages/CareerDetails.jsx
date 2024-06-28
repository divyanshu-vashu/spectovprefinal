import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import ctestimg from "../assets/logo.svg";
import qr from "../assets/QR_sample.png";
import axios from 'axios';
import "../Styles/CareerDetails.css"; 

let careers = [
  {
    id: 0,
    title: "Full Stack Development",
    subtitle: "Learn Full Stack Development",
    content: "Learn Full Stack Development content",
    img: ctestimg,
  },
  {
    id: 1,
    title: "Artificial Intelligence and Machine Learning",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 2,
    title: "AR VR",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 3,
    title: "Logic Building and DSA",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 4,
    title: "DSA And Web ",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 5,
    title: "DSA And ML",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 6,
    title: "SpectoV Special",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 7,
    title: "AR VR",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
];

export default function CareerDetails() {
  const location = useLocation();
  const data = location.state;
  const user = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const { item } = useParams();
  const career = careers.find((c) => c.id === parseInt(item));

  if (!career) {
    return <p>Career not found</p>;
  }

  const [access, setAccess] = useState(data);
  const [inputs, setInputs] = useState({ transactionId: '' });
  const [refer, setRefer] = useState({ referId: '' });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const referEmail = `${refer.referId}@gmail.com`;

      if(refer.referId!==""){
      await axios.put(`https://spectov-backend.onrender.com/api/refer/${referEmail}`);
      }
      if(email===referEmail){
        await axios.put(`https://spectov-backend.onrender.com/api/refer/error`);
      }
      if(refer.referId!==""){
      const response = await axios.put(`https://spectov-backend.onrender.com/api/transaction/${email}/${career.id}/${inputs.transactionId}/${career.title}/${refer.referId}`);
      }
      else{
        const response = await axios.put(`https://spectov-backend.onrender.com/api/transaction/${email}/${career.id}/${inputs.transactionId}/${career.title}/0`);

      }
      await axios.put(`https://spectov-backend.onrender.com/api/enroll/approval/${email}/${career.id}`);
     /* if(refer.referId!==""){
        const referEmail = `${refer.referId}@gmail.com`;

      await axios.put(`https://spectov-backend.onrender.com/api/refer/${referEmail}`);
      }*/
      setAccess('pending');
      alert('Enrollment Successful. Waiting for approval from owner');
    } catch (error) {
      setError("Wrong Referral Id.");
      //alert(error.message);
    }
  };

  const handleChange1 = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange2 = (e) => {
    setRefer(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    document.getElementById("tid").style.display = "flex";
    document.getElementById("rid").style.display = "flex";
    document.getElementById("tbtn").style.display = "flex";
  };

  return (
    <div className="career-details-container">
      <Link
        className=" bg-blue-400 p-4 top-3 rounded-xl m-4 text-white back_btn"
        to={user ? '/page' : '/careers'}
      >
        Go Back
      </Link>
      <img src={career.img} alt={career.title} />
      <div className="career-details-content-container">

      <div className="career-details-qr">
          <div className="qr-heading">QR Code</div>
          <img src={qr} className="qr_code"/>
          <div className="qr-heading">Scan to Pay</div>
      </div>
      
      <div className="career-details-content">
        <h1>{career.title}</h1>
        <h2>{career.subtitle}</h2>
        <p>{career.content}</p>
        {access === 'true' ? (
          <Link
            className="open-btn"
            to="/access"
          >
            Open
          </Link>
        ) : access === 'false' ? (
          <>
            <button
              className="enroll-btn"
              onClick={handleSubmit1}
            >
              Enroll
            </button>
            <input
              type="text"
              id="tid"
              className="input-field"
              placeholder="Enter Transaction Id"
              name="transactionId"
              value={inputs.transactionId}
              onChange={handleChange1}
            />
            <input
              type="text"
              id="rid"
              className="input-field"
              placeholder="Have a referral?"
              name="referId"
              value={refer.referId}
              onChange={handleChange2}
            />
            <button
              id="tbtn"
              className="submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
            {error && <div className="login-error">{error}</div>}
          </>
        ) : (
          <Link
            className="pending-btn"
            onClick={() => alert("Approval pending by owner.")}
          >
            Pending
          </Link>
        )}
      </div>
      </div>
    </div>
  );
} 
