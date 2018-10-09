function confirm(){
  $.ajax({
    type : "POST",
    url : "success.php",
    data: {
      val_inputName : this.$val_inputName,
      val_inputDep : this.$val_inputDep,
      val_inputClass : this.$val_inputClass,
      val_inputType : this.$val_inputType,
      val_inputReason : this.$val_inputReason,
      val_inputNameKanji : this.$val_inputNameKanji,
      val_inputNameKana : this.$val_inputNameKana,
      val_inputNameRoma : this.$val_inputNameRoma,
      val_inputdepartment : this.$val_inputdepartment,
      val_datepicker : this.$val_datepicker,
      val_datepicker2 : this.$val_datepicker2,
      val_datepicker3 : this.$val_datepicker3,
      val_datepicker4 : this.$val_datepicker4,
      val_datepicker5 : this.$val_datepicker5,
      val_datepicker6 : this.$val_datepicker6,
      val_datepicker7 : this.$val_datepicker7,
      val_datepicker8 : this.$val_datepicker8,
      val_datepicker9 : this.$val_datepicker9,
      val_datepicker10 : this.$val_datepicker10,
      val_datepicker11 : this.$val_datepicker11,
      val_datepicker12 : this.$val_datepicker12,
      val_datepickerbloomberg : this.$val_datepickerbloomberg,
      val_datepickerreuters : this.$val_datepickerreuters,
      val_foldername : this.$val_foldername,
      val_folderpath : this.$val_folderpath,
      val_folderspec : this.$val_folderspec,
      val_folderitem : this.$val_folderitem,
      val_folderaccess : this.$val_folderaccess,
      val_comEmail : this.$val_comEmail,
      val_mailItem : this.$val_mailItem,
      val_adminNum : this.$val_adminNum,
      check_userApply : this.$check_userApply,
      check_pcAccount : this.$check_pcAccount,
      check_pcMail : this.$check_pcMail,
      check_click : this.$check_click,
      check_tfx : this.$check_tfx,
      check_quick : this.$check_quick,
      check_bloomberg : this.$check_bloomberg,
      check_reuters : this.$check_reuters,
      check_terminalApply : this.$check_terminalApply,
      check_terminalPC : this.$check_terminalPC,
      check_terminalPC1 : this.$check_terminalPC1,
      check_terminalPC2 : this.$check_terminalPC2,
      check_terminaliPad : this.$check_terminaliPad,
      check_terminalPhone : this.$check_terminalPhone,
      check_terminalSmart : this.$check_terminalSmart,
      check_terminalFeature : this.$check_terminalFeature,
      check_folder : this.$check_folder,
      check_make : this.$check_make,
      check_access : this.$check_access,
      check_folderEdit : this.$check_folderEdit,
      check_folderRead : this.$check_folderRead,
      check_comMail : this.$check_comMail
    },
    beforeSend : function(){
      $("form").loading({
        theme:'dark'
      });
    },
    success : function(msg){
      window.location.href="/applyform"
    },
  })
  return false;
}

function go(){
  $inputChecked = $('input:checkbox:checked');
  $check_userApply = $('input[id="firstCheckOne"]').prop('checked')?1:0;
  $check_pcAccount = $('input[id="firstCheckOne1"]').prop('checked')?1:0;
  $check_pcMail = $('input[id="firstCheckOne2"]').prop('checked')?1:0;
  $check_click = $('input[id="firstCheckOne3"]').prop('checked')?1:0;
  $check_tfx = $('input[id="firstCheckOne4"]').prop('checked')?1:0;
  $check_quick = $('input[id="firstCheckOne5"]').prop('checked')?1:0;
  $check_bloomberg = $('input[id="firstCheckOne6"]').prop('checked')?1:0;
  $check_reuters = $('input[id="firstCheckOne7"]').prop('checked')?1:0;
  $check_terminalApply = $('input[id="secondCheckOne"]').prop('checked')?1:0;
  $check_terminalPC = $('input[id="secondCheckOne1"]').prop('checked')?1:0;
  $check_terminalPC1 = $('input[id="secondCheckOne11"]').prop('checked')?1:0;
  $check_terminalPC2 = $('input[id="secondCheckOne12"]').prop('checked')?1:0;
  $check_terminaliPad = $('input[id="secondCheckOne2"]').prop('checked')?1:0;
  $check_terminalPhone = $('input[id="secondCheckOne3"]').prop('checked')?1:0;
  $check_terminalSmart = $('input[id="secondCheckOne31"]').prop('checked')?1:0;
  $check_terminalFeature = $('input[id="secondCheckOne32"]').prop('checked')?1:0;
  $check_folder = $('input[id="thirdCheckOne"]').prop('checked')?1:0;
  $check_make = $('input[id="thirdCheckOne1"]').prop('checked')?1:0;
  $check_access = $('input[id="thirdCheckOne2"]').prop('checked')?1:0;
  $check_folderEdit = $('input[id="writeAccess"]').prop('checked')?1:0;
  $check_folderRead = $('input[id="readAccess"]').prop('checked')?1:0;
  $check_comMail = $('input[id="firstCheck4"]').prop('checked')?1:0;
  $inputText = $("input[type='text']");
  $inputName = $("input[name='mustforms[]']");
  $label_inputName = $('label[for="inputName"]').html().trim();
  $label_inputDep = $('label[for="inputDep"]').html().trim();
  $label_inputClass = $('label[for="inputClass"]').html().trim();
  $label_inputType = $('label[for="inputType"]').html().trim();
  $label_inputReason = $('label[for="inputReason"]').html().trim();
  $label_inputNameKanji = $('label[for="inputNameKanji"]').html().trim();
  $label_inputNameKana = $('label[for="inputNameKana"]').html().trim();
  $label_inputNameRoma = $('label[for="inputNameRoma"]').html().trim();
  $label_inputdepartment = $('label[for="inputdepartment"]').html().trim();
  $label_datepicker = $('label[for="datepicker"]').html().trim();
  $label_datepicker2 = $('label[for="datepicker2"]').html().trim();
  $label_datepicker3 = $('label[for="datepicker3"]').html().trim();
  $label_datepicker4 = $('label[for="datepicker4"]').html().trim();
  $label_datepicker5 = $('label[for="datepicker5"]').html().trim();
  $label_datepicker6 = $('label[for="datepicker6"]').html().trim();
  $label_datepicker7 = $('label[for="datepicker7"]').html().trim();
  $label_datepicker8 = $('label[for="datepicker8"]').html().trim();
  $label_datepicker9 = $('label[for="datepicker9"]').html().trim();
  $label_datepicker10 = $('label[for="datepicker10"]').html().trim();
  $label_datepicker11 = $('label[for="datepicker11"]').html().trim();
  $label_datepicker12 = $('label[for="datepicker12"]').html().trim();
  $label_datepickerbloomberg = $('label[for="datepickerbloomberg"]').html().trim();
  $label_datepickerreuters = $('label[for="datepickerreuters"]').html().trim();
  $label_foldername = $('label[for="foldername"]').html().trim();
  $label_folderpath = $('label[for="folderpath"]').html().trim();
  $label_folderspec = $('label[for="folderspec"]').html().trim();
  $label_folderitem = $('label[for="folderitem"]').html().trim();
  $label_folderaccess = $('label[for="folderaccess"]').html().trim();
  $label_comEmail = $('label[for="comEmail"]').html().trim();
  $label_mailItem = $('label[for="mailItem"]').html().trim();
  $val_inputName = $("#inputName").val();
  $val_inputDep = $("#inputDep").val();
  $val_inputClass = $("#inputClass").val();
  $val_inputType = $("#inputType").val();
  $val_inputReason = $("#inputReason").val();
  $val_inputNameKanji = $("#inputNameKanji").val();
  $val_inputNameKana = $("#inputNameKana").val();
  $val_inputNameRoma = $("#inputNameRoma").val();
  $val_inputdepartment = $("#inputdepartment").val();
  $val_datepicker = $("#datepicker").val();
  $val_datepicker2 = $("#datepicker2").val();
  $val_datepicker3 = $("#datepicker3").val();
  $val_datepicker4 = $("#datepicker4").val();
  $val_datepicker5 = $("#datepicker5").val();
  $val_datepicker6 = $("#datepicker6").val();
  $val_datepicker7 = $("#datepicker7").val();
  $val_datepicker8 = $("#datepicker8").val();
  $val_datepicker9 = $("#datepicker9").val();
  $val_datepicker10 = $("#datepicker10").val();
  $val_datepicker11 = $("#datepicker11").val();
  $val_datepicker12 = $("#datepicker12").val();
  $val_datepickerbloomberg = $("#datepickerbloomberg").val();
  $val_datepickerreuters = $("#datepickerreuters").val();
  $val_foldername = $("#foldername").val();
  $val_folderpath = $("#folderpath").val();
  $val_folderspec = $("#folderspec").val();
  $val_folderitem = $("#folderitem").val();
  $val_folderaccess = $("#folderaccess").val();
  $val_comEmail = $("#comEmail").val();
  $val_mailItem = $("#mailItem").val();
  switch($val_inputDep){
    case 'IT事業戦略室':
      $val_adminNum = 1;
      break;
    case '秘書課':
      $val_adminNum = 2;
      break;
    case '管理部':
      $val_adminNum = 3;
      break;
    case '金融商品開発室':
      $val_adminNum = 4;
      break;
    case '経営企画室':
      $val_adminNum = 5;
      break;
    case 'セミナー事業部':
      $val_adminNum = 6;
      break;
    case '人事本部':
      $val_adminNum = 7;
      break;
    case '労務課':
      $val_adminNum = 8;
      break;
    case '総務部':
      $val_adminNum = 9;
      break;
    case '経理課':
      $val_adminNum = 10;
      break;
    case 'コンプライアンス部':
      $val_adminNum = 11;
      break;
    case 'カスタマー事業部':
      $val_adminNum = 12;
      break;
    case '管理本部':
      $val_adminNum = 13;
      break;
    case '証券営業部':
      $val_adminNum = 14;
      break;
    case '内部監査':
      $val_adminNum = 15;
      break;
    default:
      $val_adminNum = 0;
      break;
  }
  $wrap = $('.card-body');
  $cardwrap = $('.confirm-panel');
  $("#accordion").remove();
  $cardwrap.show();

  $inputChecked.each(function(index,items){
    var attrName=items.id;
    var attrForm=items.name;
    if(attrName=="comCheck"){
      $wrap.append("<hr><h4 class='card-title'>"+ $(this).val()+"</h4>");
    }if(attrForm=="forms[]"){
      $wrap.append("<hr><h4 class='card-title'>"+ $(this).val()+"</h4>");
    }
    if(attrName=="firstCheckOne1"|| attrName=="firstCheckOne2" || attrName=="firstCheckOne3" || attrName=="firstCheckOne4" || attrName=="firstCheckOne5" || attrName=="firstCheckOne6" || attrName=="firstCheckOne7"){
      $wrap.append("<div class='card-title mt-2 font-weight-bold'>"+ $(this).val()+"</div>");
    }

    if(attrName=="secondCheckOne1" || attrName=="secondCheckOne2" || attrName=="secondCheckOne3"){
      $wrap.append("<div class='card-title mt-2 font-weight-bold'>"+ $(this).val()+"</div>");
    }

    if(attrName=="datepicker6" || attrName=="secondCheckOne11" || attrName=="secondCheckOne12"){
      $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + '申請種類' + ' : ' +  "</label><span class='col-sm-9'>" + $(this).val() + "</span></p>");
    }

    if(attrName=="secondCheckOne31" || attrName=="secondCheckOne32"){
      $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + '申請機種' + ' : ' +  "</label><span class='col-sm-9'>" + $(this).val() + "</span></p>");
    }

    if(attrName=="thirdCheckOne2"){
      $wrap.append("<div class='card-title mt-2 font-weight-bold'>"+ $(this).val()+"</div>");
    }
    if(attrName=="folderaccess" ){
      $wrap.append("<div class='card-title mt-2 font-weight-bold'>"+ $(this).val()+"</div>");
    }
    if(attrName=="writeAccess" || attrName=="readAccess" ){
      $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + '申請権限' + ' : ' +  "</label><span class='col-sm-9'>" + $(this).val() + "</span></p>");
    }

    if(attrName=="comCheck"){
      if($val_inputName){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_inputName + ' : ' +  "</label><span class='col-sm-9'>" + $val_inputName + "</span></p>");
      }
      if($val_inputDep){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_inputDep + ' : ' + "</label><span class='col-sm-9'>" + $val_inputDep + "</span></p>");
      }
      if($val_inputClass){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_inputClass + ' : ' + "</label><span class='col-sm-9'>" + $val_inputClass + "</span></p>");
      }
      if($val_datepicker9){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker9 + ' : ' + "</label><span class='col-sm-9'>" + $val_datepicker9 + "</span></p>");
      }
      if($val_datepicker10){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker10 + ' : ' + "</label><span class='col-sm-9'>" + $val_datepicker10 + "</span></p>");
      }
      if($val_datepicker11){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker11 + ' : ' + "</label><span class='col-sm-9'>" + $val_datepicker11 + "</span></p>");
      }
      if($val_datepicker12){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker12 + ' : ' + "</label><span class='col-sm-9'>" + $val_datepicker12 + "</span></p>");
      }
      if($val_inputType){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_inputType + ' : ' + "</label><span class='col-sm-9'>" + $val_inputType + "</span></p>");
      }
      if($val_inputReason){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_inputReason + ' : ' + "</label><span class='col-sm-9'>" + $val_inputReason + "</span></p>");
      }
    }
    if(attrName=="firstCheckOne1"){
      if($val_inputNameKanji){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_inputNameKanji + ' : ' +  "</label><span class='col-sm-9'>" + $val_inputNameKanji + "</span></p>");
      }
      if($val_inputNameKana){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_inputNameKana + ' : ' +  "</label><span class='col-sm-9'>" + $val_inputNameKana + "</span></p>");
      }
      if($val_inputNameRoma){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_inputNameRoma + ' : ' +  "</label><span class='col-sm-9'>" + $val_inputNameRoma + "</span></p>");
      }
      if($val_inputdepartment){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_inputdepartment + ' : ' +  "</label><span class='col-sm-9'>" + $val_inputdepartment + "</span></p>");
      }
      if($val_datepicker){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker + ' : ' +  "</label><span class='col-sm-9'>" + $val_datepicker + "</span></p>");
      }
    }
    if(attrName=="firstCheckOne2"){
      if($val_datepicker2){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker2 + ' : ' +  "</label><span class='col-sm-9'>" + $val_datepicker2 + "</span></p>");
      }
    }
    if(attrName=="firstCheckOne3"){
      if($val_datepicker3){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker3 + ' : ' +  "</label><span class='col-sm-9'>" + $val_datepicker3 + "</span></p>");
      }
    }
    if(attrName=="firstCheckOne4"){
      if($val_datepicker4){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker4 + ' : ' +  "</label><span class='col-sm-9'>" + $val_datepicker4 + "</span></p>");
      }
    }
    if(attrName=="firstCheckOne5"){
      if($val_datepicker5){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker5 + ' : ' +  "</label><span class='col-sm-9'>" + $val_datepicker5 + "</span></p>");
      }
    }
    if(attrName=="firstCheckOne6"){
      if($val_datepickerbloomberg){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepickerbloomberg + ' : ' +  "</label><span class='col-sm-9'>" + $val_datepickerbloomberg + "</span></p>");
      }
    }
    if(attrName=="firstCheckOne7"){
      if($val_datepickerreuters){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepickerreuters + ' : ' +  "</label><span class='col-sm-9'>" + $val_datepickerreuters + "</span></p>");
      }
    }
    if(attrName=="secondCheckOne1"){
      if($val_datepicker6){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker6 + ' : ' +  "</label><span class='col-sm-9'>" + $val_datepicker6 + "</span></p>");
      }
    }
    if(attrName=="secondCheckOne2"){
      if($val_datepicker7){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker7 + ' : ' +  "</label><span class='col-sm-9'>" + $val_datepicker7 + "</span></p>");
      }
    }
    if(attrName=="secondCheckOne3"){
      if($val_datepicker8){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_datepicker8 + ' : ' +  "</label><span class='col-sm-9'>" + $val_datepicker8 + "</span></p>");
      }
    }
    if(attrName=="thirdCheckOne1"){
      if($val_foldername){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_foldername + ' : ' +  "</label><span class='col-sm-9'>" + $val_foldername + "</span></p>");
      }
      if($val_folderpath){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_folderpath + ' : ' + "</label><span class='col-sm-9'>" + $val_folderpath + "</span></p>");
      }
      if($val_folderspec){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_folderspec + ' : ' +  "</label><span class='col-sm-9'>" + $val_folderspec + "</span></p>");
      }
      if($val_folderitem){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_folderitem + ' : ' + "</label><span class='col-sm-9'>" + $val_folderitem + "</span></p>");
      }
    }
    if(attrName=="thirdCheckOne2"){
      if($val_folderaccess){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_folderaccess + ' : ' + "</label><span class='col-sm-9'>" + $val_folderaccess + "</span></p>");
      }
    }
    if(attrName=="firstCheck4"){
      if($val_comEmail){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_comEmail + ' : ' + "</label><span class='col-sm-9'>" + $val_comEmail + "</span></p>");
      }
      if($val_mailItem){
        $wrap.append("<p class='card-text mt-1'>" + "<label class='col-sm-3 col-form-label'>" + $label_mailItem + ' : ' + "</label><span class='col-sm-9'>" + $val_mailItem + "</span></p>");
      }
    }
  });
  $wrap.append("<div class='panel panel-default mt-3 text-center'><div class='panel-body'><button type='button' name='btn-confirm' class='btn btn-info btn-circle btn-xl btn-space' value='Submit' onclick='confirm();'><i class='fa fa-check'></i></button><button type='button' id='btn-back' class='btn btn-warning btn-circle btn-xl' value='Back' onclick='location.reload();'><i class='fa fa-times'></i></button></div></div>");
  return false;
}
