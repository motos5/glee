$(function () {

  $('.detalis-tabs__item').on('click', function(e){
    e.preventDefault();
    $('.detalis-tabs__item').removeClass('detalis-tabs__item--active');
    $(this).addClass('detalis-tabs__item--active');
    $('.detalis-tabs__content-item').removeClass('detalis-tabs__content-item--active');
    $($(this).attr('href')).addClass('detalis-tabs__content-item--active');
  });

// Slick слайдер====================================
	$('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.related__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:
			'<button type="button" class="slick-prev"><img src="images/icons/next-arrow.svg" alt="prew arrow"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="images/icons/prew-arrow.svg" alt="next arrow"></button>',
  });
// Slick слайдер====================================

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

    $('.filtr-style, .detalis-item__content-input').styler({
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