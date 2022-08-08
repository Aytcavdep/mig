import React from "react";
import FormCallback from "../components/FormCallback";
import sendMailTo from "../components/sendMail";
import Forma from "../components/upload/forma";

const Contacts = () => {
  return (
    <div>
      <div>Добавим контакты в ближайшее время</div>
      {/*<FormCallback />
      <Forma />
      <button type="button" onClick={() => sendMailTo()}>
        Нажми меня
      </button>*/}
    </div>
  );
};

export default Contacts;
