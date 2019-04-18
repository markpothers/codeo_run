window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

function range(start, end, step = 1) {

  const length = Math.floor(Math.abs((end - start) / step)) + 1;
  return Array.from(Array(length), (x, index) => start + index * step);

}

document.addEventListener('DOMContentLoaded', () => {
  const can = document.querySelector('#background');
  let object_container = document.querySelector("#character_container")
  object_container.style.width = window.innerWidth
  const ctx = can.getContext('2d');
  const can2 = document.querySelector('#foreground');
  const ctx2 = can.getContext('2d');


  can.width = window.innerWidth;
  can.height = 400;
  can2.width = window.innerWidth;
  can2.height = 400;

  splashScreen()

  const bg = new Landscape('assets/desert_BG.png', 'bg')
  bg.scroll()


  let scoreboard = new Counter(100, 100)
  let character = new PlayableCharacter("Mark")
  character.idle()

  document.addEventListener('keydown', function(e){
    if(e.repeat) return
  if(e.key == 'ArrowRight'){
    character.direction = "right"
    character.runRight()
    }
    if(e.key == 'ArrowLeft'){
      character.direction = "left"
      character.runLeft()
    }
  })

  document.addEventListener('keyup', function(e){
    if(e.key == 'ArrowRight'||e.key == 'ArrowLeft'){
    character.direction = "stop"
    character.idle()
    }
    Landscape.saveGame(character)
  })

  document.addEventListener('keydown', function(e){
    if(e.repeat) return
    if(e.key == ' '){
      character.vertical_speed = 20

      character.verticalMovement()
    }
  })

  setInterval(function(){
    StaticObject.scroll()
    collisionCheckAllPlatforms()
    if (character.vertical_speed > -15) {
      character.vertical_speed -= 1.2
    }
    if(parseInt(character.y) < 220){
      character.verticalMovement()
    }
  }, 10)


  let nextPlatformInterval = function(){
    return ((Math.floor(Math.random() * 5000) + 1500))  // 1.5 sec + 0 to 5 sec (i.e. 1.5 to 6.5 sec interval)
  }

  let nextItemInterval = function(){
    return ((Math.floor(Math.random() * 3000) + 500))  // 0.5 sec + 0 to 3 sec (i.e. 0.5 to 3.5 sec interval)
  }

  setInterval(function(){
    Platform.choosePlatform()
       }, nextPlatformInterval())

   setInterval(function(){
     Item.pickRandomItem();
   }, nextItemInterval())


})
