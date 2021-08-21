$(function(){

  /* HEADER */
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/ArrowLeft.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/ArrowRight.svg" alt=""></img>',
    asNavFor: '.slider-dotshead'
  });

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
   
    asNavFor: '.header__slider'
  });
/* /HEADER */

/* SURF */
  $('.serf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/ArrowLeft.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/ArrowRight.svg" alt=""></img>',
    asNavFor: '.slider-map'
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    asNavFor: '.serf-slider',
    focusOnSelect: true,
    infinite: false
  });
/* /SURF */



});

