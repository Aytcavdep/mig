import React from 'react';
import './Contacts.css';
import { Image } from 'antd';
import { CompassTwoTone } from '@ant-design/icons';
import mapRoute from '../img/mapRoute.jpg';
import Route_1 from '../img/Route-1.jpg';
import Route_2 from '../img/Route-2.jpg';
import Route_3 from '../img/Route-3.jpg';
import Route_4 from '../img/Route-4.jpg';
import Contact from '../components/Contact';

const Contacts = () => {
  return (
    <div>
      <Contact />
      <div>
        <p className="schema">
          <CompassTwoTone /> Схема проезда
        </p>
        <div className="map">
          <Image alt="Карта с маршрутом" src={mapRoute} />
        </div>
        <div className="route-Img">
          <Image src={Route_1} />
          <Image src={Route_2} />
          <Image src={Route_3} />
          <Image src={Route_4} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
