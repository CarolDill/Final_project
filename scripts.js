const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("stickyheader");
// var header = document.getElementsByClassName("headerwrapper");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      navbar.classList.add("dark")
    } else {
      navbar.classList.remove("sticky");
      navbar.classList.remove("dark");
    }
}

let loadMoreBtn = document.getElementById("load-more-btn");
let currentItem = 1;

loadMoreBtn.onclick = () => {
  let boxes =[...document.querySelectorAll('.news_wrapper')];
  console.log(boxes);

  for (var i = currentItem; i < currentItem + 1; i++) {
  boxes[i].style.display = "inline-block";
  }

  currentItem += 1;

  if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = "none";
    }

}