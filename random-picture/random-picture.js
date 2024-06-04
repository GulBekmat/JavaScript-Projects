const images = document.querySelectorAll('.img');
const buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    // Generate a random image URL from Picsum Photos
    const randomWidth = Math.floor(Math.random() * 300) + 300;
    const randomHeight = Math.floor(Math.random() * 300) + 300;
    const randomImageUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`;
    
    // Set the src attribute of the corresponding image to the random URL
    images[i].src = randomImageUrl;
  })
}