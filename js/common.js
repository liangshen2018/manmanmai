

$(function () {


  // 底部返回功能

  $('#top').click(function (e) {

    $('html,body').animate({
      scrollTop: 0
    }, 500)

    return false;
  })




})



function getSearch(k) {

  var search = decodeURI(location.search)
  search = search.slice(1)
  var arr = search.split('&')
  var obj = {}
  arr.forEach(function (v, i) {
    var key = v.split('=')[0]
    var value = v.split('=')[1]
    obj[key] = value
  })


  return obj[k]
}



//分页
// pageTotal 总页数
// ele 选择器
// render 函数  render(currentPage)
// pageSize 开始显示第几页 默认 第一页
function page(pageTotal, ele,render,currentPage) {

  
   first()

   function first() {
       
      currentPage = currentPage || 1



      if ($(ele).find('option').length == 0) {
        var htmlStr = ''

        for (var i = 1; i <= pageTotal; i++) {
          htmlStr += '<option value=' + i + '>' + i + '/' + pageTotal + '</option>'
        }
          $(ele).find('select').html(htmlStr)
          $(ele).find('option')[currentPage - 1].selected = true
          render(currentPage)


           //  上一页
          $(ele).find('.prev').click(function () {
            if (currentPage == 1) {
              return;
            }
            console.log('上一页');


            currentPage--

            render(currentPage)
            $(ele).find('option')[currentPage - 1].selected = true


            $(window).scrollTop(0)
            
          })

        // 下一页
          $(ele).find('.next').click(function () {


            if (currentPage == pageTotal) {
              return;
            }

            currentPage++
            console.log('下一页');


            render(currentPage)
            $(ele).find('option')[currentPage - 1].selected = true;
            $(window).scrollTop(0)
          })

        //  选择页
        $(ele).find('select').change(function () {

          
          currentPage  =  $(this).val()
          render(currentPage)
          $(window).scrollTop(0)
        })



      }
      
    
   }

}