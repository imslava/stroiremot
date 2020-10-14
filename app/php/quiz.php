<?php

    // Подключение
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/PHPMailer.php';
    require 'phpmailer/Exception.php';
    require 'phpmailer/SMTP.php';

    //Переменные
    $phone = $_POST['phone'];
    
    $quiz_1 = $_POST['quiz-1'];
    $quiz_2 = $_POST['quiz-2'];
    $quiz_3 = $_POST['quiz-3'];
    $quiz_4 = $_POST['quiz-4'];
    $quiz_5 = $_POST['quiz-5'];

    //Ининциализация
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/');

    try {

        // Настройки сервера
        require_once('setting.php');

        // Письмо
        $mail->isHTML(true); 
        $mail->Subject = 'Расчет стоимости';
        $mail->Body =  "<b>Телефон:</b><br>".$phone."<br><br>
                        <b>Где вы хотите сделать ремонт?</b><br>".$quiz_1."<br><br>
                        <b>Какая площадь у помещения?</b><br>".$quiz_2."<br><br>
                        <b>Какой дизайн вам нравится?</b><br>".$quiz_3."<br><br>
                        <b>Нужна ли вам помощь с подбором материала?</b><br>".$quiz_4."<br><br>
                        <b>Куда Вам удобно получить смету?</b><br>".$quiz_5;

        $mail->send();

        header("Location: ../thanks-quiz.html?phone=".$phone);

    } catch (Exception $e) {
        echo "Сообщение не может быть отправлено. Ошибка отправки: {$mail->ErrorInfo}";
    }

?>