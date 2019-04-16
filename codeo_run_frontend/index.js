document.addEventListener('DOMContentLoaded', () => {
  const can = document.getElementById('canvas1');
  const ctx = can.getContext('2d');

  can.width = 800;
  can.height = 400;

  const bg = document.createElement('img')
  bg.src = 'assets/desert_BG.png'

  let imgWidth = 0;

  const  scrollSpeed = 2;

  const loop = () => {
    ctx.drawImage(bg, imgWidth, 0);

    ctx.drawImage(bg, imgWidth + can.width, 0);


    imgWidth -= scrollSpeed;
    if (imgWidth <= -can.width){
      imgWidth = 0;}

    window.requestAnimationFrame(loop);
  }

  loop()
  let character = new PlayableCharacter("Mark")

  let horizontal_direction = "stop"
  document.addEventListener('keydown', function(e){
  if(e.key == 'ArrowRight'){
    console.log("right")
    horizontal_direction = "right"
    }
    if(e.key == 'ArrowLeft'){
      console.log("left")
      horizontal_direction = "left"
    }
  })

  document.addEventListener('keyup', function(e){
    if(e.key == 'ArrowRight'||e.key == 'ArrowLeft'){
    console.log("stop")
    horizontal_direction = "stop"
    }
  })

  document.addEventListener('keydown', function(e){
    if(e.key == ' '){
      character.jump()
    }
  })

  setInterval(function(){
    // Object.moveleft()
    character.horizontal_move(horizontal_direction)
    let sprite = document.querySelector('#character')
    if (character.vertical_speed > -15) {
      character.vertical_speed -= 1.2
    }
    if(parseInt(sprite.style.bottom) > 25){
      character.fall()
    }
  }, 10)


})


