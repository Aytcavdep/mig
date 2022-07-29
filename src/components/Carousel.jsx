import { Carousel, Image } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { joblist } from "../pages/services/joblist";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import "./Layout.css";

const CarouselImg = () => (
  <Carousel
    autoplay
    arrows
    prevArrow={<LeftCircleTwoTone />}
    nextArrow={<RightCircleTwoTone />}
  >
    {joblist.map((item) => (
      <div className="joblist" key={item.id}>
        <div className="img-container">
          <Image align="center" src={item.img} alt={item.title} />
        </div>
      </div>
    ))}
  </Carousel>
);

export default CarouselImg;
