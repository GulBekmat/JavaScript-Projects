/* buttons */

const barcelonaBtn = document.querySelector("#barcelona");
const realmadridBtn = document.querySelector("#realmadrid");
const juventusBtn = document.querySelector("#juventus");

/* spans with score */

const barcelonaScoreEl = document.querySelector('.barcelona');
const realmadridScoreEl = document.querySelector('.realmadrid');
const juventusScoreEl = document.querySelector('.juventus');

/* scores */

let barcelonaScore = 0;
let realmadridScore = 0;
let juventusScore = 0;

/* functions */

function voteForB(){
barcelonaScore++;
console.log(barcelonaScore);
barcelonaScoreEl.innerText = barcelonaScore;
}

function voteForR(){
realmadridScore++;
console.log(realmadridScore);
realmadridScoreEl.innerText = realmadridScore;
}

function voteForJ(){
  juventusScore++;
  console.log(juventusScore);
  juventusScoreEl.innerText = juventusScore;
  }

  /* event listenner */
  
barcelonaBtn.addEventListener('click', voteForB);
realmadridBtn.addEventListener('click', voteForR);
juventusBtn.addEventListener('click', voteForJ);