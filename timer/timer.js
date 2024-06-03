let startTimer = function(){
  const time = document.querySelector('input').value;
  let milliseconds = time * 60000;
  const timeElement = document.createElement('p');
  const minutesElement = document.createElement('span');
  const seconds = '00';
  minutesElement.innerText = time;
  minutesElement.append('m : ');
  minutesElement.append(seconds);
  minutesElement.append('s');
  if (milliseconds < 60000){
    minutesElement.innerText = '';
  }
  const interval = setInterval(function(){
    milliseconds -= 1000;
    const minutes = milliseconds / 60000;
    console.log(minutes);
    console.log(milliseconds);
  }, 1000);
  clearInterval(interval);
  document.querySelector('.card-body').appendChild(minutesElement);
  console.log(time);
  //console.log('timer starts on blur');
  
}