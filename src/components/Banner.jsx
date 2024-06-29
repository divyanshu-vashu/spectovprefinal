import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/banner.css";
import productImage from "../assets/glasses-removebg.png";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerTextRef = useRef(null);
  const bannerImageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bannerTextRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "easeOut",
        scrollTrigger: {
          trigger: bannerTextRef.current,
          start: "top 80%", // When the top of the banner_text hits 80% of the viewport height
        },
      },
    );

    gsap.to(bannerImageRef.current, {
      y: 75,
      x: 50,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 10, y: -10 },
          { x: 20, y: 0 },
          { x: 10, y: 10 },
          { x: 0, y: 0 },
        ],
        curviness: 1.5,
        autoRotate: true,
      },
    });
  }, []);

  return (
    <div className="banner_container">
      <div className="banner_main">
        <div className="banner_content">
          <div className="banner_text" ref={bannerTextRef}>
            <div className="banner_title">DefXV</div>
            <p className="banner_desc">
              Empowering communication through AI-driven sign language
              translation and intuitive gesture control.
            </p>
            <div className="banner_price">
              Coming Soon
              <button className="buy_now_button">Buy Now</button>
            </div>
          </div>
          <div className="banner_image" ref={bannerImageRef}>
            <img src={productImage} alt="DefXV Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
