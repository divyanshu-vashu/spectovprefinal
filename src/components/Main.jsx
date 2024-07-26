import CareerCard from "../components/CareerCard";
import { Navbar } from "../components/";
import ctestimg from "../assets/careerCardTestImage.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Timeline from "../components/Timeline";
import Demo from "../components/Demo";
import Career_hero from "../components/Career_hero";
import ai from "../assets/aibanner.png";
import appdev from "../assets/app_devBanner.png";
import ar from "../assets/arbanner.png";
import xrai from "../assets/AIXAR.png";
import combodsaweb from "../assets/combo_dsa_web.png";
import dsa from "../assets/dsabanner.png";
import fullstack from "../assets/fullstackbanner.png";
import special from "../assets/specialbanner.png";
import sankalp from "../assets/Sankalp_updated.png";
import DVideo from "../assets/Bridging Silence, Building Connections.mp4"
import DVideoMobile from "../assets/SpectovM.mp4"; 

let careers = [
  {
    id: 0,
    title: "SpectoV Special",
    price: 6500,
    subtitle: "combo of dsa, web dev, AI, App dev our premium program ar vr",
    content: "Artificial Intelligence and Machine Learning",
    img: special,
  },
  {
    id: 1,
    title: "Artificial Intelligence ",
    price: 2500,
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ai,
  },
  {
    id: 2,
    title: "Augmented Reality",
    price: 3000,
    subtitle: "Learn Blender, Learn how ar vr is made ",
    content: "Artificial Intelligence and Machine Learning",
    img: ar,
  },
  {
    id: 3,
    title: "Logic Building and DSA",
    price: 2500,
    subtitle: "This course in c++",
    content: "",
    img: dsa,
  },
  {
    id: 4,
    title: "DSA And Full Stack Dev",
    price: 4000,
    subtitle: "This course is combo of dsa and full stack Mern dev",
    content: "",
    img: combodsaweb,
  },
  {
    id: 5,
    title: "Artificial Int & Ar/Vr",
    price: 4000,
    subtitle: "This course is combo of DSA and Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: xrai,
  },
  {
    id: 6,
    title: "Full Stack Development",
    price: 2500,
    subtitle: "Learn Full Stack Development and Learn With Industry Experience ",
    content: "Learn Full Stack Development content",
    img: fullstack,
  },
  {
    id: 7,
    title: "App Development",
    price: 2500,
    subtitle: "Learn Flutter, Learn App Dev with Industry Leader",
    content: "Artificial Intelligence and Machine Learning",
    img: appdev,
  },
];

const Main = () => {
  const [user, setUser] = useState([]);
  const [videoSrc, setVideoSrc] = useState(DVideo);
  const email = localStorage.getItem("email");

  useEffect(() => {
    const getCodeDetail = async () => {
      try {
        const { data } = await axios.get(`https://spectov-backend.onrender.com/api/details/${email}`);
        setUser(data);
        localStorage.setItem('courses', data.courses);
      } catch (error) {
        console.log(error);
      }
    };
    getCodeDetail();
  }, [email]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setVideoSrc(DVideoMobile);
      } else {
        setVideoSrc(DVideo);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize); // Add event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <div style={{ display: "flex" }}>
            <h1 className="mt-9 text-white">Hi {user.firstName}</h1>&emsp;
            <Link to="/details" className="mt-9">
              <button style={{ backgroundColor: "blue", color: "white", height: "2.5rem", borderRadius: "10px" }}>&emsp;Profile&emsp;</button>
            </Link>&emsp;
            <Link to="/login" className="mt-9">
              <button style={{ backgroundColor: "red", color: "white", height: "2.5rem", borderRadius: "10px" }} onClick={handleLogout}>&emsp;Logout&emsp;</button>
            </Link>&emsp;
          </div>
        </div>
        <div className="container mx-auto p-12" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={sankalp} alt="Sankalp image" className="mt-2 rounded-lg w-full max-w-full object-contain" style={{ borderRadius: '15px' }} />
        </div>
        <div className="container mx-auto p-12" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <video src={videoSrc} controls autoPlay loop muted className="mt-2 rounded-lg w-full max-w-full object-contain h-screen" style={{ borderRadius: '15px' }} />
        </div>
        <h1 id="careers_section" className="ml-5 mt-15 text-4xl font-bold text-white md:ml-24">
          Careers At SpectoV
        </h1>
        <div className="w-100 m-10 ml-5 flex flex-wrap md:ml-20">
          {careers.map((career) => (
            <CareerCard
              key={career.id}
              item={career.id}
              title={career.title}
              img={career.img}
            />
          ))}
        </div>
        <Career_hero />
        <Timeline />
      </div>
    </>
  );
};

export default Main;
