const menuLabels = document.querySelector('.menu-labels');
const container = document.querySelector('.container');
const searchInput = document.querySelector('#searchInput');

const categories = []

for(let item of data) {
  categories.push(item.category);
}

//console.log("unique", getUniqueCategories(categories));
function capitalize(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function renderButtons(arr) {
  // const cats = ["all", ...getUniqueCategories(arr)];
  const cats = getUniqueCategories(arr);
  cats.unshift("all");

  //console.log("categories", cats); ['all', 'breacfast', 'lunch', 'dinner'];
  for (let i = 0; i < cats.lenght; i++){
    const btn = document.createElement('button');
    btn.className = 'menu-label';
    //btn.classList.add('menu-label');
    //btn.innerHTML = '<span>Button 1</span>', 'Button 1';
    btn.innerText = capitalize(cats[i]);
    menuLabels.appendChild(btn);
  }
}
renderButtons(data);