<?php
  $showurl="results.php";
  if( $_SERVER['HTTP_REFERER'] == "" ){
    header("Location:".$showurl); exit;
  }
  session_start();
  include 'condb.php';
  $admin_num = $_SESSION['admin'];
  $arr = array();
  $is_id = $_POST['is_id'];
  $reason_content = $_POST['is_reason_content'];
  $sql_update_depart_is_good = "update apply_form set depart_is_good=0 where id='$is_id'";
  $sql_update_is_good = "update apply_form set is_good=0 where id='$is_id'";
  $sql_update_ceo_is_good = "update apply_form set ceo_is_good=0 where id='$is_id'";
  $sql_update_hr_is_good = "update apply_form set human_is_good=0 where id='$is_id'";
  $sql_update_is_apperant = "update apply_form set is_apperant=1 where id='$is_id'";
  $sql_update_reason_content = "update apply_form set not_allowed_reason='$reason_content' where id = '$is_id'";
  $sql_all = "select * from apply_form  where admin_num='$admin_num' order by `updated_at` desc limit 100 ";

  try {
    $pdo->beginTransaction();
    $stmt = $pdo->prepare($sql_update_reason_content);
    $stmt->execute();
    $pdo->commit();
  } catch (Exceeption $e){
    die("Error!:".$e->getMessage().'<br>');
  }

  try {
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->beginTransaction();

    $stmt = $pdo->prepare($sql_update_ceo_is_good);
    $stmt->execute();

    $stmt = $pdo->prepare($sql_update_depart_is_good);
    $stmt->execute();

    $stmt = $pdo->prepare($sql_update_hr_is_good);
    $stmt->execute();

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
