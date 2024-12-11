let scroller = document.querySelector(".gallery");
let back_btn = document.getElementById("back-btn");
let next_btn = document.getElementById("next-btn");

scroller.addEventListener("wheel", (evt) => {
  scroller.style.scrollBehavior = "smooth";
  evt.preventDefault();
  scroller.scrollLeft += evt.deltaY;
});

next_btn.addEventListener("click", () => {
  scroller.style.scrollBehavior = "smooth";
  scroller.scrollLeft += 900;
});

back_btn.addEventListener("click", () => {
  scroller.style.scrollBehavior = "smooth";
  scroller.scrollLeft -= 900;
});