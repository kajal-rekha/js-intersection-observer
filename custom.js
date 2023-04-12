"use strict";

const frame = document.querySelector(".frame");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

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
