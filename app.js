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
const paper2 = document.querySelector(".paper2");
const scissors2 = document.querySelector(".scissors2");
const rock2 = document.querySelector(".rock2");

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
paper2.addEventListener("click", function () {
  const clonedElement1 = paper2.cloneNode(true);
  clonedElement1.classList.remove("paper2");
  clonedElement1.classList.add("paper2Clone");
  clonedElement1.style.display = "block";
  circle.parentNode.replaceChild(clonedElement1, circle);
  modal.style.display = "none";
});
scissors2.addEventListener("click", function () {
  const clonedElement2 = scissors2.cloneNode(true);
  clonedElement2.classList.remove("scissors2");
  clonedElement2.classList.add("scissors2Clone");
  clonedElement2.style.display = "block";
  circle.parentNode.replaceChild(clonedElement2, circle);
  modal.style.display = "none";
});
rock2.addEventListener("click", function () {
  const clonedElement3 = rock2.cloneNode(true);
  clonedElement3.classList.remove("rock2");
  clonedElement3.classList.add("rock2Clone");
  clonedElement3.style.display = "block";
  circle.parentNode.replaceChild(clonedElement3, circle);
  modal.style.display = "none";
});
