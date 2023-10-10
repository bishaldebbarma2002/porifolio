let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bi-x-lg");
  navbar.classList.toggle("active");
};
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bi-x-lg");
  navbar.classList.remove("active");
};

ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

ScrollReveal().reveal(
  ".home-img, .skills-container, .project-box, .contact form",
  { origin: "bottom" }
);

ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });

ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Programmer", "Blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//email
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", function (e) {
    const emailValue = emailInput.value.trim();
    if (!emailValue.endsWith("@gmail.com")) {
      e.preventDefault(); // Prevent form submission
      alert("Please enter a valid Gmail address.");
    }
  });
});

//phone 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const mobileInput = document.getElementById("mobile");

  form.addEventListener("submit", function (e) {
    const emailValue = emailInput.value.trim();
    const mobileValue = mobileInput.value.trim();

    if (!emailValue.endsWith("@gmail.com")) {
      e.preventDefault(); // Prevent form submission
      alert("Please enter a valid Gmail address.");
    }

    if (mobileValue.length !== 10 || isNaN(mobileValue)) {
      e.preventDefault(); // Prevent form submission
      alert("Please enter a valid 10-digit phone number.");
    }
  });
});

//footer year
var currentYear = new Date().getFullYear();
        document.getElementById("currentYear").textContent = currentYear;

