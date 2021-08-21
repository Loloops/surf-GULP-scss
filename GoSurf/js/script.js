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
  $('.holder__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/ArrowLeft.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/ArrowRight.svg" alt=""></img>'
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep/Plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/sleep/Minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });



    $('.quantity-button').on('click', function(){
      var parents = $(this).parents('.holder-slider__info');

      let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();

      $('.summ', parents).html('$' + summ);

    });

    $('.quantity').each(function() {

      var parents = $(this).parents('.holder-slider__info');
      
      let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
      
       $('.summ', parents).html('$' + summ);
      
      });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) *  $('.summ').data('guests');

    $('.summ').html('$' + summ);

    $('.surfboard-box__circle').on('click', function(){
      $(this).toggleClass('active')
    });

    $('.shop__slider').slick({
      infinite: true,
      fade: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/ArrowLeft.svg" alt=""></img>',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/ArrowRight.svg" alt=""></img>'

    });

});

