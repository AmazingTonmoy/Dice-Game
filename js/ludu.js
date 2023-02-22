document.getElementById("btn-game").addEventListener("click", function () {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let randomNum1 = document
    .getElementById("img-1")
    .setAttribute("src", `images/dice${randomNumber1}.png`);
  let randomNum2 = document
    .getElementById("img-2")
    .setAttribute("src", `images/dice${randomNumber2}.png`);

  let heading = document.getElementById("heading");

  if (randomNumber1 === randomNumber2) {
    heading.innerText = "🏁 Draw 🏁";
  } else if (randomNumber1 > randomNumber2) {
    heading.innerText = "🚩 Player 1 Win";
  } else {
    heading.innerText = "Player 2 Win 🚩";
  }

  const cardId = document.getElementById("btn-game");
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  cardId.style.color = randomColor;
  cardId.innerText = "Play Again";
});
