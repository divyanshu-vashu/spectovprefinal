import React from "react";
import FounderImage from "../assets/FounderIMG.png";


export default function Founder() {
  return (
    <div className="flex flex-col items-center space-y-10 px-4 md:px-0 mt-16">
      <div className="relative w-full md:w-4/5 bg-indigo-950 text-white rounded-3xl p-6 md:p-10">
        <div className="md:flex w-full h-full items-center">
          <img
            className="md:h-full md:w-1/2 object-contain rounded-3xl"
            src={FounderImage}
            alt="Vanshmani Jha "
          />
          <div className="md:ml-10 md:w-1/2 mt-4 md:mt-0">
            <h1 className="text-3xl md:text-5xl mb-3 md:mb-5 text-white text-start p-0">Vanshmani Jha</h1>
            <h3 className="text-xl md:text-3xl mb-3 md:mb-5 text-white text-start">Founder of SpectoV | CEO</h3>
            <p className="text-sm md:text-base text-white text-start m-0 p-0">
              Founding SpectoV was my bold step to revolutionize virtual reality and enhance human experiences. Despite challenges, I built a dynamic, collaborative workspace, valuing every team member. SpectoV’s rapid growth in VR solutions and strategic partnerships showcases our determination and innovation. We’re excited about the future and pushing VR boundaries further.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-4/5 bg-indigo-950 text-white rounded-3xl p-6 md:p-10">
        <h1 className="text-center text-2xl md:text-3xl mb-4 md:mb-5 text-white">Board Members of SpectoV</h1>
{/*         <div className="md:flex justify-between items-center space-y-10 md:space-y-0 md:space-x-10"> */}
        <div className="md:flex justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
          {/* First Team Member */}
          {/* <div className="bg-indigo-950 p-4 md:p-6 text-center rounded-3xl">
            <img
              src="/shivang.jpeg"
              alt="Team Member"
              className="w-24 h-24 md:w-48 md:h-48 object-cover rounded-full mx-auto mb-4"
            />
            <h1 className="text-lg md:text-2xl font-bold mb-2 text-white">Shivang</h1>
            <h3 className="text-base md:text-lg mb-2 text-white">Director of SpectoV</h3>
          </div> */}

          {/* Second Team Member */}
          {/* <div className="bg-indigo-950 p-4 md:p-6 text-center rounded-3xl">
            <img
              src="/anj.jpg"
              alt="Team Member"
              className="w-24 h-24 md:w-48 md:h-48 object-cover rounded-full mx-auto mb-4"
            />
            <h1 className="text-lg md:text-2xl font-bold mb-2 text-white">Anjaneya</h1>
            <h3 className="text-base md:text-lg mb-2 text-white">Director of SpectoV</h3>
          </div> */}

          {/* Third Team Member */}
          <div className="bg-indigo-950 p-4 md:p-6 text-center rounded-3xl">
            <img
              src="/52792b.jpg"
              alt="Team Member"
              className="w-24 h-24 md:w-48 md:h-48 object-cover rounded-full mx-auto mb-4"
            />
            <h1 className="text-lg md:text-2xl font-bold mb-2 text-white sm:text-xl">Dr. Vijayaprabakaran K</h1>
            <h3 className="text-base md:text-lg mb-2 text-white">Board Member of SpectoV</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
