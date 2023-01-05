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

function AddBubbles() {
    const ColumLeft = document.createElement("div");
    const ColumRight = document.createElement("div");
    var bodyHeight = document.body.offsetHeight;

    // Method to set height about the total scroll document
    const setHeightCols = () => {
        setTimeout(() => {
            bodyHeight = document.body.offsetHeight;
            ColumLeft.style.height = bodyHeight + "px";
            ColumRight.style.height = bodyHeight + "px";
        }, 200);
    };

    // Listener if the viewport of device change
    window.addEventListener("resize", setHeightCols);

    // Add classes and other attributes for colums bubbles.
    ColumLeft.classList.add("colum-bubble", "left");
    ColumRight.classList.add("colum-bubble", "right");
    setHeightCols();

    // Append in the document
    [ColumLeft, ColumRight].forEach((elem) => document.body.append(elem));

    // Adding bubbles
    const bubbleSizes = ["lg", "md", "sm"];
    const iterations = 10;
    for (let i = 0; i < iterations; i++) {
        let bubble = document.createElement("span");
        let getRandomPosition = Math.floor(Math.random() * (100 - 0 + 1) + 0);
        let getSizeBubble = bubbleSizes[Math.floor(Math.random() * bubbleSizes.length)];

        bubble.classList.add(getSizeBubble);
        bubble.classList.add(i % 2 ? "light" : "dark");
        bubble.style.top = getRandomPosition + "%";

        if (i < iterations / 2) {
            ColumLeft.appendChild(bubble);
        } else {
            ColumRight.appendChild(bubble);
        }
    }
}

// Starting when document is ready
document.addEventListener("DOMContentLoaded", () => {
    SplideSlide();
    NavControl();
    AddBubbles();
});
