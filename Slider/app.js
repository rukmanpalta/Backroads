const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  // initial set up of our slides-
  // where first slide with index 0 will have left 0%
  // second slide with index1 will have left 100% and so on..
  // for index 0 slide 1 left 0%
  // for index 1 slide 2 left 100%
  // for index 2 slide 3 left 200% and so on!!!
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});
function carousel() {
  // working with buttons
  if (counter < slides.length - 1) {
    //   counter < 3 i.e. 0, 1, 2 or we havent reach last slide yet!!
    nextBtn.style.display = "block";
  } else {
    //   reached last slide!! so no nextBtn to display anymore!!
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    //   we havent reach 1st slide yet so counter > 0 prev btn will be displayed else no prev btn
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  // working with slides

  //   we at last slide so set counter to 0 i.e again back to first slide!!
  //   if (counter === slides.length) {
  //     counter = 0;
  //   }
  //   //   we  want to navigate to  last slide
  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }

  //   after this setup we want to translateX to move these slides!!
  slides.forEach(function (slide) {
    //   for slide 1 index 0 we want to transform = translateX(-100%);
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
// initially no prev button!!
prevBtn.style.display = "none";
