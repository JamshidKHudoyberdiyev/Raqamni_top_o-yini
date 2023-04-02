// secret number

let score = 20;
let maxScore = 20;

let guess = document.querySelector(".guess");

let check = document.querySelector(".check");
let secret_number = Math.trunc(Math.random() * 19) + 1;

console.log(secret_number, "tashqi");

function displayMessage(message) {
  document.querySelector(".cong").textContent = message;
}

check.addEventListener("click", function () {
  let message = document.querySelector(".number").value;
  if (message) {
    if (message == secret_number) {
      displayMessage("tabriklayman yutdingiz ");
      document.body.style.backgroundColor = "green";
      score--;
      document.querySelector(
        ".urunish"
      ).innerHTML = `💯 urinishlar soni:${score}`;
      document.querySelector(
        ".maxScore"
      ).innerHTML = `🎖️ eng yuqori natija::${score}`;
      guess.innerHTML = secret_number;
    }
    if (message > secret_number) {
      displayMessage("katta raqam kiritdingiz ");
      score--;
      document.querySelector(
        ".urunish"
      ).innerHTML = `💯 urinishlar soni:${score}`;
    }

    if (message < secret_number) {
      displayMessage("kichik raqam kiritdingiz ");
      score--;
      document.querySelector(
        ".urunish"
      ).innerHTML = `💯 urinishlar soni:${score}`;
    }
  } else {
    displayMessage("raqam kiritmadingiz");
  }
});

document.querySelector(".yana").addEventListener("click", function () {
  secret_number = Math.trunc(Math.random() * 19) + 1;
  score = 20;
  guess.textContent = secret_number;
  document.body.style.backgroundColor = "black";
  guess.innerHTML = "?";
  console.log(secret_number, "icki");
  document.querySelector(".urunish").innerHTML = `💯 urinishlar soni:${score}`;
});
