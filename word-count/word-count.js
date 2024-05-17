console.log('connected');

const button = document.getElementById('calculate');

const calculate = function(){
 const input = document.querySelector('input');
 const value = input.value;
 const placeholderP = document.getElementById('word-count-placeholder');
 placeholderP.innerText = value.split(' ').length;
}
button.addEventListener('click', calculate);
