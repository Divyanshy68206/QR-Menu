const pages = document.querySelectorAll(".menu-page");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

pages.forEach((page) => {
  observer.observe(page);
});
