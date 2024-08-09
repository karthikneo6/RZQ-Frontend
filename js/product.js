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
        console.log(num);
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
}

reviewPrevBtn.addEventListener('click', function () {
    if (numberId > 0) {
        numberId--;
        updateReview();
    }
});

reviewNextBtn.addEventListener('click', function () {
    console.log(numberId);
    if (numberId < review.length - 1) {
        numberId++;
        updateReview();
    }
    // else{
    //     reviewNextBtn.style.display = 'none';
    // }
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


// my account js 
let closeModal = document.getElementById('close-modal');
let filterModal = document.querySelector('.filter-modal');
let outsideFilter = document.getElementById('outside-filter');

let addressCloseModal = document.getElementById('address-close-modal');
let addressModal = document.querySelector('.address-modal');
let closeModalDelete = document.getElementById('close-modal-delete');
let deleteModal = document.querySelector('.delete-modal');

// console.log(closeModal);
closeModal.addEventListener('click', function () {
    // Add the 'close-modal' class
    filterModal.classList.add('close-modal');
    // Set a timeout to remove the 'close-modal' class after a delay
    setTimeout(function () {
        filterModal.classList.remove('close-modal');
    }, 1000); // 1000 milliseconds = 1 second
    console.log(filterModal);
});

addressCloseModal.addEventListener('click', function () {
    // Add the 'close-modal' class
    addressModal.classList.add('close-modal-address');
    console.log(addressModal);
    // Set a timeout to remove the 'close-modal' class after a delay
    setTimeout(function () {
        addressModal.classList.remove('close-modal-address');
    }, 1000); // 1000 milliseconds = 1 second
    // console.log(addressModal);
});

closeModalDelete.addEventListener('click', function () {
    // Add the 'close-modal' class
    deleteModal.classList.add('close-modal-delete');
    // Set a timeout to remove the 'close-modal' class after a delay
    setTimeout(function () {
        deleteModal.classList.remove('close-modal-delete');
    }, 1000); // 1000 milliseconds = 1 second
    // console.log(addressModal);
});

// outsideFilter.addEventListener('click', function () {
//     filterModal.classList.add('close-outside-modal');
//     // Set a timeout to remove the 'close-modal' class after a delay
//     setTimeout(function () {
//         filterModal.classList.remove('close-outside-modal');
//     }, 1000); // 1000 milliseconds = 1 second
//     console.log(filterModal);
// });
