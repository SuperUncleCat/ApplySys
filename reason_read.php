<?php
  $showurl="results.php";
  if( $_SERVER['HTTP_REFERER'] == "" ){
    header("Location:".$showurl); exit;
  }
  include 'condb.php';

  $is_id = $_POST['is_id'];
  $sql_select_reason_content = "select not_allowed_reason from apply_form where id = '$is_id'";

  try {
    $stmt = $pdo->prepare($sql_select_reason_content);
    $stmt->execute();
    while($res=$stmt->fetch(PDO::FETCH_ASSOC)){
      $arr[] = $res;
    }
    $str = json_encode($arr);
    echo $str;
  } catch (Exceeption $e){
    die("Error!:".$e->getMessage().'<br>');
  }

?>
