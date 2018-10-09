$('[id^=datepicker]').datepicker({
    weekStart: 1,
    format: 'yyyy-mm-dd',
    // daysOfWeekHighlighted: "6,0",
    autoclose: true,
    todayHighlight: true,
}).on('change',function(){
  $(this).valid();
});

$('[data-toggle="tooltip"]').tooltip();

$("#inputClass").change(function(){
  if($("#inputClass").val()=="新入社員"){
    $("#regis1").removeClass("regis")
  }else{
    $("#regis1").addClass("regis")
  }
  if($("#inputClass").val()=="廃止"){
    $("#regis2").removeClass("regis")
  }else{
    $("#regis2").addClass("regis")
  }
  if($("#inputClass").val()=="異動"){
    $("#regis3").removeClass("regis")
  }else{
    $("#regis3").addClass("regis")
  }
  if($("#inputClass").val()=="休止"){
    $("#regis4").removeClass("regis")
  }else{
    $("#regis4").addClass("regis")
  }
})

$("body").keydown(function() {
  if (event.keyCode == "13") {
    $("#btnLogin").click();
  }
});

function reload(){
  $inputChecked = $('input:checkbox:checked');
  $inputText = $("input[type='text']");
  $inputSelect = $("select");
  $inputReason = $("textarea");
  if($inputChecked){
    $inputChecked.each(function(){
      if($(this).attr('id')=="comCheck"){

      }else{
        $(this).prop("checked",false);
        $('.collapse').collapse('hide');
      }
    })
  }
  if($inputText){
    $inputText.val('');
  }
  if($inputSelect){
    $inputSelect.val('');
  }
  if($inputReason){
    $inputReason.val('');
  }
  $("#readingForm").validate().resetForm();
}
