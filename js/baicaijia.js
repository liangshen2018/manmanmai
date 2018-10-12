



$(function () {
  

  // 导航数据渲染

  $.ajax({
    url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
    dataType:'json',
    success: function ( info ) {
      console.log(info);
     if(info.result) {
      $('.lgNav').html(template('navTmp',info))
    
      
      $('.lgNav li:first-child').trigger('click');

      // 动态设置ul宽度
      var $list = $('.lgNav li')
      console.log($list);
      
      var width = $list.eq(0).width() * $list.length
      console.log(width);
      
      $('.lgNav ul ').width(width)
        // 默认配置的是纵向的区域滚动
      // scrollY: true   默认值
      // scrollX: false  默认值
      new IScroll(".lgNav", {
        scrollX: true,   // 设置是否进行水平方向的区域滚动
        scrollY: true   // 设置是否进行垂直方向的区域滚动
      });

      
     }
    }
  })

  
  $('.lgNav').on('click','li',function () {
    
    var id = $(this).data('id')
    $(this).find('a').addClass('current').end().siblings().find('a').removeClass('current')
    
    $.ajax({
      url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
      data:{titleid:id},
      dataType:'json',
      success: function ( info ) {
        console.log(info);
        $('#product').html(template('proTmp',info))
      }
    })

  })


})