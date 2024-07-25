import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-0">
      <div className="text-center">
        <h2 className={styles.sectionHeadText}>The Overview</h2>
      </div>

      <p className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary text-center">
        At SpectoV, our passion lies in pioneering revolutionary assistive
        technologies within the realms of augmented and virtual reality (AR/VR).
        Our goal is to empower people of diverse abilities, demolishing
        obstacles and cultivating a more inclusive world within the immersive
        landscapes of AR and VR. SpectoV stands as a trailblazing startup
        leading the charge in AR and VR assistive innovations. From
        groundbreaking AR overlays to immersive VR experiences, we are dedicated
        to enriching lives and advancing inclusivity through state-of-the-art
        technologies.
      </p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="w-full md:w-64 bg-tertiary rounded-[20px] p-5 shadow-card transition-transform duration-300 ease-in-out hover:scale-105 no-tilt flex flex-col items-center text-center"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="h-16 w-16 object-contain mb-4"
              loading="lazy"
            />
            <h3 className="text-[20px] font-bold text-white">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      <style jsx>{`
        .no-tilt {
          transform: none !important;
        }

        .no-tilt:hover {
          transform: scale(1.05) !important;
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(About, "about");
