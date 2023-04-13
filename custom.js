"use strict";

//  Elements
const frame = document.querySelector(".frame");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const slider = document.querySelector(".slider");

// Slider
let curSlide = 0;
const lastSlide = 2;

function transformFrame(slide) {
  frame.style.transform = `translateX(-${100 * slide}vw)`;
}
prevBtn.addEventListener("click", () => {
  console.log("click");
  if (curSlide === 0) {
    curSlide = lastSlide;
    transformFrame(lastSlide);
  } else {
    curSlide--;
    transformFrame(curSlide);
  }
});

nextBtn.addEventListener("click", () => {
  console.log("click");
  if (curSlide === lastSlide) {
    curSlide = 0;
    transformFrame(curSlide);
  } else {
    curSlide++;
    transformFrame(curSlide);
  }
});

// Smooth scrolling

navLinks.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("nav-item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// stricky navbar
const navHeight = header.getBoundingClientRect().height;

function stickyNavbar(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("myNavFixed");
    slider.classList.add(`mt-${navHeight}px`);
  } else {
    header.classList.remove("myNavFixed");
    slider.classList.remove(`mt-${navHeight}px`);
  }
}

const sliderObserver = new IntersectionObserver(stickyNavbar, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

sliderObserver.observe(slider);
