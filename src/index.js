// import "alpinejs/dist/cdn.js";
// import "materialize-css/dist/js/materialize.js";
import "materialize-css/js/waves.js";
import Splide from "@splidejs/splide";

// Set fuction to run Splice Carousel, because Materialize Carousel is a piece of shit.
function SplideSlide() {
    const options = {
        perPage: 3,
        type: "loop",
        arrows: false,
        gap: 10,
        focus: "center",
        autoplay: true,
    };

    const splideOne = new Splide(".splide", options);

    splideOne.mount();
}

// Set Materialize Carousel
function mCarousel() {
    const Elem = document.querySelector(".carousel");

    // Init carousel
    M.Carousel.init(Elem, {
        dist: 0,
        numVisible: 4,
    });

    // Autoplay carousel
    const timeout = 5000;
    let autoplay = true;
    setInterval(() => {
        if (autoplay) M.Carousel.getInstance(Elem).next();
    }, timeout);
    Elem.addEventListener("mouseover", () => {
        autoplay = false;
    });
    Elem.addEventListener("mouseout", () => {
        autoplay = true;
    });
}

// Starting when document is ready
document.addEventListener("DOMContentLoaded", () => {
    SplideSlide();
});
