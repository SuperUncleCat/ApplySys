<?php
  session_start();
  $lifeTime = 24*3600;
  setcookie(session_name(),session_id(),time()+$lifeTime,"/");
?>
<?php include 'header.html'; ?>
<body>
  <?php include 'nav.php' ?>
  <div class="container mt-0">
    <div class="row">
      <div class="col">
        <div class="mt-0">
          <h1>申請記録<a href="/applyform"><i class="fas fa-arrow-circle-left text-warning" data-toggle="tooltip" data-placement="bottom" title="申請ページへ"></i></a></h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <?php include 'form_results.html'; ?>
      </div>
    </div>
  </div>
</body>
<?php include 'footer.html'; ?>
