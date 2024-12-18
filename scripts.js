// scripts.js

// Animate the hero section text
gsap.from("h1", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
  });
  
  gsap.from("p", {
    duration: 1.5,
    y: 30,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out",
  });
  
  gsap.from("a", {
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    delay: 1,
    ease: "elastic.out(1, 0.5)",
  });
  
  // Animate the About Section on scroll
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from("#about", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "top 60%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
  });
  
  window.addEventListener('scroll', function() {
    let parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
  
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });

  