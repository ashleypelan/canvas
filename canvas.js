// function getHSL(lightness) {
//   var hue = 160;
//   var saturation = "100%";
//
//   var string = "hsl("+ hue + ", " + saturation + ", " + lightness + "%)";
//   return string;
// }
//
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex ;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }
//
// var lightness = getRandomInt(8, 50);
// var lightnessArray = [lightness, lightness + 8, lightness + 16, lightness + 24,
//                       lightness + 32, lightness + 40];
//
// shuffle(lightnessArray);

var canvas = document.getElementById("canvasBoard");
  canvas.addEventListener("onClick", function() {
});

var colour = document.querySelector("#colour").value;
  colour.addEventListener("click", function() {
  alert("pick a colour");
});

var context = canvas.getContext('2d');

var createSquare = document.getElementById("square");
createSquare.addEventListener("click", function() {
  context.beginPath();
  context.rect(50, 50, 30, 30);
  context.fillStyle = colour;
  context.fill();
});


var createCircle = document.getElementById("circle");
createCircle.addEventListener("click", function() {
  context.beginPath();
  context.arc(200, 200, 30, 0, Math.PI*2);
  context.fillStyle = colour;
  context.fill();
});



//make on big square and little squares
// context.fillStyle = '#ff7700';
// context.fillRect(0, 0, 400, 300);
//
// for(var x = 0; x < canvas.width; x += 25){
//   for(var y = 0; y < canvas.height; y += 25){
//     context.fillRect(x, y, 20, 20);
//   }
// }
//
// var canvas = document.getElementById('example3');
// var context = canvas.getContext('2d');
// context.fillStyle = '#ff7700';

//make the box go across the screen
// var time = false;
//
// var x = -100;
//
// var loop = function(){
//
//   var now = new Date().getTime();
//   var d = now - (time || now);
//   time = now;
//
//   context.clearRect(0, 0, canvas.width, canvas.height);
//
//   context.fillRect(x, 100, 100, 100);
//
//   x += 0.1 * d;
//
//   if(x > canvas.width){
//     x = -100;
//   }
//
//   requestAnimationFrame(loop);
//
// };
//
// loop();

// function draw_b() {
//   var b_canvas = document.getElementById("b");
//   var b_context = b_canvas.getContext("2d");
//   b_context.fillRect(50, 25, 150, 100);
// }

// var circle = document.getElementById("canvasBoard");
// var ctx = circle.getContext("2d");
// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();
