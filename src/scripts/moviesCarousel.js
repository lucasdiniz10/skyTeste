$.when(
  $.getJSON("https://sky-frontend.herokuapp.com/movies"),
  $.ready
).done(function (data) {
  const response = data[0].contents;
  const movies = response.filter(movie => movie.mediaType === "MOVIE");
  const series = response.filter(movie => movie.mediaType === "SERIE");
  console.log(movies, series);

  $.each(response, function (index, item) {
    $('.movies-list').prepend(`
    <div class="movie">
      <button type="button">
        <em class="fas fa-lock"></em>
      </button>
      <img id="movie-cover"
        src="${item.images[0].url}"
        alt="${item.title}"
        title="${item.title}"
      />
    </div>
  `)
  });
  sliderInit();
});

function sliderInit() {
  $('.movies-list').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    centerMode: false,
    prevArrow: $('#ar-prev'),
    nextArrow: $('#ar-next'),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 612,
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
}