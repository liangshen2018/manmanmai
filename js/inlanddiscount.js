

$(function () {
  
  $.ajax({
    url:'http://127.0.0.1:9090/api/getinlanddiscount',
    dataType:'json',
    success: function ( info ) {
      console.log(info);
      
      var arr = info.result
      
      $('.product_content ul').html(template('proTmp',{result:arr.splice(0,6)}));

      // window.addEventListener('scroll')
      $(window).scroll(function (e) {
           
        var h =  $(document).height() - $(this).height()-$(this).scrollTop()

        console.log(h);
        
        if(h<100) {

           $('.product_content ul').append(template('proTmp',{result:arr.splice(0,4)}));
          
        }  
                  
      })
    }
  })
  


})