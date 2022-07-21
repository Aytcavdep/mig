import { NavLink, Outlet } from "react-router-dom";
import {
  ContactsTwoTone,
  HomeTwoTone,
  FlagTwoTone,
  ToolTwoTone,
  PhoneOutlined
} from "@ant-design/icons";
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
          <div>
            <a className="phone" title="Набрать" href="tel:+79999999999">
              <PhoneOutlined />
              +7-999-999-99-99
            </a>
          </div>
        </div>
        <div className="navmenu">
          <NavLink to="/" className={setActive}>
            <HomeTwoTone twoToneColor="#ff6000" /> Главная
          </NavLink>
          <NavLink to="/services" className={setActive}>
            <ToolTwoTone twoToneColor="#ff6000" /> Услуги
          </NavLink>
          <NavLink to="/about" className={setActive}>
            <FlagTwoTone twoToneColor="#ff6000" /> О нас
          </NavLink>
          <NavLink to="/contacts" className={setActive}>
            <ContactsTwoTone twoToneColor="#ff6000" /> Контакты
          </NavLink>
        </div>
        <div className="joblist">Наши работы</div>
        <CarouselImg></CarouselImg>
      </header>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
