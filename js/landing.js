// child popup start
document.addEventListener("alpine:init", () => {
    Alpine.store("toasts", {
        counter: 0,
        list: [],
        createToast(message, type = "info", image, timer = 2000) {
            document.getElementById(
                "flash-message-container"
            ).style.display = "block";
            const index = this.list.length;
            let totalVisible =
                this.list.filter((toast) => {
                    return toast.visible;
                }).length + 1;
            this.list.push({
                id: this.counter++,
                message,
                type,
                image,
                timeOut: timer * totalVisible,
                visible: true,
            });
            setTimeout(() => {
                this.destroyToast(index);
            }, timer * totalVisible);
        },
        destroyToast(index) {
            this.list[index].visible = false;
        },
    });

    Alpine.store("decreaments", {
        counter: 0,
        list: [],
        createDecreament(message, type = "info", timer = 4000) {
            document.getElementById(
                "flash-message-popup"
            ).style.display = "block";
            const index = this.list.length;
            let totalVisible =
                this.list.filter((decreament) => {
                    console.log(decreament);

                    return decreament.visible;
                }).length + 1;
            this.list.push({
                id: this.counter++,
                message,
                type,
                timeOut: timer * totalVisible,
                visible: true,
            });
            setTimeout(() => {
                this.destroydecreament(index);
            }, timer * totalVisible);
        },
        destroydecreament(index) {
            this.list[index].visible = false;
        },
    });
});
// decreament popup start


const container = document.querySelector(".containe");
const images = container.querySelectorAll("img");
const progressBar = container.querySelector(".progress-bar");
let currentIndex = 0;
let hoverInterval;
container.addEventListener("mouseover", () => {
    progressBar.style.width = "0";
    progressBar.style.transition = "width 9s linear";
    progressBar.style.width = "100%";
    hoverInterval = setInterval(() => {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }, 3000);
});
container.addEventListener("mouseout", () => {
    clearInterval(hoverInterval);
    images[currentIndex].style.opacity = 0;
    currentIndex = 0;
    images[currentIndex].style.opacity = 1;
    progressBar.style.transition = "none";
    progressBar.style.width = "0";
});
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const carouselVp = document.querySelector("#carousel-vp");
const cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselVpWidth = carouselVp.getBoundingClientRect().width;
let carouselInnerWidth = cCarouselInner.scrollWidth;
let leftValue = 0;
// Get width of a single item including margin
var style =
    document.querySelector(".Carousel-item").currentStyle ||
    window.getComputedStyle(
        document.querySelector(".Carousel-item")
    ),
    width = document.querySelector(".Carousel-item").offsetWidth, // or use style.width
    margin =
        parseFloat(style.marginLeft) +
        parseFloat(style.marginRight),
    padding =
        parseFloat(style.paddingLeft) +
        parseFloat(style.paddingRight),
    border =
        parseFloat(style.borderLeftWidth) +
        parseFloat(style.borderRightWidth);
const itemWidth = parseFloat(width + margin - padding + border);
const gap = parseFloat(getComputedStyle(cCarouselInner).gap);
const totalMovementSize = itemWidth + gap;
prev.addEventListener("click", () => {
    if (leftValue < 0) {
        leftValue += totalMovementSize;
        cCarouselInner.style.transform = `translateX(${leftValue}px)`;
        next.style.visibility = "visible";
        if (leftValue >= 0) {
            prev.style.visibility = "hidden";
        }
    }
});
next.addEventListener("click", () => {
    const maxLeftValue = carouselVpWidth - carouselInnerWidth;
    if (leftValue > maxLeftValue) {
        leftValue -= totalMovementSize;
        cCarouselInner.style.transform = `translateX(${leftValue}px)`;
        prev.style.visibility = "visible";
        if (leftValue <= maxLeftValue) {
            next.style.visibility = "hidden";
        }
    }
});
const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 1248px)");
mediaQuery510.addEventListener("change", handleMediaChange);
mediaQuery770.addEventListener("change", handleMediaChange);
function handleMediaChange() {
    // Adjust carousel settings if needed based on media queries
    carouselVpWidth = carouselVp.getBoundingClientRect().width;
    carouselInnerWidth = cCarouselInner.scrollWidth;
    // Handle any adjustments needed for the carousel on media query change
}