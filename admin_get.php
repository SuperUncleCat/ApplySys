<?php
  $showurl="results.php";
  if( $_SERVER['HTTP_REFERER'] == "" ){
    header("Location:".$showurl); exit;
  }
  session_start();

  include 'conn.php';
  $admin_num = $_SESSION['admin'];
  $arr = array();
  $sql_all = "select * from apply_form where admin_num='$admin_num' order by `updated_at` desc limit 50";

  try {
    $all = $pdo->prepare($sql_all);
    $all->execute();
    while($res=$all->fetch(PDO::FETCH_ASSOC)){
      $arr[] = $res;
    }
    $str = json_encode($arr);
    echo $str;
  } catch (Exceeption $e){
    die("Error!:".$e->getMessage().'<br>');
  }
?>
