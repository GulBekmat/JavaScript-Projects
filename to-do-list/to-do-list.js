let items = [];
function handleClick() {
  const button = document.querySelectorAll("button");
  let task = document.getElementById("input");
  for(let i = 0; i < button.length; i++){
    if(button[i].id === "create"){
      items.push(task.value);
      document.getElementById("todo-list").innerHTML = '';
      for(let i = 0; i < items.length; i++){
        const newElement = document.createElement('p');
        newElement.innerText = items[i];
        document.getElementById("todo-list").appendChild(newElement);
      }
    } else {
      console.log('clear');
      items = [];
      document.getElementById("todo-list").innerHTML = '';
    }
  }
}

function handleAdd(){
  let taskInput = document.getElementById('input'); // get input element
  if (items.includes(taskInput.value)){
    return;
  }
  items.push(taskInput.value); // save to do item in array
  taskInput.value = ''; // clear input field
  console.log(items);
  document.getElementById("todo-list").innerHTML = '';
  for(let i = 0; i < items.length; i++){
    const newElement = document.createElement('p');
    newElement.innerText = items[i];
    const parentElement = document.getElementById("todo-list"); //div

    if (items[i] === 'css'){
      parentElement.insertBefore(newElement, parentElement.childNodes[2]);
    } else {
      parentElement.appendChild(newElement); //appending p to div
    }
    //console.log(parentElement.childNodes);
  }
}

function handleClear(){
  items = [];
  document.getElementById("todo-list").innerHTML = '';
}