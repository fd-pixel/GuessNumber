const button1 = document.getElementById("btn1");
const tahmin = document.getElementById("number");
const mesaj = document.getElementById("message");
const mesaj2 = document.getElementById("message2");
let r = Math.trunc(Math.random() * 100);

// console.log(tahmin);
// console.log(typeof(tahmin.value));
// console.log(typeof(parseInt(tahmin.value)));

button1.addEventListener("click", guess);

let counter = 5;
function guess() {
  if (counter > 0) {
    if (parseInt(tahmin.value) > 100) {
      mesaj.textContent = "The number should be smaller than 100";
      mesaj2.textContent = `You have ${counter - 1} attempts left`;
    } else if (parseInt(tahmin.value) < r) {
      mesaj.textContent = "Please Up";

      mesaj2.textContent = `You have ${counter - 1} attempts left`;
    } else if (parseInt(tahmin.value) > r) {
      mesaj.textContent = "Please Down";

      mesaj2.textContent = `You have ${counter - 1} attempts left`;
    } else if (parseInt(tahmin.value) === r) {
      mesaj.textContent = "Congrats";
      mesaj2.textContent = `You have found the number ${r} at your ${6-counter}. attempt`;
      button1.disabled = true;
  }
    }
    counter--
    
if (parseInt(tahmin.value) != r && counter === 0) {
    mesaj.textContent = "Sorry. No attempts left.";
    mesaj2.textContent = "You lose the game";
    button1.disabled = true;
  }
  
}



