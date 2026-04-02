let certifications = document.querySelectorAll(".certification");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (
      entry.isIntersecting == true &&
      entry.target.className == "certification"
    ) {
      entry.target.classList.add("show-certs");
    } else entry.target.classList.remove("show-certs");
  });
});

certifications.forEach((certification) => {
  observer.observe(certification);
});

// window.addEventListener("scroll", () => {
//   let scrollValue = window.scrollY;
//   projectsSection.style.top = 1.5 * scrollValue + "px";
//   projectsSection.style.right = 1.1 * scrollValue + "px";
// });

/*const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 0.001,
};*/