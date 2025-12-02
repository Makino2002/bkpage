// // ===== Menu Mobile Toggle =====
const mobileMenuBtn = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// // ===== Project Filtering =====
// const filterButtons = document.querySelectorAll(".filter-btn");
// const projectCards = document.querySelectorAll(".project-card");

// filterButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // active button
//     filterButtons.forEach((b) => b.classList.remove("active"));
//     btn.classList.add("active");

//     const filter = btn.dataset.filter;
//     projectCards.forEach((card) => {
//       if (filter === "all" || card.dataset.category === filter) {
//         card.style.display = "block";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   });
// });

// // ===== Smooth Scroll for Nav Links =====
// const navAnchorLinks = document.querySelectorAll('nav a[href^="#"]');
// navAnchorLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const target = document.querySelector(link.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//       // close mobile menu after click
//       navLinks.classList.remove("show");
//     }
//   });
// });

// // ===== Dynamic Project Cards (optional example) =====
// const projectsGrid = document.querySelector(".projects-grid");
// const projectsData = [
//   { title: "Dự án 1", category: "design", link: "#", image: "image1.jpg" },
//   { title: "Dự án 2", category: "development", link: "#", image: "image2.jpg" },
//   { title: "Dự án 3", category: "marketing", link: "#", image: "image3.jpg" },
// ];

// if (projectsGrid) {
//   projectsData.forEach((proj) => {
//     const card = document.createElement("div");
//     card.className = "project-card";
//     card.dataset.category = proj.category;
//     card.innerHTML = `
//       <div class="project-image">${proj.image}</div>
//       <div class="project-info">
//         <h3 class="project-title">${proj.title}</h3>
//         <a href="${proj.link}" class="project-link">Xem chi tiết</a>
//       </div>
//     `;
//     projectsGrid.appendChild(card);
//   });
// }

// const contactForm = document.getElementById("contactForm");
// contactForm?.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.");
//   contactForm.reset();
// });
// // main.js

// document.addEventListener("DOMContentLoaded", function () {
//   // --- Mobile Menu Toggle ---
//   const mobileBtn = document.getElementById("mobileMenuBtn");
//   const navLinks = document.querySelector(".nav-links");

//   mobileBtn.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
//   });

//   // --- Close mobile menu when link clicked ---
//   document.querySelectorAll(".nav-links a").forEach((link) => {
//     link.addEventListener("click", () => {
//       if (navLinks.classList.contains("active")) {
//         navLinks.classList.remove("active");
//       }
//     });
//   });

//   // --- Add shadow to header on scroll ---
//   const header = document.querySelector("header");
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });

//   // --- Smooth scroll for internal anchors ---
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute("href"));
//       if (target) {
//         target.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     });
//   });

//   // --- Contact Form Submit (demo only) ---
//   const contactForm = document.querySelector(".contact-form");
//   if (contactForm) {
//     contactForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
//       contactForm.reset();
//     });
//   }
// });
