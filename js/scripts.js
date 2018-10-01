$(document).ready(function () {
   
    //slider
    
//     $('.for-slider').slick({
//      slidesToShow: 1,
//      slidesToScroll: 1,
//      arrows: false,
//      fade: true,
//      asNavFor: '.nav-slider'
//    });
//    $('.nav-slider').slick({
//      slidesToShow: 4,
//      slidesToScroll: 1,
//      asNavFor: '.for-slider',
//      focusOnSelect: true,
//        vertical:true
//    });
    
   
    
    
    $('.ham-menu').click(function(){
        $('.xs-menu').addClass('showed');
    });
    
    $('.xs-menu__close').click(function(){
        $('.xs-menu').removeClass('showed');
    });
    
    
   
    
    
    
    
    
    
    
    
});

$(window).load(function() {
    $('.column-projects').masonry({
      itemSelector: '.column-projects__item'
    });
     var win = $(window);
    

    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .column-projects__item").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).attr("data-anim", "true") : true;

        });
    }
    
    scrFunc();
    
    $(window).scroll(function(){
         scrFunc();
        
    });
  
    
    
});
