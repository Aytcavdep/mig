import { Carousel } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import { joblist } from "../pages/services/joblist";
const contentStyle = {
  height: "100px",
  color: "#fff",
  lineHeight: "100px",
  textAlign: "left",
  background: "#000"
};

const CarouselImg = () => (
  <Carousel autoplay>
    {joblist.map((item) => (
      <div className="joblist" key={item.id}>
        <Link to="/">
          <img align="left" src={item.img} alt={item.title} height="100px" />
        </Link>
        <div className="joblist-services">{item.services}</div>
      </div>
    ))}
    {/*<div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>*/}
  </Carousel>
);

export default CarouselImg;
