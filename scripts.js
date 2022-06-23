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

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickHeader() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      navbar.classList.add("dark")
    } else {
      navbar.classList.remove("sticky");
      navbar.classList.remove("dark");
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
function checkForm(name, email, phone, address, city, message){
  name = document.getElementById("name");
  email = document.getElementById("email");
  phone = document.getElementById("phone");
  address = document.getElementById("address");
  city = document.getElementById("city");
  message = document.getElementById("message");

  if (name.value== "" || email.value=="" || phone.value=="" || address.value=="" || city.value=="" || message.value==""){
      alert("Please fill out all the form, thank you!");
      return;
  }
  alert("To be implemented");
}