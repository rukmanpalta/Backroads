const items = [...document.querySelectorAll(".number")];
// array of 3 spans
// console.log(items);

// creating an arrow function updateCount to

const updateCount = (el) => {
  //   console.log(el);
  //   el.dataset.value will give us data-value ="500", ="17140" , ="500" but in string so use parseInt to convert string to numbers
  const value = parseInt(el.dataset.value);
  //   console.log(value);
  const increment = Math.ceil(value / 1000);
  // Math.ceil in order to avoid decimal values. here we just incrementing value by some value not just 1
  //   set initialValue to be 0
  let initialValue = 0;
  //   set incrementCount function with setInterval
  //   setInterval will call a function at specified intervals
  //   eg. setInterval(() => {},1000) - calling an arrow function after every 1000ms
  // and to stop execution need to use clearInterval() method
  // call clearInterval() to stop execution . pass the id returned from setInterval() i.e clearImnterval(incremenentCount)l;
  const incrementCount = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(incrementCount);
      //   must return
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 1);
  //   after each milisecond increasing value!!
};
// iterate over and log each span

//// iterate over each span element!!
items.forEach((item) => {
  updateCount(item);
  // <span class="number"
  //  data-value="500">0</span>
  // <span class="number" data-value="17140">0</span>
  // <span class="number" data-value="1500">0</span>
});
