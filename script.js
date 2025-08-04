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
// Center image on zoom (desktop)
document.querySelectorAll('.menu-page').forEach(page => {
  page.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
      const centerX = page.scrollWidth / 2 - page.clientWidth / 2;
      page.scrollLeft = centerX;
    }
  });
});

