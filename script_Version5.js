// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form handling
function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const service = form.querySelector('select').value;
  const message = form.querySelector('textarea').value;

  console.log('Form submitted:', { name, email, phone, service, message });
  
  // Show success message
  alert('Thank you! We will contact you soon at ' + phone + ' or ' + email);
  form.reset();
}

// Add scroll animation for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease-out';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe service and feature cards
document.querySelectorAll('.service-card, .feature, .gallery-item, .info-card').forEach(el => {
  observer.observe(el);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Enhance navbar on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Mobile menu functionality
const navMenu = document.querySelector('.nav-menu');
if (window.innerWidth < 768) {
  navMenu.style.display = 'none';
}

// Gallery click handler
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function() {
    const img = this.querySelector('img');
    console.log('Clicked gallery item:', img.alt);
  });
});

// Initialize
console.log('🖨️ The Print Shop - Website Loaded Successfully');
console.log('📞 Contact: +232 78 811560');
console.log('📍 Location: 26 A Freetown Road, Lumley, Freetown');
console.log('🕐 Hours: Mon-Sat 8 AM - 6 PM');