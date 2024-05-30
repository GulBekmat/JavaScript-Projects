const container = document.querySelector(".container");
const text = document.querySelector("#text");
const timerEl = document.querySelector("#timer");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation(){
  text.innerText = "Breath In";
  container.className = "container grow";
  let counter = 1;
  timerEl.innerText = counter;
  let interval = setInterval(() => {
    counter++;
    timerEl.innerText = counter;
  }, 1000);

  setTimeout(() =>{
    text.innerText = "Hold";
    clearInterval(interval);
    timerEl.innerText = "";

    setTimeout(() => {
      counter = 1;
      timerEl.innerText = counter;
      let interval2 = setInterval(() => {
        counter++;
        timerEl.innerText = counter;
      }, 1000);
      text.innerText = "Breath Out";
      container.className = "container shrink";
      setTimeout(() => {
        clearInterval(interval2);
      }, 2000);
    }, holdTime);
  }, breathTime);
}
breathAnimation();
setInterval(breathAnimation, totalTime);