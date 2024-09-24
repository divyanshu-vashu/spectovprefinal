import React, { useState } from "react";
import "../Styles/Career_hero.css";
import RotatingParagraphs from "./RotatingParagraphs";
import Learninnovategrow from "./Learninnovategrow";
import CareerLIG from "./CareerLIG";
import CareerNavbar from "./CareerNavbar";
import sankalp from "../assets/sankalp.png";
import DVideo from "../assets/Bridging Silence, Building Connections.mp4"
import DVideoMobile from "../assets/SpectovM.mp4"; 
import contestres from "../assets/SankalpCodingContest1.png"
import contestres2 from "../assets/contest2.png"

const Career_hero = () => {
  const liveContests = [
    {
      name: "Sankalp Coding Contest 1",
      link: "https://www.hackerrank.com/spectov-sankalp-coding-contest",
      date: "September 22, 2024",
      startTime: "19:30",
      endTime: "20:30 PM",
      status: "completed", 
      resultImage: contestres, 
    },
    {
      name: "Sankalp Contest 2",
      link: "#",
      date: "September 22, 2024",
      startTime: "22:40 PM",
      endTime: "23:40 PM",
      status: "completed", 
      resultImage: contestres2, 
    },

  ];
  const [showResult, setShowResult] = useState(
    liveContests.map(() => false) // Initial state for each contest to hide results
  );

  // Toggle the result display
  const toggleResult = (index) => {
    setShowResult((prevState) => {
      const updatedShowResult = [...prevState];
      updatedShowResult[index] = !updatedShowResult[index]; // Toggle the specific contest
      return updatedShowResult;
    });
  };

  return (
    <>
      <div className="flex flex-col items-center pb-20 bg-black">
        <div className="mt-24 w-full max-w-[1288px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 mt-24 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col text-7xl max-md:max-w-full max-md:text-4xl">
                  <div className="spectov">Sankalp{" "}</div>
                  <div className="mt-3 text-white max-md:max-w-full max-md:text-4xl">Training Program</div>
                </div>
                <div className="mt-12 text-2xl text-white max-md:mt-10 max-md:max-w-full">
                  Bridging Silence, Building Connections
                </div>
                <div className="shrink-0 mt-12 h-px max-md:mt-10 max-md:max-w-full" />
                <a href="#careers_section" className="flex items-center">
                  <div className="flex gap-4 self-start px-9 py-3.5 mt-12 text-xl text-white rounded-3xl border-cyan-400 border-solid border-[0.777px] max-md:px-5 max-md:mt-10">
                    <div className="grow my-auto">Get Started</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b16b2c587a5fbb83cbe4ad4dccb7e59240b0cadde6fb42b32314bd26172f340?apiKey=9a257399887b42c7b87198aa88395e96&"
                      className="shrink-0 aspect-square w-[19px]"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&"
                className="grow w-full aspect-[1.04] max-md:mt-7 max-md:max-w-full"
              />
            </div>
          </div>
        </div>

       {/* Live Contest Section */}
        <div className="mt-20 w-full max-w-[1288px] px-5 text-white">
          <h2 className="text-3xl text-center mb-10 text-white">Live Contests</h2>
          <div className="flex flex-col gap-5 items-center">
            {liveContests.map((contest, index) => (
              <div key={index} className="w-full max-w-[600px] bg-gray-900 p-5 rounded-lg flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    {/* Contest Name */}
                    <span className="text-xl text-white">{contest.name}</span>
                    {/* Contest Date and Time */}
                    <div className="text-sm text-gray-400">
                      <p>{contest.date}</p>
                      <p>Start: {contest.startTime} - End: {contest.endTime}</p>
                    </div>
                  </div>
                  {/* Button (only for ongoing/upcoming contests) */}
                  {contest.status !== "completed" && (
                    <a 
                      href={contest.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-cyan-400 text-black py-2 px-5 rounded-lg hover:bg-cyan-500 transition-colors"
                    >
                      Take Test
                    </a>
                  )}
                </div>

                {/* Result Button for Completed Contests */}
                {contest.status === "completed" && (
                  <div>
                    <button
                      onClick={() => toggleResult(index)}
                      className="bg-cyan-400 text-black py-2 px-5 rounded-lg hover:bg-cyan-500 transition-colors"
                    >
                      {showResult[index] ? "Hide Result" : "Show Result"}
                    </button>

                    {/* Conditional Rendering of Result Image */}
                    {showResult[index] && contest.resultImage && (
                      <img
                        src={contest.resultImage}
                        alt={`${contest.name} Result`}
                        className="mt-4 w-full h-auto rounded-lg"
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>



        {/* Microsoft section */}
        <img
          loading="lazy"
          src="ms.png"
          className="mt-10"
          style={{ width: "full", height: "auto" }}
        />



        {/* Trusted section */}



        <div className="mt-20 text-xl text-center text-white max-md:mt-10 max-md:max-w-full">
          Trusted by the world’s most ambitious teams.
        </div>

        <CareerLIG />
        <RotatingParagraphs />
      </div>
    </>
  );
};

export default Career_hero;
