


$(function () {


var shopid = 0;
var areaid = 0;

//  店铺渲染
$.ajax({
  url:'http://127.0.0.1:9090/api/getgsshop',
  dataType:'json',
  success: function ( info ) {
    console.log(info);
    $('#info_1').html(template('navTmp_1',info))
  }
}) 



// 区域渲染
 $.ajax({
   url:'http://127.0.0.1:9090/api/getgsshoparea',
   dataType:'json',
   success: function ( info ) {
     console.log(info);
    $('#info_2').html(template('navTmp_2',info))
     
   }
 })


 $('.nav_title').on('click','a',function () {
   
   $(this).next().stop().toggle().parent().siblings().find('.nav_info').hide()


 })

 $('#info_1').on('click','li',function () {
   
   shopid = $(this).data('shopid')
   var txt = $(this).text()
   
   $(this).parent().prev().text(txt)
   $(this).parent().hide()
   render()

 })
 
 $('#info_2').on('click','li',function () {
   
  areaid = $(this).data('areaid')

  var txt = $(this).text().substr(0,2)
  
  $(this).parent().prev().text(txt)
  $(this).parent().hide()
  render()

})



// 产品渲染
render()
 function render() {
   
   $.ajax({
     url:'http://127.0.0.1:9090/api/getgsproduct',
     data:{
       shopid:shopid,
       areaid:areaid
     },
     dataType:'json',
     success: function ( info ) {
       console.log(info);
       $('.product_content').html(template('proTmp',info))
     }
   })

 }




})