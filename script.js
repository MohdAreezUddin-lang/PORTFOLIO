// For smooth scrolling

let section = document.querySelectorAll(
  "#about , #skills , #education , #portfolio"
);
window.addEventListener(`scroll`, reveal);

function reveal() {
  section.forEach((sec) => {
    let top = sec.getBoundingClientRect().top;
    // let buttom = sec.getBoundingClientRect().bottom;
    if (top < window.innerHeight - 200) {
      sec.style.opacity = 1;
      sec.style.transform = `translateY(0px)`;
    } else {
      sec.style.opacity = 0;
      sec.style.transform = `translateY(50px)`;
    }
  });
}

// For smart phone
let smooth = document.querySelectorAll("nav a");
smooth.forEach((link) => {
  link.addEventListener(`click`, (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: `smooth`,
    });
  });
});

// Text animation

let myName = "Md Areez Uddin";
let name = document.querySelector("h2");
let chara = 0;
function typeMyName() {
  if (chara < myName.length) {
    name.textContent += myName.charAt(chara);
    chara++;
    setTimeout(typeMyName, 120);
  }
}
typeMyName();

let roles = ["MERN stack developer", "AI Enthusiast"];

let type = document.getElementById("role");
let index = 0;
let charIndex = 0;

const roleElement = document.getElementById("type");

function typeEffect() {
  if (charIndex < roles[index].length) {
    roleElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(() => eraseEffect(), 1620);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    roleElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();

// Light && Dark mode toggle

let themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener(`click`, () => {
  document.body.classList.toggle("light-mode");
  updateIcon();
});

function updateIcon() {
  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "🌙";
    themeBtn.style.backgroundColor = "black";
  } else {
    themeBtn.textContent = "☀";
    themeBtn.style.backgroundColor = "white";
  }
}
updateIcon();
