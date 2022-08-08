import React from 'react'

const Forma = () => {
  return (
    <div class="container">

      <div class="row">
      	<div class="col-sm-4">
      		<form action="mail.php" method="POST" enctype="multipart/form-data">
      			<legend>Заголовок формы</legend>

      			<div class="form-group">
      				<label for="">Введите ваше имя</label>
      				<input type="text" class="form-control" id="" name="user_name" placeholder="Например, Иван"/>
      			</div>
      		
      			<div class="form-group">
      				<label for="">Введите номер телефона</label>
      				<input type="text" class="form-control" id="" name="user_phone" placeholder="+7 (999) 99 99 999"/>
      			</div>
      		
      			<div class="form-group">
      				<label for="">Загрузите файл</label>
      				<input type="file" id="" name="upload" placeholder="mail@mail.ru"/>
      			</div>
      		
      			<button type="submit" class="btn btn-primary">Отправить форму</button>
      		</form>
      	</div>
      </div>

    </div>
  )
}

export default Forma