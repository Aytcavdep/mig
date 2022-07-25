import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Card } from 'antd';
const { Meta } = Card;

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <p>
        Широкий спект услуг металлообработки, а так же иные сопутствующие работы
      </p>
      {/* <div className="site-card-border-less-wrapper">
      <Card size="small" bordered={false} title="Обработка на станке ЧПУ" extra={<Link to="cnc">Подробнее</Link>} style={{ width: 300 }}>
      <div><img align="left" src={require("./services/img/topor.jpg")} alt="cnc" height="300px"/></div>
    </Card>
    </div> */}
    <Link to="cnc"><Card
    style={{ width: 300 }}
    cover={
      <img
        alt="cnc"
        src={require("./services/img/shesterny.JPG")}
      />
    }
  >
    <Meta
      title="Обработка на станке ЧПУ"
      description="This is the description"
    />
  </Card></Link>
      {/* <ul>
        <li>
          <Link to="cnc">Обработка на станке ЧПУ</Link>
        </li>
      </ul> */}
      <Outlet />
    </div>
  );
};

export default Services;
