$(document).ready(function(){

  $(window).scroll(function(){
    var top = $(document).scrollTop()
    if(top > 500){
      $('.arroy-scroll-top').fadeIn(1000)
    }else{
      $('.arroy-scroll-top').fadeOut(1000)
    }
  })
  
  $('.arroy-scroll-top').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
  })
})
