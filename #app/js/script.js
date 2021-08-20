$(function(){

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/ArrowLeft.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/ArrowRight.svg" alt=""></img>',
    asNavFor: '.slider-dots'
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
   
    asNavFor: '.header__slider'
  });

  $('.serf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/ArrowLeft.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/ArrowRight.svg" alt=""></img>'
  });

});

