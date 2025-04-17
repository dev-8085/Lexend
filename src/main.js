function revealSequentially() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("active");
    }, (index + 1) * 1000); // 1s, 2s, 3s, ...
  });
}

window.addEventListener("load", revealSequentially);
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".reveal-left")?.classList.add("active");
  }, 1000);

  setTimeout(() => {
    document.querySelector(".reveal-right")?.classList.add("active");
  }, 2000);

  setTimeout(() => {
    document.querySelector(".reveal-icons")?.classList.add("active");
  }, 3000);
});
