<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $newdb = "test";

  try {
    $pdo = new PDO("mysql:host=$servername;charset=utf8mb4",$username, $password);
    $pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
    $pdo->exec("CREATE DATABASE IF NOT EXISTS {$newdb} DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;");
  }catch(PDOException $e){
    echo die("Unable to connect: " . $e->getMessage());
  }

  $pdo->exec("use {$newdb}");
?>
