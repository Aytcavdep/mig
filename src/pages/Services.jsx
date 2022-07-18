import React from "react";
import { Outlet, Link } from "react-router-dom";


const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <p>Широкий спект услуг металлообработки</p>
      <ul>
        <li>
          <Link to="cnc">Обработка на станке ЧПУ</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Services;
