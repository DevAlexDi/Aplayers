$(document).ready(function () {
   
    //slider
    
    $('.slider-project').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        fade: true
    });
//    $('.nav-slider').slick({
//      slidesToShow: 4,
//      slidesToScroll: 1,
//      asNavFor: '.for-slider',
//      focusOnSelect: true,
//        vertical:true
//    });
    let countOfSlides = 9;
    const slider = $(".slider-nav");
    slider.slick({
        dots: false,
        arrows:false,
		slidesToShow: 9,
        slidesToScroll: 1,
		infinite: false,
        speed: 300
    });

    slider.on('wheel', (function(e) {
      e.preventDefault();

      if (e.originalEvent.deltaY < 0) {
        if(slider.slick('slickCurrentSlide') != 0){
             $(this).slick('slickPrev');
        }
        
      } else {
        
          if(slider.slick('slickCurrentSlide') + countOfSlides < $('.slider-nav__slide').length){
              $(this).slick('slickNext');
          }
           
      }
    }));
   
    
    $('.ham-menu').click(function(){
        $('.xs-menu').addClass('showed');
    });
    
    $('.xs-menu__close').click(function(){
        $('.xs-menu').removeClass('showed');
    });
    
    
    $('.slider-nav__slide').click(function(){
        $('.slider-nav__slide').removeClass('active-sl');
        $(this).addClass('active-sl');
        
        $('.slider-project').slick('slickGoTo',$(this).index());
        
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
