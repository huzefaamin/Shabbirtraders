// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) { // Show small header after 100px scroll
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-container .nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close mobile menu when clicking a nav link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

// Enhanced Slider Configuration
const sliderConfig = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    loop: true,
    spaceBetween: 30,
    speed: 500,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
};

// Initialize Product Slider
if (document.querySelector('.product-slider')) {
    new Swiper('.product-slider', sliderConfig);
}

// Initialize Gallery Slider
if (document.querySelector('.gallery-slider')) {
    new Swiper('.gallery-slider', sliderConfig);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header is now permanently visible - scroll effect removed

// Form submission with validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
        // Basic form validation
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
        let isValid = true;
        let errorMessage = '';
        
        // Validate required fields
        if (!data.name || data.name.trim() === '') {
            isValid = false;
            errorMessage += 'Name is required\n';
        }
        
        if (!data.email || !data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            isValid = false;
            errorMessage += 'Valid email is required\n';
        }
        
        if (!data.message || data.message.trim() === '') {
            isValid = false;
            errorMessage += 'Message is required\n';
        }
        
        if (!isValid) {
            alert('Please fix the following errors:\n' + errorMessage);
            return;
        }
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
        // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
}); 
} 