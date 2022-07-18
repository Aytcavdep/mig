import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import "./Layout.css";

const setActive = ({ isActive }) => (isActive ? "active-nav" : "");

const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/services" className={setActive}>
          Services
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink>
        <NavLink to="/contacts" className={setActive}>
          Contacts
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
