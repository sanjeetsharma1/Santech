<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['services'];
$message = $_POST['message'];

$to = 'sanjeetsharma9870@gmail.com';
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>
