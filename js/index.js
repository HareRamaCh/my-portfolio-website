const navToggle= document.querySelector('.nav-toggle');
const navLinks= document.querySelectorAll('.nav__link');
const dynamicText = document.getElementById("dynamic-text");
const textValues = [
  "Python Programmer",
  "Data Analyst",
  "Full-Stack Developer"
];

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link=> {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

let currentIndex = 0;

function updateText() {
  dynamicText.style.opacity = 0;
  setTimeout(() => {
    dynamicText.textContent = textValues[currentIndex];
    dynamicText.style.opacity = 1;
    currentIndex++;
    if (currentIndex === textValues.length) {
      currentIndex = 0;
    }
  }, 500);
}

setInterval(updateText, 4000);
