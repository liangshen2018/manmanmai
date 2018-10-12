
$(function () {
  var couponid = getSearch('couponid');
  var couponTitle = getSearch('couponTitle')
  console.log(couponTitle);
  
  $('.mmm-header .couponTitle').text(couponTitle)
 $.ajax({
   url:'http://127.0.0.1:9090/api/getcouponproduct',
   dataType:'json',
   data:{
    couponid:couponid
   },
   success: function ( info ) {
     console.log(info);
    $('#product').html(template('tmpProduct',info))
   }
 })

// 点击弹出轮播图遮罩层
 $('#product').on('click','.link',function () {
   console.log(1);

  $('#myModal').modal('show')


   return false
 })
 

})