const textElement = document.getElementById("title-text");
const texts = ["WrapCS MSU", "Mahasarakham University"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    textElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex <= currentText.length) {
      setTimeout(typeText, 100);
      return;
    } else {
      isDeleting = true;
      setTimeout(typeText, 5000); // Pause for 5 seconds after typing
      return;
    }
  } else {
    textElement.textContent = currentText.slice(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // Switch to the next text
      setTimeout(typeText, 150); // Start typing the next text immediately
      return;
    }
  }

  setTimeout(typeText, 50); // Faster deleting speed
}

typeText();



// Go to top
let goToTopBtn = document.getElementById("goToTopBtn");
// Nav
let nav = document.getElementById("nav");

// Combine the scroll functions into a single event handler
window.onscroll = function () {
  scrollFunction();
  scrollNav();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    goToTopBtn.style.transform = 'translateY(0)';
  } else {
    goToTopBtn.style.transform = 'translateY(100px)';
  }
}

function scrollNav() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    nav.style.background = "#00000082";
  } else {
    nav.style.background = "transparent";
  }
}

// When the user clicks on the button, scroll to the top of the document
goToTopBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};