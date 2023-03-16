const navToggle= document.querySelector('.nav-toggle');
const navLinks= document.querySelectorAll('.nav__link');

// Define an array of possible text values
const textValues = [
  "Machine Learning Engineer",
  "Python Programmer",
  "Data Analyst",
];

// Get a reference to the <p> element
const dynamicText = document.getElementById("dynamic-text");

// Define a function to update the text
function updateText() {
  // Get a random index from the array of text values
  const randomIndex = Math.floor(Math.random() * textValues.length);
    
  // Set the text inside the <p> element to the selected text value
  dynamicText.textContent = textValues[randomIndex];
}

// Call the updateText() function every second using setInterval()
setInterval(updateText, 4000);



navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link=> {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})
