<?php
// ==========================================
// CORS (pour Vue / Frontend)
// ==========================================
header("Content-Type: application/json");

require __DIR__ . '/vendor/autoload.php';

// ==========================================
// PHPMailer
// ==========================================
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// ==========================================
// Envoi Email avec PHPMailer
// ==========================================
function sendMail(array $data , $subject){
    $mail = new PHPMailer(true);

    $email= $data['email'];
    $message   = $data['message'];
    
    try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'rijaandriamaherisoa88@gmail.com'; 
    $mail->Password   = 'omcz sudw cdzz bskx'; // mot de passe application
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('rijaandriamaherisoa88@gmail.com', 'Contact Site');
    $mail->addAddress($email); // destinataire 
    $mail->addReplyTo($email); 

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $message;

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Email envoyé avec succès"
    ]);

} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => "Erreur envoi email",
        "error"   => $mail->ErrorInfo
    ]);
}
}
?>