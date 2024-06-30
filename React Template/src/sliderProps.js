function Arrow({ className, extraClass, onClick, icon }) {
  return (
    <button className={`${className}  ${extraClass}`} onClick={onClick}>
      <i className={icon}></i>
    </button>
  );
}

export const projectSliderActive = {
  infinite: true,
  arrows: true,
  dots: false,
  fade: true,
  autoplay: true,
  prevArrow: <Arrow icon={"fal fa-angle-left"} extraClass={"prev-arrow"} />,
  nextArrow: <Arrow icon={"fal fa-angle-right"} extraClass={"next-arrow"} />,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  slidesToScroll: 1,
  slidesToShow: 1,
};

export const testimonialSlider = {
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: false,
  speed: 400,
  arrows: false,
  dots: true,
  loop: true,
  focusOnSelect: true,
  autoplay: false,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const mainSliderActive = {
  infinite: true,
  arrows: true,
  dots: false,
  fade: true,
  autoplay: true,
  prevArrow: <Arrow icon={"fal fa-angle-left"} extraClass={"prev-arrow"} />,
  nextArrow: <Arrow icon={"fal fa-angle-right"} extraClass={"next-arrow"} />,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  slidesToScroll: 1,
  slidesToShow: 1,
};

export const serviceThreeSlider = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  speed: 400,
  arrows: false,
  dots: true,
  focusOnSelect: true,
  autoplay: false,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const testimonialThreeSlider = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  speed: 400,
  arrows: false,
  dots: true,
  focusOnSelect: true,
  autoplay: false,
  autoplaySpeed: 5000,
};

export const sliderTwoActive = {
  infinite: true,
  arrows: false,
  dots: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  slidesToScroll: 1,
  slidesToShow: 1,
};

export const servicesFiveActive = {
  dots: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  speed: 1000,
  focusOnSelect: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const projectThreeActive = {
  dots: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: true,
  speed: 1000,
  variableWidth: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <Arrow icon={"fal fa-angle-left"} extraClass={"prev-arrow"} />,
  nextArrow: <Arrow icon={"fal fa-angle-right"} extraClass={"next-arrow"} />,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const relatedProductSlider = {
  dots: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  speed: 1000,
  focusOnSelect: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
