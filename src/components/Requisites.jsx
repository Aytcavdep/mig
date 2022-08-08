import React from "react";
import MyRequisites from "./files/Requisites.docx";
import { Typography } from "antd";
import "antd/dist/antd.css";
import "./Requisites.css";
import { FileWordTwoTone } from "@ant-design/icons";

const { Paragraph } = Typography;

const Requisites = () => {
  return (
    <>
      <div className="container">
        <div className="table-head">Реквизиты ООО "Миг"</div>
        <table>
          <tbody>
            <tr>
              <td>Полное наименование организации</td>
              <td>
                <Paragraph copyable>
                  Общество с ограниченной ответственностью «МИГ»
                </Paragraph>
              </td>
            </tr>
            <tr>
              <td>Краткое наименование</td>
              <td>
                <Paragraph copyable>ООО «МИГ»</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Юридический/фактический адрес</td>
              <td>
                <Paragraph copyable>
                  308511 Белгородская область ,Белгородский район, село
                  Стрелецкое .переулок Королёва , дом 18В
                </Paragraph>
              </td>
            </tr>
            <tr>
              <td>Электронная почта</td>
              <td>
                <Paragraph copyable>office@migbelg.ru</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Контактный телефон</td>
              <td>
                <Paragraph copyable>+7-910-227-47-58</Paragraph>
              </td>
            </tr>
            <tr>
              <td>ИНН</td>
              <td>
                <Paragraph copyable>3100000377</Paragraph>
              </td>
            </tr>
            <tr>
              <td>КПП</td>
              <td>
                <Paragraph copyable>310001001</Paragraph>
              </td>
            </tr>
            <tr>
              <td>ОГРН</td>
              <td>
                <Paragraph copyable>1223100005754</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Руководитель (должность, ФИО)</td>
              <td>
                <Paragraph copyable>Очеретный Павел Витальевич</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Наименование банка</td>
              <td>
                <Paragraph copyable>АО «ТИНЬКОФФ БАНК»</Paragraph>
              </td>
            </tr>
            <tr>
              <td>БИК</td>
              <td>
                <Paragraph copyable>044525974</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Р/С</td>
              <td>
                <Paragraph copyable>40702810210001066981</Paragraph>
              </td>
            </tr>
            <tr>
              <td>К/С</td>
              <td>
                <Paragraph copyable>30101810145250000974</Paragraph>
              </td>
            </tr>
            <tr>
              <td>ОКПО</td>
              <td>
                <Paragraph copyable>93105683</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Система налогообложения</td>
              <td>
                <Paragraph copyable>ОСНО</Paragraph>
              </td>
            </tr>
            <tr>
              <td>Сайт</td>
              <td>
                <Paragraph copyable>migbelg.ru</Paragraph>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="table-footer">
          Скачать реквизиты
          <a href={MyRequisites} download="OOO_MIG.docx">
            {" "}
            <FileWordTwoTone />{" "}
          </a>
        </div>
      </div>
    </>
  );
};
export default Requisites;
