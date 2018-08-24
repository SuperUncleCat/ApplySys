<?php
  $showurl="results.php";
  if( $_SERVER['HTTP_REFERER'] == "" ){
    header("Location:".$showurl); exit;
  }
  session_start();
  include 'conn.php';
  $admin_num = $_SESSION['admin'];
  $admin_identity = $_SESSION['it'];
  $user_id = $_SESSION['username'];
  $arr = array();
  $search=$_POST['searchName'];
  if($admin_identity==1){
    $sql_search = "select * from apply_form where `user_name` like :keyword order by `updated_at`,`id` desc";
  }else if($admin_num!==0&&$admin_identity==0){
    $sql_search = "select * from apply_form where admin_num='$admin_num' and `user_name` like :keyword order by `updated_at`,`id` desc";
  }else if($admin_num==0){
    $sql_search = "select * from apply_form where user_id='$user_id' and `user_name` like :keyword order by `updated_at`,`id` desc";
  }

  try {
    $find = $pdo->prepare($sql_search);
    $find->bindValue(':keyword','%'.$search.'%');
    $find->execute();
    while($res=$find->fetch(PDO::FETCH_ASSOC)){
      $arr[] = $res;
    }
    $str = json_encode($arr);
    echo $str;
  } catch (Exceeption $e){
    die("Error!:".$e->getMessage().'<br>');
  }
?>
