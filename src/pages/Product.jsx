import React from "react";
import { Navbar } from "../components";
import "../Styles/product.css";
import Banner from "../components/Banner";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import CustomNavbar from "../components/CustomNavbar";
import VideoBanner from "../components/VideoBanner";
import Catalouge from "../components/Catalouge";
import Testimonials from "../components/Testimonials";
import Specs from "../components/Specs";
import Table from "../components/Table";

import Cursor from "../components/Cursor";

const product = () => {
  return (
    <div>
      <div className="product_container cursor-none">
        <Cursor />
        {/* <Navbar /> */}
        <Banner />
        <Catalouge />
        <Table />
        <Specs />
        <Testimonials />
        
      </div>
    </div>
  );
};

export default product;
