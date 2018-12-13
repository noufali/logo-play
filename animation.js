var status = 0;

setInterval(function(){
  if (status == 0){
    console.log('here');
    status = 1;
  } else {
    console.log('nope');
    status = 0;
  }
  animate();
}, 2800);

animate();

function animate() {
  console.log(status);
  var x = 100;

  for (let i=0;i<21;i++){
    let bounce = new Bounce();

    // bounce.translate({
    //   from: { x: 1000, y: 10 },
    //   to: { x: 0, y: 0},
    //   duration: 9000-x
    // });
    if (status == 0){
      bounce.rotate({
        from: 0,
        to: 360,
        duration: 7000
      });
    } else {
      bounce.rotate({
        from: 360,
        to: 0,
        duration: 7000
      });
    }
    let animation = "d-animation" + i;
    bounce.define(animation);
    bounce.applyTo(document.getElementById('d' + i));
    x-=100;
  }

  var y = 400;

  for (let j=0;j<30;j++){
    let bounce = new Bounce();

    // bounce.translate({
    //   from: { x: -1000, y: 10 },
    //   to: { x: 0, y: 0},
    //   duration: 10000-y
    // });

    if (status == 0){
      bounce.rotate({
        from: 0,
        to: 360,
        duration: 7000
      });
    } else {
      bounce.rotate({
        from: 360,
        to: 0,
        duration: 7000
      });
    }

    let animation = "p-animation" + j;
    bounce.define(animation);
    bounce.applyTo(document.getElementById('p' + j));
    y-=100;
  }

  var z = 300;
  for (let a=0;a<41;a++){
    let bounce = new Bounce();

    // bounce.translate({
    //   from: { x: -9000, y: 230 },
    //   to: { x: 0, y: 0},
    //   duration: 10000-z
    // });

    // bounce.skew({
    //   from: { x: 0, y: 0 },
    //   to: { x: 20, y: 0 }
    // });

    let animation = "a-animation" + a;
    bounce.define(animation);
    bounce.applyTo(document.getElementById('a' + a));
    z-=100;
  }
}
