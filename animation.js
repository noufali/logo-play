setInterval(function(){ animate(); }, 5000);

animate();

function animate() {
  var x = 100;

  for (let i=0;i<21;i++){
    let bounce = new Bounce();

    bounce.translate({
      from: { x: 1000, y: 10 },
      to: { x: 0, y: 0},
      duration: 9000-x
    });

    let animation = "d-animation" + i;
    bounce.define(animation);
    bounce.applyTo(document.getElementById('d' + i));
    x-=100;
  }

  var y = 400;

  for (let j=0;j<30;j++){
    let bounce = new Bounce();

    bounce.translate({
      from: { x: -1000, y: 10 },
      to: { x: 0, y: 0},
      duration: 10000-y
    });

    let animation = "p-animation" + j;
    bounce.define(animation);
    bounce.applyTo(document.getElementById('p' + j));
    y-=100;
  }

  var z = 300;
  for (let a=0;a<41;a++){
    let bounce = new Bounce();

    bounce.translate({
      from: { x: -9000, y: 230 },
      to: { x: 0, y: 0},
      duration: 10000-z
    });

    let animation = "a-animation" + a;
    bounce.define(animation);
    bounce.applyTo(document.getElementById('a' + a));
    z-=100;
  }
}



















//
// var c = 1060;
// var num = 135;
//
// for (let i=0;i<10;i++){
//   var img = document.createElement("img");
//   var bounce7 = new Bounce();
//   img.src = "img/p.png"
//   img.id = "p";
//   img.style.top= "440px";
//   img.style.left = c + "px";
//
//   // bounce7.scale({
//   //   from: { x: 1, y: 1},
//   //   to: { x: 10, y: 1 },
//   //   easing: "sway",
//   //   duration: 300,
//   //   delay: 30,
//   // })
//   //console.log(z + "px");
//   document.body.appendChild(img);
//   //bounce7.define("p-animation");
//   //bounce4.applyTo(document.getElementById('p'));
//   c+= 135;
// }







































// var one,two,three,four;
// var x = 0.001;
// var x2 = 0.001;
// var x3 = 0.001;
// var x4 = 0.001;
// function preload(){
//   one = loadImage('img/rotate1.png');
//   two = loadImage('img/rotate2.png');
//   three = loadImage('img/rotate3.png');
//   four = loadImage('img/rotate4.png');
// }
// function setup()
// {
//   createCanvas(900,900);
// }
//
// function draw()
// {
//   background('#FAC9C0');
//   translate(width/2,height/2);
//   ellipse(0,0,10,10);
//   fill('#CE2927');
//   noStroke();
//
//   push();
//   rotate(x);
//   image(one,-300,-300,600,600);
//   pop();
//
//   push();
//   rotate(-x2);
//   image(two,-185,-185,370,370);
//   pop();
//
//   push();
//   rotate(x3);
//   image(three,-110,-110,220,220);
//   pop();
//
//   push();
//   rotate(-x4);
//   image(four,-60,-60,120,120);
//   pop();
//
//   x+=0.05;
//   x2+=0.01;
//   x3+=0.009;
//   x4+=0.006;
//
//
//   //console.log('hi');
// }
