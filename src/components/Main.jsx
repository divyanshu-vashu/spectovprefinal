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
import combodsaai from "../assets/combo_dsa_ai.png";
import combodsaweb from "../assets/combo_dsa_web.png";
import dsa from "../assets/dsabanner.png";
import fullstack from "../assets/fullstackbanner.png";
import special from "../assets/specialbanner.png";

let careers = [
  {
    id: 0,
    title: "SpectoV Special",
    price: 6500,
    subtitle: "combo of dsa , web dev ,AI , ,App dev our premium program  ar vr ",
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
    img: combodsaai,
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
    subtitle: "Learn Flutter , Learn App Dev with Industry Leader",
    content: "Artificial Intelligence and Machine Learning",
    img: appdev,
  },
];

const Main = () => {
  const [user, setUser] = useState([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    const getCodeDetail = async () => {
      try {
        const { data } = await axios.get(`https://spectov-backend.onrender.com/api/details/${email}`);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCodeDetail();
  }, [email]);

  useEffect(() => {
    localStorage.setItem('courses', user.courses);
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-5">
          <h1 className="text-4xl font-bold text-white">Careers At SpectoV</h1>
          <div className="flex items-center gap-3 mt-5 md:mt-0">
            <h1 className="text-white">Hi {user.firstName}</h1>
            <Link to="/details">
              <button className="text-white h-10 rounded-lg px-4" style={{backgroundColor:"blue"}}>Profile</button>
            </Link>
            <Link to="/login">
              <button className="text-white h-10 rounded-lg px-4" style={{backgroundColor:"red"}} onClick={handleLogout}>Logout</button>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center">
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
