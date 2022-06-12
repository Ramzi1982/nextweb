/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const $window = $(window);
const $body = $('body');

class Slideshow {
	constructor (userOptions = {}) {
    const defaultOptions = {
      $el: $('.slideshow'),
      showArrows: false,
      showPagination: true,
      duration: 10000,
      autoplay: false
    }
    
    let options = Object.assign({}, defaultOptions, userOptions);
    
		this.$el = options.$el;
		this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
    this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
    this.showPagination = options.showPagination;
		this.currentSlide = 1;
		this.isAnimating = false;
		this.animationDuration = 1200;
		this.autoplaySpeed = options.duration;
		this.interval;
		this.$controls = this.$el.find('.js-slider-home-button');
    this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

		this.$el.on('click', '.js-slider-home-next', (event) => this.nextSlide());
		this.$el.on('click', '.js-slider-home-prev', (event) => this.prevSlide());
    this.$el.on('click', '.js-pagination-item', event => {
      if (!this.isAnimating) {
        this.preventClick();
  this.goToSlide(event.target.dataset.slide);
      }
    });

		this.init();
	}
  
  init() {
    this.goToSlide(1);
    if (this.autoplay) {
      this.startAutoplay();
    }
    
    if (this.showPagination) {
      let paginationNumber = this.maxSlide;
      let pagination = '<div class="pagination"><div class="container">';
      
      for (let i = 0; i < this.maxSlide; i++) {
        let item = `<span class="pagination__item js-pagination-item ${ i === 0 ? 'is-current' : ''}" data-slide=${i + 1}>${i + 1}</span>`;
        pagination  = pagination + item;
      }
      
      pagination = pagination + '</div></div>';
      
      this.$el.append(pagination);
    }
  }
  
  preventClick() {
		this.isAnimating = true;
		this.$controls.prop('disabled', true);
		clearInterval(this.interval);

		setTimeout(() => {
			this.isAnimating = false;
			this.$controls.prop('disabled', false);
      if (this.autoplay) {
			  this.startAutoplay();
      }
		}, this.animationDuration);
	}

	goToSlide(index) {    
    this.currentSlide = parseInt(index);
    
    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = 1;
    }
    
    if (this.currentSlide === 0) {
      this.currentSlide = this.maxSlide;
    }
    
    const newCurrent = this.$el.find('.js-slider-home-slide[data-slide="'+ this.currentSlide +'"]');
    const newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
    const newNext = this.currentSlide === this.maxSlide ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');
    
    this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
    this.$el.find('.js-pagination-item').removeClass('is-current');
    
		if (this.maxSlide > 1) {
      newPrev.addClass('is-prev');
      newNext.addClass('is-next');
    }
    
    newCurrent.addClass('is-current');
    this.$el.find('.js-pagination-item[data-slide="'+this.currentSlide+'"]').addClass('is-current');
  }
  
  nextSlide() {
    this.preventClick();
    this.goToSlide(this.currentSlide + 1);
	}
   
	prevSlide() {
    this.preventClick();
    this.goToSlide(this.currentSlide - 1);
	}

	startAutoplay() {
		this.interval = setInterval(() => {
			if (!this.isAnimating) {
				this.nextSlide();
			}
		}, this.autoplaySpeed);
	}

	destroy() {
		this.$el.off();
	}
}

(function() {
	let loaded = false;
	let maxLoad = 3000;  
  
	function load() {
		const options = {
      showPagination: true
    };

    let slideShow = new Slideshow(options);
	}
  
	function addLoadClass() {
		$body.addClass('is-loaded');

		setTimeout(function() {
			$body.addClass('is-animated');
		}, 600);
	}
  
	$window.on('load', function() {
		if(!loaded) {
			loaded = true;
			load();
		}
	});
  
	setTimeout(function() {
		if(!loaded) {
			loaded = true;
			load();
		}
	}, maxLoad);

	addLoadClass();
})();




function sendEmail(){


var name = document.getElementById("name").value;
var sujet = document.getElementById("sujet").value;
var mail = document.getElementById("email").value;
var re = /\S+@\S+\.\S+/;

    if (name != null && sujet != null && mail.match(re)) {
     
          Email.send({
            Host : "nextwebplus.fr",
            Username : " support@nextwebplus.fr",
            Password : "Kk345$xm",
            To : document.getElementById("email").value ,
            From : 'noreply@nextwebplus.fr' ,
            Subject : "New Contact Form Enquiry",
            Body : "Name: " + document.getElementById("name").value
                + "<br> Email:" + document.getElementById("email").value
                + "<br> phone:" + document.getElementById("phone").value
                + "<br> sujet:" + document.getElementById("sujet").value
                + "<br> message:"+ document.getElementById("message").value
        }).then(
          
        )

                
    }else{
     
     
    }
}


//get modal element
var modal = document.getElementById('reponseModal');

//get open modal button
var modalBtn = document.getElementById('submitButton');

//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open Click
modalBtn.addEventListener('click',openModal);

//Listen for close Click
closeBtn.addEventListener('click',closeModal);

//Listen for outside click
window.addEventListener('click',outsideClick);

//function to open modal
function openModal(){
    modal.style.display ='block';
}

//function to close modal
function closeModal(){
    modal.style.display ='none';
}

//function to close modal if outside click
function outsideClick(e){
    if(e.target==modal)
    modal.style.display ='none';
}


//function blogs
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

