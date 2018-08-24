$('[id^=datepicker]').datepicker({
    weekStart: 1,
    format: 'yyyy-mm-dd',
    // daysOfWeekHighlighted: "6,0",
    autoclose: true,
    todayHighlight: true,
});

$('[data-toggle="tooltip"]').tooltip();

$("body").keydown(function() {
  if (event.keyCode == "13") {
    $("#btnLogin").click();
  }
});

function reload(){
  $inputChecked = $('input:checkbox:checked');
  $inputText = $("input[type='text']");
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
  $("#readingForm").validate().resetForm();
}
