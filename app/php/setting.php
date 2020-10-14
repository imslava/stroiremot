<?php

        // Настройки сервера
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.yandex.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'dev@kaplan-smilespa.ru'; // логин
        $mail->Password = 'qCGdoJ5B4O'; // пароль
        $mail->SMTPSecure = 'ssl'; 
        $mail->Port = 465;

        // Адреса
        $mail->setFrom('#', 'Стройремонт'); // От кого
        $mail->addAddress('#'); // Кому
		// $mail->addAddress('slava.cpa@yandex.ru'); // Кому