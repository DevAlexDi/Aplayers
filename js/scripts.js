$(document).ready(function () {
   
    //slider
    
    $('.slider-project').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        fade: true
        
    });

    
    
    let countOfSlides = 9;
    
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
    
    var width_scroll = $('.slider-nav').width() / 9;
    
    
    function setScroll(){
        
        if($(window).width()>1280){
            width_scroll = $('.slider-nav').width() / 9;
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
        $('.slider-nav').css({
            'min-height':  width_scroll
        });
        $('.slider-nav .photos-wrapp').css({
            'width': width_scroll + 2
        });
        
        $('.slider-nav .photos-wrapp').css({
            'transform': 'rotate(-90deg) translateY(-'+(width_scroll + 2)+'px)'
        })
        
    }
    
    setScroll();
   
   
    
    
    
    
    
    
    
//    const slider = $(".slider-nav");
//    slider.slick({
//        dots: false,
//        arrows:false,
//		slidesToShow: 9,
//        slidesToScroll: 1,
//		infinite: false,
//        speed: 300,
//        responsive: [
//            {
//              breakpoint: 992,
//              settings: {
//                slidesToShow: 6,
//                slidesToScroll: 1
//                
//              }
//            },
//            {
//              breakpoint: 767,
//              settings: {
//                slidesToShow: 4,
//                slidesToScroll: 1
//                
//              }
//            }
//        ]
//    });
//
//    slider.on('wheel', (function(e) {
//      e.preventDefault();
//
//      if (e.originalEvent.deltaY < 0) {
//        if(slider.slick('slickCurrentSlide') != 0){
//             $(this).slick('slickPrev');
//        }
//        
//      } else {
//        
//          if(slider.slick('slickCurrentSlide') + countOfSlides < $('.slider-nav__slide').length){
//              $(this).slick('slickNext');
//          }
//           
//      }
//    }));
   
    
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
    
    
    
    //галерейка
     $('.flex-photos').each(function () {
        var pic = $(this),
            getItems = function () {
                var items = [];
                pic.find('.flex-photos__item').each(function () {
                    var href = $(this).attr('data-hreff'),
                        size = $(this).data('size').split('x'),
                        width = size[0],
                        height = size[1];
                    var item = {
                        src: href,
                        w: width,
                        h: height
                    }
                    items.push(item);
                });
                return items;
            }
        var items = getItems();
        var pswp = $('.pswp')[0];
        pic.on('click', '.flex-photos__item', function (event) {
            event.preventDefault();
            var index = $(this).index();
            var options = {
                index: parseInt(index),
                bgOpacity: 1,
                showHideOpacity: true
            }
            // Initialize PhotoSwipe
            options.history = false;
            options.bgOpacity = 0.7;
            console.log($(this));
            let itemClicked = $(this)[0];
            options.getThumbBoundsFn = function (index) {
                var thumbnail = itemClicked;
                var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                var rect = thumbnail.getBoundingClientRect();
                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            }
            console.log(options);
            var lightBox = new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
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
