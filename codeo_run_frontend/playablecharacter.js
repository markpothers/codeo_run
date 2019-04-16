class PlayableCharacter {

    constructor(name, x=660, y=220, points=0, health=100, life_time_points=0){
        const charImg = document.createElement('img')
        charImg.src = `./assets/mainChar/mainCharSheet.png`
        this.img = charImg
        this.name = name
        this.x = `${x}px`
        this.y = `${y}px`
        this.points = points
        this.health = health
        this.life_time_points = life_time_points
        this.vertical_speed = -20
        this.spawn()
    }

    spawn(){
        const character = document.createElement('img')
        character.src = `./assets/Blocky/blocky.png`
        let character_container = document.querySelector("#character_container")
        character_container.append(character)
        character.id="character"
        character.style.position = "relative"
        character.style.width = '75px'
        character.style.left = '-785px'
        character.style.bottom = '60px'
    }

    horizontal_move(horizontal_direction){
        let character = document.querySelector('#character')
        let left = parseInt(character.style.left)
        let speed = 5
            if(horizontal_direction === "left"){
                //character.style.left = `${left - speed}px`
                this.runLeft()
            }
            if(horizontal_direction === "right"){
                //character.style.left = `${left + speed}px`
                this.runRight()
            }
            if(horizontal_direction === "stop"){
                //character.style.left = `${left}px`
                this.idle()
            }
    }

    jump(){
        console.log("I'm jumping!!!")
            this.vertical_speed = 20
            this.verticalMovement()
        }

    verticalMovement(){

        let x = parseInt(this.x)
        let y = parseInt(this.y)
        this.y = `${y - this.vertical_speed}px`

        console.log("I'm falling.............")
        let character = document.querySelector('#character')
        let bottom = parseInt(character.style.bottom)
            console.log(this.vertical_speed)
            ctx2.clearRect(0, 0, can2.width, can2.height);
            if(horizontal_direction == 'right'){
            this.drawFrame(0, 0, x, y);} else{
              this.drawFrame(0, 9, x, y);
            }
    }


    drawFrame(frameX, frameY, canvasX, canvasY) {
      let width = 32
      let height = 32

      ctx2.drawImage(this.img, frameX * width, frameY * height, width, height,
      canvasX, canvasY, width * 4, height * 4);
      }


      idle() {
        if(horizontal_direction == 'stop'){
          //console.log(this)
        let x = parseInt(this.x)
        let y = parseInt(this.y)
        let cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        frameCount++;
        if (frameCount < 15) {
            window.requestAnimationFrame(() => this.idle());
            return;
          }
        frameCount = 0;
        ctx2.clearRect(0, 0, can2.width, can2.height);
        this.drawFrame(cycleLoop[currentLoopIndex], 0, x, y);
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length-1) {
          currentLoopIndex = 0;
        }
        window.requestAnimationFrame(() => this.idle());
      }
      }

      runLeft() {
        if(horizontal_direction == 'left'){
        let x = parseInt(this.x)
        let y = parseInt(this.y)
        let cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7];
        const  scrollSpeed = 15;
        //test sprite script

        frameCount++;
        if (frameCount < 5) {
            window.requestAnimationFrame(() => this.runLeft());
            return;
          }
          frameCount = 0;
          ctx2.clearRect(0, 0, can2.width, can2.height);
          this.drawFrame(cycleLoop[currentLoopIndex], 9, x, y);
          this.x = `${x -= scrollSpeed}px`
          currentLoopIndex++;
          if (currentLoopIndex >= cycleLoop.length-1) {
            currentLoopIndex = 0;
          }
          window.requestAnimationFrame(() => this.runLeft());
        }
        }

      runRight() {
        if(horizontal_direction == 'right'){
        let x = parseInt(this.x)
        let y = parseInt(this.y)
        let cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7];
        const  scrollSpeed = 15;
      //test sprite script

        frameCount++;
        if (frameCount < 5) {
            window.requestAnimationFrame(() => this.runRight());
            return;
          }
          console.log(scrollSpeed)
        frameCount = 0;
        ctx2.clearRect(0, 0, can2.width, can2.height);
        this.drawFrame(cycleLoop[currentLoopIndex], 1, x, y);
        this.x = `${x += scrollSpeed}px`
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length-1) {
          currentLoopIndex = 0;
        }
        window.requestAnimationFrame(() => this.runRight());
      }
    }

}
