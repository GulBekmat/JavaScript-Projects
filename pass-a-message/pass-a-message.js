/*const lastMessageDeliveredPlaceholder = document.getElementById('lastMessageDeliveredPlaceholder');*/
//lastMessageDeliveredPlaceholder.innerText = 'test';

const button = document.querySelector('button');
button.addEventListener('click', function() { 
  const input = document.querySelector('input');
  const value = input.value;

  if (value !== ''){
    const lastMessageDeliveredPlaceholder = document.getElementById('lastMessageDeliveredPlaceholder');
    lastMessageDeliveredPlaceholder.innerText = value.toUpperCase();
  }
  return;
})