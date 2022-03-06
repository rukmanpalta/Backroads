// traversing the dom
const btns = document.querySelectorAll(".question-btn");
const questionText = document.querySelector(".question-text");
const questions = document.querySelectorAll(".question");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //   whichever btn is clicked find it's parent article!! store it in a variable "item"= article-1, 2 or 3!!
    const item = e.currentTarget.parentElement.parentElement;
    // now lets remove .show-text class for rest of the articles whose btn is not clicked!!!!
    questions.forEach(function (question) {
      if (question != item) {
        question.classList.remove("show-text");
      }
    });
    // for the item or article whose btn is clicked lets toggle classList .show-text!
    item.classList.toggle("show-text");
  });
});

// using selectors inside the element

// // for each article(question inside questions)
// questions.forEach(function (question) {
//   // find the btn inside that article which is clicked
//   const btn = question.querySelector(".question-btn");
//   //   add event listener to that button
//   btn.addEventListener("click", function () {
//     //   now check for all the articles which article is the one for which the btn was clicked .. if same toggle show-text else remove shi-text class for rest of the articles!!
//     questions.forEach(function (item) {
//       if (item != question) {
//         item.classList.remove("show-text");
//       }
//       question.classList.toggle("show-text");
//     });
//   });
// });
