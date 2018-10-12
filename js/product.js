


$(function () {
  var productid = getSearch('id');
  var brandName = getSearch('brandName')
  var productCom =getSearch('productCom')
  
  var categoryid;

  // 渲染上半部数据
  $.ajax({
    url:'http://127.0.0.1:9090/api/getproduct',
    data:{productid:productid},
    dataType:'json',
    success: function ( info ) {
      console.log(info);
      $('.product_content .table').html(info.result[0].bjShop)
      $('.product_content .tip p').html(info.result[0].productName)
      $('.product_content .tip .img').html(info.result[0].productImg)
      $('.product_content .nav .pinglun').text(productCom)
      categoryid = info.result[0].categoryId
      
      $.ajax({
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        data:{categoryid:categoryid},
        dataType:'json',
        success: function ( info ) {
          console.log(info);
          $('.product .title').html(template('titleTmp',info))
          $('.product .title .deail').text(brandName)
        }
      })
    }
  })

//  渲染评论数据

$.ajax({
  url:'http://127.0.0.1:9090/api/getproductcom',
  data:{productid:productid},
  dataType:'json',
  success:function ( info ) {
    console.log(info);
    $('.product_content .info').html(template('infoTmp',info))
  }
})
})