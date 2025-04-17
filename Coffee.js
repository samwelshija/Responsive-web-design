const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=> {
	// Toggle mobile visibility
	document.body.classList.toggle("show-mobile-menu");
});

//close menu when the close button is clicked
menuCloseButton.addEventListener("click", ()=>menuOpenButton.click());

//close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// Initialize Swiper
// Selecting essential elements
const swiperContainer = document.querySelector('.testimonials-list');
const slides = document.querySelectorAll('.swiper-slide');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

let currentIndex = 0;

// Update the position of the slides
function updateSliderPosition() {
    swiperContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    swiperContainer.style.transition = 'transform 0.5s ease-in-out';
}

// Go to the previous slide
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSliderPosition();
});

// Go to the next slide
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSliderPosition();
});

