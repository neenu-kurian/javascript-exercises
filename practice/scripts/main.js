//hello world using document.queryselector

let myHeading=document.querySelector('h1');
myHeading.textContent="Hello world!"

//to associate an onclick to a html element...this causes a click to be fired if we click anywhere in html
document.querySelector('html').onclick=function(){
    console.log("You clicked me")
}

//to  change 2 images dynamically
let myImage=document.querySelector('img')
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src')
    if(mySrc==='./images/chrome1.jpg')
    myImage.setAttribute('src','./images/chrome2.jpg')
    else{
        myImage.setAttribute('src','./images/chrome1.jpg')
    }
}

//changing the page's title to a personalized welcome message when the user first navigates to the site

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Chrome is cool, ' + myName;
  }

if(!localStorage.getItem('name')){
    setUserName()
}

else{
    myHeading.textContent="chrome is cool ,"+ localStorage.getItem('name')
}

myButton.onclick = function() {
    setUserName();
  }


  //for learning prototype inheritance

function Person(name,age){
    this.name='neenu'
    this.age=23
  }
  
Person.prototype.details="neenu kurian"

Person.prototype.getSomething=function(){
    console.log(this.name)
    return this.name;
}

console.log("person prototype",Person.prototype)//which will have oly details and getsomething, not name and age
console.log("object prototype", Object.prototype)


let person1=new Person('kurian',23);
console.log("person1 prototype",person1.__proto__)//which give same result as Person.protoytpe

//to obtain json
let header=document.querySelector('h1')
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request =new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType='json'
request.send();

request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    
  }


  function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
  }

