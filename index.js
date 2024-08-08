document.addEventListener('DOMContentLoaded', () => {
    const incrDecr = document.querySelector('.incrdecr');
    incrDecr.classList.add('hidden');
    window.addTocart = function () {
        const buyNow = document.querySelector('.buynow');
        buyNow.textContent = 'Go to cart';
        const addTocart = document.querySelector('.cart');
        const incrDecr = document.querySelector('.incrdecr');
        const addtocartmsg = document.querySelector('.addtocartmsg');

        if (addTocart) {
            addTocart.classList.add('hidden');
            incrDecr.classList.remove('hidden');
            addtocartmsg.classList.remove('hidden');

            // Hide the message after 4 seconds
            setTimeout(() => {
                addtocartmsg.classList.add('hidden');
            }, 4000);
        }
    }

    const incrementButton = document.querySelector('.increment');
    const decrementButton = document.querySelector('.decrement');
    const valueButton = document.querySelector('.value');


    incrementButton.addEventListener('click', () => {
        const addtocartmsg = document.querySelector('.addtocartmsg');
        addtocartmsg.classList.remove('hidden');
        setTimeout(() => {
            addtocartmsg.classList.add('hidden');
        }, 2000);
        let value = parseInt(valueButton.textContent);
        valueButton.textContent = value + 1;
    });



    const formDetal = document.querySelector('.formDetail');
    formDetal.classList.add('hidden');
    // continue btn
    window.countinebtn = function () {
        const formDetal = document.querySelector('.formDetail');
        const popular = document.querySelector('.popular');
        const payDetail = document.querySelector('.payDetail');
        formDetal.classList.remove('hidden');
        payDetail.classList.add('hidden');
        popular.classList.add('hidden');
    }

    const generateQrCodeBtn = document.getElementById('generateQrCodeBtn');
    const qrCodeDiv = document.getElementById('qrCodeDiv');
    const countdownSpan = document.getElementById('countdown');
    const paymentMessage = document.getElementById('paymentMessage');
    
    generateQrCodeBtn.addEventListener('click', () => {
        qrCodeDiv.style.display = 'block';
        generateQrCodeBtn.style.display = 'none';
        paymentMessage.style.display = 'block';
        startCountdown(3 * 60, countdownSpan); // 3 minutes in seconds
    });
    
    function startCountdown(duration, display) {
        let timer = duration, minutes, seconds;
        const countdownInterval = setInterval(() => {
            minutes = Math.floor(timer / 60);
            seconds = timer % 60;
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                clearInterval(countdownInterval);
                display.textContent = "00:00";
            }
        }, 1000); // Corrected interval to 1000 milliseconds (1 second)
    }
    let lastScrollPosition = 0;
    window.addEventListener('scroll', function () {
        const filter = document.querySelector('.filter');
        const show = document.querySelector('.show');
        const header = document.querySelector('.header');
        const scrollPosition = window.scrollY;
        const changeDesignAtScrollPosition = 600;
        // const headerscrollingpoint = 10;


        // if (scrollPosition > lastScrollPosition) {

        //     if (scrollPosition >= headerscrollingpoint) {
        //         header.classList.add('top-0');
        //         shoppingMobile.classList.add('top-0');

        //     }
        // } else {

        //     header.classList.remove('top-0');
        //     shoppingMobile.classList.remove('top-0');
        // }
        // lastScrollPosition = scrollPosition;

        // Mobile view behavior for .filter and .show
        if (window.innerWidth <= 768) {
            if (scrollPosition >= changeDesignAtScrollPosition) {
                filter.style.display = "none";
                show.style.display = "block";
            } else {
                filter.style.display = "block";
                show.style.display = "none";
            }
        } else {
            filter.style.display = "none";
            show.style.display = "none";
        }
    });

    let header;
    let shoppingMobile;

    const cartDiv = document.getElementById('cartDiv');
    const addressDiv = document.getElementById('addressDiv');
    const paymentDiv = document.getElementById('paymentDiv');
    const popularDiv = document.querySelector('.popular-product');
    const stepTitle = document.getElementById('stepTitle');
    const stepIndicator = document.getElementById('stepIndicator');
    const arrowImage = document.getElementById('arrowImage');
    
    let currentStep = 0;
    
    window.continueCard = function () {
        if (currentStep === 0) {
            cartDiv.classList.add('hidden');
            popularDiv.classList.add('hidden');
            addressDiv.classList.remove('hidden');
            stepTitle.textContent = 'Address';
            stepIndicator.textContent = 'step 2/3';
            arrowImage.style.display = 'block'; 
            currentStep++;
        } else if (currentStep === 1) {
            addressDiv.classList.add('hidden');
            popularDiv.classList.add('hidden');
            paymentDiv.classList.remove('hidden');
            stepTitle.textContent = 'Payment';
            stepIndicator.textContent = 'step 3/3';
            arrowImage.style.display = 'block'; 
            currentStep++;
        }
    };
    

    shoppingMobile = document.querySelector('.shopping-mobile');
    header = document.querySelector('.header');
    window.removeShippingCart = function (cardId) {
        const removeshippingCardItem = document.getElementById(cardId);
        removeshippingCardItem.remove();
    }
    const shoppingCart = document.querySelector('.shoppingCart');
    const AddressDetail = document.querySelector('.AddressDetail');
    AddressDetail.classList.add('hidden');
    shoppingCart.classList.add('block');
    // continue card 

    window.addTocartToGoToBag = function () {
        const addTocartToGoToBag = document.querySelector('.addTocartToGoToBag');
        addTocartToGoToBag.textContent = 'Go to bag'
    }
    const popUp = document.querySelector('.addPopup');
    popUp.classList.add('hidden');

    const carouselContainer = document.querySelector('.carousel-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const cardWidth = document.querySelector('.carousel-item').offsetWidth + 20; // Adjust for gap

    leftArrow.addEventListener('click', () => {
        carouselContainer.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        carouselContainer.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });

    //timer
    decrementButton.addEventListener('click', () => {
        const addtocartmsg = document.querySelector('.addtocartmsg');
        addtocartmsg.classList.remove('hidden');
        setTimeout(() => {
            addtocartmsg.classList.add('hidden');
        }, 2000);
        let value = parseInt(valueButton.textContent);
        if (value > 1) { // Assuming you don't want the value to go below 1
            valueButton.textContent = value - 1;
        }

    });

    // Remove cart items
    window.removeCart = function (cardId) {
        const removeCartItem = document.getElementById(cardId);
        removeCartItem.remove();
    }



    const OTP = document.querySelector('.OTP_verification');
    const input_box = document.querySelector('.input-box');
    const errorMessage = document.getElementById('error-message');
    const timerElement = document.getElementById('Timer');
    const whatsapp = document.querySelector('.whatsapp');
    const whatsapp_icon = document.querySelector('.whatsapp_icon');
    OTP.style.display = "none";
    let time_out;

    window.myFunction = function () {
        const mobileNumber = document.getElementById('mobile-number').value;

        if (mobileNumber.length !== 10) {
            errorMessage.classList.remove('hidden');
            return;
        } else {
            errorMessage.classList.add('hidden');
        }

        input_box.style.display = "none";
        OTP.style.display = "block";
        startTimer();
    };


    function startTimer() {
        var time_limit = 30;
        whatsapp.style.display = "none";
        timerElement.style.display = "block";

        clearInterval(time_out);
        time_out = setInterval(() => {
            if (time_limit === 0) {
                whatsapp.style.display = "block";
                timerElement.style.display = "none";
                clearInterval(time_out);
            } else {
                if (time_limit < 10) {
                    time_limit = '0' + time_limit;
                }
                timerElement.textContent = '00:' + time_limit;
                time_limit -= 1;
            }
        }, 1000);
    }

    whatsapp_icon.addEventListener('click', startTimer);
});