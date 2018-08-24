$('input[id="firstCheckOne"]').click(function(){
  if($('input[id="firstCheckOne"]').prop("checked")){

  }
  else {
    $('input:checkbox:checked').each(function(){
      if($(this).attr('id')=="comCheck"){

      }else{
        $('div[id^=collapseOne]').collapse('hide');
      }
    })
    $('input[id^="firstCheckOne"]').prop("checked", false);
  }
});

$('input[id="secondCheckOne"]').click(function(){
  if($('input[id="secondCheckOne"]').prop("checked")){

  }
  else {
    $('input:checkbox:checked').each(function(){
      if($(this).attr('id')=="comCheck"){

      }else{
        $('div[id^=collapseTwo]').collapse('hide');
      }
    })
    $('input[id^="secondCheckOne"]').prop("checked", false);
  }
});

$('input[id="thirdCheckOne"]').click(function(){
  if($('input[id="thirdCheckOne"]').prop("checked")){

  }
  else {
    $('input:checkbox:checked').each(function(){
      if($(this).attr('id')=="comCheck"){

      }else{
        $('div[id^=collapseThree]').collapse('hide');
      }
    })
    $('input[id^="thirdCheckOne"]').prop("checked", false);
    $('input[id$="Access"]').prop("checked", false);
  }
});
