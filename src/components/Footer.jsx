import React from "react";
import "./Layout.css";
import { PhoneOutlined, EnvironmentTwoTone } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <div>ООО "МИГ"</div>
          <div>
            <a className="phone" title="Набрать" href="tel:+79999999999">
              <PhoneOutlined />
              +7-999-999-99-99
            </a>
          </div>
        </div>
        <div className="footer-address">
          <a
            className="address"
            href="https://yandex.ru/maps/-/CCUNvHDjDD"
            title="Перейти на карту"
          >
            <EnvironmentTwoTone />
            с. Стрелецкое, пер. Королёва, 18A
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
