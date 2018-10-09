<?php
  session_start();
  if($_SESSION['username']){
    $showurl="results.php";
    if( $_SERVER['HTTP_REFERER'] == "" ){
      header("Location:".$showurl); exit;
    }
    include 'conn.php';
    include 'header.html';
  }else {
    $home_url = 'login.html';
    header('Location:'.$home_url);
  }
?>
<body>
  <?php include 'nav.php'; ?>
  <div class="container mt-0">
    <div class="row">
      <div class="col">
        <div class="card print">
          <div class = "card-body detail-1">
<?php
  $get_id = $_POST['id'];
  // $get_good = $_POST['depart_good_check'];
  // $get_is_good = $_POST['good_check'];
  // $get_apperant = $_POST['apperant_check'];

  $sql_input_item = "select * from apply_form where id='$get_id'";
  $sql_typeA_check = "select type_user from apply_form where id='$get_id'";
  $sql_typeB_check = "select type_terminal from apply_form where id='$get_id'";
  $sql_typeC_check = "select type_sharefolder from apply_form where id='$get_id'";
  $sql_typeD_check = "select type_sharemail from apply_form where id='$get_id'";

  $sql_get_typeA =  "select * from type_user_form where u_id='$get_id'";
  $sql_get_typeB =  "select * from type_terminal_form where u_id='$get_id'";
  $sql_get_typeC =  "select * from type_sharefolder_form where u_id='$get_id'";
  $sql_get_typeD =  "select * from type_sharemail_form where u_id='$get_id'";

  try {
    $input_item = $pdo->prepare($sql_input_item);
    $typeA_check = $pdo->prepare($sql_typeA_check);
    $typeB_check = $pdo->prepare($sql_typeB_check);
    $typeC_check = $pdo->prepare($sql_typeC_check);
    $typeD_check = $pdo->prepare($sql_typeD_check);

    $get_typeA = $pdo->prepare($sql_get_typeA);
    $get_typeB = $pdo->prepare($sql_get_typeB);
    $get_typeC = $pdo->prepare($sql_get_typeC);
    $get_typeD = $pdo->prepare($sql_get_typeD);

    $input_item->execute();
    $typeA_check->execute();
    $typeB_check->execute();
    $typeC_check->execute();
    $typeD_check->execute();

    while($reason=$input_item->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='card-text row'><div class='col-sm-8 text-size'>システムユーザー登録申請書<div class='text-size'>Request of System User Registration</div></div><div class='col-sm-4'><img class='float-right' src='./img/logo_02.png' height='92' width='115' /></div></div>";
      echo "<div class='card-text row'><div class='col-sm-8'>情報登録(User Information Registration)</div></div>";
      echo "<div class='card-text row'><div class='col-sm-6'>分類(Registration Class) ： </div><div class='col-sm-6 text-underline'>".$reason['user_class']."</div></div>";
      echo "<div class='card-text row'><div class='col-sm-6'>ユーザー名/User Name ： </div><div class='col-sm-6 text-underline'>".$reason['user_name']."</div></div>";
      echo "<div class='card-text row'><div class='col-sm-6'>部署名/Section Name ： </div><div class='col-sm-6 text-underline'>".$reason['user_department']."</div></div>";
      echo "<div class='card-text row'><div class='col-sm-6'>社員カテゴリー(Employee Category) ： </div><div class='col-sm-6 text-underline'>".$reason['user_type']."</div></div>";
      if($reason['user_class']=='新入社員'){
        echo "<div class='card-text row'><div class='col-sm-6'>入社日 / Employment Date ： </div><div class='col-sm-6 text-underline'>".$reason['user_in']."</div></div>";
      }
      if($reason['user_class']=='廃止'){
        echo "<div class='card-text row'><div class='col-sm-6'>退社日 / Resign Date ： </div><div class='col-sm-6 text-underline'>".$reason['user_out']."</div></div>";
      }
      if($reason['user_class']=='異動'){
        echo "<div class='card-text row'><div class='col-sm-6'>異動日 / Personnel Change Date ： </div><div class='col-sm-6 text-underline'>".$reason['user_change']."</div></div>";
      }
      if($reason['user_class']=='休止'){
        echo "<div class='card-text row'><div class='col-sm-6'>休止日 / Pause Term ： </div><div class='col-sm-6 text-underline'>".$reason['user_pause']."</div></div>";
      }
      if($reason['user_reason']){
        echo "<div class='card-text row'><div class='col-sm-6'>依頼特記事項 / Comments of Request  ： </div><div class='col-sm-6 text-underline'>".$reason['user_reason']."</div></div>";
      }
      echo "<div class='card-text row'><div class='col-sm-12'>システム申請の分類 (System Application Class) ： </div></div>";
      while($resA=$typeA_check->fetch(PDO::FETCH_ASSOC)){
        if($resA['type_user']==1){
          $get_typeA->execute();
          while($res=$get_typeA->fetch(PDO::FETCH_ASSOC)){
            if($res['acount_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>PCアカウント</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>
                          <div class='col-sm-4'>使用者名(漢字) ： </div><div class='col-sm-8 text-underline'>".$res['username_kanji']."</div>
                          <div class='col-sm-4'>使用者名(カナ) ： </div><div class='col-sm-8 text-underline'>".$res['username_kana']."</div>
                          <div class='col-sm-4'>使用者名(ローマ字) ： </div><div class='col-sm-8 text-underline'>".$res['username_roma']."</div>
                          <div class='col-sm-4'>部署 ： </div><div class='col-sm-8 text-underline'>".$res['user_department']."</div>
                          <div class='col-sm-4'>利用開始日 ： </div><div class='col-sm-8 text-underline'>".$res['account_start']."</div>
                        </div>"."
                      </div>
                    </div>";
            }
            if($res['mail_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>PCメール(個人)</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>
                          <div class='col-sm-4'>利用開始日 ： </div><div class='col-sm-8 text-underline'>".$res['mail_start']."</div>
                        </div>"."
                      </div>
                    </div>";
            }
            if($res['click_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>クリック株</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>
                          <div class='col-sm-4'>利用開始日 ： </div><div class='col-sm-8 text-underline'>".$res['click_start']."</div>
                        </div>"."
                      </div>
                    </div>";
            }
            if($res['tfx_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>TFX</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>
                          <div class='col-sm-4'>利用開始日 ： </div><div class='col-sm-8 text-underline'>".$res['tfx_start']."</div>
                        </div>"."
                      </div>
                    </div>";
            }
            if($res['quick_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>Quick</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>
                          <div class='col-sm-4'>利用開始日 ： </div><div class='col-sm-8 text-underline'>".$res['quick_start']."</div>
                        </div>"."
                      </div>
                    </div>";
            }
            if($res['bloomberg_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>Bloomberg</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>
                          <div class='col-sm-4'>利用開始日 ： </div><div class='col-sm-8 text-underline'>".$res['bloomberg_start']."</div>
                        </div>"."
                      </div>
                    </div>";
            }
            if($res['reuters_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>Reuters</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>
                          <div class='col-sm-4'>利用開始日 ： </div><div class='col-sm-8 text-underline'>".$res['reuters_start']."</div>
                        </div>"."
                      </div>
                    </div>";
            }
          }
        }
      }
      while($resB=$typeB_check->fetch(PDO::FETCH_ASSOC)){
        if($resB['type_terminal']==1){
          $get_typeB->execute();
          while($res=$get_typeB->fetch(PDO::FETCH_ASSOC)){
            if($res['pc_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>PC</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>";
              if($res['note_check']==1){
                echo "<div class='col-sm-4'>申請端末 ： </div><div class='col-sm-8 text-underline'>ノートPC</div>";
              }
              if($res['desktop_check']==1){
                echo "<div class='col-sm-4'>申請端末 ： </div><div class='col-sm-8 text-underline'>デスクトップPC</div>";
              }
              echo            "<div class='col-sm-4'>利用開始日 ： </div><div class='col-sm-8 text-underline'>".$res['pc_start']."</div>
                        </div>"."
                      </div>
                    </div>";
            }
            if($res['ipad_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>iPad</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>
                          <div class='col-sm-4'>利用開始日 ： </div><div class='col-sm-8 text-underline'>".$res['ipad_start']."</div>
                        </div>"."
                      </div>
                    </div>";
            }
            if($res['phone_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>携帯電話</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>";
              if($res['smart_check']==1){
                echo "<div class='col-sm-4'>申請端末 ： </div><div class='col-sm-8 text-underline'>スマホ</div>";
              }
              if($res['feature_check']==1){
                echo "<div class='col-sm-4'>申請端末 ： </div><div class='col-sm-8 text-underline'>フューチャーフォン</div>";
              }
              echo        "<div class='col-sm-4'>利用開始日 ： </div><div class='col-sm-8 text-underline'>".$res['phone_start']."</div>
                        </div>"."
                      </div>
                    </div>";
            }
          }
        }
      }
      while($resC=$typeC_check->fetch(PDO::FETCH_ASSOC)){
        if($resC['type_sharefolder']==1){
          $get_typeC->execute();
          while($res=$get_typeC->fetch(PDO::FETCH_ASSOC)){
            if($res['create_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>共有フォルダ作成</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>
                          <div class='col-sm-4'>フォルダ名 ： </div><div class='col-sm-8 text-underline'>".$res['folder_name']."</div>
                          <div class='col-sm-4'>作成場所 ： </div><div class='col-sm-8 text-underline'>".$res['folder_place']."</div>";
              if($res['folder_spec']!==null){
                echo "<div class='col-sm-4'>特例的使用者 ： </div><div class='col-sm-8 text-underline'>".$res['folder_spec']."</div>";
              }
              if($res['folder_item']!==null){
                echo "<div class='col-sm-4'>特記事項 ： </div><div class='col-sm-8 text-underline'>".$res['folder_item']."</div>";
              }
              echo        "</div>"."
                      </div>
                    </div>";
            }
            if($res['access_check']==1){
              echo "<div class='card-text row'><div class='col-sm-4'>
                      <i class='fas fa-check-circle mt-2'></i>アクセス権限</div>
                      <div class='col-sm-8'>"."
                        <div class='card-text row'>";
              if($res['edit_check']==1){
                echo "<div class='col-sm-4'>申請権限 ： </div><div class='col-sm-8 text-underline'>編集権限</div>";
              }
              if($res['read_check']==1){
                echo "<div class='col-sm-4'>申請権限 ： </div><div class='col-sm-8 text-underline'>閲覧権限</div>";
              }
              echo        "</div>"."
                      </div>
                    </div>";
            }
          }
        }
      }
      while($resD=$typeD_check->fetch(PDO::FETCH_ASSOC)){
        $get_typeD->execute();
        while($res=$get_typeD->fetch(PDO::FETCH_ASSOC)){
          echo "<div class='card-text row'><div class='col-sm-4'>
                  <i class='fas fa-check-circle mt-2'></i>共有メール</div>
                  <div class='col-sm-8'>"."
                    <div class='card-text row'>
                      <div class='col-sm-4'>メールアカウント ： </div><div class='col-sm-8 text-underline'>".$res['mail_account']."</div>";
          if($res['mail_item']!==null){
            echo "<div class='col-sm-4'>特記事項 ： </div><div class='col-sm-8 text-underline'>".$res['mail_item']."</div>";
          }
          echo        "</div>"."
                  </div>
                </div>";
        }
      }
      if($reason['is_good']==1){
        echo "<div class='img-mt text-center '><img class='img-mt-1' src='./img/accepted.png' height='100' width='100' /></div>";
      }

      //
      // echo "<hr/>";
      // echo "<div class='card-text row mt-2'><div class='col-sm-4'>名前:</div><div class='col-sm-8'>".$reason['user_name']."</div></div>";
      // echo "<div class='card-text row mt-2'><div class='col-sm-4'>部署:</div><div class='col-sm-8'>".$reason['user_department']."</div></div>";
      // if($reason['user_class']){
      //   echo "<div class='card-text row mt-2'><div class='col-sm-4'>分類:</div><div class='col-sm-8'>".$reason['user_class']."</div></div>";
      // }
      // if($reason['user_type']){
      //   echo "<div class='card-text row mt-2'><div class='col-sm-4'>社員カテゴリー:</div><div class='col-sm-8'>".$reason['user_type']."</div></div>";
      // }
      // if($reason['user_class']=='新入社員'){
      //   echo "<div class='card-text row mt-2'><div class='col-sm-4'>入社日:</div><div class='col-sm-8'>".$reason['user_in']."</div></div>";
      // }
      // if($reason['user_class']=='廃止'){
      //   echo "<div class='card-text row mt-2'><div class='col-sm-4'>退社日:</div><div class='col-sm-8'>".$reason['user_out']."</div></div>";
      // }
      // if($reason['user_class']=='異動'){
      //   echo "<div class='card-text row mt-2'><div class='col-sm-4'>異動日:</div><div class='col-sm-8'>".$reason['user_change']."</div></div>";
      // }
      // if($reason['user_class']=='休止'){
      //   echo "<div class='card-text row mt-2'><div class='col-sm-4'>休止日:</div><div class='col-sm-8'>".$reason['user_pause']."</div></div>";
      // }
      // if($reason['user_reason']){
      //   echo "<div class='card-text row mt-2'><div class='col-sm-4'>依頼特記事項:</div><div class='col-sm-8'>".$reason['user_reason']."</div></div>";
      // }
    }
    // while($resA=$typeA_check->fetch(PDO::FETCH_ASSOC)){
    //   if($resA['type_user']==1){
    //     $get_typeA->execute();
    //     while($res=$get_typeA->fetch(PDO::FETCH_ASSOC)){
    //       if($res['acount_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:PCアカウント<i class='fab fa-medapps text-warning'></i></div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>使用者名(漢字):</div><div class='col-sm-8'>".$res['username_kanji']."</div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>使用者名(カナ):</div><div class='col-sm-8'>".$res['username_kana']."</div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>使用者名(ローマ字):</div><div class='col-sm-8'>".$res['username_roma']."</div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>部署:</div><div class='col-sm-8'>".$res['user_department']."</div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>開始日:</div><div class='col-sm-8'>".$res['account_start']."</div></div>";
    //       }
    //       if($res['mail_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:PCメール(個人)<i class='fab fa-medapps text-warning'></i></div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>利用開始日:</div><div class='col-sm-8'>".$res['mail_start']."</div></div>";
    //       }
    //       if($res['click_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:クリック株<i class='fab fa-medapps text-warning'></i></div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>利用開始日:</div><div class='col-sm-8'>".$res['click_start']."</div></div>";
    //       }
    //       if($res['tfx_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:TFX<i class='fab fa-medapps text-warning'></i></div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>利用開始日:</div><div class='col-sm-8'>".$res['tfx_start']."</div></div>";
    //       }
    //       if($res['quick_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:Quick<i class='fab fa-medapps text-warning'></i></div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>利用開始日:</div><div class='col-sm-8'>".$res['quick_start']."</div></div>";
    //       }
    //       if($res['bloomberg_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:Bloomberg<i class='fab fa-medapps text-warning'></i></div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>利用開始日:</div><div class='col-sm-8'>".$res['bloomberg_start']."</div></div>";
    //       }
    //       if($res['reuters_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:Reuters<i class='fab fa-medapps text-warning'></i></div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>利用開始日:</div><div class='col-sm-8'>".$res['reuters_start']."</div></div>";
    //       }
    //     }
    //   }
    // }
    // while($resB=$typeB_check->fetch(PDO::FETCH_ASSOC)){
    //   if($resB['type_terminal']==1){
    //     $get_typeB->execute();
    //     while($res=$get_typeB->fetch(PDO::FETCH_ASSOC)){
    //       if($res['pc_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:PC<i class='fab fa-medapps text-warning'></i></div></div>";
    //         if($res['note_check']==1){
    //           echo "<div class='card-text row mt-2'><div class='col-sm-4'>申請端末:</div><div class='col-sm-8'>ノートPC</div></div>";
    //         }
    //         if($res['desktop_check']==1){
    //           echo "<div class='card-text row mt-2'><div class='col-sm-4'>申請端末:</div><div class='col-sm-8'>デスクトップPC</div></div>";
    //         }
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>利用開始日:</div><div class='col-sm-8'>".$res['pc_start']."</div></div>";
    //       }
    //       if($res['ipad_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:iPad<i class='fab fa-medapps text-warning'></i></div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>利用開始日:</div><div class='col-sm-8'>".$res['ipad_start']."</div></div>";
    //       }
    //       if($res['phone_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:携帯電話<i class='fab fa-medapps text-warning'></i></div></div>";
    //         if($res['smart_check']==1){
    //           echo "<div class='card-text row mt-2'><div class='col-sm-4'>申請端末:</div><div class='col-sm-8'>スマホ</div></div>";
    //         }
    //         if($res['feature_check']==1){
    //           echo "<div class='card-text row mt-2'><div class='col-sm-4'>申請端末:</div><div class='col-sm-8'>フューチャーフォン</div></div>";
    //         }
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>利用開始日:</div><div class='col-sm-8'>".$res['phone_start']."</div></div>";
    //       }
    //     }
    //   }
    // }
    // while($resC=$typeC_check->fetch(PDO::FETCH_ASSOC)){
    //   if($resC['type_sharefolder']==1){
    //     $get_typeC->execute();
    //     while($res=$get_typeC->fetch(PDO::FETCH_ASSOC)){
    //       if($res['create_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:共有フォルダ作成<i class='fab fa-medapps text-warning'></i></div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>フォルダ名:</div><div class='col-sm-8'>".$res['folder_name']."</div></div>";
    //         echo "<div class='card-text row mt-2'><div class='col-sm-4'>作成場所:</div><div class='col-sm-8'>".$res['folder_place']."</div></div>";
    //         if($res['folder_spec']!==null){
    //           echo "<div class='card-text row mt-2'><div class='col-sm-4'>特例的使用者:</div><div class='col-sm-8'>".$res['folder_spec']."</div></div>";
    //         }
    //         if($res['folder_item']!==null){
    //           echo "<div class='card-text row mt-2'><div class='col-sm-4'>特記事項:</div><div class='col-sm-8'>".$res['folder_item']."</div></div>";
    //         }
    //       }
    //       if($res['access_check']==1){
    //         echo "<hr/>";
    //         echo "<div class='card-text row'><div class='col-sm-4'>申請項目:アクセス権限<i class='fab fa-medapps text-warning'></i></div></div>";
    //         if($res['edit_check']==1){
    //             echo "<div class='card-text row mt-2'><div class='col-sm-4'>申請権限:</div><div class='col-sm-8'>編集権限</div></div>";
    //         }
    //         if($res['read_check']==1){
    //           echo "<div class='card-text row mt-2'><div class='col-sm-4'>申請権限:</div><div class='col-sm-8'>閲覧権限</div></div>";
    //         }
    //       }
    //     }
    //   }
    // }
    // while($resD=$typeD_check->fetch(PDO::FETCH_ASSOC)){
    //   $get_typeD->execute();
    //   while($res=$get_typeD->fetch(PDO::FETCH_ASSOC)){
    //     echo "<hr/>";
    //     echo "<div class='card-text row'><div class='col-sm-4'>申請項目:共有メール<i class='fab fa-medapps text-warning'></i></div></div>";
    //     echo "<div class='card-text row mt-2'><div class='col-sm-4'>メールアカウント:</div><div class='col-sm-8'>".$res['mail_account']."</div></div>";
    //     if($res['mail_item']!==null){
    //       echo "<div class='card-text row mt-2'><div class='col-sm-4'>特記事項:</div><div class='col-sm-8'>".$res['mail_item']."</div></div>";
    //     }
    //   }
    // }
    // if($_SESSION['admin']!==0&&$_SESSION['it']==0){
    //   if($get_apperant==0){
    //     echo "<div class='panel panel-default mt-3 text-center'><div class='panel-body'><button type='button' name='btn-confirm' class='btn btn-outline-primary btn-xl btn-space' id='allowBtn' onclick='isGood(".$get_id.",".$get_good.",".$get_apperant.")';>許可</button><button type='button' id='btn-back' class='btn btn-outline-danger btn-xl' data-toggle='modal' data-target='#reasonCenter' onclick='isBad(".$get_id.",".$get_good.",".$get_is_good.",".$get_apperant.")';>不許可</button></div></div>";
    //   }
    // }
    // if($_SESSION['it']==1){
    //   if($get_apperant==1){
    //     echo "<div class='panel panel-default mt-3 text-center'><div class='panel-body'><button type='button' name='btn-confirm' class='btn btn-outline-primary btn-xl btn-space' id='allowBtn' onclick='is_Good(".$get_id.",".$get_is_good.",".$get_apperant.")';>許可</button><button type='button' id='btn-back' class='btn btn-outline-danger btn-xl' data-toggle='modal' data-target='#reasonCenter' onclick='is_Bad(".$get_id.",".$get_good.",".$get_is_good.",".$get_apperant.")';>不許可</button></div></div>";
    //   }
    // }
  }catch (Exceeption $e){
    die("Error!:".$e->getMessage().'<br>');
  }
?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <!-- <div class="modal fade" id="reasonCenter" tabindex="-1" role="dialog" aria-labelledby="reasonTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="reasonLongTitle">不許可の理由(必須ではありません)</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <textarea class="form-control" id="reasonContent" rows="3"></textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
          <button type="button" id="notAllowBtn" class="btn btn-outline-danger" data-dismiss="modal">不許可</button>
        </div>
      </div>
    </div>
  </div> -->
</body>
<?php include 'footer.html'; ?>
