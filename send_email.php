<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);
    try {
        $mail->setFrom($email, $name);
        $mail->addAddress('reachouttomz@gmail.com');
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $mail->send();
        echo json_encode(['status' => 'success']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
    }
}
?>
