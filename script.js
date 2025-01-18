// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    // Update active nav link
    document.querySelectorAll('nav a').forEach(a => a.removeAttribute('aria-current'));
    this.setAttribute('aria-current', 'page');

    // Scroll to section
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  let currentSection = 'home';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.removeAttribute('aria-current');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.setAttribute('aria-current', 'page');
    }
  });
});