import CareerCard from "../components/CareerCard";
import { Navbar } from "../components/";
import ctestimg from "../assets/careerCardTestImage.png";
import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";
import Demo from "../components/Demo";

import Career_hero from "../components/Career_hero";
import CareerNavbar from "../components/CareerNavbar";




let careers = [
	{
		id: 0,
	  title: "SpectoV Special",
	  price:6500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctesting,
	  
	},
	{
	  id: 1,
	  title: "Artificial Intelligence ",
	  price:2500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
	{
	  id: 2,
	  title: "Augmented Reality",
	  price:2500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
	{
	  id: 3,
	  title: "Logic Building and DSA",
	  price:2500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: "/dsa.png",
	},
	{
	  id: 4,
	  title: "DSA And Web ",
	  price:4000,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
	{
	  id: 5,
	  title: "DSA And AI",
	  price:4000,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
	{
		id: 6,
		title: "Full Stack Development",
		price:2500,
		subtitle: "Learn Full Stack Development",
		content: "Learn Full Stack Development content",
		img: "/fullstack.png,
	},
	{
	  id: 7,
	  title: "App Development",
	  price:2500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
  ];

  

export default function CareerPage() {
  return (
    <div style={{ backgroundColor: 'black' }}>
    <CareerNavbar/>
    <Career_hero />
    <Timeline />
    



    {/* add componnet here  */}

    {/* harshanth , your work will chnage below code  */}
    
    <div style={{display:"flex",justifyContent:"space-between ",color:"white"}}>
      <h1 className="ml-5 mt-32 text-4xl text-white font-bold text-black md:ml-24">
        Careers At SpectoV
      </h1>      
      
      </div>
      <div className="w-100 m-10 ml-5 flex text-white flex-wrap md:ml-20" style={{ color: "white !important" }}>
          {careers.map((career) => (
          <CareerCard 
            key={career.id}
            item={career.id}
            title={career.title}
            // subtitle={career.subtitle}
            content={career.content}
            img={career.img}
          />
   ))}
   </div>

  </div>
  );
}
