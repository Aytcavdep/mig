import { NavLink, Outlet, Link } from "react-router-dom";
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
          <div className="company">ООО "МИГ"</div>
          <div className="phone">
            <a className="phone" title="Набрать" href="tel:+79102274758">
              <PhoneOutlined />
              +7-910-227-47-58
            </a>
          </div>
        </div>
        <div className="messager-container">
          <div className="messager">
            <a
              title="Отправить Email"
              href="mailto:admin@migbelg.ru?subject=Расчёт изготовления детали(from:migbelg.ru)"
            >
              <img src={require("./img/email.webp")} alt="Email" />
            </a>
            <a title="WhatsApp" href="whatsapp://send?phone=+79102274758">
              <img src={require("./img/whatsapp.png")} alt="WhatsApp" />
            </a>
            <a title="Viber" href="viber://chat?number=%2B79102274758">
              <img src={require("./img/viber.png")} alt="Viber" />
            </a>
            <Link to="/contacts" title="Отправить сообщение">
              <img src={require("./img/Letter.png")} alt="Letter" />
            </Link>
            {/* <a title="Telegram" href="tg://resolve?domain=santech31"><img src="img/telegram.png" alt="Telegram"></a> */}
            {/* <a title="instagram" href="http://instagram.com/_u/santech31/"><img src="img/instagram.png" alt="instagram"></a>
    <a title="Vk" href="http://vk.com/santech31/"><img src="img/vk.png" alt="vkontakte"></a> */}
          </div>
        </div>
        <div className="navmenu">
          <NavLink to="/" className={setActive}>
            <HomeTwoTone /> Главная
          </NavLink>
          <NavLink to="/services" className={setActive}>
            <ToolTwoTone /> Услуги
          </NavLink>
          <NavLink to="/about" className={setActive}>
            <FlagTwoTone /> О нас
          </NavLink>
          <NavLink to="/contacts" className={setActive}>
            <ContactsTwoTone /> Контакты
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
