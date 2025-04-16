function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
  
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);