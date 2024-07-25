import React from "react";
import { SectionWrapper } from "../hoc";
import { Link } from 'react-router-dom';
import '../Styles/Defxv.css';

const Defxv = () => {
  return (
    <div className="custom-row rounded-xl">
      <div className="custom-left">
        <h1 className="custom-content text-gray-400">
        DefXV: Bridging Worlds with AR/VR - Translate Sign Language and Experience Mobile Magic!
        </h1>
        <div className="custom-def-btn">
          <Link to="/products"><button className="text-black custom-learn-more-btn" style={{border:"0.5rem", backgroundColor: 'red' }}>Learn More</button>
          </Link>
        </div>
    </div>
      <div className="custom-right">
        <img src="/glasses3.png" alt="alternative_text" />
      </div>
    </div>
  );
};

export default SectionWrapper(Defxv, "defxv");
