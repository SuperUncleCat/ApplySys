<nav class="navbar navbar-default navbar-static-top navbar-expand-lg">
  <div class="container">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <?php
                if($_SESSION['username']){
                    echo $_SESSION['username'];
                }else {
                  $home_url = 'login.html';
                  header('Location:'.$home_url);
                  // echo "Sorry, you must enter a valid username and password to log in.";
                }
              ?>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="logout.php">ログアウト</a>
            </div>
          </li>
        </ul>
      </div>
  </div>
</nav>
