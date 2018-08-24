<?php
  header("Content-type:text/html;charset=gbk");

  if(isset($_POST["username"])){
    $ldaprdn = $_POST["username"]?$_POST["username"]:" ";
  }else{

  }

  if(isset($_POST["password"])){
    $ldappass = $_POST["password"]?$_POST["password"]:" ";
  }else{

  }

  $ldaphost = "192.168.xxx.x";
  $ldapport = 389;
  $domain = '@domain.com.local';
  $ldapconn = ldap_connect($ldaphost,$ldapport) or die("Could not connect to $ldaphost");

  if(!$ldapconn){
    exit('Connect failed');
  }

  // list_organisational_units($ldapconn);

  ldap_set_option($ldapconn, LDAP_OPT_PROTOCOL_VERSION, 3);
  ldap_set_option($ldapconn, LDAP_OPT_REFERRALS, 0);

  if($ldapconn){
    if(!isset($_SESSION['username'])){
      if(isset($_POST['submit'])){
        $ldapbind = @ldap_bind($ldapconn,$ldaprdn.$domain, $ldappass);
        if ($ldapbind) {
            session_start();
            $_SESSION['username'] = $_POST['username'];
            switch ($_SESSION['username']) {
              
              case 'sys-admin':
                $_SESSION['admin'] = 1;
                $_SESSION['it'] = 0;
                break;
              case 'it-admin':
                $_SESSION['admin'] = 1;
                $_SESSION['it'] = 1;
                break;
              case 'hisho-admin':
                $_SESSION['admin'] = 2;
                $_SESSION['it'] = 0;
                break;
              case 'kanri-admin':
                $_SESSION['admin'] = 3;
                $_SESSION['it'] = 0;
                break;
              case 'kinyushouhin-admin':
                $_SESSION['admin'] = 4;
                $_SESSION['it'] = 0;
                break;
              case 'keieikikaku-admin':
                $_SESSION['admin'] = 5;
                $_SESSION['it'] = 0;
                break;
              case 'seminar-admin':
                $_SESSION['admin'] = 6;
                $_SESSION['it'] = 0;
                break;
              case 'jinji-admin':
                $_SESSION['admin'] = 7;
                $_SESSION['it'] = 0;
                break;
              case 'roumu-admin':
                $_SESSION['admin'] = 8;
                $_SESSION['it'] = 0;
                break;
              case 'soumu-admin':
                $_SESSION['admin'] = 9;
                $_SESSION['it'] = 0;
                break;
              case 'keiri-admin':
                $_SESSION['admin'] = 10;
                $_SESSION['it'] = 0;
                break;
              case 'compliance-admin':
                $_SESSION['admin'] = 11;
                $_SESSION['it'] = 0;
                break;
              case 'kasutama-admin':
                $_SESSION['admin'] = 12;
                $_SESSION['it'] = 0;
                break;
              case 'kanrihonbu-admin':
                $_SESSION['admin'] = 13;
                $_SESSION['it'] = 0;
                break;
              case 'shoukeneigyou-admin':
                $_SESSION['admin'] = 14;
                $_SESSION['it'] = 0;
                break;
              case 'kenshu-admin':
                $_SESSION['admin'] = 15;
                $_SESSION['it'] = 0;
                break;
              default:
                $_SESSION['admin'] = 0;
                $_SESSION['it'] = 0;
                break;
            }

            $home_url = 'index.php';
            header('Location: '.$home_url);
        } else {
          $home_url = 'login.html';
          header('Location:'.$home_url);
        }
      }
    }else {
      $home_url = 'index.php';
      header('Location: '.$home_url);
    }

    ldap_close($ldapconn);
  }
?>
