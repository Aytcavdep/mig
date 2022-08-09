import { Button, Modal, Checkbox} from "antd";
import React, { useState } from "react";
import axios from "axios";
import "./FormCallback.css";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <Modal
      visible={visible}
      title="Отправить файл/запрос для расчёта"
      okText="Отправить"
      cancelText="Отмена"
      onCancel={onCancel}
      onOk={() => {
        if (componentDisabled) {
          onCreate();
        }
        else {alert("Подтвердите согласие на обработку персональных данных");}
      }}
    >
      <form
        id="my-form"
        action="https://migbelg.ru/MailSend/mail.php"
        method="POST"
        enctype="multipart/form-data"
      >
        <div
          className={componentDisabled ? "form-group" : "form-group disabled"}
        >
          <label for="">Имя</label>
          <input
            type="text"
            class="form-control"
            id=""
            name="user_name"
            placeholder="Введите ваше имя"
          />
        </div>

        <div
          className={componentDisabled ? "form-group" : "form-group disabled"}
        >
          <label for="">Номер телефона</label>
          <input
            type="text"
            class="form-control"
            id=""
            name="user_phone"
            placeholder="Введите номер телефона"
          />
        </div>

        <div
          className={componentDisabled ? "form-group" : "form-group disabled"}
        >
          <label for="">E-mail</label>
          <input type="text" class="form-control" id="" name="user_email" />
        </div>
        <div
          className={componentDisabled ? "form-group" : "form-group disabled"}
        >
          <label for="">Сообщение</label>
          <textarea
            type="textarea"
            class="form-control"
            id=""
            rows="5"
            name="user_message"
          />
        </div>

        <div
          className={componentDisabled ? "form-group" : "form-group disabled"}
        >
          <label for=""></label>
          <input type="file" id="file" name="upload" />
        </div>

        <Checkbox
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(!componentDisabled)}
        >
          Нажимая кнопку, я даю своё согласие на обработку моих персональных
          данных в соответствии с Федеральным законом от 27.07.2006 г. ФЗ "О
          персональных данных"
        </Checkbox>
      </form>
    </Modal>
  );
};

const FormCallback = () => {
  const [visible, setVisible] = useState(false);
  let myForm;
  const onCreate = (values) => {
    myForm = document.getElementById("my-form");
    uploadData(values);
    setVisible(false);
    
  };
  const FormData = require("form-data");
  
  const uploadData = (values) => {
    let fd = new FormData(myForm);
    axios
      .post("https://migbelg.ru/MailSend/mail.php", fd, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(({ data }) => console.log(data));
    myForm.reset();
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Отправить сообщение
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default FormCallback;
