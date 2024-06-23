import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import ctestimg from "../assets/careerCardTestImage.png";
import axios from 'axios';

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
var i=0;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs.transactionId, career.id, email,career.title);
    try {
      const response = await axios.put(`https://spectov-backend.onrender.com/api/transaction/${email}/${career.id}/${inputs.transactionId}/${career.title}`);
      await axios.put(`https://spectov-backend.onrender.com/api/enroll/approval/${email}/${career.id}`)

      setAccess('pending');
        alert('Enrollment Successful. Waiting for approval from owner');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    document.getElementById("tid").style.display = "flex";
    document.getElementById("tbtn").style.display = "flex";
  };

  return (
    <div className="items-center md:flex md:p-10">
      <Link
        className="absolute bg-blue-400 p-4 top-3 rounded-xl m-4 text-white"
        to={user ? '/page' : '/careers'}
      >
        Go Back
      </Link>
      <img className="w-full rounded-md md:w-1/2" src={career.img} alt="" />
      <div className="md:flex md:flex-col">
        <h1 className="p-5 pl-2 text-3xl font-bold text-black md:pl-5 md:text-4xl">
          {career.title}
        </h1>
        <h2 className="pl-2 text-xl text-black md:pl-5 md:text-xl">
          {career.subtitle}
        </h2>
        <p className="p-5 text-md w-full text-wrap break-words pr-5 pt-2 md:text-xs">
          {career.content}
        </p>
        {access === 'true' ? (
          <Link
            className="ml-4 mt-2 block h-16 w-48 items-center justify-center rounded-xl bg-blue-600 py-4 text-center text-white"
            to="/access"
          >
            Open
          </Link>
        ) : (
          (access === 'false'  )? (
            <>
              <button
                className="ml-4 mt-2 block h-16 w-48 items-center justify-center rounded-xl bg-blue-600 py-4 text-center text-white"
                onClick={handleSubmit1}
              >
                Enroll
              </button>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  id="tid"
                  placeholder="Enter Transaction Id"
                  name="transactionId"
                  value={inputs.transactionId}
                  style={{
                    backgroundColor: "white",
                    borderWidth: '0.1rem',
                    borderColor: "black",
                    width: '20rem',
                    height: "3rem",
                    textAlign: "center",
                    marginTop: '2rem',
                    display: "none",
                    borderRadius: '10px'
                  }}
                  onChange={handleChange}
                />
                <button
                  style={{ display: "none" }}
                  id="tbtn"
                  onClick={handleSubmit}
                  className="ml-3 mt-8 block h-11 w-28 items-center justify-center rounded-xl bg-blue-600 py-4 text-center text-white"
                >
                  Submit
                </button>
              </div>
            </>
          ) : (
            <Link
              className="ml-4 mt-2 block h-16 w-48 items-center justify-center rounded-xl bg-blue-600 py-4 text-center text-white"
              onClick={() => alert("Approval pending by owner.")}
            >
              Pending
            </Link>
          )
        )}
      </div>
    </div>
  );
}
