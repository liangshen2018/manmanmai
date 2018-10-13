

$(function () {
  
  $.ajax({
    url:'http://127.0.0.1:9090/api/getsitenav',
    dataType:'json',
    success: function ( info ) {
      console.log(info);
      $('.site_nav').html(template('tmp',info))
    }
  })



})