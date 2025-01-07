/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')


if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}


if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('header-bg')
    : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)




$('.features-grids').owlCarousel({
    autoplay:true,
    slideSpeed:1000,
    items:3,
    loop:true,
    nav:false,
    margin:30,
    dots:true,
    responsive:{
      320:{
        items:1
      },
      767:{
        items:2
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });


  $('.feedback-grids').owlCarousel({
    autoplay:true,
    slideSpeed:1000,
    items:3,
    loop:true,
    nav:false,
    margin:30,
    dots:true,
    responsive:{
      320:{
        items:1
      },
      767:{
        items:2
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });