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
    

    $('.column-projects').masonry({
      itemSelector: '.column-projects__item'

    });
});
