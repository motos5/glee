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

    $('.filtr-style').styler({
      selectSearch: false,
    });

    $('.catalog-content__btn').on('click', function(){
      $('.catalog-content__btn').removeClass('catalog-content__btn--active');
      $(this).addClass('catalog-content__btn--active');
    })

    $('.catalog-content__list').on('click', function () {
      $('.products__items').addClass('products__items--list');
      $('.products__item').addClass('products__item--list');
      $('.pagination').addClass('pagination--list');
    });
  
    $('.catalog-content__grid').on('click', function () {
      $('.products__items').removeClass('products__items--list');
      $('.products__item').removeClass('products__item--list');
      $('.pagination').removeClass('pagination--list');

    });

    $(".catalog-price__input").ionRangeSlider({
      type: "double",
      prefix: "$",
      step: 0.01,
      prettify_enabled: true,
      onStart: function (data){
        $('.catalog-price__span-left').text(data.from);
        $('.catalog-price__span-right').text(data.to);
      },
      onChange: function (data) {
        $('.catalog-price__span-left').text(data.from);
        $('.catalog-price__span-right').text(data.to);
      },
    });

    $(".star").rateYo({
      starWidth: "10px",
      normalFill: "#d6d6d6",
      ratedFill: "#fc0",
      spacing: "6px",
      readOnly: true,
      fullStar: true,
    });

  });