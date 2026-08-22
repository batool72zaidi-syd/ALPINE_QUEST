/* =====================================================
   ALPINE QUEST
   SLIDER JAVASCRIPT
   ===================================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const currentSlideNumber =
    document.getElementById("currentSlide");

const previousButton =
    document.getElementById("previousBtn");

const nextButton =
    document.getElementById("nextBtn");

let currentSlide = 0;
let timer;


/* =====================================================
   SHOW SLIDE
   ===================================================== */

function showSlide(number) {

    if (slides.length === 0) {
        return;
    }

    if (number < 0) {
        number = slides.length - 1;
    }

    if (number >= slides.length) {
        number = 0;
    }


    /* Remove active from all slides */

    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });


    /* Remove active from all dots */

    dots.forEach(function(dot) {

        dot.classList.remove("active");

    });


    /* Activate selected slide */

    slides[number].classList.add("active");


    /* Activate selected dot */

    if (dots[number]) {

        dots[number].classList.add("active");

    }


    /* Update current slide */

    currentSlide = number;


    /* Update counter */

    if (currentSlideNumber) {

        currentSlideNumber.textContent =
            String(number + 1).padStart(2, "0");

    }

}


/* =====================================================
   NEXT SLIDE
   ===================================================== */

function nextSlide() {

    showSlide(currentSlide + 1);

    restartTimer();

}


/* =====================================================
   PREVIOUS SLIDE
   ===================================================== */

function previousSlide() {

    showSlide(currentSlide - 1);

    restartTimer();

}


/* =====================================================
   DOT BUTTONS
   ===================================================== */

dots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {

        showSlide(index);

        restartTimer();

    });

});


/* =====================================================
   NEXT BUTTON
   ===================================================== */

if (nextButton) {

    nextButton.addEventListener("click", function() {

        nextSlide();

    });

}


/* =====================================================
   PREVIOUS BUTTON
   ===================================================== */

if (previousButton) {

    previousButton.addEventListener("click", function() {

        previousSlide();

    });

}


/* =====================================================
   AUTOMATIC SLIDER
   ===================================================== */

function startTimer() {

    timer = setInterval(function() {

        showSlide(currentSlide + 1);

    }, 5000);

}


/* =====================================================
   RESTART TIMER
   ===================================================== */

function restartTimer() {

    clearInterval(timer);

    startTimer();

}


/* =====================================================
   START SLIDER
   ===================================================== */

showSlide(0);

startTimer();