class Minotaur extends AnimatedObject{

  constructor(health=200, x=550, y=220){

      super(`./assets/Minotaur/minsheet.png`)

      this.x = x
      this.y = y
      this.width =  192
      this.height = 192
      this.canvas = document.querySelector('#enemies');
      this.context = this.canvas.getContext('2d');
      this.health = health
      this.healthBar = document.createElement('img')
      this.healthBar.height = 27
      this.healthBar.src = `./assets/Counters/FullHealthBar.png`
      this.invulnerable = false
      this.dead = false
      //Counter.changeHealth(this.health)

      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      this.scaleFactor = 2
      this.direction = 'stop'


      this.spritesheet = {


        width: 96,
        height: 96,

        idle: {

          direction: 'stop',
          frames: 4,
          yPos: 0

        },

        runLeft: {

          direction: 'left',
          frames: 7,
          yPos: 11

        },

        runRight: {

          direction: 'right',
          frames: 7,
          yPos: 1

        }
      }
      this.lazyWalk()
      Minotaur.all.push(this)
  }

  idle() {
    this.animateObject(this.spritesheet.idle, 15)
  }
  runLeft() {
    this.direction = 'left'
    this.animateObject(this.spritesheet.runLeft, 5, () => {this.x -= 2})
  }

  runRight() {
    this.direction = 'right'
    this.animateObject(this.spritesheet.runRight, 5, () => {this.x += 2})
  }

  lazyWalk(){
    setInterval(() => {
      let arr = [this.runRight, this.runLeft, this.idle]
      let rand = Math.floor(Math.random() * arr.length)
      arr[rand].bind(this)()
    }, 500)
  }

  changeHealth(){
    const healthCan = document.querySelector('#health_bar');
    const healthCon = healthCan.getContext('2d');
    healthCan.width = window.innerWidth;
    healthCan.height = 400;


      const loop = () => {
        this.healthBar.width = (this.health/100)*135
        healthCon.clearRect(0, 0, healthCan.width, healthCan.height);
        healthCon.drawImage(this.healthBar, this.x, this.y - 20, this.healthBar.width, this.healthBar.height);
        window.requestAnimationFrame(loop);
    }
      loop()
  }
}
Minotaur.all = []
