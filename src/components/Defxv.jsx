import React from "react";
import { SectionWrapper } from "../hoc";
import { Link } from 'react-router-dom';
import '../Styles/Defxv.css';

const Defxv = () => {
  return (
    <div className="row">
      <div className="left">
        <h1 className="content">
          Your H1 Text Here Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, assumenda.
        </h1>
        <div className="def-btn">
          <Link to="/products"><button className="learn-more-btn ">Learn More</button></Link>
        </div>
    </div>
      <div className="right">
        <img src="/glasses2.png" alt="alternative_text" />
      </div>
    </div>
  );
};

export default SectionWrapper(Defxv, "defxv");
