

$(function () {
  
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcoupon',
    data:'json',
    success: function ( info ) {
      console.log(info);
      $('.coupon_nav').html(template('navTmp',info))
    }
  })


})