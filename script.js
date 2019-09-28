$(function() {
  // 「#login-show」要素に対するclickイベントを作成してください
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function(){
   $('#signup-modal').fadeIn();
 })

 $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

//ページ内リンク
$('#top-btn').click(function(){
    $('html, body').scrollTop(0);
  })
});
