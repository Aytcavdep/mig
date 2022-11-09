import React from 'react';

import FormCallback from './FormCallback';
import { Typography } from 'antd';

const { Paragraph } = Typography;
const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="table-head">Контакты ООО "Миг"</div>
        <table>
          <tbody>
            <tr>
              <td>Aдрес</td>
              <td>
                <Paragraph copyable>
                  с. Стрелецкое, пер. Королёва, дом 18В
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
              <td>Руководитель</td>
              <td>
                <Paragraph copyable>Очеретный Павел Витальевич</Paragraph>
              </td>
            </tr>

            <tr>
              <td>Отправить сообщение с сайта</td>
              <td>
                <FormCallback />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
