
// SPLASH SCREEN


const text = document.getElementById("welcome-text");

const screen = document.getElementById("welcome-screen");


setTimeout(() => {

  text.classList.add("show");

}, 200);


setTimeout(() => {

  screen.classList.add("hide");

}, 1700);



// TEXTO DINÁMICO


const words = [
  "Frontend",
  "Experiencias digitales",
  "Branding digital"
];


let index = 0;


const changingText =
  document.getElementById("changing-text");

const selector =
  document.getElementById("line-selector");


function updateContent() {

  changingText.style.opacity = 0;

  setTimeout(() => {

    changingText.textContent = words[index];

    changingText.style.opacity = 1;

  }, 200);


  selector.style.transform =
    `translateX(${index * 100}%)`;


  index = (index + 1) % words.length;
}


updateContent();

setInterval(updateContent, 3000);