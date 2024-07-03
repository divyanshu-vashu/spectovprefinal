import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import ctestimg from "../assets/logo.svg";
// import qr from "../assets/QR_sample.png";
import qr from "../assets/qr.jpg";
import axios from 'axios';
import "../Styles/CareerDetails.css"; 



import ai from "../assets/aibanner.png";
import appdev from "../assets/app_devBanner.png";
import ar from "../assets/arbanner.png";
import combodsaai from "../assets/combo_dsa_ai.png";
import combodsaweb from "../assets/combo_dsa_web.png";
import dsa from "../assets/dsabanner.png";
import fullstack from "../assets/fullstackbanner.png";
import special from "../assets/specialbanner.png";

let careers = [
	{
		id: 0,
	  title: "SpectoV Special",
	  price:6500,
	  subtitle: "combo of dsa , web dev ,AI , ,App dev our premium program  ar vr ",
	  content: "coming soon",
	  img: special,
	  
	},
	{
	  id: 1,
	  title: "Artificial Intelligence ",
	  price:2500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "coming soon",
	  img: ai,
	},
	{
	  id: 2,
	  title: "Augmented Reality",
	  price:3000,
	  subtitle: "Learn Blender, Learn how ar vr is made ",
	  
	  content: "coming soon",
	  img: ar,
	},
	{
	  id: 3,
	  title: "Logic Building and DSA",
	  price:2500,
	  subtitle: "This course in c++",
	  content: "coming soon",
	  img: dsa,
	},
	{
	  id: 4,
	  title: "DSA And Full Stack Dev",
	  price:4000,
	  subtitle: "This course is combo of dsa and full stack Mern dev",
	  content: "coming soon",
	  img: combodsaweb,
	},
	{
	  id: 5,
	  title: "DSA And Artificial Int",
	  price:4000,
	  subtitle: "This course is combo of DSA and Artificial Intelligence and Machine Learning",
	  content: "coming soon",
	  img: combodsaai,
	},
	{
		id: 6,
		title: "Full Stack Development",
		price:2500,
		subtitle: "Learn Full Stack Development and Learn With Industry Experience ",
		content: "coming soon",

		img: fullstack,

	},
	{
	  id: 7,
	  title: "App Development",
	  price:2500,
	  subtitle: "Learn Flutter , Learn App Dev with Industry Leader",
	  content: "coming soon",
	  img: appdev,
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
      if(inputs.transactionId==="")
        {
          setError("Enter Transaction Id")
        }
      else{
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
    }
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
      <div class="flex justify-center items-center">
      <img src={career.img} alt={career.title} class="w-full h-[45vh] aspect-[16/9] rounded-lg mb-6 shadow-md" />
      </div>
      
      <div className="career-details-content-container">

      {/* <div className="career-details-qr">
          
      </div> */}
      <div className="flex flex-col md:flex-row gap-4">
      <div className="career-details-qr mt-12 md:w-25rem flex flex-col items-center justify-center h-auto w-full md:w-96 shadow-md p-4">
      <div className="qr-heading">QR Code</div>
          <img src={qr} className="qr_code"/>
          <h1>Rs.{career.price}</h1>
          <div className="qr-heading">Scan to Pay</div>
      </div>

      <div className="career-details-content text-left">
        <h1>{career.title}</h1>
        <h2>{career.subtitle}</h2>
        <p>{career.content}</p>
        {access === 'true' ? (
          <Link
            className="open-btn"
            to="/access" 
            state={career.title}
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
              style={{backgroundColor:"white"}}
            />
            <input
              type="text"
              id="rid"

              style={{display:"none",backgroundColor:"white"}}

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

              style={{display:"none"}}

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
      <h1>Any Doubt or issue contact at spectov.pvt.ltd@gmail.com</h1>
    </div>
    
  );
} 
