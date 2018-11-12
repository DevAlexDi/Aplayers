$(document).ready(function () {
   
    
    
    
    $('.column-projects__item').lightGallery({
        mode: 'lg-fade',
        fullScreen: true
    });
    $('.init-galary-2').lightGallery({
        mode: 'lg-fade',
        fullScreen: true
    });
    
     
    $('.flex-photos').lightGallery({
        mode: 'lg-fade',
        fullScreen: true
    });
    
    
    
    
    
    
    //slider
    
    $('.slider-project').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        fade: true,
        infinite: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
                fade: true,
                infinite: false
              }
            }
        ]
        
    });

    $('.slider-project').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide);
        
        if(currentSlide < nextSlide){
            
          
            
            if($(window).width() >= 991){
                
                $('.photos-wrapp').animate({
                    scrollTop: $('.photos-wrapp').scrollTop() + width_scroll
                }, 300,"linear", function() {
                    photosScrollTop = $('.photos-wrapp').scrollTop();
                });
                
            }
             else{
                console.log('11');
               
                $('.slider-nav').animate({
                    scrollLeft: $('.slider-nav').scrollLeft() + width_scroll
                }, 300,"linear", function() {
                    photosScrollTop = $('.photos-wrapp').scrollTop();
                });

               
            }    
                
                
            index += 1;



            $('.active-cube').css({
                top: (index * width_scroll) - width_scroll
            });
        }
        else{

            if($(window).width() >= 991){
               
                $('.photos-wrapp').animate({
                    scrollTop: $('.photos-wrapp').scrollTop() - width_scroll
                }, 300, "linear", function() {
                    photosScrollTop = $('.photos-wrapp').scrollTop();

                });

                
            }
            else{
                console.log('ok');
               
                $('.slider-nav').animate({
                    scrollLeft: $('.slider-nav').scrollLeft() - width_scroll
                }, 300, "linear", function() {
                    photosScrollTop = $('.photos-wrapp').scrollTop();

                });

               
            }
            
            index -= 1;

            $('.active-cube').css({
                top: (index * width_scroll) - width_scroll
            });
        }
        
    });
    
    
    
    var countOfSlides = 9;
    
    function checkCountSlides(){
        if($(window).width() <= 991 && $(window).width() > 767){
            countOfSlides = 6;
        }
        if($(window).width() <= 767){
            countOfSlides = 4;
        }
    }
    
    checkCountSlides();
    $(window).resize(function(){
        checkCountSlides();
        setScroll();
    });
    
    
    
    //scroll-proj
    
    var width_scroll = $('.slider-nav').width() / 9.5;
    
    
    function setScroll(){
        
        if($(window).width()>1280){
            width_scroll = $('.slider-nav').width() / 9.5;
        }else if($(window).width()<=1280 && $(window).width() > 768){
            width_scroll = 100;    
        }
        else{
            width_scroll = $('.slider-nav').width() / 3.33;
        }
        
        $('.photos-wrapp').css({
            'max-height': $('.slider-nav').width()
        });
        
        $('.slider-nav__slide').css({
            'width': width_scroll
        });
        
        $('.slider-nav .photos-wrapp').css({
            'width': width_scroll + 3
        });
        if($(window).width()< 991){
             $('.slider-nav').css({
            'min-height':  width_scroll + 5
        });
        }
        else{
             $('.slider-nav').css({
            'min-height':  width_scroll + 2
        });
        }
        
        $('.slider-nav .photos-wrapp').css({
            'transform': 'rotate(-90deg) translateY(-'+(width_scroll + 2)+'px)'
        });
        $('.active-cube').css({
             'height': width_scroll 
        });
        
    }
    
    setScroll();
   
    
    
    $('.ham-menu').click(function(){
        $('.xs-menu').addClass('showed');
    });
    
    $('.xs-menu__close').click(function(){
        $('.xs-menu').removeClass('showed');
    });
    
    
    
    
    var index = 1;
    
    $('.slider-nav__slide').click(function(){

        $('.slider-project').slick('slickGoTo',$(this).index() - 1);
        
        if($(this).index() > index){
            console.log('ok');
            $('.photos-wrapp').animate({
                scrollTop: $('.photos-wrapp').scrollTop() + width_scroll
            }, 300,"linear", function() {
                photosScrollTop = $('.photos-wrapp').scrollTop();
            });
            index = $(this).index();
        }
        else{
            $('.photos-wrapp').animate({
                scrollTop: $('.photos-wrapp').scrollTop() - width_scroll
            }, 300, "linear", function() {
                photosScrollTop = $('.photos-wrapp').scrollTop();
                
            });
            
            index = $(this).index();
        }
        $('.active-cube').css({
            top: ($(this).index() * width_scroll) - width_scroll
        });
        
    });
    
    
    
    //scroll on mousedown
    
   
    

    var curDown = false,
        curXPos = 0;
    var photosScrollTop = $('.photos-wrapp').scrollTop();

    var CountBeginLeft;
    var CountBeginLeftFlag = true;
    
    $(window).mousemove(function(m){
        if(curDown === true && $(window).width() >= 991){        
            var cur1 = m.pageX ;
            var cur2 = curXPos ;
            $('.photos-wrapp').scrollTop(photosScrollTop + ((cur1 - cur2)* -1)); 
        }
      });

      $(window).mousedown(function(m){
        if($(window).width() >= 991){
            curDown = true;
            curXPos = m.pageX;
        }
      });

      $(window).mouseup(function(){
          if($(window).width() >= 991){
            curDown = false;
            photosScrollTop = $('.photos-wrapp').scrollTop();
            CountBeginLeftFlag = true;
          }
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
