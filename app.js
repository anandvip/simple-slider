const slides = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const count = document.querySelector(".count");

let currentSlide = 0;

slides[currentSlide].style.display = "block";

prevBtn.addEventListener("click", () => {
  slides[currentSlide].style.display = "none";
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  slides[currentSlide].style.display = "block";
  count.innerHTML = `<span>Slide ${currentSlide + 1} of ${
    slides.length
  }</span>`;
});

nextBtn.addEventListener("click", () => {
  slides[currentSlide].style.display = "none";
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  slides[currentSlide].style.display = "block";
  count.innerHTML = `<span>Slide ${currentSlide + 1} of ${
    slides.length
  }</span>`;
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37) {
    prevBtn.click();
  } else if (event.keyCode === 39) {
    nextBtn.click();
  }
});
count.innerHTML = `<span>slide of slide view: ${currentSlide}</span>`;

slides.forEach((slide) => {
  slide.addEventListener("click", (event) => {
    // Get the x coordinate of the click event
    const x = event.clientX;
    // Get the width of the slide element
    const slideWidth = slide.offsetWidth;
    // Check if the click occurred on the left or right side of the slide
    if (x < slideWidth / 2) {
      prevBtn.click();
    } else {
      nextBtn.click();
    }
  });
});

slides.forEach((slide) => {
  slide.addEventListener("touchstart", (event) => {
    // Get the x coordinate of the touch event
    const x = event.touches[0].clientX;
    // Get the width of the slide element
    const slideWidth = slide.offsetWidth;
    // Check if the touch occurred on the left or right side of the slide
    if (x < slideWidth / 2) {
      prevBtn.click();
    } else {
      nextBtn.click();
    }
  });
});
