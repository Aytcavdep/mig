import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
const contentStyle = {
  height: '100px',
  color: '#fff',
  lineHeight: '100px',
  textAlign: 'center',
  background: '#000',
};

const CarouselImg = () => (
  <Carousel autoplay>
    <div>
      <img src="main.jpg" alt="cartoon"/>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default CarouselImg;