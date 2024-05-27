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
const submitButton = document.querySelector(".submitButton");
const restartButton = document.querySelector(".restartButton");
const yourScore = document.querySelector(".yourScore");
const CpuScore = document.querySelector(".CpuScore");
const yourJs = document.querySelector(".yourJs");
const CpuJs = document.querySelector(".CpuJs");
let isButtonClicked = false;
const rockPaperScissors = [paper2, scissors2, rock2];
const rockPaperScissors2 = [paper2, scissors2, rock2];
const clonedClasnames = ["paper2Clone", "scissors2Clone", "rock2Clone"];

function activateHover() {
  circle.classList.add("hover-effect");
  setTimeout(() => {
    circle.classList.remove("hover-effect");
  }, 1000); // Remove the hover effect after 300 milliseconds
}

submitButton.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 3);
  const clonedElement4 = rockPaperScissors[random].cloneNode(true);
  if (!document.contains(circle)) {
    clonedElement4.className = "";
    clonedElement4.classList.add("rock2Clone");
    circle2.parentNode.replaceChild(clonedElement4, circle2);
    isButtonClicked = true;
    console.log(random);
  } else if (document.contains(circle)) {
    activateHover();
  }
});

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  rock.style.display = "none";
  scissors.style.display = "none";
  paper.style.display = "none";
  circle.style.display = "block";
  circle2.style.display = "block";
  submitButton.style.display = "block";
  restartButton.style.display = "block";
  yourScore.style.display = "block";
  CpuScore.style.display = "block";
  iconsDiv.style.gap = "150px";
  console.log("Button clicked");
});

circle.addEventListener("click", function () {
  modal.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
button.addEventListener("click", function () {
  modal.style.display = "none";
});
rockPaperScissors2.map((item, index) => {
  item.addEventListener("click", function () {
    let clonedElement = item.cloneNode(true);
    item.classList.forEach((className) => {
      clonedElement.classList.remove(className);
    });
    clonedElement.classList.add(clonedClasnames[index]);
    circle.parentNode.replaceChild(clonedElement, circle);
    modal.style.display = "none";
  });
});
// paper2.addEventListener("click", function () {
//   // clonedElement1.classList.remove("paper2");
//   clonedElement1.classList.add("paper2Clone");
//   clonedElement1.style.display = "block";
//   circle.parentNode.replaceChild(clonedElement1, circle);
//   modal.style.display = "none";
// });
// const clonedElement1 = paper2.cloneNode(true);

// scissors2.addEventListener("click", function () {
//   // clonedElement2.classList.remove("scissors2");
//   clonedElement2.classList.add("scissors2Clone");
//   clonedElement2.style.display = "block";
//   circle.parentNode.replaceChild(clonedElement2, circle);
//   modal.style.display = "none";
// });
// const clonedElement2 = scissors2.cloneNode(true);

// rock2.addEventListener("click", function () {
//   // clonedElement3.classList.remove("rock2");
//   clonedElement3.classList.add("rock2Clone");
//   clonedElement3.style.display = "block";
//   circle.parentNode.replaceChild(clonedElement3, circle);
//   modal.style.display = "none";
// });
// const clonedElement3 = rock2.cloneNode(true);
