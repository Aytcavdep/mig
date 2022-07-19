import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import "./Layout.css";

const setActive = ({ isActive }) => (isActive ? "active-nav" : "nav");

const Layout = () => {
  return (
    <>
      <header className="header">
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
      </header>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
