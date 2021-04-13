$(function () {
	$('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    const mixin1 = document.querySelector('.products__items');
    const mixin2 = document.querySelector('.design-new__items');

    if(mixin1){
      mixitup('.products__items', {
        selectors: {
          control: '.filter1'
        }
      })
    }
    if(mixin2){
      mixitup('.design-new__items', {
        selectors: {
          control: '.filter2'
        }
      })
    }
      
  });