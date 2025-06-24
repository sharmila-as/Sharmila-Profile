const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 250,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}

// Close menu on outside click
document.addEventListener('click', function (e) {
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.querySelector('.hamburger');

  // If clicked outside the menu and hamburger
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('show');
  }
});

