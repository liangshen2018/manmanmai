
// 导航渲染
;(function () {
  

  var xhr = new XMLHttpRequest();

  xhr.open('get','http://127.0.0.1:9090/api/getindexmenu');

  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = xhr.responseText
      res = JSON.parse(res)
      console.log(res);
      
      $('#menu').html(template('tmp',res))
      $('#menu .img').each(function (i,ele) {
        $(this).html($(this).text())
      })
    }
  }






})();

// 产品渲染
$(function () {
   
  $.ajax({
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType:'json',
    success: function (info) {
      console.log(info);
      
      $('#product').html(template('tmpProduct',info))
      $('#product .info_1 .left').each(function (i,ele) {
        $(this).html($(this).text())
      })
    }
  })



})

// 更多
$(function () {
  


    $('#menu').on('click','li:nth-child(8)',function () {
      $(this).nextAll().stop().slideToggle()
      return false
    })
  
  

})