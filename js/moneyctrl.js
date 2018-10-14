

$(function () {
  

  var currenPage = 1;



  render(currenPage) 
  
  function render(currenPage) {
    $.ajax({
      url:'http://127.0.0.1:9090/api/getmoneyctrl',
      data:{pageid:currenPage-1},
      dataType:'json',
      success: function ( info ) {
        console.log(info);
        $('#product').html(template('proTmp',info))
        var pageTotal = Math.ceil(info.totalCount / info.pagesize)
        page(pageTotal, '#page',render)
      }
    })
  }


})