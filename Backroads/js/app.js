// ********** set date ************
// select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // remove links as once click on a link we dont want to keep seeing the all the links
    links.classList.remove("show-links");
    // now find the id of the link
    const id = e.target.getAttribute("href").slice(1);
    // getAttribute("href")=== #about...
    // now we want just name of id not #
    // so .slice(1) i.e about
    const element = document.getElementById(id);
    //once got the id delete 62px height of navbar
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});
