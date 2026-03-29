// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = {
      name: formData.get('name') || 'N/A',
      email: formData.get('email') || 'N/A',
      phone: formData.get('phone') || 'N/A',
      service: formData.get('service') || 'N/A',
      message: formData.get('message') || 'N/A'
    };

    // Log to console (in production, send to backend)
    console.log('Form submitted:', data);

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  });
}

// Update status badge based on current time
function updateStatus() {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;
  const openTime = 8 * 60; // 8 AM
  const closeTime = 18 * 60; // 6 PM

  const statusBadges = document.querySelectorAll('.status-badge');
  
  if (day === 0 || (currentTime < openTime || currentTime >= closeTime)) {
    statusBadges.forEach(badge => {
      badge.textContent = 'CLOSED';
      badge.style.background = '#f44336';
    });
  }
}

// Check status on page load and every minute
updateStatus();
setInterval(updateStatus, 60000);

// Mobile menu toggle (if needed)
const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav-menu');

if (window.innerWidth <= 768) {
  // Add mobile menu functionality
  logo.style.cursor = 'pointer';
}

// Add animations on scroll
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

// Observe service cards
document.querySelectorAll('.service-card, .why-card, .stat-card').forEach(el => {
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