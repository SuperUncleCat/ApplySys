<?php
  $showurl="results.php";
  if( $_SERVER['HTTP_REFERER'] == "" ){
    header("Location:".$showurl); exit;
  }
  include 'condb.php';
  $arr = array();
  $is_id = $_POST['is_id'];
  $is_good = $_POST['is_good_check'];
  $good_check_depart = $_POST['good_check_depart'];
  $is_apperant = $_POST['is_apperant_check'];
  $sql_update_is_good = "update apply_form set is_good=1 where id='$is_id'";
  $sql_update_is_apperant = "update apply_form set is_apperant=1 where id='$is_id'";
  $sql_update_reason_content = "update apply_form set not_allowed_reason=' ' where id = '$is_id'";
  $sql_all = "select * from apply_form where depart_is_good=1 and is_good=0 order by `updated_at` desc limit 100 ";

  try {
    $stmt = $pdo->prepare($sql_update_reason_content);
    $stmt->execute();
  } catch (Exceeption $e){
    die("Error!:".$e->getMessage().'<br>');
  }

  try {
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->beginTransaction();

    $stmt = $pdo->prepare($sql_update_is_good);
    $stmt->execute();

    $stmd = $pdo->prepare($sql_update_is_apperant);
    $stmd->execute();
    $pdo->commit();
  } catch (Exception $e){
    $pdo->rollBack();
    echo "Failed: ".$e->getMessage();
  }

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
