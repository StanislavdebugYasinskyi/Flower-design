const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-bullets',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.s-button-next',
    prevEl: '.s-button-prev',
  },

});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-response-next',
    prevEl: '.swiper-response-prev',
  }

});

// burger menu
let menuIcon = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.header__menu');
    menuIcon.addEventListener('click', function(){
       document.body.classList.toggle('lock'); 
	   menuIcon.classList.toggle('active');
	   menuBody.classList.toggle('active');
})





