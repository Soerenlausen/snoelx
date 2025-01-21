const bars = document.querySelector("#bars");

const openNav = () => {
    document.querySelector("header > nav").classList.toggle("show");
    bars.classList.toggle("fa-bars");
    bars.classList.toggle("fa-xmark");
}

bars.addEventListener("click", openNav);


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
     document.querySelector("header").style.top = "-80px";
  }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".breadtrail").style.top = "80px";
  } else {
     document.querySelector(".breadtrail").style.top = "-40px";
  }

  prevScrollpos = currentScrollPos;

}