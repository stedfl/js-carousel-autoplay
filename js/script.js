// **Consegna**
// Facciamo funzionare il carousel, oltre che con i bottoni anche in autoplay al caricamento della pagina.
// **BONUS:**
// Passando con il mouse sopra le immagini l’autoplay si ferma per poi ripartire quando il mouse esce dallo slider
// Buon lavoro!


const imageArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
];

let imagesTags = "";
const sliderBox = document.getElementById("items-wrapper");
const thumbBox = document.querySelector(".thumb-slider");
for (let i = 0; i < imageArray.length; i++) {
  imagesTags += `
  <img class="" src="img/${imageArray[i]}" alt="${imageArray[i]}"</img>
  `;
}
sliderBox.innerHTML = imagesTags;
thumbBox.innerHTML = imagesTags;

imagesList = document.querySelectorAll("#items-wrapper img");
thumbList = document.querySelectorAll(".thumb-slider img");
let counterImages = 0;
imagesList[counterImages].classList.add("active");
thumbList[counterImages].classList.add("active");


const btnUp = document.querySelector(".btn-arrow.up");
const btnDown = document.querySelector(".btn-arrow.down");

// MODALITÀ COMPATTA CON MODULO E FUNZIONE
btnDown.addEventListener("click", function() {
  slider("down");
});

btnUp.addEventListener("click", function() {
  slider("up");
});


function slider(direction) {
  imagesList[counterImages].classList.remove("active");
  thumbList[counterImages].classList.remove("active");
  if (direction === "up") {
      counterImages--;
      if (counterImages < 0 ) {
        counterImages = (imagesList.length - 1);
      } 
  } else if (direction === "down") {
      counterImages++;
      if (counterImages >= imagesList.length) {
        counterImages = 0;
      }
  }
  imagesList[counterImages].classList.add("active");
  thumbList[counterImages].classList.add("active");
}

setInterval(function() {
  slider("down")
}, 1500);