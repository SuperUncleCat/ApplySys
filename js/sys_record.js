is_good=new Array();
wrap_wait=$("#nav-wait");
wrap_success=$("#nav-success");
wrap_fail=$("#nav-fail");
wrap_all=$("#nav-all");
wrap_search=$("#formS");
wrap_depart=$('#nav-depart-wait');
wrap_it=$('#nav-it-wait');
searchBtn=$("#nav-search-tab");
var is_good_check;
var is_apperant_check;



function loadData(){
  $.ajax({
    type:'POST',
    url:'sys_get.php',
    success:function(data){
      json=JSON.parse(data);
      $.each(json,function(index,response){
          if(response.is_apperant==0){
            num = response.id;
            depart_good_check = response.depart_is_good;
            good_check = response.is_good;
            apperant_check = response.is_apperant;
            wrap_wait.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='depart_good_check' value="+response.depart_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='good_check' value="+response.is_good+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'></div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
          }
      })
    }
  })
}

function departData(){
  wrap_depart.html('');
  $.ajax({
    type:'POST',
    url:'sys_get.php',
    success:function(data){
      json=JSON.parse(data);
      $.each(json,function(index,response){
        if(response.is_apperant==1&&response.depart_is_good==1){
          num = response.id;
          good_check = response.is_good;
          depart_good_check = response.depart_is_good;
          apperant_check = response.is_apperant;
          wrap_depart.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='depart_good_check' value="+response.depart_is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='good_check' value="+response.is_good+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-success btn-sm text-right'>許可済み</button></div>"+"<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>")          }
      })
    }
  })
}

function systemData(){
  wrap_it.html('');
  $.ajax({
    type:'POST',
    url:'sys_get.php',
    success:function(data){
      json=JSON.parse(data);
      $.each(json,function(index,response){
          if(response.depart_is_good==1&&response.is_good==0){
            num = response.id;
            good_check = response.is_good;
            depart_good_check = response.depart_is_good;
            apperant_check = response.is_apperant;
            wrap_it.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='depart_good_check' value="+response.depart_is_good+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+good_check+","+depart_good_check+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='is_Bad("+num+","+good_check+","+depart_good_check+","+apperant_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
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
          if(response.is_apperant==0){
            num = response.id;
            depart_good_check = response.depart_is_good;
            good_check = response.is_good;
            apperant_check = response.is_apperant;
            wrap_all.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='depart_good_check' value="+response.depart_is_good+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-primary btn-sm text-right'>許可待ち</button></div>"+ "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
          }

          if(response.is_apperant==1&&response.depart_is_good==1&&response.is_good==0){
            wrap_all.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='depart_good_check' value="+response.depart_is_good+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-success btn-sm text-right'>部門長許可済み</button></div>"+ "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
          }else if(response.is_apperant==1&&response.depart_is_good==0&&response.is_good==0){
            wrap_all.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='depart_good_check' value="+response.depart_is_good+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-danger btn-sm text-right'>未許可</button></div>"+ "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div>"+"</div></div></div></form>");
          }else if(response.is_apperant==1&&response.depart_is_good==1&&response.is_good==1){
            wrap_all.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='depart_good_check' value="+response.depart_is_good+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-success btn-sm text-right'>承認済み</button></div>"+ "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div>"+"</div></div></div></form>");
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
        if(response.is_apperant==1&&response.depart_is_good==1&&response.is_good==1){
          num = response.id;
          depart_good_check = response.depart_is_good;
          good_check = response.is_good;
          apperant_check = response.is_apperant;
          wrap_success.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='depart_good_check' value="+response.depart_is_good+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-success btn-sm text-right'>承認済み</button></div>"+"<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>")
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
        if(response.is_apperant==1&&response.depart_is_good==0&&response.is_good==0){
          num = response.id;
          good_check = response.is_good;
          depart_good_check = response.depart_is_good;
          apperant_check = response.is_apperant;
          wrap_fail.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='depart_good_check' value="+response.depart_is_good+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-danger btn-sm text-right'>未許可</button></div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-danger btn-sm text-right' data-toggle='modal' data-target='#reasonRead' onclick='isRead("+num+")';>理由</button></div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>")
        }
      })
    }
  })
}

// 検索機能
function searchedData(){
  searchName=$('input[id="search"]').val(),
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
        if(response.is_apperant==0){
          num = response.id;
          depart_good_check = response.depart_is_good;
          good_check = response.is_good;
          apperant_check = response.is_apperant;
          wrap_search.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='depart_good_check' value=" + response.depart_is_good + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-primary btn-sm text-right'>許可待ち</button></div>"+ "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }

        if(response.is_apperant==1&&response.is_good==1){
          num = response.id;
          depart_good_check = response.depart_is_good;
          good_check = response.is_good;
          apperant_check = response.is_apperant;
          wrap_search.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='depart_good_check' value=" + response.depart_is_good + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-success btn-sm text-right'>許可済み</button></div>"+ "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div></div></div></div></form>");
        }else if(response.is_apperant==1&&response.is_good==0){
          num = response.id;
          depart_good_check = response.depart_is_good;
          good_check = response.is_good;
          apperant_check = response.is_apperant;
          wrap_search.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><input type='hidden' name='depart_good_check' value=" + response.depart_is_good + "><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-1'>"+"<button type='button' class='btn btn-outline-danger btn-sm text-right'>未許可</button></div>"+ "<div class='col-sm-2 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button></div>"+"</div></div></div></form>");
        }
      })
    },
    complete:function(){
      $("#searchForm").loading('stop'),
      $('input[id="search"]').val('')
    }
  })
}

$("body").keydown(function() {
  if (event.keyCode == "13") {
    $("#searchBtn").click();
  }
});

$('#notAllowBtn').click(function(){
  location.href='/applyform/results.php';
})

$('#allowBtn').click(function(){
  location.href='/applyform/results.php';
})

// システム部許可
function is_Good(num,good_check,good_check_depart,apperant_check){
  $.ajax({
    type : "POST",
    url : "sys_allow.php",
    data : {
      is_id : num,
      is_good_check : good_check,
      good_check_depart : good_check_depart,
      is_apperant_check : apperant_check
    },
    success : function(data){
      wrap_it.html('');
      json=JSON.parse(data);
      $.each(json,function(index,response){
          if(response.depart_is_good==1&&response.is_good==0){
            num = response.id;
            depart_good_check = response.depart_is_good;
            good_check = response.is_good;
            apperant_check = response.is_apperant;
            wrap_it.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+good_check+","+good_check_depart+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='is_Bad("+num+","+good_check+","+good_check_depart+","+apperant_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
          }
      })
    }
  })
}

//システム部不許可
function is_Bad(num,good_check,good_check_depart,apperant_check){
  $('#modalNotAllow').click(function(){
    if($('#reasonContent').val()){
      reasonContent = $('#reasonContent').val();
      $.ajax({
        type : "POST",
        url : "sys_not_allow.php",
        data : {
          is_id : num,
          good_check_depart : good_check_depart,
          is_good_check : good_check,
          is_apperant_check : apperant_check,
          is_reason_content : reasonContent
        },
        success : function(data){
          wrap_it.html('');
          json=JSON.parse(data);
          $.each(json,function(index,response){
              if(response.depart_is_good==1&&response.is_good==0){
                num = response.id;
                depart_good_check = response.depart_is_good;
                good_check = response.is_good;
                apperant_check = response.is_apperant;
                wrap_it.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+good_check+","+good_check_depart+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='is_Bad("+num+","+good_check+","+good_check_depart+","+apperant_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
              }
          })
        }
      })
    }else{
      $.ajax({
        type : "POST",
        url : "sys_not_allow.php",
        data : {
          is_id : num,
          is_good_check : good_check,
          is_apperant_check : apperant_check,
          is_reason_content : ' '
        },
        success : function(data){
          wrap_it.html('');
          json=JSON.parse(data);
          $.each(json,function(index,response){
              if(response.depart_is_good==1&&response.is_good==0){
                num = response.id;
                depart_good_check = response.depart_is_good;
                good_check = response.is_good;
                apperant_check = response.is_apperant;
                wrap_it.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+good_check+","+good_check_depart+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='is_Bad("+num+","+good_check+","+good_check_depart+","+apperant_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
              }

          })
        }
      })
    }
  })

  $('#notAllowBtn').click(function(){
    if($('#reasonContent').val()){
      reasonContent = $('#reasonContent').val();
      $.ajax({
        type : "POST",
        url : "sys_not_allow.php",
        data : {
          is_id : num,
          good_check_depart : good_check_depart,
          is_good_check : good_check,
          is_apperant_check : apperant_check,
          is_reason_content : reasonContent
        },
        success : function(data){
          wrap_it.html('');
          json=JSON.parse(data);
          $.each(json,function(index,response){
              if(response.depart_is_good==1&&response.is_good==0){
                num = response.id;
                depart_good_check = response.depart_is_good;
                good_check = response.is_good;
                apperant_check = response.is_apperant;
                wrap_it.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+good_check+","+good_check_depart+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='is_Bad("+num+","+good_check+","+good_check_depart+","+apperant_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
              }
          })
        }
      })
    }else{
      $.ajax({
        type : "POST",
        url : "sys_not_allow.php",
        data : {
          is_id : num,
          is_good_check : good_check,
          is_apperant_check : apperant_check,
          is_reason_content : ' '
        },
        success : function(data){
          wrap_it.html('');
          json=JSON.parse(data);
          $.each(json,function(index,response){
              if(response.depart_is_good==1&&response.is_good==0){
                num = response.id;
                depart_good_check = response.depart_is_good;
                good_check = response.is_good;
                apperant_check = response.is_apperant;
                wrap_it.append("<form action='show_details.php?id="+response.id+"' method='POST'><input type='hidden' name='id' value="+response.id+"><input type='hidden' name='good_check' value="+response.is_good+"><input type='hidden' name='apperant_check' value="+response.is_apperant+"><div class='card'><div class='card-body'><div class='card-text row'><div class='col-sm-3'>"+"使用者名:"+" "+response.user_name+"</div>"+"<div class='col-sm-3'>"+"部署:"+" "+response.user_department+"</div>"+"<div class='col-sm-3'>"+" "+"更新日:"+response.updated_at+"</div>"+"<div class='col-sm-2'><button type='button' class='btn btn-outline-info btn-sm' onclick='is_Good("+num+","+good_check+","+good_check_depart+","+apperant_check+")';>許可</button><button type='button' class='btn btn-outline-info btn-sm btn-mp-1' data-toggle='modal' data-target='#reasonCenter' onclick='is_Bad("+num+","+good_check+","+good_check_depart+","+apperant_check+")';>不許可</button>"+"</div>"+"<div class='col-sm-1 text-right'><button type='submit' class='btn btn-outline-info btn-sm'>詳細</button>"+"</div></div></div></div></form>")
              }

          })
        }
      })
    }
  })
}

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
};
