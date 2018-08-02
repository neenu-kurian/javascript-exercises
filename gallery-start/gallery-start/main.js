var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');


/* Looping through images */

function clickImage(event)
{
  let newImage=event.target.getAttribute('src')
  document.querySelector('.displayed-img').setAttribute('src',newImage);
}

for(let i=1;i<=5;i++){
  
  var newImage = document.createElement('img');
  newImage.setAttribute('src', `./images/pic${i}.jpg`);
  thumbBar.appendChild(newImage);
  document.addEventListener('click',clickImage)
}
/* Wiring up the Darken/Lighten button */



function darkenImage(){
  
  if(document.querySelector('.displayed-img').style.opacity==1)
  document.querySelector('.displayed-img').style.opacity=0.4;
  else
  document.querySelector('.displayed-img').style.opacity=1;
}

btn.addEventListener('click',darkenImage);