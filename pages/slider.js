const container = document.getElementById("myCarousel");
const container2 = document.getElementById("myCarousel_right");

// const options = { infinite: false };
const options = {
  Autoplay: {
    timeout: 15000,
    showProgress:false,
  },
    breakpoints: {
      "(min-width: 768px)": {
        classNames: {
          container: "f-carousel md",
        },
      },
      "(min-width: 1024px)": {
        classNames: {
          container: "f-carousel lg",
        },
      },
      "(min-width: 1280px)": {
        classNames: {
          container: "f-carousel xl",
        },
      },
    },
  };
new Carousel(container, options,{ Autoplay });
new Carousel(container2, options,{ Autoplay });

