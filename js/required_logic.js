$.extend($.validator.messages, {
  required: "正しく入力してください。",
});

$(function(){
  $.validator.setDefaults({
      submitHandler: function() {}
  });

  $("#readingForm").validate({
    highlight: function(element, errorClass) {
      $(element).fadeOut(function() {
        $(element).fadeIn();
        $(element).addClass("error alert-danger");
      });
    },
    unhighlight: function(element, errorClass) {
      $(element).removeClass("error alert-danger");
    },
    rules:{
      inputName:{
        required:true
      },
      inputDep:{
        required:true
      },
      inputNameKanji:{
        required:true
      },
      inputNameKana:{
        required:true
      },
      inputNameRoma:{
        required:true
      },
      inputdepartment:{
        required:true
      },
      datepicker:{
        required:true,
        date : true
      },
      datepicker2:{
        required:true
      },
      datepicker3:{
        required:true
      },
      datepicker4:{
        required:true
      },
      datepicker5:{
        required:true
      },
      datepicker6:{
        required:true
      },
      datepicker7:{
        required:true
      },
      datepicker8:{
        required:true
      },
      datepickerbloomberg:{
        required:true
      },
      datepickerreuters:{
        required:true
      },
      foldername:{
        required:true
      },
      folderpath:{
        required:true
      },
      folderaccess:{
        required:true
      },
      comEmail:{
        required:true
      },
      "access[]":{
        required:true
      },
      "phones[]":{
        required:true
      },
      "terminals[]":{
        required:true
      },
      "forms[]":{
        required:true
      }
    },
    messages: {
      "access[]": "正しくチェックしてください。",
      "phones[]": "正しくチェックしてください。",
      "terminals[]": "正しくチェックしてください。",
      "forms[]":"申請項目を選択してください。",
    },
    errorPlacement: function(error,element){
      if(element.attr("name")=="access[]")
        error.insertAfter(".access-error");
      else if(element.attr("name")=="phones[]")
        error.insertAfter(".phone-error");
      else if(element.attr("name")=="terminals[]")
        error.insertAfter(".terminal-error");
      else if(element.attr("name")=="forms[]")
          error.appendTo(".form-error");
      else
       error.insertAfter(element);
    },
    focusCleanup: true,
  });
});

function gocheck() {
  var flag = $("#readingForm").valid();
  if(!flag){
    return;
  }
  go();
}
