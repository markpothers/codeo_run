document.addEventListener('DOMContentLoaded', () => {
  const can = document.querySelector('#background');
  const ctx = can.getContext('2d');
  const can2 = document.querySelector('#foreground');
  const ctx2 = can.getContext('2d');


  can.width = window.innerWidth -20;
  can.height = 400;
  can2.width = window.innerWidth -20;
  can2.height = 400;

  const bg = document.createElement('img')
  bg.src = 'assets/desert_BG.png'

  let imgWidth = 0;

  const  scrollSpeed = 2;


bg.addEventListener('load', () => {
  const loop = () => {
    let imgPos = imgWidth;


    ctx.drawImage(bg, imgPos, 0);
      while(imgPos < can.width) {
        ctx.drawImage(bg, imgPos += bg.width, 0);
      }
    imgWidth -= scrollSpeed;
    if (imgWidth <= -bg.width){
      imgWidth = 0;}


    window.requestAnimationFrame(loop);
  }



  loop()
  bullIdle()


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
})
