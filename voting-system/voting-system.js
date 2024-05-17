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

/*function voteForB(){
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

barcelonaBtn.addEventListener('click', voteForB);
realmadridBtn.addEventListener('click', voteForR);
juventusBtn.addEventListener('click', voteForJ);*/

function vote(event){
  const id = event.target.id;
  console.log(id);
  if (id === "barcelona"){
    barcelonaScore++;
    barcelonaScoreEl.innerText = barcelonaScore;
  }else if (id === "realmadrid"){
    realmadridScore++;
    realmadridScoreEl.innerText = realmadridScore;
  }else {
    juventusScore++;
    juventusScoreEl.innerText = juventusScore;
  }
}

const allBtns = document.querySelectorAll(".btn");

for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener('click', vote);
}