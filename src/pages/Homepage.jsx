import React from "react";
import { List } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Homepage.css";

const data = [
  {
    title: "Токарный станок",
    description:
      "обработка изделий максимальным диаметром 500 мм, длиной 1 500 мм",
    img: require("./services/img/lathe.png"),
  },
  {
    title: "Фрезерный станок",
    description: "габариты рабочего поля 430 мм х 350 мм",
    img: require("./services/img/lathe.png"),
  },
  {
    title: "Плоскошлифовальный  станок ",
    description: "габариты рабочего поля 300 мм х 800 мм",
    img: require("./services/img/lathe.png"),
  },
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
  " Стаканы",
];

const Homepage = () => {
  return (
    <div>
      <div className="homepage-title">
        <h1>
          Компания ООО МИГ предлагает качественные услуги металлообработке в г.
          Белгород на современных токарных и фрезерных станках с наличием ЧПУ.
          Большой парк оборудования позволяет нам изготовить всевозможные
          металлические изделия по Вашему заказу на основе индивидуальных
          чертежей.
        </h1>

        <h2>В распоряжении ООО МИГ следующие станочные единицы:</h2>
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
            <div style={{textAlign: "center"}}>
              <strong>
                Изготовление следующих изделий из металла с технической
                возможностью закалки, химического оксидирования, цинкования.
              </strong>
            </div>
          }
          bordered
          dataSource={dataDetail}
          renderItem={(item) => (
            <List.Item>
              <ArrowRightOutlined />
              {item}
            </List.Item>
          )}
        />
      </div>
      <div>
        <iframe
          title="Яндекс карта с маршрутом"
          src="https://yandex.ru/map-widget/v1/-/CCUNvHDnoD"
          height="450"
          width="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Homepage;
