class PlayableCharacter extends AnimatedObject{

    constructor(name, health=100, points=0, x=100, y=220,  life_time_points=0, pcPositions = []){

        super(`./assets/mainChar/mainCharSheet.png`)

        this.name = name
        this.falls = true
        this.x = x
        this.y = y
        this.width = 128
        this.height = 128
        this.bottom = this.y + this.height
        this.canvas = document.querySelector('#foreground');
        this.context = this.canvas.getContext('2d');
        this.points = points
        this.invulnerable = false
        this.health = health
        this.life_time_points = life_time_points
        this.vertical_speed = -20
        this.jumpLimit = 1
        Counter.changeScore(this.points)
        Counter.changeHealth(this.health)
        allPcs.push(this)
        this.pcPositions = pcPositions;

        this.scaleFactor = 4
        this.direction = 'stop'


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

    verticalMovement(){
        this.y -= this.vertical_speed

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if(this.direction == 'stop'){
          this.drawFrame(0, 0, this.x, this.y);
          this.pcPositions = [this.x, this.y];
          //console.log(this.pcPositions)

        } else if(this.direction == 'right' ){
          this.x += 7
          this.drawFrame(0, 0, this.x, this.y);
          this.pcPositions = [this.x, this.y];
         // console.log(this.pcPositions)

        } else if(this.direction == 'left'){
          this.x -= 7
          this.drawFrame(0, 8, this.x, this.y);
          this.pcPositions = [this.x, this.y];
         // console.log(this.pcPositions);

        }

    }

    idle() {
      this.animateObject(this.spritesheet.idle, 15)
      this.pcPositions = [this.x, this.y];
    }

    runLeft() {
      this.animateObject(this.spritesheet.runLeft, 5, () => {this.x -= 30})
      this.pcPositions = [this.x, this.y];
    }

    runRight() {
      this.animateObject(this.spritesheet.runRight, 5, () => {this.x += 30})
      this.pcPositions = [this.x, this.y];
    }

    knockbackLeft(){
      this.direction = 'left'
      this.vertical_speed = 10
      this.verticalMovement()
    }

    knockbackRight(){
      this.direction = 'right'
      this.vertical_speed = 10
      this.verticalMovement()
    }



}
const allPcs = [];
