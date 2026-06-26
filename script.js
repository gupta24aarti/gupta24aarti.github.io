// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar shadow on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll);

// Mobile menu toggle
const toggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
toggle.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => mobileMenu.classList.remove("open"))
);

// Typed role effect in hero
const roles = [
  "Aspiring Data Scientist",
  "Machine Learning Enthusiast",
  "Data Analyst",
  "Tech Enthusiast & Data Lover",
];
const typedEl = document.getElementById("typed");
let r = 0, c = 0, deleting = false;
function type() {
  const word = roles[r];
  typedEl.textContent = word.slice(0, c);
  if (!deleting && c < word.length) {
    c++;
    setTimeout(type, 70);
  } else if (deleting && c > 0) {
    c--;
    setTimeout(type, 40);
  } else if (!deleting && c === word.length) {
    deleting = true;
    setTimeout(type, 1600);
  } else {
    deleting = false;
    r = (r + 1) % roles.length;
    setTimeout(type, 300);
  }
}
type();

// Scroll-reveal animations
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => io.observe(el));
