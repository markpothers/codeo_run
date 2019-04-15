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


let direction = "stop"
  document.addEventListener('keydown', function(e){
    if(e.repeat) return
  if(e.key == 'ArrowRight'){
    direction = "right"
    }
    if(e.key == 'ArrowLeft'){
      direction = "left"
    }
    if(e.key == 'ArrowUp'){
      direction = "up"
    }
    if(e.key == 'ArrowDown'){
      direction = "down"
    }
  })

  document.addEventListener('keyup', function(){
    direction = "stop"
  })

  setInterval(function(){
    // Object.moveleft()
    character.move(direction)
  }, 50)


})


