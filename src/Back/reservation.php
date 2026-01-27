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
    empty($data['email']) ||
    empty($data['nom_prenoms']) ||
    empty($data['contact']) ||
    empty($data['type_chambre']) ||
    empty($data['date']) ||
    empty($data['sejours'])
) {
    echo json_encode([
        "success" => false,
        "message" => "Données de réservation incomplètes"
    ]);
    exit;
}

// ==========================================
// assignation des data dans une varable
// ==========================================
$email        = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
$nomPrenoms  = htmlspecialchars($data['nom_prenoms']);
$contact     = htmlspecialchars($data['contact']);
$typeChambre = htmlspecialchars($data['type_chambre']);
$date        = htmlspecialchars($data['date']);
$sejours     = (int) $data['sejours'];

// ==========================================
// Construire le message email
// ==========================================

$message = "
<b>Nouvelle reservation</b><br><br>
<b>Nom & Prénoms :</b> $nomPrenoms<br>
<b>Email :</b> $email<br>
<b>Contact :</b> $contact<br>
<b>Type de chambre :</b> $typeChambre<br>
<b>Date :</b> $date<br>
<b>Séjours :</b> $sejours nuit(s)
";

$subject = "Nouvelle reservation";
// ==========================
// Appel du SERVICE
// ==========================
require_once __DIR__ . '/contact.php';

sendMail([
    'email'   => $email,
    'message' => $message
], $subject );

?>