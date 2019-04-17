class PlayableCharacter extends AnimatedObject{

    constructor(name, x=660, y=220, points=0, health=100, life_time_points=0){

        super(`./assets/mainChar/mainCharSheet.png`)

        this.name = name
        this.x = x
        this.y = y
        this.points = points
        this.health = health
        this.life_time_points = life_time_points
        this.vertical_speed = -20
        this.scaleFactor = 4
        this.direction = 'stop'
        this.spawn()


        this.spritesheet = {


          width: 32,
          height: 32,

          idle: {

            direction: 'stop',
            frames: 12,
            yPos: 0

          },

          runLeft: {

            direction: 'left',
            frames: 7,
            yPos: 9

          },

          runRight: {

            direction: 'right',
            frames: 7,
            yPos: 1

          }

        }
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

    // horizontal_move(direction){
    //     let character = document.querySelector('#character')
    //     let left = parseInt(character.style.left)
    //     let speed = 5
    //         if(horizontal_direction === "left"){
    //             //character.style.left = `${left - speed}px`
    //             this.runLeft()
    //         }
    //         if(horizontal_direction === "right"){
    //             //character.style.left = `${left + speed}px`
    //             this.runRight()
    //         }
    //         if(horizontal_direction === "stop"){
    //             //character.style.left = `${left}px`
    //             this.idle()
    //         }
    // }

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


    // drawFrame(frameX, frameY, canvasX, canvasY) {
    //   ctx2.drawImage(this.img, frameX * this.spritesheet.width, frameY * height, width, height,
    //   canvasX, canvasY, width * 4, height * 4);
    //   }


      idle() {
        this.animateObject(this.spritesheet.idle, 15)
      }

      runLeft() {
        this.animateObject(this.spritesheet.runLeft, 5, () => {this.x -= 30})
      }

      runRight() {
        this.animateObject(this.spritesheet.runRight, 5, () => {this.x += 30})
      }
}
