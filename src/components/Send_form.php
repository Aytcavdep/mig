<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$Name = htmlspecialchars($_POST["Name"]);
$phone = htmlspecialchars($_POST["phone"]);
$message = htmlspecialchars($_POST["messages"]);
/* $soglasie = htmlspecialchars($_POST["soglasie"]); */
/* Устанавливаем e-mail адресата */
$myemail = "admin@migbelg.ru";
/*устанавливаем дату*/
$date = date('Y-m-d H:i:s');
/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$soglasie = check_input($_POST["Name"], "Поставьте согласие на обработку персональных данных");
$phone = check_input($_POST["phone"], "Введите ваш номер телефона");
/* Проверяем правильно ли записан e-mail 
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}*/
/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
Поступил запрос обратного звонка с сайта Santech31! 
Имя отправителя: $name 
Телефон: $phone 
Текст сообщения: $message 
Время отправки запроса: $date
Конец";
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: admin@migbelg.ru \r\n"; 
mail($myemail, $tema, $message_to_myemail, $from);
?>
<p style="font-size: 32px; color: dimgray; text-align: center;">Ваше сообщение было успешно отправлено!</p>
<p style="font-size: 32px; text-align: center;">На <a href="index.html">Главную >>></a></p>
<?php
/* Если при заполнении формы были допущены ошибки сработает 
следующий код: */
function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>
<p>Пожалуйста исправьте следующую ошибку:</p>
<?php echo $myError; ?>
</body>
</html>
<?php
exit();
}
?>