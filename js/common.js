

$(function () {
  
 
  // 底部返回功能

  $('#top').click(function (e) {
     
     $('html,body').animate({
       scrollTop:0
     },500)

     return false;
  })




})



function getSearch( k ) {

  var search = decodeURI(location.search)
  search = search.slice(1)
  var arr  = search.split('&')
  var obj = {}
  arr.forEach(function ( v, i ) {
    var key = v.split('=')[0]
    var value = v.split('=')[1]
    obj[key] = value
  })


  return obj[k]
}