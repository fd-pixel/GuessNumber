const button1 = document.getElementById("btn1");
const tahmin = document.getElementById("number");
const mesaj = document.getElementById("message");
const mesaj2 = document.getElementById("message2");
const mesaj3 = document.querySelector(".message3");
let r = Math.trunc(Math.random() * 100);

// console.log(tahmin);
// console.log(typeof(tahmin.value));
// console.log(typeof(parseInt(tahmin.value)));

button1.addEventListener("click", guess);
tahmin.addEventListener("keyup", function (event) {
  if (event.code == "Enter") {
    guess();
  }
});

// });
let counter = 5;
function guess() {
  if (counter > 0) {
    
    mesaj.style.visibility = "visible";
    mesaj2.style.visibility = "visible";
    mesaj3.style.visibility = "visible";
    if (parseInt(tahmin.value) > 100) {
      mesaj.textContent = "The number should be smaller than 100";
      mesaj2.textContent = `You have ${counter - 1} attempts left`;
    } else if (parseInt(tahmin.value) < r) {
      mesaj.innerHTML = "Please Up";

      mesaj2.textContent = `You have ${counter - 1} attempts left`;
    } else if (parseInt(tahmin.value) > r) {
      mesaj.textContent = "Please Down";

      mesaj2.textContent = `You have ${counter - 1} attempts left`;
    } else if (parseInt(tahmin.value) === r) {
      mesaj.textContent = "Congrats";
      mesaj2.textContent = `You have found the number ${r} at your ${
        6 - counter}. attempt`;
        setTimeout(again,100);
    }
  }
  
  //reset(tahmin.value)
  mesaj3.textContent += `your ${6 - counter}. attempt is ${tahmin.value}`;
  tahmin.value = "";
  counter--;
  
  if (parseInt(tahmin.value) != r && counter === 0) {
    mesaj.textContent = "Sorry. No attempts left.";
    mesaj2.textContent = "You lose the game";

    setTimeout(again,100);
  }
}
function again() {
  let nextGame = confirm("Again?");
    mesaj.style.visibility = "hidden";
    mesaj2.style.visibility = "visible";
    mesaj3.style.visibility = "hidden";
  if (nextGame = true) {
    r = Math.trunc(Math.random() * 100);
    counter=6;
    mesaj.textContent = "";
    mesaj2.textContent = `You have ${counter - 1} attempts left`;
    mesaj3.textContent = "";
    return (counter = 5)
  } else if (nextGame = false) {
    button1.disabled = true;
    tahmin.disabled=true;
  }
}

//let nextgame = confirm("again?");
// if ((nextgame = true)) {
//   guess();
// } else {
//   button1.disabled = true;
// }
