import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../Styles/coursePage.css";

const Content = ({ content }) => {
  return <h1>{content}</h1>;
};

export default function Example() {
  const [content, setContent] = useState("Click here");
  const [videoLink, setVideoLink] = useState("");

  const days = 5; // Set how many days you want

  const handleAccordionClick = (title) => {
    setContent(title);
  };

  const handleResourceClick = () => {
    setContent("Some content text");
    setVideoLink(""); // Clear the video link if you want to hide the video when resources are clicked
  };

  const handleVideoClick = (link) => {
    setContent("");
    setVideoLink(link);
  };

  const generateAccordionItems = () => {
    const items = [];
    for (let i = 1; i <= days; i++) {
      items.push(
        <AccordionItem key={i}>
          <AccordionItemHeading>
            <AccordionItemButton
              onClick={() => handleAccordionClick(`Day ${i}`)}
            >
              Day {i}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div onClick={handleResourceClick}>Resources</div><br />
            <div onClick={() => handleVideoClick("https://drive.google.com/file/d/1MVaoq6WhxwqDnjDK7OvCXvj_JymTUVyS/preview")}>
{/*             <div onClick={() => handleVideoClick("https://www.youtube.com/embed/jnLSYfObARA?si=MycJSAZTYJQ8AOs5")}> */}
              Video
            </div>
          </AccordionItemPanel>
        </AccordionItem>,
      );
    }
    return items;
  };

  useEffect(() => {
    // Load Vimeo player script
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1 className="mb-2 pb-0 pt-20 text-lg font-bold text-black md:text-2xl">
        Course Name
      </h1>
      <div className="mt-20 flex flex-col-reverse p-20 pt-10 md:mt-0 md:flex-row">
        <h1 className="mb-2 text-lg font-bold text-white md:text-2xl">
          Shivang
        </h1>
        <div className="contain mt-20 w-1/5 md:mt-0">
          <Accordion>{generateAccordionItems()}</Accordion>
        </div>
        <div className="relative h-[40rem] w-[80rem] bg-slate-400">
          {videoLink ? (
            <div className="absolute inset-0">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          ) : (
            <Content content={content} />
          )}
        </div>
      </div>
    </div>
  );
}
