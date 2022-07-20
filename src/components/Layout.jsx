import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import "./Layout.css";
import CarouselImg from "./Carousel";

const setActive = ({ isActive }) => (isActive ? "active-nav" : "nav");

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="contact">
          <div>ООО "МИГ"</div>
          <div>+7-909-200-99-99</div>
        </div>
        <div className="navmenu">
          <NavLink to="/" className={setActive}>
            Главная
          </NavLink>
          <NavLink to="/services" className={setActive}>
            Услуги
          </NavLink>
          <NavLink to="/about" className={setActive}>
            О нас
          </NavLink>
          <NavLink to="/contacts" className={setActive}>
            Контакты
          </NavLink>
        </div>
        <div className="joblist">Наши работы</div>
        <CarouselImg ></CarouselImg>
      </header>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
