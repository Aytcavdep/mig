<?php
//if (isset ($_POST['contactFF'])) {
  $to = "admin@migbelg.ru";
  $from = "s444229@migbelg.store";
  $subject = "Заполнена контактная форма на сайте ".$_SERVER['HTTP_REFERER'];
  $message = "Имя пользователя: ".$_POST['Name']."\nEmail пользователя ".$_POST['email']."\nТелефон пользователя ".$_POST['phone']."\nСообщение: ".$_POST['message']."\n\nАдрес сайта: ".$_SERVER['HTTP_REFERER'];
 
  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/form-data; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/form-data; boundary=\"$boundary\"

mail($to, $subject, $message, $headers);

//}
?>
