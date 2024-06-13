import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/VideoBanner.css";
import videoBackground from "../assets/stock.mp4";

const VideoBanner = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 100%",
        end: "bottom 0%",
        scrub: 1,
      },
    });

    tl.fromTo(
      textRef.current,
      { y: "100%", opacity: 1 },
      { y: "-100%", opacity: 1, duration: 1 },
    );
  }, []);

  return (
    <div className="videobanner_container">
      {/* Video background */}
      <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" />
      </video>

      {/* Text overlay */}
      <div className="videobanner_text" ref={textRef}>
        <p>
          Step into a new world of communication and understanding with DefXV's
          groundbreaking AR glasses and revolutionize the way you connect with
          others and experience the world.
        </p>
      </div>
    </div>
  );
};

export default VideoBanner;
