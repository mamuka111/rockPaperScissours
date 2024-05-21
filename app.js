const paper = document.querySelector(".paper");
const button = document.querySelector(".btn.btn-warning");

const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");
const circle = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const iconsDiv = document.querySelector(".iconsDiv");
const startButton = document.querySelector(".custom-btn-warning ");

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  rock.style.display = "none";
  scissors.style.display = "none";
  paper.style.display = "none";
  circle.style.display = "block";
  circle2.style.display = "block";
  iconsDiv.style.gap = "150px";
  console.log("Button clicked");
});
circle.addEventListener("click", function () {
  modal.style.display = "block"; // Show modal
});

window.addEventListener("click", function (event) {
  //   console.log("Clicked on:", event.target);
  //   console.log("Modal:", modal);
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
button.addEventListener("click", function () {
  modal.style.display = "none";
});
