// 🌟 Neon Navbar Scroll Effect
const navbar = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

// 🧠 Typing Role Animation
const roles = ["Frontend Developer", "UI/UX Enthusiast", "React Developer", "Creative Coder"];
let roleIndex = 0;
let charIndex = 0;
const typedRole = document.getElementById("typedRole");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typedRole.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typedRole.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);

// ⚡ Scroll Reveal Animations
const revealElements = document.querySelectorAll(".proj, .card, .skills div");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ✨ Neon Hover Glow for Buttons
document.querySelectorAll(".btn, .skills div").forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  });
});

// 🪄 Floating Glow Particles (Background Enhancement)
const createParticle = () => {
  const particle = document.createElement("span");
  particle.classList.add("particle");
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 5000);
};

setInterval(createParticle, 300);

// 📨 Contact Form (Mock)
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Message sent successfully! Thank you, " + document.getElementById("cname").value + " 🙌");
  form.reset();
});

// 🕒 Auto Year Update
document.getElementById("yr").textContent = new Date().getFullYear();
