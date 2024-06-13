import React, { useEffect, useRef, forwardRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Card.css";

const Card = forwardRef(({ title, paragraph, image, isImageLeft }, ref) => {
  const [isTitle, setIsTitle] = useState(true);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 100%",
        end: "bottom 0%",
        scrub: 1,
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: "100%", opacity: 1 },
      { y: "-100%", opacity: 1, duration: 1 },
    );
  }, []);

  const handleToggle = () => {
    setIsTitle(!isTitle);
  };

  return (
    <div className={`card_container ${isImageLeft ? "left" : "right"}`}>
      <div
        className="card_image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="card_content">
        {isTitle ? (
          <div className="card_title" ref={titleRef}>
            {title}
          </div>
        ) : (
          <div className="card_paragraph">{paragraph}</div>
        )}
        <button className="card_btn" onClick={handleToggle}>
          {isTitle ? "+" : "-"}
        </button>
      </div>
    </div>
  );
});

export default Card;
