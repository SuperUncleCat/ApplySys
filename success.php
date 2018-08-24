<?php
  $showurl="results.php";
  if( $_SERVER['HTTP_REFERER'] == "" ){
    header("Location:".$showurl); exit;
  }
  session_start();
  $user_id = $_SESSION['username'];
  $check_userApply = $_POST['check_userApply'];
  $check_pcAccount = $_POST['check_pcAccount'];
  $check_pcMail = $_POST['check_pcMail'];
  $check_click = $_POST['check_click'];
  $check_tfx = $_POST['check_tfx'];
  $check_quick = $_POST['check_quick'];
  $check_bloomberg = $_POST['check_bloomberg'];
  $check_reuters = $_POST['check_reuters'];
  $check_terminalApply = $_POST['check_terminalApply'];
  $check_terminalPC = $_POST['check_terminalPC'];
  $check_terminalPC1 = $_POST['check_terminalPC1'];
  $check_terminalPC2 = $_POST['check_terminalPC2'];
  $check_terminaliPad = $_POST['check_terminaliPad'];
  $check_terminalPhone = $_POST['check_terminalPhone'];
  $check_terminalSmart = $_POST['check_terminalSmart'];
  $check_terminalFeature = $_POST['check_terminalFeature'];
  $check_folder = $_POST['check_folder'];
  $check_make = $_POST['check_make'];
  $check_access = $_POST['check_access'];
  $check_folderEdit = $_POST['check_folderEdit'];
  $check_folderRead = $_POST['check_folderRead'];
  $check_comMail = $_POST['check_comMail'];
  $val_inputName = $_POST['val_inputName'];
  $val_inputDep = $_POST['val_inputDep'];
  $val_adminNum = $_POST['val_adminNum'];
  $val_inputReason = $_POST['val_inputReason'];
  $val_inputNameKanji = $_POST['val_inputNameKanji'];
  $val_inputNameKana = $_POST['val_inputNameKana'];
  $val_inputNameRoma = $_POST['val_inputNameRoma'];
  $val_inputdepartment = $_POST['val_inputdepartment'];
  $val_datepicker = $_POST['val_datepicker'];
  $val_datepicker2 = $_POST['val_datepicker2'];
  $val_datepicker3 = $_POST['val_datepicker3'];
  $val_datepicker4 = $_POST['val_datepicker4'];
  $val_datepicker5 = $_POST['val_datepicker5'];
  $val_datepicker6 = $_POST['val_datepicker6'];
  $val_datepicker7 = $_POST['val_datepicker7'];
  $val_datepicker8 = $_POST['val_datepicker8'];
  $val_datepickerbloomberg = $_POST['val_datepickerbloomberg'];
  $val_datepickerreuters = $_POST['val_datepickerreuters'];
  $val_foldername = $_POST['val_foldername'];
  $val_folderpath = $_POST['val_folderpath'];
  $val_folderspec = $_POST['val_folderspec'];
  $val_folderitem = $_POST['val_folderitem'];
  $val_folderaccess = $_POST['val_folderaccess'];
  $val_comEmail = $_POST['val_comEmail'];
  $val_mailItem = $_POST['val_mailItem'];

  include 'conn.php';

  $sql = "SELECT MAX(id) from apply_form";

  $sql_1 = "INSERT INTO apply_form (user_id,user_name,user_department,admin_num,user_reason,type_user,type_terminal,type_sharefolder,type_sharemail)
            VALUES ('$user_id','$val_inputName','$val_inputDep','$val_adminNum','$val_inputReason','$check_userApply','$check_terminalApply','$check_folder','$check_comMail')";

  $sql_2 = "INSERT INTO type_user_form (u_id,acount_check,username_kanji,username_kana,username_roma,user_department,account_start,mail_check,mail_start,click_check,click_start,tfx_check,tfx_start,quick_check,quick_start,bloomberg_check,bloomberg_start,reuters_check,reuters_start)
            VALUES (:uid,'$check_pcAccount','$val_inputNameKanji','$val_inputNameKana','$val_inputNameRoma','$val_inputdepartment','$val_datepicker','$check_pcMail','$val_datepicker2','$check_click','$val_datepicker3','$check_tfx','$val_datepicker4','$check_quick','$val_datepicker5','$check_bloomberg','$val_datepickerbloomberg','$check_reuters','$val_datepickerreuters')";

  $sql_3 = "INSERT INTO type_terminal_form (u_id,pc_check,pc_start,note_check,desktop_check,ipad_check,ipad_start,phone_check,phone_start,smart_check,feature_check)
            VALUES (:uid,'$check_terminalPC','$val_datepicker6','$check_terminalPC1','$check_terminalPC2','$check_terminaliPad','$val_datepicker7','$check_terminalPhone','$val_datepicker8','$check_terminalSmart','$check_terminalFeature')";

  $sql_4 = "INSERT INTO type_sharefolder_form (u_id,create_check,folder_name,folder_place,folder_spec,folder_item,access_check,access_folder_name,edit_check,read_check)
            VALUES (:uid,'$check_make','$val_foldername','$val_folderpath','$val_folderspec','$val_folderitem','$check_access','$val_folderaccess','$check_folderEdit','$check_folderRead')";

  $sql_5 = "INSERT INTO type_sharemail_form (u_id,mail_account,mail_item)
            VALUES (:uid,'$val_comEmail','$val_mailItem')";

  if($check_userApply == 1 || $check_terminalApply == 1 || $check_folder == 1 || $check_comMail){
    try {
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $pdo->beginTransaction();
      $stmt = $pdo->prepare($sql_1);
      $stmt->execute();
      $pdo->commit();
    } catch (Exception $e){
      $pdo->rollBack();
      echo "Failed: ".$e->getMessage();
    }
  }else{
    echo "no selected";
  }

  try {
    $result=$pdo->query($sql);
    $max_id=$result->fetchColumn();
  }catch (Exception $e){
    echo "Failed: ".$e->getMessage();
  }

  if($check_userApply == 1){
    try {
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $pdo->beginTransaction();
      $stmt = $pdo->prepare($sql_2);
      $stmt->bindValue(':uid',$max_id);
      $stmt->execute();
      $pdo->commit();
    } catch (Exception $e){
      $pdo->rollBack();
      echo "Failed: ".$e->getMessage();
    }
  }

  if($check_terminalApply == 1){
    try {
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $pdo->beginTransaction();
      $stmt = $pdo->prepare($sql_3);
      $stmt->bindValue(':uid',$max_id);
      $stmt->execute();
      $pdo->commit();
    } catch (Exception $e){
      $pdo->rollBack();
      echo "Failed: ".$e->getMessage();
    }
  }

  if($check_folder == 1){
    try {
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $pdo->beginTransaction();
      $stmt = $pdo->prepare($sql_4);
      $stmt->bindValue(':uid',$max_id);
      $stmt->execute();
      $pdo->commit();
    } catch (Exception $e){
      $pdo->rollBack();
      echo "Failed: ".$e->getMessage();
    }
  }

  if($check_comMail == 1){
    try {
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $pdo->beginTransaction();
      $stmt = $pdo->prepare($sql_5);
      $stmt->bindValue(':uid',$max_id);
      $stmt->execute();
      $pdo->commit();
    } catch (Exception $e){
      $pdo->rollBack();
      echo "Failed: ".$e->getMessage();
    }
  }

?>
