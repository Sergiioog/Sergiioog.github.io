<?php

//Llamamos a los campos
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "sergiogargor9@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Apellido: $apellido \n";
$carta .= "Mensaje: $mensaje";

//Enviando mensaje 
mail($destinatario,$asunto,$carta);

ini_set('display_errors', 1);
error_reporting(E_ALL);


?>