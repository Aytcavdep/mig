import { Carousel, Image } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import { joblist } from "../pages/services/joblist";
import "./Layout.css";
/*const contentStyle = {
  height: "100px",
  color: "#fff",
  lineHeight: "100px",
  textAlign: "left",
  background: "#000"
};*/

const CarouselImg = () => (
  <Carousel autoplay>
    {joblist.map((item) => (
      <div className="joblist" key={item.id}>
        <div className="img-container">
          <Image align="center" src={item.img} alt={item.title} />
        </div>

        {/* <div className="joblist-container">
          <div className="joblist-services">{item.services}</div>
        </div> */}
      </div>
    ))}
  </Carousel>
);

export default CarouselImg;
