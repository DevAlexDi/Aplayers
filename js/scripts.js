$(document).ready(function () {
   
    
     var jsonGalaryBaner = [
        [
            {
                src: 'img/main-baner.jpg',
                w: 1860,
                h: 783,
                title: 'Some Title 1'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ]
    ]
    
    var jsonGalary = [
        [
            {
                src: 'img/1.jpg',
                w: 442,
                h: 370,
                title: 'Some Title 1'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/2.jpg',
                w: 443,
                h: 478,
                title: 'Some Title 1'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/3.jpg',
                w: 442,
                h: 534,
                title: 'Some Title Some Title'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/4.jpg',
                w: 2333,
                h: 1555,
                title: 'Some TitleSome TitleSome Title'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/3.jpg',
                w: 442,
                h: 534,
                title: 'Some Title Some Title'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/2.jpg',
                w: 443,
                h: 478,
                title: 'Some Title 1'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/4.jpg',
                w: 2333,
                h: 1555,
                title: 'Some TitleSome TitleSome Title'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/1.jpg',
                w: 442,
                h: 370,
                title: 'Some Title 1'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/4.jpg',
                w: 2333,
                h: 1555,
                title: 'Some TitleSome TitleSome Title'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/3.jpg',
                w: 442,
                h: 534,
                title: 'Some Title Some Title'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/2.jpg',
                w: 443,
                h: 478,
                title: 'Some Title 1'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/3.jpg',
                w: 442,
                h: 534,
                title: 'Some Title Some Title'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/1.jpg',
                w: 442,
                h: 370,
                title: 'Some Title 1'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/4.jpg',
                w: 2333,
                h: 1555,
                title: 'Some TitleSome TitleSome Title'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ],
        [
            {
                src: 'img/3.jpg',
                w: 442,
                h: 534,
                title: 'Some Title Some Title'
            },
            {
                src: 'img/11.jpg',
                w: 1600,
                h: 1600,
                title: 'Some Title 2'
            },
            {
                src: 'img/12.jpg',
                w: 1600,
                h: 1187,
                title: 'Some Title 3'
            },
            {
                src: 'img/13.jpg',
                w: 989,
                h: 1400,
                title: 'Some Title 4'
            }
        ]
    ];
    
    
    
    //галерейка Главная
    
    
    $('.column-projects__item').click(function(e){
        event.preventDefault();
        var pswp = $('.pswp')[0];
        var index = $(this).index();
        var options = {
            index: 0,
            bgOpacity: 1,
            showHideOpacity: true
        }
        options.history = false;
        options.bgOpacity = 0.7;

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

        var lightBox = new PhotoSwipe(pswp, PhotoSwipeUI_Default, jsonGalary[index], options);
        lightBox.init();
    });
    

    

    
    
    
    //галерейка Главная банер
    
    
     $('.main-baner').click(function(e){
        event.preventDefault();
        var pswp = $('.pswp')[0];
        var index = $(this).index();
        var options = {
            index: 0,
            bgOpacity: 1,
            showHideOpacity: true
        }
        options.history = false;
        options.bgOpacity = 0.7;

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

        var lightBox = new PhotoSwipe(pswp, PhotoSwipeUI_Default, jsonGalaryBaner[index], options);
        lightBox.init();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
        $('.slider-nav').css({
            'min-height':  width_scroll + 2
        });
        $('.slider-nav .photos-wrapp').css({
            'width': width_scroll + 3
        });
        
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
//        $('.slider-nav__slide').removeClass('active-sl');
//        $(this).addClass('active-sl');
        

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
            
            
      
            //console.log( $('.photos-wrapp').scrollTop() + ((cur1 - cur2)* -1));
            
//            if(cur1 >= $('.slider-nav').width()){
//                cur1 = 
//            }

            
//            if((cur1 - $('.slider-nav').offset().left) < 0 || 
//                ($('.photos-wrapp').scrollTop() + $('.slider-nav').width()) >= (($('.slider-nav__slide').width() + 2.2) * $('.slider-nav__slide').length)){
//                
//                if(CountBeginLeftFlag){
//                    CountBeginLeft = cur1;
//                    
//                    CountBeginLeftFlag = false;
//                }
//                
//                
//                console.log(cur1); 
//                console.log(cur2);
//               
//                $('.photos-wrapp').css({
//                   left: (cur1 - CountBeginLeft) / 2
//                }) 
//            }
//            else{
//                $('.photos-wrapp').css({
//                   left: 0
//                }) 
//            }
     


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
//            $('.photos-wrapp').animate({
//                left: "0px"
//            }, 500);
          }
      });
  
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //галерейка проект
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
