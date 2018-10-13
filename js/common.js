

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
function page(pageTotal, ele,render) {



  var htmlStr = ''

  if ($(ele).find('option').length == 0) {

    for (var i = 1; i <= pageTotal; i++) {
      htmlStr += '<option value=' + i + '>' + i + '/' + pageTotal + '</option>'
    }
    $(ele).find('select').html(htmlStr)

    currentPage = 1


  }




  console.log(currentPage);



  $(ele).find('.prev').click(function () {
    if (currentPage == 1) {
      return;
    }
    console.log('上一页');


    currentPage--

    render(currentPage)
    $(ele).find('option')[currentPage - 1].selected = true
  })

  $(ele).find('.next').click(function () {


    if (currentPage == pageTotal) {
      return;
    }

    currentPage++
    console.log('下一页');


    render(currentPage)
    $(ele).find('option')[currentPage - 1].selected = true;
    return false;
  })
}