<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем данные из формы
    $name = htmlspecialchars(strip_tags($_POST['name']));
    $email = htmlspecialchars(strip_tags($_POST['email']));
    $phone = htmlspecialchars(strip_tags($_POST['phone']));
    $message = htmlspecialchars(strip_tags($_POST['message']));

    $mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';

    try {
        // Настройка сервера SMTP
        $mail->isSMTP();
        $mail->Host = 'mail.site404.in.ua';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@site404.in.ua';
        $mail->Password = 'Ctrhtny0@!)(';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Используем SSL
        $mail->Port = 465; // Порт для SSL

        // Настройка содержимого письма
        $mail->setFrom('info@site404.in.ua', 'Письмо с сайта Site404');
        $mail->addAddress('mister.slaus@gmail.com');
        $mail->addReplyTo($email, $name); // Ответить на отправителя

        $mail->isHTML(false); // тело письма не в HTML
        $mail->Subject = 'Нове повідомлення від ' . $name . ' з сайта https://site404.in.ua/';
        $mail->Body = "Ім'я відправника: $name\nE-mail: $email\nТелефон: $phone\nПовідомлення:\n$message";

        // Отправка письма
        $mail->send();

        // Возвращаем ответ клиенту
        header('Content-Type: application/json');
        echo json_encode(['status' => 'success', 'message' => 'Письмо отправлено']);
    } catch (Exception $e) {
        // Обработка ошибок
        header('Content-Type: application/json');
        echo json_encode(['status' => 'error', 'message' => 'Помилка під час відправки повідомлення: ' . $mail->ErrorInfo]);
    }
} else {
    header('Content-Type: application/json');
    echo json_encode(['status' => 'error', 'message' => 'Невірний метод запросу']);
}
