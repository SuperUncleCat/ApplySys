wrap_wait=$("#nav-wait");
wrap_success=$("#nav-depart-wait");
wrap_fail=$("#nav-fail");
wrap_all=$("#nav-all");
wrap_search=$("#formS");
wrap_depart=$('#nav-depart-wait');
wrap_it=$('#nav-it-wait');
searchBtn=$("#nav-search-tab");

function loadData(){
  wrap_wait.html('');
  $.ajax({
    type:'POST',
    url:'sys_get.php',
    success:function(data){
      json=JSON.parse(data);
      $.each(json,function(index,response){
          if(response.ceo_is_good == 2){
            ceo_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>社長承認待ち</button>";
          }else if(response.ceo_is_good == 1){
            ceo_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>社長承認済み</button>";
          }
          if(response.depart_is_good == 2){
            depart_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>所属承認待ち</button>";
          }else if(response.depart_is_good == 1){
            depart_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>所属承認済み</button>";
          }
          num = response.id;
          hr_good_check = response.human_is_good;
          apperant_check = response.is_apperant;
          department = response.user_department;
          if((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止')&&response.human_is_good==2){
            if(department == '人事本部'){
              wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"<i class='far fa-address-card text-danger'></i>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+depart_result+" "+ceo_result+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
            }else{
              wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"<i class='far fa-address-card text-danger'></i>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+depart_result+" "+ceo_result+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='isGood("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
            }
          }else if((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止')&&response.user_department=='人事本部'&&response.human_is_good==2){
            wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
          }
      })
    }
  })
}

function allowedData(){
  wrap_success.html('');
  $.ajax({
    type:'POST',
    url:'sys_get.php',
    success:function(data){
      json=JSON.parse(data);
      $.each(json,function(index,response){
        if(response.ceo_is_good == 2){
          ceo_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>社長承認待ち</button>";
        }else if(response.ceo_is_good == 1){
          ceo_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>社長承認済み</button>";
        }
        if(response.depart_is_good == 2){
          depart_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>所属承認待ち</button>";
        }else if(response.depart_is_good == 1){
          depart_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>所属承認済み</button>";
        }
        if(response.human_is_good == 2){
          hr_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>人事承認待ち</button>";
        }else if(response.human_is_good == 1){
          hr_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>人事承認済み</button>";
        }
        if(response.is_good == 2){
          sys_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>対応待ち</button>";
        }else if(response.is_good == 1){
          sys_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>対応済み</button>";
        }
        if((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止')&&response.human_is_good==1){
          num = response.id;
          wrap_success.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"<i class='far fa-address-card text-danger'></i>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-5'>"+" "+depart_result+" "+ceo_result +  " "+ hr_result + " " + sys_result + "</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>")
        }else if((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止') && response.user_department == '人事本部' && response.human_is_good==1){
          num = response.id;
          wrap_success.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-5'>"+ hr_result + " " + sys_result +"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>")
        }
      })
    }
  })
}

function notAllowedData(){
  wrap_fail.html('');
  $.ajax({
    type:'POST',
    url:'sys_get.php',
    success:function(data){
      json=JSON.parse(data);
      $.each(json,function(index,response){
        if((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止')&&response.human_is_good==0){
          num = response.id;
          wrap_fail.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='id' value="+response.id+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"<i class='far fa-address-card text-danger'></i>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-danger btn-sm text-right'>未許可</button></div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-danger btn-sm text-right' data-toggle='modal' data-target='#reasonRead' onclick='isRead("+num+")';>理由</button></div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>")
        }else if((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止') && response.user_department == '人事本部' && response.human_is_good==0){
          num = response.id;
          wrap_fail.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='id' value="+response.id+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-danger btn-sm text-right'>未許可</button></div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-danger btn-sm text-right' data-toggle='modal' data-target='#reasonRead' onclick='isRead("+num+")';>理由</button></div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>")
        }
      })
    }
  })
}

function allData(){
  wrap_all.html('');
  $.ajax({
    type:'POST',
    url:'sys_get.php',
    success:function(data){
      json=JSON.parse(data);
      $.each(json,function(index,response){
        if ((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止') && response.human_is_good == 0) {
            num = response.id;
            wrap_all.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_blank'><input type='hidden' name='id' value=" + response.id + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "<i class='far fa-address-card text-danger'></i>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-danger btn-sm text-right'>未許可</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }else if((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止') && response.human_is_good == 1){
            num = response.id;
            wrap_all.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_blank'><input type='hidden' name='id' value=" + response.id + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "<i class='far fa-address-card text-danger'></i>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-success btn-sm text-right'>人事承認済み</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }else if((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止') && response.human_is_good == 2){
          num = response.id;
          wrap_all.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_blank'><input type='hidden' name='id' value=" + response.id + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "<i class='far fa-address-card text-danger'></i>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-primary btn-sm text-right'>人事承認待ち</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }else if((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止') && response.user_department == '人事本部' && response.human_is_good == 0){
          num = response.id;
          wrap_all.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_blank'><input type='hidden' name='id' value=" + response.id + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-danger btn-sm text-right'>未許可</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }else if((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止') && response.user_department == '人事本部' && response.human_is_good == 1){
          num = response.id;
          wrap_all.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_blank'><input type='hidden' name='id' value=" + response.id + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-success btn-sm text-right'>人事承認済み</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }else if((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止') && response.user_department == '人事本部' && response.human_is_good == 2){
          num = response.id;
          wrap_all.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_blank'><input type='hidden' name='id' value=" + response.id + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-primary btn-sm text-right'>人事承認待ち</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }
      })
    }
  })
}

// 検索機能
function searchedData(){
  searchName=$('input[id="search"]').val();
  if(searchName==''){
    return;
  }
  $.ajax({
    type:'POST',
    url:'result_search_get.php',
    data:{
      searchName : searchName,
    },
    beforeSend:function(){
      wrap_search.html('');
      $("#searchForm").loading({
        theme: 'light',
        message: 'Searching...'
      });
    },
    success:function(data){
      json=JSON.parse(data);
      $.each(json,function(index,response){
        if ((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止') && response.is_good == 2) {
            num = response.id;
            wrap_search.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_new'><input type='hidden' name='id' value=" + response.id + "><input type='hidden' name='good_check' value=" + response.is_good + "><input type='hidden' name='apperant_check' value=" + response.is_apperant + "><input type='hidden' name='depart_good_check' value=" + response.depart_is_good + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "<i class='far fa-address-card text-danger'></i>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-primary btn-sm text-right'>対応待ち</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }
        if ((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止') && response.is_good == 0) {
            num = response.id;
            wrap_search.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_new'><input type='hidden' name='id' value=" + response.id + "><input type='hidden' name='good_check' value=" + response.is_good + "><input type='hidden' name='apperant_check' value=" + response.is_apperant + "><input type='hidden' name='depart_good_check' value=" + response.depart_is_good + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "<i class='far fa-address-card text-danger'></i>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-danger btn-sm text-right'>未許可</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }
        if ((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止') && response.is_good == 1) {
            num = response.id;
            wrap_search.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_new'><input type='hidden' name='id' value=" + response.id + "><input type='hidden' name='good_check' value=" + response.is_good + "><input type='hidden' name='apperant_check' value=" + response.is_apperant + "><input type='hidden' name='depart_good_check' value=" + response.depart_is_good + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "<i class='far fa-address-card text-danger'></i>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-secondary btn-sm text-right'>対応済み</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }
        if ((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止') && response.user_department == '人事本部' && response.is_good == 1) {
            num = response.id;
            wrap_search.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_new'><input type='hidden' name='id' value=" + response.id + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-secondary btn-sm text-right'>対応済み</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        } else if ((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止') && response.user_department == '人事本部' && response.is_good == 0) {
            num = response.id;
            wrap_search.append("<form action='show_details.php?id=" + response.id + "' method='POST' target='_new'><input type='hidden' name='id' value=" + response.id + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>" + "使用者名:" + " " + response.user_name + "</div>" + "<div class='col-sm-3'>" + "部署:" + " " + response.user_department + "</div>" + "<div class='col-sm-3'>" + " " + "更新日:" + response.updated_at + "</div>" + "<div class='col-sm-1'>" + "<button type='button' class='btn btn-outline-danger btn-sm text-right'>未許可</button></div>" + "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div>" + "</div></div></div></form>");
        }
      })
    },
    complete:function(){
      $("#searchForm").loading('stop'),
      $('input[id="search"]').val('')
    }
  })
}

// keyboard
$("body").keydown(function() {
  if (event.keyCode == "13") {
    $("#searchBtn").click();
  }
});

// 人事許可
function isGood(num,hr_good_check,apperant_check){
  $.ajax({
    type : "POST",
    url : "hr_allow.php",
    data : {
      is_id : num,
    },
    success : function(data){
      wrap_wait.html('');
      json=JSON.parse(data);
      $.each(json,function(index,response){
        if(response.ceo_is_good == 2){
          ceo_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>社長承認待ち</button>";
        }else if(response.ceo_is_good == 1){
          ceo_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>社長承認済み</button>";
        }
        if(response.depart_is_good == 2){
          depart_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>所属承認待ち</button>";
        }else if(response.depart_is_good == 1){
          depart_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>所属承認済み</button>";
        }
        num = response.id;
        hr_good_check = response.human_is_good;
        apperant_check = response.is_apperant;
        department = response.user_department;
        if((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止')&&response.human_is_good==2){
          if(department == '人事本部'){
            wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"<i class='far fa-address-card text-danger'></i>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+depart_result+" "+ceo_result+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
          }else{
            wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"<i class='far fa-address-card text-danger'></i>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+depart_result+" "+ceo_result+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='isGood("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
          }
        }else if((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止')&&response.user_department=='人事本部'&&response.human_is_good==2){
          wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
        }
      })
    }
  })
}

function is_Good(num,hr_good_check,apperant_check){
  $.ajax({
    type : "POST",
    url : "hr_sub_allow.php",
    data : {
      is_id : num,
    },
    success : function(data){
      wrap_wait.html('');
      json=JSON.parse(data);
      $.each(json,function(index,response){
        if(response.ceo_is_good == 2){
          ceo_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>社長承認待ち</button>";
        }else if(response.ceo_is_good == 1){
          ceo_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>社長承認済み</button>";
        }
        if(response.depart_is_good == 2){
          depart_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>所属承認待ち</button>";
        }else if(response.depart_is_good == 1){
          depart_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>所属承認済み</button>";
        }
        num = response.id;
        hr_good_check = response.human_is_good;
        apperant_check = response.is_apperant;
        department = response.user_department;
        if((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止')&&response.human_is_good==2){
          if(department == '人事本部'){
            wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"<i class='far fa-address-card text-danger'></i>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+depart_result+" "+ceo_result+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
          }else{
            wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"<i class='far fa-address-card text-danger'></i>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+depart_result+" "+ceo_result+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='isGood("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
          }
        }else if((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止')&&response.user_department=='人事本部'&&response.human_is_good==2){
          wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
        }
      })
    }
  })
}

// 人事不許可
function isBad(num,hr_good_check){
  $('#modalNotAllow').click(function(){
    if($('#reasonContent').val()){
      reasonContent = $('#reasonContent').val();
      $.ajax({
        type : "POST",
        url : "hr_not_allow.php",
        data : {
          is_id : num,
          is_reason_content : reasonContent
        },
        success : function(data){
          wrap_wait.html('');
          json=JSON.parse(data);
          $.each(json,function(index,response){
            if(response.ceo_is_good == 2){
              ceo_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>社長承認待ち</button>";
            }else if(response.ceo_is_good == 1){
              ceo_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>社長承認済み</button>";
            }
            if(response.depart_is_good == 2){
              depart_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>所属承認待ち</button>";
            }else if(response.depart_is_good == 1){
              depart_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>所属承認済み</button>";
            }
            if((response.user_class == '新入社員' || response.user_class == '異動' || response.user_class == '廃止' || response.user_class == '休止')&&response.human_is_good==2){
              num = response.id;
              hr_good_check = response.human_is_good;
              apperant_check = response.is_apperant;
              wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"<i class='far fa-address-card text-danger'></i>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+depart_result+" "+ceo_result+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='isGood("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
            }else if((response.user_class !== '新入社員' || response.user_class !== '異動' || response.user_class !== '廃止' || response.user_class !== '休止')&&response.user_department=='人事本部'&&response.human_is_good==2){
              num = response.id;
              hr_good_check = response.human_is_good;
              apperant_check = response.is_apperant;
              wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_new'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='isGood("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
            }
          })
        }
      })
    }else{
      $.ajax({
        type : "POST",
        url : "hr_not_allow.php",
        data : {
          is_id : num,
          is_reason_content : ' '
        },
        success : function(data){
          wrap_wait.html('');
          json=JSON.parse(data);
          $.each(json,function(index,response){
            if(response.ceo_is_good == 2){
              ceo_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>社長承認待ち</button>";
            }else if(response.ceo_is_good == 1){
              ceo_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>社長承認済み</button>";
            }
            if(response.depart_is_good == 2){
              depart_result = "<button type='button' class='btn btn-outline-warning btn-sm clearfix'>所属承認待ち</button>";
            }else if(response.depart_is_good == 1){
              depart_result = "<button type='button' class='btn btn-outline-secondary btn-sm clearfix'>所属承認済み</button>";
            }
            if(response.user_class=='新入社員'&&response.human_is_good==2){
              num = response.id;
              hr_good_check = response.human_is_good;
              apperant_check = response.is_apperant;
              wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_blank'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"<i class='far fa-address-card text-danger'></i>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+depart_result+" "+ceo_result+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='isGood("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
            }else if(response.user_class!=='新入社員'&&response.user_department=='人事本部'&&response.human_is_good==2){
              num = response.id;
              hr_good_check = response.human_is_good;
              apperant_check = response.is_apperant;
              wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST' target='_new'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='hr_good_check' value="+response.human_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='isGood("+num+","+hr_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='isBad("+num+","+hr_good_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
            }
          })
        }
      })
    }
  })
}

// 理由読み込む
function isRead(num){
  $.ajax({
    type : "POST",
    url : "reason_read.php",
    data : {
      is_id : num,
    },
    success : function(res){
      json=JSON.parse(res);
      $.each(json,function(index,response){
          $('#not-allowed').html(response.not_allowed_reason);
      })
    }
  })
}

window.onload = function(){
  loadData();
  $("#nav-wait-tab").addClass("active");
  $("#nav-wait").addClass("show active");
}
