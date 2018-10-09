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
        $(element).removeClass('has-success').addClass('has-error error');
      });
    },
    unhighlight: function(element, errorClass) {
      $(element).removeClass('has-error error').addClass('has-success');
    },
    rules:{
      inputName:{
        required:true
      },
      inputDep:{
        required:true
      },
      inputClass:{
        required:true
      },
      inputType:{
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
        date: true
      },
      datepicker2:{
        required:true,
        date: true
      },
      datepicker3:{
        required:true,
        date: true
      },
      datepicker4:{
        required:true,
        date: true
      },
      datepicker5:{
        required:true,
        date: true
      },
      datepicker6:{
        required:true,
        date: true
      },
      datepicker7:{
        required:true,
        date: true
      },
      datepicker8:{
        required:true,
        date: true
      },
      datepicker9:{
        required:true,
        date: true
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
      },
      messages:{

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
