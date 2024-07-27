import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../styles/coursePage.css";

const Content = ({ content }) => {
  return <h1>{content}</h1>;
};

export default function Example() {
  const [content, setContent] = useState("Click here");
  const [videoLink, setVideoLink] = useState(
    "https://player.vimeo.com/video/794492622?h=31cc9f209b",
  );
  const days = 5; // Set how many days you want

  const handleAccordionClick = (title) => {
    setContent(title);
  };

  const handleResourceClick = () => {
    setContent("Some content text");
    setVideoLink(""); // Clear the video link if you want to hide the video when resources are clicked
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
            <div onClick={handleResourceClick}>Resources</div> <br />
            <div onClick={() => setContent("Some content")}>Video</div>
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
        <div className="h-[40rem] w-[80rem] bg-slate-400">
          {videoLink ? (
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src={videoLink}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
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
