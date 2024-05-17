const container = document.getElementById("myCarousel");
// const options = { infinite: false };
const options = {
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
new Carousel(container, options);