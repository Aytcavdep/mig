import { Button, Form, Input, Modal, Checkbox, Upload } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
//import FormData from "form-data";
import axios from "axios";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState(true);

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };

  return (
    <Modal
      visible={visible}
      title="Отправить файл/запрос для расчёта"
      okText="Отправить"
      cancelText="Отмена"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "private"
        }}
      >
        <Form.Item
          name="Name"
          label="Имя"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ваше имя"
            }
          ]}
        >
          <Input disabled={componentDisabled} />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              message: "Please input your E-mail!"
            }
          ]}
        >
          <Input disabled={componentDisabled} />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Номер телефона"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите номер телефона"
            }
          ]}
        >
          <Input
            disabled={componentDisabled}
            addonBefore="+7"
            style={{
              width: "100%"
            }}
          />
        </Form.Item>
        <Form.Item name="message" label="Описание вопроса">
          <Input type="textarea" disabled={componentDisabled} />
        </Form.Item>
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="longgggggggggggggggggggggggggggggggggg"
        >
          <Upload name="file" /*action="Send_form.php"*/ listType="file">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Checkbox
            checked={!componentDisabled}
            onChange={(e) => setComponentDisabled(!componentDisabled)}
          >
            Нажимая кнопку, я даю своё согласие на обработку моих персональных
            данных в соответствии с Федеральным законом от 27.07.2006 г. ФЗ "О
            персональных данных"
          </Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const FormCallback = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    uploadData(values);
    setVisible(false);
  };
  const FormData = require("form-data");
  const uploadData = (values) => {
    axios
      .post("mail.php", values, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(({ data }) => console.log(data));
    /* let fd = new FormData();
/*for (const file of values.upload) { // images is an array of File Object
  fd.append('file', file, file.name); // multiple upload
}*/

    /*async function responce(){ await axios.post(
  "Send_form.php", fd,
  { headers: fd.getHeaders() }
);
console.log(responce);
}*/
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        New Collection
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
