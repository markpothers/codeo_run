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

  })


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
    StaticObject.scroll()

    character.horizontal_move(horizontal_direction)
    let sprite = document.querySelector('#character')
    if (character.vertical_speed > -15) {
      character.vertical_speed -= 1.2
    }
    if(parseInt(sprite.style.bottom) > 25){
      character.fall()
    }
  }, 10)

  setInterval(function(){
    new Platform('log', `./assets/Platforms/log.png`, 250)
  }, 5000)

  setInterval(function(){

    let coin1 = new Item("coin1", `./assets/Item/coin1.png`, 50);
    let energydraw = new Item("energydraw", `./assets/Item/energydraw.png`, 50);
    let poison = new Item("poison", `./assets/Item/poison.png`, 50);
    let fuel = new Item("fuel", `./assets/Item/fuel.png`, 50);
    let batterydown = new Item("batterydown", `./assets/Item/batterydown.png`, 50)

    Item.pickRandomItem();
    
  }, 2000)


})
