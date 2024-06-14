import React from "react";
import { SectionWrapper } from "../hoc";
import { Link } from 'react-router-dom';
import '../Styles/Defxv.css';

const Defxv = () => {
  return (
    <div className="roww">
      <div className="leftt">
        <h1 className="contentt">
          Your H1 Text Here Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, assumenda.
        </h1>
        <div className="def-btnn">
          <Link to="/products"><button className="learn-more-btn ">Learn More</button></Link>
        </div>
    </div>
      <div className="rightt">
        <img src="/glasses2.png" alt="alternative_text" />
      </div>
    </div>
  );
};

export default SectionWrapper(Defxv, "defxv");
