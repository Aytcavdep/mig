import { Button, Modal, Checkbox, Input, Form } from "antd";
import React, { useState, useRef } from "react";
import axios from "axios";
import "./FormCallback.css";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [isValidateErrorName, setIsValidateErrorName] = useState(false);
  const [isValidateErrorPhone, setIsValidateErrorPhone] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null)
const filePicker = useRef(null);
//const my_Form = useRef(null);
  const { TextArea } = Input;
  const onOk = () => {
    if (componentDisabled) {
      if (document.getElementById("name").value.length < 3) {
        setIsValidateErrorName(true);
      }
      if (document.getElementById("phone").value.length < 6) {
        setIsValidateErrorPhone(true);
      }
      if (
        !(document.getElementById("name").value.length < 3) &&
        !(document.getElementById("phone").value.length < 6)
      ) {
        onCreate();
      }
    } else {
      Modal.error({
        title: "Ошибка отправки формы",
        content: "Подтвердите согласие на обработку персональных данных",
      });
    }
  };

  const handlePick = () => {
    filePicker.current.click();
  }

  

  const handleChange = (event) => { 
setSelectedFile(event.target.files[0])
   }

  return (
    <Modal
      visible={visible}
      title="Отправить файл/запрос для расчёта"
      okText="Отправить"
      cancelText="Отмена"
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form
        id="my-form"
        action="https://migbelg.ru/MailSend/mail.php"
        method="POST"
        enctype="multipart/form-data"
        //ref={my_Form}
      >
        <div
          className={
            componentDisabled ? "form-group _req" : "form-group disabled"
          }
        >
          <Form.Item
            validateStatus={isValidateErrorName ? "error" : "success"}
            help={isValidateErrorName ? "Введите ваше имя" : ""}
            rules={[{ required: true }]}
          >
            <label for="">Имя*</label>
            <Input
              disabled={!componentDisabled}
              type="text"
              class="form-control"
              id="name"
              name="user_name"
              placeholder="Введите ваше имя"
              onChange={(e) =>
                e.currentTarget.value.length > 2
                  ? setIsValidateErrorName(false)
                  : ""
              }
            />
          </Form.Item>
        </div>

        <div
          className={
            componentDisabled ? "form-group _req" : "form-group disabled"
          }
        >
          <Form.Item
            validateStatus={isValidateErrorPhone ? "error" : "success"}
            help={isValidateErrorPhone ? "Введите ваш номер телефона" : ""}
            rules={[{ required: true }]}
          >
            <label for="">Номер телефона*</label>
            <Input
              disabled={!componentDisabled}
              onChange={(e) =>
                e.currentTarget.value.length > 5
                  ? setIsValidateErrorPhone(false)
                  : ""
              }
              type="text"
              class="form-control _phone"
              id="phone"
              name="user_phone"
              placeholder="Введите номер телефона"
            />
          </Form.Item>
        </div>

        <div
          className={componentDisabled ? "form-group" : "form-group disabled"}
        >
          <label for="">E-mail</label>
          <Input type="text" class="form-control" id="" name="user_email" />
        </div>
        <div
          className={componentDisabled ? "form-group" : "form-group disabled"}
        >
          <label for="">Сообщение</label>
          <TextArea
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
          <Button
          disabled={!componentDisabled}
           onClick={handlePick}>Загрузить файл</Button>
          <input
          className="hidden"
          ref={filePicker}
          onChange={handleChange}
           type="file" id="file" name="upload" />
           {selectedFile && (
            <ul>
              <li>Имя: {selectedFile.name}</li>
              <li>Тип: {selectedFile.type}</li>
              <li>Размер: {selectedFile.size}</li>
              <li>Дата последнего изменения: {" "}{selectedFile.lastModifiedDate.toLocaleDateString()}</li>
            </ul>
           )}
        </div>

        <Checkbox
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(!componentDisabled)}
        >
          Нажимая кнопку, я даю своё согласие на обработку моих персональных
          данных в соответствии с Федеральным законом от 27.07.2006 г. ФЗ "О
          персональных данных"
        </Checkbox>
      </Form>
    </Modal>
  );
};

const FormCallback = () => {
  const [visible, setVisible] = useState(false);
  let myForm;
  const onCreate = () => {
    myForm = document.getElementById("my-form");
   uploadData();
   //console.log(my_Form);
    setVisible(false);
  };
  const FormData = require("form-data");

  const uploadData = () => {
    let fd = new FormData(myForm);
    axios
      .post("https://migbelg.ru/MailSend/mail.php", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        if (String(data) == "send\r\n\r\n") {
          Modal.success({
            title: "Форма отправлена",
            content: "Форма отправлена успешно, спасибо за обращение",
          });
        }
        if (String(data) == "error\r\n\r\n") {
          Modal.error({
            title: "Ошибка отправки формы",
            content:
              "Ошибка сети, повторите позднее или используйте другие виды связи",
          });
        }
      });
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
