import React from "react";
import MyRequisites from "./files/Requisites.pdf";
import { Typography } from "antd";
import "antd/dist/antd.css";
import "./Requisites.css";
import { Link } from "react-router-dom";

const { Paragraph } = Typography;

const Requisites = () => {
  return (
    <>
      {/* <div className="container">
    <div className="table-head">Реквизиты ООО "Миг"</div>
    <div className="table">
      <div>Полное наименование организации</div>
      <Paragraph copyable>-</Paragraph>
      <div>ЮРИДИЧЕСКИЙ АДРЕС</div>
      <Paragraph copyable>-</Paragraph>
      <div>Почтовый адрес</div>
      <Paragraph copyable>-</Paragraph>
      <div>ИНН</div>
      <Paragraph copyable>-</Paragraph>
      <div>КПП</div>
      <Paragraph copyable>-</Paragraph>
      <div>БИК</div>
      <Paragraph copyable>-</Paragraph>
      <div>Р/С</div>
      <Paragraph copyable>-</Paragraph>
      <div>К/С</div>
      <Paragraph copyable>-</Paragraph>
      <div>ОКПО</div>
      <Paragraph copyable>-</Paragraph>
      <div>ОКАТО</div>
      <Paragraph copyable>-</Paragraph>
      <div>ОКВЭД (основной)</div>
      <Paragraph copyable>-</Paragraph>
      <div>ОГРН</div>
      <div>-</div>
      <div>Генеральный директор</div>
      <Paragraph copyable>-</Paragraph>
      <div>Электронная почта</div>
      <Paragraph copyable>-</Paragraph>
      <div>Телефон</div>
      <Paragraph copyable>-</Paragraph>
      <div>Сайт</div>
      <Paragraph copyable>-</Paragraph>
    </div>
    <div className="table-footer">Скачать реквизиты</div>
  </div> */}
      <div className="container">
        <div className="table-head">Реквизиты ООО "Миг"</div>
        <table>
          <tbody>
            <tr>
              <td>Полное наименование организации</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>ЮРИДИЧЕСКИЙ АДРЕС</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Почтовый адрес</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>ИНН</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>КПП</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>БИК</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Р/С</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>К/С</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>ОКПО</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>ОКАТО</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>ОКВЭД (основной)</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>ОГРН</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Генеральный директор</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Электронная почта</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Телефон</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Сайт</td>
              <td>
                <Paragraph copyable>-</Paragraph>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="table-footer">
          Скачать реквизиты
          {/*<a href={MyRequisites} download="OOO_MIG.pdf"> Download Here </a>*/}
          {/*<Link to="./files/Requisites.pdf" target="_blank" download>Download</Link>*/}
        </div>
      </div>
    </>
  );
};
export default Requisites;
