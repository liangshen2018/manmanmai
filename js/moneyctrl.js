

$(function () {
  

  var pageid = 1

  $.ajax({
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    data:{pageid:pageid},
    dataType:'json',
    success: function ( info ) {
      console.log(info);
      $('#product').html(template('proTmp',info))
    }
  })


})