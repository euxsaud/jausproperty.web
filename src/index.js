// import "alpinejs/dist/cdn.js";
// import "materialize-css/dist/js/materialize.js";
import "materialize-css/js/waves.js";
import Splide from "@splidejs/splide";

// Set fuction to run Splice Carousel, because Materialize Carousel is a piece of shit.
function SplideSlide() {
    const options = {
        perPage: 3,
        type: "loop",
        arrows: true,
        gap: 10,
        focus: "center",
        autoplay: true,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 3,
            },
            500: {
                perPage: 1,
            },
        },
    };

    const splideOne = new Splide(".splide", options);

    splideOne.mount();
}

function NavControl() {
    const Nav = document.querySelector("#nav-site");
    const Button = document.createElement("button");
    const Links = Nav.querySelector(".link-list");

    // Create button trigger nav
    Button.classList.add("btn-nav-trigger", "waves-effect");
    Button.innerHTML = '<i class="material-icons">menu</i>';
    Nav.appendChild(Button);

    // Create layout when the nav is open and semi-hide site.
    const Layout = document.createElement("div");
    Layout.classList.add("layout-nav");
    document.body.appendChild(Layout);

    // Function to hide or show nav depents their status.
    const toggleNav = () => {
        if (window.innerWidth < 600) {
            if (Nav.classList.contains("hide-nav")) {
                Nav.classList.remove("hide-nav");
                Button.classList.add("active");
                Layout.classList.add("active");
                Button.querySelector("i").textContent = "clear";
            } else {
                Nav.classList.add("hide-nav");
                Button.classList.remove("active");
                Layout.classList.remove("active");
                Button.querySelector("i").textContent = "menu";
            }
        }
    };

    Nav.classList.add("hide-nav");
    Button.addEventListener("click", toggleNav);
    Links.addEventListener("click", () => setTimeout(toggleNav, 200));

    document.body.addEventListener("click", (event) => {
        let Target = event.target;
        let parents = [];

        while (Target.parentNode && Target.parentNode.nodeName.toLowerCase() !== "body") {
            parents.push(Target);
            Target = Target.parentNode;
        }

        if (!parents.some((elem) => elem.id === "nav-site") && !Nav.classList.contains("hide-nav")) toggleNav();
    });
}

// Starting when document is ready
document.addEventListener("DOMContentLoaded", () => {
    SplideSlide();
    NavControl();
});
