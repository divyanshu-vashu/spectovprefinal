import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../Styles/coursePage.css";
import { Navbar } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import bgImg from "../../public/yue-ma-mQEjK67BCTA-unsplash.jpg";
import join512 from "../assets/join512.png";

const Content = ({ content }) => {
  return (
    <div>
      <h1 className="pl-0 text-left text-3xl font-bold text-white">
        {content}
      </h1>
    </div>
  );
};

export default function Example() {
  const [content, setContent] = useState("Course Content");
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "https://admin-spectov-backend.onrender.com/api/all",
      );
      setCourses(response.data);
    } catch (err) {
      setError(err.message);
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const days = 65; // Set how many days you want

  const handleAccordionClick = (title) => {
    setContent(title);
  };

  const handleResourceClick = (id) => {
    window.open(courses[data?.id]?.materialLink[id - 1]);
    setVideoLink(""); // Clear the video link if you want to hide the video when resources are clicked
  };

  const handleVideoClick = (link) => {
    setContent("");
    const l = link; // for drive link
    setVideoLink(l);
  };

  const generateAccordionItems = () => {
    const items = [];
    for (let i = 1; i <= days; i++) {
      const video = courses[data?.id]?.videoLink[i - 1];
      if (video !== "#") {
        items.push(
          <div className="rounded-xl pb-4">
            <AccordionItem key={i}>
              <AccordionItemHeading>
                <AccordionItemButton
                  onClick={() => handleAccordionClick(`Day ${i}`)}
                >
                  Module {i}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div onClick={() => handleResourceClick(i)}>Resources</div>
                <br />
                <div onClick={() => handleVideoClick(video)}>Video</div>
              </AccordionItemPanel>
            </AccordionItem>
          </div>,
        );
      } else {
        console.log("Data not updated or video link is not available");
      }
    }
    return items;
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1 className="mb-2 pb-0 pt-20 text-lg font-bold text-black md:text-2xl">
          {data?.title}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/5">
            <Accordion className="border-none">
              {generateAccordionItems()}
            </Accordion>
          </div>
          <div className="flex w-full justify-center">
            <div className="mt-10 flex flex-row w-full">
              <div className="aspect-w-16 aspect-h-9 relative w-full rounded-md bg-[#9797ff] p-10 md:ml-20 md:h-[30rem] md:w-[60rem]">
                {videoLink ? (
                  <div className="absolute inset-0">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={videoLink}
                      title=" video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <Content content={content} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-10 md:flex-row md:min-h-[50vh]">
          <div className="flex flex-col rounded-lg border-2 border-gray-300 p-5 w-full md:w-3/4 lg:w-2/3">
            <h1 className="mb-4 text-center">
              Connect With Us and Your Batchmates
            </h1>
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="flex flex-1 items-center justify-center">
                <img src={data.qr} alt="QR Code" className="h-55 w-35" />
              </div>
              <div className="mt-5 flex flex-1 items-center justify-center md:mt-0 md:ml-5">
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={join512}
                    alt="Join WhatsApp Group"
                    className="h-40 w-40"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
