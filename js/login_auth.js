var user_name = $('input[name="username"]');
var pass_word = $('input[name="password"]');
var user_warn = $('.username_warn');
var pass_warn = $('.password_warn');


$("#btnLogin").click(function(event){
  if(user_name.val()==''){
    event.preventDefault();
    user_warn.html('正しく入力してください。');
  }else{
    user_warn.html('');
  }
  if(pass_word.val()==''){
    event.preventDefault();
    pass_warn.html('正しく入力してください。').addClass("");
  }else{
    pass_warn.html('');
  }
})

user_name.click(function(){
  user_warn.html('');
})

pass_word.click(function(){
  pass_warn.html('');
})
