const Forma = () => {
  return (
    <div>
      <div class="box">
        <form
          id="ajax-contact-form"
          enctype="multipart/form-data"
          method="post"
        >
          <div class="form-group">
            <label for="nameFF">Имя:</label>
            <input id="nameFF" name="nameFF" type="text" required />
          </div>
          <div class="form-group">
            <label for="contactFF">E-mail:</label>
            <input id="contactFF" name="contactFF" type="email" required />
          </div>
          <div class="form-group">
            <label for="telFF">Телефон:</label>
            <input id="telFF" name="telFF" type="tel" required />
          </div>
          <div class="form-group">
            <label for="projectFF">Сообщение</label>
            <textarea
              id="projectFF"
              name="projectFF"
              cols="40"
              rows="3"
            ></textarea>
          </div>
          <div class="control-file">
            <label for="fileFF">Прикрепить файл:</label>
            <input id="fileFF" name="fileFF" type="file" />
          </div>
          <button class="btn" type="submit" id="submitFF">
            Отправить сообщение
          </button>
        </form>
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
      <script src="script.js"></script>
    </div>
  );
};

export default Forma;
