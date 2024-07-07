import React from "react";
import FounderImage from "../assets/FounderImage.png";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Founder() {
  const settings = {
    infinite: true,
    dots:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
    >
      <Slider {...settings} className="w-4/5 md:ml-48 ml-10 mb-20">
        
        <div className="relative md:flex w-full md:h-[30rem] h-fit bg-indigo-950 text-white rounded-3xl ">
          <img className="md:h-full md:w-1/2  object-contain" src={FounderImage} alt="John Doe" />
          <div className="md:absolute md:top-0 md:left-0 w-full h-full flex items-center">
            <div className="p-10 md:ml-[50%] md:w-1/2">
              <h1 className="text-5xl mb-5">Vanshmani Jha</h1>
              <h3 className="text-3xl mb-5">Founder of SpectoV</h3>
              <p>
              Founding SpectoV was my bold step to revolutionize virtual reality and enhance human experiences. Despite challenges, I built a dynamic, collaborative workspace, valuing every team member. SpectoV’s rapid growth in VR solutions and strategic partnerships showcases our determination and innovation. We’re excited about the future and pushing VR boundaries further.
              </p>
            </div>
          </div>
        </div>
       

        <div className="relative w-full md:h-[30rem] h-fit bg-indigo-950 text-white rounded-3xl ">
          <h1 className="text-white text-center text-3xl mt-5">Board Member of SpectoV</h1>
      {/* First Team Member */}
      <div className="inline-block md:w-1/3 bg-indigo-950 p-6  ">
        <img src="/shivang.jpeg" alt="Team Member" className="w-full h-auto rounded-full mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-center" >Shivang</h1>
        <h3 className="text-lg mb-2 text-center">Director of SpectoV</h3>
      </div>

      {/* Second Team Member */}
      <div className="inline-block md:w-1/3 bg-indigo-950 p-6 ">
        <img src="/anj.jpg" alt="Team Member" className="w-full h-auto rounded-full mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-center">Anjaneya</h1>
        <h3 className="text-lg mb-2 text-center">Director of SpectoV</h3>
      </div>

      {/* Third Team Member */}
      <div className="inline-block md:w-1/3 bg-indigo-950 p-6 ">
        <img src="/52792b.jpg" alt="Team Member" className="w-full h-auto rounded-full mb-4" />
        <h1 className="text-2xl font-bold mb-2">Dr.Vijayaprabakaran K</h1>
        <h3 className="text-lg mb-2">Board Member of SpectoV</h3>
      </div>
    </div>
      
      
        
        {/* <div className="relative md:flex w-full md:h-[30rem] h-fit bg-indigo-950 text-white rounded-3xl">
           <img className="md:h-full md:w-1/2  object-contain" src={FounderImage} alt="John Doe" /> 
          <div className="md:absolute md:top-0 md:left-0 w-full h-full flex items-center">
            <div className="p-10 md:ml-[50%] md:w-1/2">
              <h1 className="text-5xl mb-5">Anjaneya </h1>
              <h3 className="text-3xl mb-5">Director of SpectoV</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed placeat
                minima dolor quisquam doloribus rem adipisci dolorem temporibus ipsum
                nulla itaque, illo deserunt iure consectetur fuga ut veniam quis
                voluptatum?
              </p> 
            </div>
          </div>
        </div> */}
      </Slider>
    </motion.div>
  );
}
