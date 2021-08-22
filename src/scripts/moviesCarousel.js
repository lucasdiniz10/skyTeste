$('.movies-list').slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 3,
  centerMode: true,
  /* prevArrow: $('#arrow-prev'),
  nextArrow: $('#arrow-next'), */

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 330,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    }
  ]
});