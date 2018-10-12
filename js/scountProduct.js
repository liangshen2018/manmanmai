
$(function () {
  
  var productid = getSearch('productid');

  $.ajax({
    url:'http://127.0.0.1:9090/api/getdiscountproduct',
    data:{productid:productid},
    dataType:'json',
    success:function ( info ) {
      console.log(info);
      $('.product_main .jieshao').html(template('jsTmp',info))
      $('.product_main .pinglun').html(info.result[0].productComment)
      console.log(info.result[0].productComment);
      
    }
  })


})