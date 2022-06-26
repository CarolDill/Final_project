// Hamburguer menu for mobile
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


//Stick header into top of the page

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickHeader()};

// Get the navbar
var navbar = document.getElementById("stickyheader");
var test = document.getElementById("menulist");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickHeader() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      navbar.classList.add("dark");
      test.classList.add("scroll");
    } else {
      navbar.classList.remove("sticky");
      navbar.classList.remove("dark");
      test.classList.remove("scroll");
    }
}

//Load more function for news
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

//Check if form is complete
function checkform(form) {
  // get all the inputs within the submitted form
  var inputs = form.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
      // only validate the inputs that have the required attribute
      if(inputs[i].hasAttribute("required")){
          if(inputs[i].value == ""){
              // found an empty field that is required
              alert("Please fill all required fields");
              return false;
          }
      }
  }
  return true;
}

//Set alert for button clicks
function myAlert(){
  alert("Function to be implemented, thank you!")
}