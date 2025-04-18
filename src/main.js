function revealSequentially() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("active");
    }, index * 500); // Adjust delay as needed
  });
}

window.addEventListener("load", revealSequentially);
