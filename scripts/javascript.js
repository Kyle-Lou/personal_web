'use strict';
// sticky nav bar
window.onscroll = function () { myFunction() };
var navbar = $(".nav");
var sticky = 70;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.addClass("sticky")
    } else {
        navbar.removeClass("sticky");
    }
}

//welcome page modal
$("index.html").ready(function () {
    $(".overlay").removeClass('hidden');
    $(".modal").removeClass('hidden');
});

$("#butt").click(function () {
    $(".overlay").fadeOut();
    $(".modal   ").fadeOut();
});

// Carousel for Life Page
const SLIDES = $(".slide");
SLIDES.addClass("hidden");
let prevNum = 0;
let nextNum = 0;
showSlide1(0);

$(".lbtn").click(function () {
    prevSlide();
});

$(".rbtn").click(function () {
    nextSlide();
});

function nextSlide() {
    if (nextNum >= 3) {
        nextNum = 0;
    } else {
        nextNum++;
    }
    prevNum = nextNum;
    showSlide2(nextNum);
}

function prevSlide() {
    if (prevNum <= 0) {
        prevNum = 3;
    } else {
        prevNum--;
    }
    nextNum = prevNum;
    showSlide2(prevNum);
}


function showSlide1(num) {
    let currentSlide = SLIDES.eq(num);
    SLIDES.addClass("hidden");
    currentSlide.removeClass("hidden");
}

function showSlide2(num) {
    let currentSlide = SLIDES.eq(num);
    SLIDES.addClass("hidden");
    currentSlide.removeClass("hidden");
    currentSlide.addClass("fade-in");
}

//
$("#headshot").hover(function () {
    $("#over").removeClass("hidden");
}, function () {
    $("#over").addClass("hidden");
});

// page reveal
const allSections = document.querySelectorAll('.subsection');

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

///open resume
function openImg() {
    window.open("https://drive.google.com/file/d/1FdVrUUabp2MiY_H9jC9Hygl60xtOHCaQ/view?usp=sharing");
}

//section scroll

document.querySelector('.navlinks').addEventListener('click', function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('navlink')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});
