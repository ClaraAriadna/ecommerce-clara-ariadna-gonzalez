<?php
// Back-End pendiente
if (isset($_POST['submit'])) {
    $username = $_POST['nombre'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password_hash = password_hash($password, PASSWORD_BCRYPT);
}

$data = array('nombre' => $username, 'email' => $email, 'clave' => $password_hash);
$json = json_encode($data);

file_put_contents('json/data/'.$data['nombre'].'.json', $json);

?>
