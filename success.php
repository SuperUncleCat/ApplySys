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
  $val_inputClass = $_POST['val_inputClass'];
  $val_inputType = $_POST['val_inputType'];
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
  $val_datepicker9 = $_POST['val_datepicker9'];
  $val_datepicker10 = $_POST['val_datepicker10'];
  $val_datepicker11 = $_POST['val_datepicker11'];
  $val_datepicker12 = $_POST['val_datepicker12'];
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

  $sql_1 = "INSERT INTO apply_form (user_id,user_name,user_department,user_class,user_type,user_in,user_out,user_change,user_pause,admin_num,user_reason,type_user,type_terminal,type_sharefolder,type_sharemail)
            VALUES ('$user_id','$val_inputName','$val_inputDep','$val_inputClass','$val_inputType','$val_datepicker9','$val_datepicker10','$val_datepicker11','$val_datepicker12','$val_adminNum','$val_inputReason','$check_userApply','$check_terminalApply','$check_folder','$check_comMail')";

  $sql_2 = "INSERT INTO type_user_form (u_id,acount_check,username_kanji,username_kana,username_roma,user_department,account_start,mail_check,mail_start,click_check,click_start,tfx_check,tfx_start,quick_check,quick_start,bloomberg_check,bloomberg_start,reuters_check,reuters_start)
            VALUES (:uid,'$check_pcAccount','$val_inputNameKanji','$val_inputNameKana','$val_inputNameRoma','$val_inputdepartment','$val_datepicker','$check_pcMail','$val_datepicker2','$check_click','$val_datepicker3','$check_tfx','$val_datepicker4','$check_quick','$val_datepicker5','$check_bloomberg','$val_datepickerbloomberg','$check_reuters','$val_datepickerreuters')";

  $sql_3 = "INSERT INTO type_terminal_form (u_id,pc_check,pc_start,note_check,desktop_check,ipad_check,ipad_start,phone_check,phone_start,smart_check,feature_check)
            VALUES (:uid,'$check_terminalPC','$val_datepicker6','$check_terminalPC1','$check_terminalPC2','$check_terminaliPad','$val_datepicker7','$check_terminalPhone','$val_datepicker8','$check_terminalSmart','$check_terminalFeature')";

  $sql_4 = "INSERT INTO type_sharefolder_form (u_id,create_check,folder_name,folder_place,folder_spec,folder_item,access_check,access_folder_name,edit_check,read_check)
            VALUES (:uid,'$check_make','$val_foldername','$val_folderpath','$val_folderspec','$val_folderitem','$check_access','$val_folderaccess','$check_folderEdit','$check_folderRead')";

  $sql_5 = "INSERT INTO type_sharemail_form (u_id,mail_account,mail_item)
            VALUES (:uid,'$val_comEmail','$val_mailItem')";

  if($check_userApply == 1 || $check_terminalApply == 1 || $check_folder == 1 || $check_comMail == 1){
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

  mb_language("ja");
  mb_internal_encoding('utf-8');

  $msg = '
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Demystifying Email Design</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body style="margin: 0; padding: 0;">
  	<table border="0" cellpadding="0" cellspacing="0" width="100%">
  		<tr>
  			<td style="padding: 10px 0 30px 0;">
  				<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
  					<tr>
  						<td align="center" bgcolor="#70bbd9" style="padding: 80px 0 70px 0; color: #ffffff; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
  							システムユーザー登録申請書<br>'.$val_inputClass.'
  						</td>
  					</tr>
  					<tr>
  						<td bgcolor="#F9F9F9" style="padding: 40px 30px 40px 30px;">
  							<table border="0" cellpadding="0" cellspacing="0" width="100%">
  								<tr>
  									<td style="color: #153643; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
  										<b>システムユーザー登録申請書</b><br/><br/>
                      <b>Request of System User Registration</b><br/><br/>
                      情報登録(User Information Registration)<br/><br/><br/>
                      分類(Registration Class) ：&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;'.$val_inputClass.'<br/><br/>
                      ユーザー名(User Name) ：&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;'.$val_inputName.'<br/><br/>
                      部署名(Section Name) ：&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;'.$val_inputDep.'<br/><br/>
                      社員カテゴリー(Employee Category) ：&nbsp;&nbsp;&nbsp;'.$val_inputType.'<br/><br/>
  									</td>
  								</tr>
  								<tr>
  									<td align="center" style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                      <a href="http://192.168.8.41/applyform/results.php" style="color: #ff7c5c;font-weight: bold;text-decoration:none;border: dashed 1px #ff7c5c;display: inline-block;padding: 1em 1.5em;border-radius: 3px;">システム登録</a>
  									</td>
  								</tr>
  							</table>
  						</td>
  					</tr>
  					<tr>
  						<td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;">
  							<table border="0" cellpadding="0" cellspacing="0" width="100%">
  								<tr>
  									<td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
  										&reg; 張 皓鈞(チョウ　コウキン) 2018<br/><br/>
                      &nbsp;&nbsp; 東郷証券株式会社<br/>
                      &nbsp;&nbsp; IT事業戦略室<br/>
                      &nbsp;&nbsp; 〒105-0001<br/>
                      &nbsp;&nbsp; 東京都港区虎ノ門1-16-16 虎ノ門一丁目MGビルディング8F<br/>
                      &nbsp;&nbsp; TEL: 03-3539-2432<br/>
                      &nbsp;&nbsp; FAX: 03-3539-2438<br/>
                      &nbsp;&nbsp; E-mail:h-zhang@togo-sec.co.jp<br/>
  									</td>
  								</tr>
  							</table>
  						</td>
  					</tr>
  				</table>
  			</td>
  		</tr>
  	</table>
  </body>
  </html>
  ';

  $to      = 'h-zhang@togo-sec.co.jp';
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=ISO-2022-JP' . "\r\n";
  $headers .= 'From: h-zhang@togo-sec.co.jp' . "\r\n";
  // $headers.="Cc: y-fukui@togo-sec.co.jp";

  if($val_inputClass=='新入社員'||$val_inputClass=='廃止'||$val_inputClass=='異動'||$val_inputClass=='休止'){
    $subject = "【".$val_inputClass."申請】社長室・".$val_inputDep."・人事部"." "."『システム登録手続きをお願い致します。』";
    mb_send_mail($to,$subject,$msg,$headers);
  }else {
    $subject = "【".$val_inputClass."申請】".$val_inputDep." "."『システム登録手続きをお願い致します。』";
    mb_send_mail($to,$subject,$msg,$headers);
  }

?>
