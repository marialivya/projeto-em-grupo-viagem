const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carouselImages = document.querySelector(".carousel-images");

let index = 0;

prevButton.addEventListener("click", () => {
  index = index > 0 ? index - 1 : carouselImages.children.length - 1;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  index = index < carouselImages.children.length - 1 ? index + 1 : 0;
  updateCarousel();
});
function updateCarousel() {
  const width = carouselImages.children[0].clientWidth;
  carouselImages.style.transform = `translateX(${-index * width}px)`;
}

