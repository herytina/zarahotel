<?php
// ==========================================
// CORS (pour Vue / Frontend)
// ==========================================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Préflight CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ==========================================
// Lire les données JSON
// ==========================================
$data = json_decode(file_get_contents("php://input"), true);


// ==========================================
// Vérification 
// ==========================================

if (
    !isset($data['email']) ||
    !filter_var($data['email'], FILTER_VALIDATE_EMAIL)
) {
    echo json_encode([
        "success" => false,
        "message" => "Email ou message invalide"
    ]);
    exit;
}

// ==========================================
// Construire le message email
// ==========================================
$email = $data['email'];
$message = "
        <b>Voici le nouveau email dans newsLetter</b><br><br>     
        <b>Email :</b> $email<br>
      
";
$subject = "Nouvelle newsLetter";

// ==========================
// Appel du SERVICE
// ==========================
require_once __DIR__ . '/contact.php';



sendMail([
    'email'   => $email,
    'message' => $message
] , $subject );

?>