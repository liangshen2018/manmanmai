

$(function () {
  

  var categoryid = getSearch('categoryid')
 


  $.ajax({
    url:'http://127.0.0.1:9090/api/getcategorybyid',
    data:{categoryid:categoryid},
    dataType:'json',
    success: function ( info ) {
      console.log(info);
      $('.cate_list .title').html(template('titleTmp',info))
    }
  })



  render()

  function render (currentPage) {
    $.ajax({
      url:'http://127.0.0.1:9090/api/getproductlist',
      data:{
        categoryid:categoryid,
        pageid:currentPage||1
      },
      dataType:'json',
      success: function ( info ) {
        console.log(info );
        $('.product').html(template('proTmp',info));
        $('.product .left').each(function (i,ele) {
          $(this).html($(this).text())
        })

        pageTotal = Math.ceil(info.totalCount / info.pagesize)  
        page(pageTotal,'#page',render)
  
      }
    })
  
  }
})