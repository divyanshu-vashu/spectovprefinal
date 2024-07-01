import CareerCard from "../components/CareerCard";
import { Navbar } from "../components/";
import ctestimg from "../assets/careerCardTestImage.png";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
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
	  price:6500,
	  subtitle: "combo of dsa , web dev ,AI , ,App dev our premium program  ar vr ",
	  content: "Artificial Intelligence and Machine Learning",
	  img: special,
	  
	},
	{
	  id: 1,
	  title: "Artificial Intelligence ",
	  price:2500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ai,
	},
	{
	  id: 2,
	  title: "Augmented Reality",
	  price:3000,
	  subtitle: "Learn Blender, Learn how ar vr is made ",
	  
	  content: "Artificial Intelligence and Machine Learning",
	  img: ar,
	},
	{
	  id: 3,
	  title: "Logic Building and DSA",
	  price:2500,
	  subtitle: "This course in c++",
	  content: "",
	  img: dsa,
	},
	{
	  id: 4,
	  title: "DSA And Full Stack Dev",
	  price:4000,
	  subtitle: "This course is combo of dsa and full stack Mern dev",
	  content: "",
	  img: combodsaweb,
	},
	{
	  id: 5,
	  title: "DSA And Artificial Int",
	  price:4000,
	  subtitle: "This course is combo of DSA and Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: combodsaai,
	},
	{
		id: 6,
		title: "Full Stack Development",
		price:2500,
		subtitle: "Learn Full Stack Development and Learn With Industry Experience ",
		content: "Learn Full Stack Development content",

		img: fullstack,

	},
	{
	  id: 7,
	  title: "App Development",
	  price:2500,
	  subtitle: "Learn Flutter , Learn App Dev with Industry Leader",
	  content: "Artificial Intelligence and Machine Learning",
	  img: appdev,
	},
  ];
  
const Main = () => {

	//const name=localStorage.getItem('name')
	//alert(name)


	const [user, setUser] = useState([]);
	const email = localStorage.getItem("email");
	const getCodeDetail=async()=>{
	  try{
		  const {data}=await axios.get(`https://spectov-backend.onrender.com/api/details/${email}`);
			  setUser(data);
  
	  }catch(error){
		  console.log(error);
  }}
  //alert(user.courses)
	  getCodeDetail();
	 localStorage.setItem('courses',user.courses)

	 const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	return (
		<> 
		{/* <Navbar /> */}
		<div style={{ backgroundColor: 'black' }}>
    
    	
		<div style={{display:"flex",justifyContent:"space-between"}}>
		<h1 className="ml-5 mt-32 text-4xl font-bold text-white md:ml-24">
		  Careers At SpectoV
		</h1>
		<div style={{display:"flex"}}>
		<h1 className="mt-9 text-white">Hi {user.firstName}</h1>&emsp;

		<Link to="/details" className="mt-9"  >
				<button style={{backgroundColor:"blue",color:"white",height:"2.5rem",borderRadius:"10px"}} >&emsp;Profile&emsp;</button>
			  </Link>      &emsp;
		<Link to="/login" className="mt-9" >
				<button style={{backgroundColor:"red",color:"white",height:"2.5rem",borderRadius:"10px"}}  onClick={handleLogout}>&emsp;logout&emsp;</button>
			  </Link>&emsp;</div>
		</div>
	
		<div className="w-100 m-10 ml-5 flex flex-wrap md:ml-20">
		  {careers.map((career) => (
			<CareerCard
			  key={career.id}
			  item={career.id}
			  title={career.title}
			//   price={career.price}
			//   subtitle={career.subtitle}
			//   content={career.content}
			  img={career.img}
			  //courses={user.courses}
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
