// product details js 
const imgs = document.querySelectorAll('.img');
const mainImage = document.getElementById('main-image');

imgs.forEach(img => {
    img.addEventListener('click', function () {
        const imgSrc = this.querySelector('img').src;
        mainImage.src = imgSrc;

        // Remove active class from all images
        imgs.forEach(img => img.classList.remove('active'));

        // Add active class to clicked image
        img.classList.add('active');

        mainImage.classList.add('main-image');
        setTimeout(function () {
            mainImage.classList.remove('main-image');
        }, 500);

    });
});

// product image silder js 
const productImgsImg = document.querySelectorAll('.product-img img');
const productImgs = document.querySelectorAll('.product-img');
const productPrevBtn = document.getElementById('product-prev-btn');
const productNextBtn = document.getElementById('product-next-btn');
// console.log(productImgs.length);
let productImgId = 0;
let productImgWidth = document.querySelector('.product-main-image img:first-child').clientWidth;

productImgsImg.forEach((product => {
    product.addEventListener('click', function () {
        productImgId = product.dataset.id;
        console.log(productImgId);

        productImgs.forEach((productImg) => {
            productImg.classList.remove('product-img-active');
        });
        product.parentElement.classList.add('product-img-active');
        updateProductImage();
    })
}));

productPrevBtn.addEventListener('click', function () {
    if (productImgId > 0) {
        productImgId--;
        updateProductImage();
    }
});

productNextBtn.addEventListener('click', function () {
    if (productImgId < productImgs.length - 1) {
        productImgId++;
        updateProductImage();
    }
});

function updateProductImage() {
    let rightSlide = productImgId * productImgWidth;
    document.querySelector('.product-main-image').style.transform = `translateX(${-rightSlide}px)`;

    productImgs.forEach((productImg) => {
        productImg.classList.remove('product-img-active');
    });
    productImgs[productImgId].classList.add('product-img-active');
    disabledPrevButton();
    disabledNextButton();
}

function disabledPrevButton() {
    if (productImgId <= 0) {
        productPrevBtn.disabled = true;
    }
    else {
        productPrevBtn.disabled = false;
    }
}

function disabledNextButton() {
    if (productImgId >= productImgs.length - 1) {
        productNextBtn.disabled = true;
    }
    else if (productImgId < productImgs.length - 1) {
        productNextBtn.disabled = false;
    }
}

document.querySelectorAll('.product-zoom').forEach(elem => {
    let x, y, width, height;
    elem.onmouseenter = () => {
        const size = elem.getBoundingClientRect();
        x = size.x;
        y = size.y;
        width = size.width;
        height = size.height;
    };

    elem.onmousemove = e => {
        const horizontal = (e.clientX - x) / width * 100;
        const vertical = (e.clientY - y) / height * 100;

        elem.style.setProperty('--x', horizontal + '%');
        elem.style.setProperty('--y', vertical + '%');
    };
});


// reviews slider 
const number = document.querySelectorAll('.number');
const review = document.querySelectorAll('.review');
const reviewPrevBtn = document.getElementById('reviewPrevBtn');
const reviewNextBtn = document.getElementById('reviewNextBtn');
// console.log(number);
let numberId = 0;

number.forEach((num => {
    num.addEventListener('click', function () {
        numberId = num.dataset.id;
        updateReview();
    });
}));

function updateReview() {
    number.forEach((numbers) => {
        numbers.classList.remove('number-active');
    });
    number[numberId].classList.add('number-active');
    review.forEach((reviews) => {
        reviews.classList.remove('review-active');
    });
    review[numberId].classList.add('review-active');
    console.log(numberId);
    if (numberId == 0) {
        reviewPrevBtn.classList.remove("flex");
        reviewPrevBtn.classList.add("hidden");
        reviewNextBtn.classList.remove("hidden");
        reviewNextBtn.classList.add("flex");
    }
    if (numberId ==  review.length - 1) {
        reviewPrevBtn.classList.remove("hidden");
        reviewPrevBtn.classList.add("flex");
        reviewNextBtn.classList.remove("flex");
        reviewNextBtn.classList.add("hidden");
    }
    if (numberId > 0 && numberId <  review.length - 1) {
        reviewPrevBtn.classList.remove("hidden");
        reviewNextBtn.classList.remove("hidden");
        reviewPrevBtn.classList.add("flex");
        reviewNextBtn.classList.add("flex");
    }
    
}

reviewPrevBtn.addEventListener('click', function () {
    if (numberId > 0) {
        numberId--;
        console.log(numberId);

        updateReview();
    }
});

reviewNextBtn.addEventListener('click', function () {
    if (numberId < review.length - 1) {
        numberId++;
        updateReview();
        console.log(numberId);
    }
});

// star javascript
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll(".stars span");

    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });
        });
    });
});

// timer function 
const initialTime = 18000; // 2 hours
let time = initialTime;

// Get the timer elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Function to update the timer
function updateTimer() {
    // Convert seconds to hours, minutes, and seconds
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    // Display the time in separate divs
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    // Decrease time by 1 second
    time--;

    // Reset the timer when time reaches 0
    if (time < 0) {
        time = initialTime; // Reset time to the initial value
    }
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);

// Initialize the timer
updateTimer();
