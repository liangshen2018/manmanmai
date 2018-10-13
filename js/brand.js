


$(function () {
  


  var productId= 0
  var brandtitleid =  getSearch('brandtitleid');
  var titlename =getSearch('titlename')
  titlename = titlename.replace('十大品牌','')

  console.log(titlename);
  
  console.log(brandtitleid);


  $('.nice').text(titlename)
  $('.paihang').text(titlename)
  $('.pinglun').text(titlename)
  
 $.ajax({
   url:'http://127.0.0.1:9090/api/getbrand',
   dataType:'json',
   data:{
    brandtitleid:brandtitleid
   },
   success:function ( info ) {
     console.log(info);
     $('#list').html(template('listTmp',info))
   }
 })



//  商品

$.ajax({
  url:'http://127.0.0.1:9090/api/getbrandproductlist',
  data:{
    brandtitleid:brandtitleid,
    pagesize:4
  },
  dataType:'json',
  success: function ( info ) {
    console.log(info);
    $('#product').html(template('tmpProduct',info))
    productid = info.result[0].productId
    
    
    img = info.result[0].productImg
    productName =info.result[0].productName
    // 评论

    $.ajax({
      url:'http://127.0.0.1:9090/api/getproductcom',
      data:{
        productid:productid
      },
      dataType:'json',
      success:function ( info ) {
        info.img = img
        info.productName = productName
        console.log(info);
        
        $('.pinglun_content').html(template('pinglunTmp',info))
      }
    })
  }
})



})