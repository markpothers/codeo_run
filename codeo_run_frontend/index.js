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
})
