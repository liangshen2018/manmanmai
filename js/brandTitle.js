


$(function () {
  
  // 标题数据

  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrandtitle',
    dataType:'json',
    success: function ( info ) {
      console.log(info);
      $('.brandTitle').html(template('tmp',info))
    }
  })
 



})