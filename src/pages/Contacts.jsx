import React from "react";
import Forma from "../components/Forma";
import FormCallback from "../components/FormCallback";

const Contacts = () => {
  
  return (
    <div>
      <div>Добавим контакты в ближайшее время, а пока вы можете заполнить форму обратной связи.
        Если вам нужен предварительный расчёт, прикрепляйте файл к сообщению.
      </div>
      <p></p>
    <FormCallback />
    
    </div>
  );
};

export default Contacts;
