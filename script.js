const lines = [
  "Hey! I'm Sarthki, a CSE student who loves turning ideas into code.",
  "Exploring algorithms, web development, and system design.",
  "Building projects with JavaScript, Python, and data analysis tools.",
  "Always learning, always building, always improving."
];

const textElement = document.getElementById("introText");

let currentLine = 0;

function showNextLine() {

  textElement.style.opacity = 0;

  setTimeout(() => {

    textElement.textContent = lines[currentLine];

    textElement.style.opacity = 1;

    currentLine = (currentLine + 1) % lines.length;

  }, 500);
}

textElement.textContent = lines[currentLine];
currentLine++;

let interval = setInterval(showNextLine, 3000);

/* pause animation if tab not active (performance improvement) */

document.addEventListener("visibilitychange", () => {

  if (document.hidden) {
    clearInterval(interval);
  } else {
    interval = setInterval(showNextLine, 3000);
  }

});
