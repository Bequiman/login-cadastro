<?php
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];
    $record = array("usuario"=>$usuario,"senha"=>$senha);

    $registros = json_decode(file_get_contents("../json/users.json"), true);
    array_push($registros["usuarios"], $record);
    file_put_contents("../json/users.json",json_encode($registros));
    header("Location:../sucess.html");
?>


