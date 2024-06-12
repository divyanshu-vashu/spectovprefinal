import React from "react";
import { SectionWrapper } from "../hoc";
import { Link } from 'react-router-dom';
import '../Styles/Defxv.css';

const Defxv = () => {
  return (
    <div className="containerdefxv">
      <div className="left-content">
        <div className="defxvh1">
          <h1 className="text-white">
            Your H1 Text Here Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, assumenda.
          </h1>
          <div className="def-btn">
            <Link to="/products"><button className="learn-more-btn ">Learn More</button></Link>
          </div>
        </div>
      </div>
      <div className="right-content">
        <img src="/glasses2.jpg" alt="alternative_text" />
      </div>
    </div>
  );
};

export default SectionWrapper(Defxv, "defxv");
