"use strict";
// sticky nav bar
window.onscroll = function () {
  myFunction();
};
var navbar = $(".nav");
var sticky = 70;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
}

//greeting according to time
$(document).ready(function () {
  let date = new Date();
  let hours = date.getHours();
  let greeting;

  if (hours >= 4 && hours < 12) {
    greeting = "Good morning, I'm Kyle";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon, I'm Kyle";
  } else if (hours >= 18 || hours < 4) {
    greeting = "Good evening, I'm Kyle";
  }

  $("#Kyle").text(greeting);
});

//fade in and fade out
$(document).ready(function () {
  $(".overlay, .modal")
    .css({ opacity: 0, display: "flex" })
    .animate({ opacity: 1 }, 2000);

  setTimeout(function () {
    $(".blackout")
      .css({ display: "block" })
      .animate({ opacity: 1 }, 500, function () {
        $(".overlay").animate({ opacity: 0 }, 1500, function () {
          $(this).css("display", "none");
          $(".blackout").animate({ opacity: 0 }, 500, function () {
            $(this).css("display", "none");
          });
        });
        $(".modal").animate({ opacity: 0 }, 1500, function () {
          $(this).css("display", "none");
          $("body .subsection").css("display", "block");
        });
      });
  }, 0);
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
  console.log("aaaaaaaaaaaa");
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
$("#headshot").hover(
  function () {
    $("#over").removeClass("hidden");
  },
  function () {
    $("#over").addClass("hidden");
  }
);

// page reveal
const allSections = document.querySelectorAll(".subsection");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// ///open resume
// function openImg() {
//     window.open("https://drive.google.com/file/d/18W6kZRY4LzPSxmEmIPcmGoEzpVnWyoBd/view?usp=sharing");
// }

//section scroll.

document.querySelector(".navlinks").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("navlink")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

$(document).ready(function () {
  let birthDate = new Date("2002-10-26T03:00:00");

  function calculateLivedSeconds() {
    let now = new Date();
    let differenceInMilliseconds = now - birthDate;
    let differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

    $("#seconds-lived").text(differenceInSeconds.toLocaleString());
  }

  calculateLivedSeconds();

  setInterval(function () {
    calculateLivedSeconds();
  }, 1000);
});
