class StaticObject {

    constructor(src){
      this.img = document.createElement('img')
      this.img.src = src
      this.canvas = document.querySelector('#foreground');
      this.context = this.canvas.getContext('2d');

      StaticObject.all.push(this)
    }

    infiniteScroll(){
      let imgWidth = 0;

      const  scrollSpeed = 2;

      this.img.addEventListener('load', () => {
        const loop = () => {
          this.context.clearRect(this.x + scrollSpeed, this.y, this.width, this.height);
          this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
          this.x -= scrollSpeed;
          if(this.x < -200){
          return;
          }
          window.requestAnimationFrame(loop);
      }
        loop()
      })
    }

    randomVerticalPosition(){
        return Math.random() * (150 - 75) + 75;
    }

}
StaticObject.all = []
