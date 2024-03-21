<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Формируем заголовки письма
    $to = 'mister.slaus@gmail.com';
    $subject = 'Нове повідомлення від ' . $name . ' с сайта https://site404.in.ua/';
    $body = "Ім'я відправника: $name\nE-mail: $email\nТелефон: $phone\nПовідомлення:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Отправляем письмо
    if (mail($to, $subject, $body, $headers)) {
        // Если письмо успешно отправлено, отправляем ответ клиенту
        header('Content-Type: application/json');
        echo json_encode(['status' => 'success']);
    } else {
        // Если возникла ошибка при отправке письма, отправляем ошибку клиенту
        header('Content-Type: application/json');
        echo json_encode(['status' => 'error', 'message' => 'Помилка під час відправки повідомлення']);
    }
} else {
    // Если метод запроса не POST, отправляем ошибку клиенту
    header('Content-Type: application/json');
    echo json_encode(['status' => 'error', 'message' => 'Невірний метод запросу']);
}
