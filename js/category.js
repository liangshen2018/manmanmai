


$(function () {
  
// 分类标题渲染

$.ajax({
  url:'http://127.0.0.1:9090/api/getcategorytitle',
  dataType:'json',
  success: function ( info ) {
    console.log(info);
    $('.cate_title').html(template('titleTmp',info))
  }
})

$('.cate_title').on('click','.titleLink',function () {
  
  var titleid = $(this).data('id')
  var that = this
  console.log($(this).next().length);
  if($(this).next().length == 0) {
    render()
  }else {
    $(that).parent().siblings().find('ul').slideUp()
    $(that).next().stop().slideToggle()
  }

  function render() {
    $.ajax({
      url:'http://127.0.0.1:9090/api/getcategory',
      dataType:'json',
      data:{titleid:titleid},
      success: function ( info ) {
        console.log( info );
        $(that).parent().append(template('listTmp',info))
        $(that).parent().siblings().find('ul').slideUp()
        $(that).next().stop().slideToggle()
        
      }
    })
  }



  return false
})




})