import CareerCard from "../components/CareerCard";
import { Navbar } from "../components/";
import ctestimg from "../assets/careerCardTestImage.png";
import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";
import Demo from "../components/Demo";

import Career_hero from "../components/Career_hero";




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
    title: "Artificial Intelligence ",
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

export default function CareerPage() {
  return (
    <div style={{ backgroundColor: 'black' }}>
    
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
