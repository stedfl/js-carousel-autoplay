const imageArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
];

let imagesTags = "";
const sliderWrap = document.querySelector(".slider");
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

let clock = setInterval(function() {
  slider("down")
}, 1500);

sliderWrap.addEventListener("mouseover", function() {
  clearInterval(clock);
});

sliderWrap.addEventListener("mouseout", function() {
  clock = setInterval(function() {
    slider("down")
  }, 1500);
});