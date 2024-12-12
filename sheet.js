
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: "start",
      });
  });
});


const scrollTopButton = document.createElement("button");
scrollTopButton.innerText = "↑";
scrollTopButton.setAttribute("id", "scrollTop");
scrollTopButton.style.position = "fixed";
scrollTopButton.style.bottom = "20px";
scrollTopButton.style.right = "20px";
scrollTopButton.style.width = "50px";
scrollTopButton.style.height = "50px";
scrollTopButton.style.borderRadius = "50%";
scrollTopButton.style.border = "none";
scrollTopButton.style.background = "#2a5298";
scrollTopButton.style.color = "#fff";
scrollTopButton.style.cursor = "pointer";
scrollTopButton.style.display = "none";
scrollTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
scrollTopButton.style.zIndex = "1000";
document.body.appendChild(scrollTopButton);


window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
      scrollTopButton.style.display = "block";
  } else {
      scrollTopButton.style.display = "none";
  }
});


scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
});


const portfolioItems = document.querySelectorAll(".portfolio-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("visible");
      } else {
          entry.target.classList.remove("visible");
      }
  });
}, {
  threshold: 0.5,
});

portfolioItems.forEach(item => observer.observe(item));

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
      .portfolio-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s, transform 0.6s;
      }
      .portfolio-item.visible {
          opacity: 1;
          transform: translateY(0);
      }
  </style>`
);
