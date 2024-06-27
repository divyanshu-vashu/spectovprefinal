import React from "react";
import { SectionWrapper } from "../hoc";
import { Link } from 'react-router-dom';
import '../Styles/Defxv.css';

const Defxv = () => {
  return (
    <div className="custom-row rounded-md">
      <div className="custom-left">
        <h1 className="custom-content">
        DEFxV: Bridging Worlds with AR/VR - Translate Sign Language and Experience Mobile Magic!
        </h1>
        <div className="custom-def-btn">
          <Link to="/products"><button className="custom-learn-more-btn">Learn More</button></Link>
        </div>
    </div>
      <div className="custom-right">
        <img src="/glasses2.png" alt="alternative_text" />
      </div>
    </div>
  );
};

export default SectionWrapper(Defxv, "defxv");
