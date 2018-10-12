

$(function () {
  

  var categoryid = getSearch('id')
 
  var currentPageid = 1

  $.ajax({
    url:'http://127.0.0.1:9090/api/getcategorybyid',
    data:{categoryid:categoryid},
    dataType:'json',
    success: function ( info ) {
      console.log(info);
      $('.cate_list .title').html(template('titleTmp',info))
    }
  })

  $.ajax({
    url:'http://127.0.0.1:9090/api/getproductlist',
    data:{
      categoryid:categoryid,
      pageid:currentPageid
    },
    dataType:'json',
    success: function ( info ) {
      console.log(info );
      $('.product').html(template('proTmp',info));
      $('.product .left').each(function (i,ele) {
        $(this).html($(this).text())
      })
    }
  })

})