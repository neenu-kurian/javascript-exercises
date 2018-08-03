let canvas=document.querySelector('canvas');
let ctx=canvas.getContext('2d')

//set width and height of canvas element to borwser viewport
let width=canvas.width=window.innerWidth
let height=canvas.height=window.innerHeight

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

//Modelling balls
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;//velocity
    this.velY = velY;
    this.color = color;
    this.size = size;
  }


  Ball.prototype.draw = function() {
    ctx.beginPath();//to state we wnt to draw a shape
    ctx.fillStyle = this.color;//the color of the shape
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);//to trace an arc on the paper
    ctx.fill();//finish drawing the path we started with beginPath(), and fill 
    //the area it takes up with the color we specified earlier in fillStyle
  }
  
  let testBall = new Ball(50, 100, 4, 4, 'blue', 10)
  testBall.draw();

  //The first four parts of the function check whether the ball has reached the edge of the canvas. 
  //If it has, we reverse the polarity of the relevant velocity to make the ball travel in the opposite direction.
  Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }

  var balls = [];

  function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    while (balls.length < 25) {
      var size = random(10,20);
      var ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size,width - size),
        random(0 + size,height - size),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        size
      );
      balls.push(ball);
    }
  
    for (var i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
    }
  
    requestAnimationFrame(loop);
  }

  loop();
  