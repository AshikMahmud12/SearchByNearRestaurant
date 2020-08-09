

$("#owlCarousel,#owlCarousel2").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: 1000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});
$(function () {
    $('.sliderC').slick({
        dots: false,
        infinite: true,
       nav:false,
        autoplay: true,
      autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        
        ]
      });
    });
    