import React from "react";
import { List } from "antd";
import { RightCircleTwoTone, CompassTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Homepage.css";

const data = [
  {
    title: "Токарные работы ЧПУ",
    description:
      "max диаметр 500 РМЦ 1500",
    img: require("./services/img/lathe.png")
  },
  {
    title: "Фрезерные работы с ЧПУ",
    description: "max 430 мм х 350 мм",
    img: require("./services/img/lathe.png")
  },
  {
    title: "Шлифовальные работы",
    description: "габариты рабочего поля 300 мм х 800 мм",
    img: require("./services/img/lathe.png")
  }
];

const dataDetail = [
  " Валы",
  " Втулки",
  " Кольца",
  " Фланцы",
  " Оси",
  " Шпильки",
  " Муфты",
  " Штуцера",
  " Винты",
  " Фитинги",
  " Гайки",
  " Колеса",
  " Переходники",
  " Корпуса",
  " Отводы",
  " Анкера",
  " Стаканы"
];

const Homepage = () => {
  return (
    <div>
      <div className="homepage-title">
        <h1>
          Компания ООО МИГ предлагает качественные услуги металлообработки в г.
          Белгород на современных токарных и фрезерных станках с наличием ЧПУ.
          Большой парк оборудования позволяет нам изготовить всевозможные
          металлические изделия по Вашему заказу на основе индивидуальных
          чертежей.
        </h1>

        <h2>Компания ООО МИГ предлагает:</h2>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<img src={item.img} height="100" />}
                title={<a href="#">{item.title}</a>}
                description={<a href="#">{item.description}</a>}
              />
            </List.Item>
          )}
        />

        <List
          size="small"
          header={
            <div style={{ textAlign: "center" }}>
              <strong>
                ООО МИГ изготовит для Вас изделия из металла с технической
                возможностью закалки, химического оксидирования, цинкования.
              </strong>
            </div>
          }
          bordered
          dataSource={dataDetail}
          renderItem={(item) => (
            <List.Item>
              <RightCircleTwoTone />
              {item}
            </List.Item>
          )}
        />
      </div>
      <div>
        <p className="schema">
          <CompassTwoTone /> Схема проезда
        </p>
        <iframe
          title="Яндекс карта с маршрутом"
          src="https://yandex.ru/map-widget/v1/-/CCUNvHDnoD"
          height="350"
          width="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Homepage;
