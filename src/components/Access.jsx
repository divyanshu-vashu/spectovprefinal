import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "../Styles/Access.css";

export default function Access() {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <Navbar />
      <div>
        <h1 className="data-text">{data}</h1>
        <h1 className="coming-soon">Coming Soon...</h1>
        <p></p>
        <p></p>
        <h1 className="text-black text-center text-4xl">Your Training Program Will Start from August 1</h1>

        <h1 className="text-black text-center text-4xl">All the content will live at 7 pm , till Hold on !!!</h1>
      </div>
    </>
  );
}
