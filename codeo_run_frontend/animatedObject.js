class AnimatedObject {

  constructor(img){

    this.img = document.createElement('img')
    this.img.src = img
    this.frameCount = 0
    this.currentLoopIndex = 0
  }

  animateObject(animationSet, desiredFrameCount, callback){

    if(this.direction == animationSet.direction){

      if(this.dead == true){
        this.context.clearRect(this.x, this.y, this.width, this.height);
        cancelAnimationFrame(aniOne)
        cancelAnimationFrame(aniTwo)
      }
    let cycleLoop = range(0, animationSet.frames);
    this.frameCount++;
    if (this.frameCount < desiredFrameCount) {
        let aniOne = window.requestAnimationFrame(() => this.animateObject(animationSet, desiredFrameCount, callback));
        return;
      }
    this.frameCount = 0;
    this.context.clearRect(this.x, this.y, this.width, this.height);
    if(typeof callback == 'function') callback()
    this.drawFrame(cycleLoop[this.currentLoopIndex], animationSet.yPos, this.x, this.y);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
    let aniTwo = window.requestAnimationFrame(() => this.animateObject(animationSet, desiredFrameCount, callback));
    }
  }

  infiniteScroll(){
    let imgWidth = 0;

    const  scrollSpeed = 2;

    this.img.addEventListener('load', () => {
      const loop = () => {
        this.x = imgWidth;


        this.context.drawImage(this.img, this.x, this.y);
          while(this.x < this.canvas.width) {
            this.context.drawImage(this.img, this.x += this.img.width, 0);
          }
        imgWidth -= scrollSpeed;
        if (imgWidth <= -this.img.width){
          imgWidth = 0;}


        window.requestAnimationFrame(loop);
      }
      loop()
    })
  }

  drawFrame(frameX, frameY, canvasX, canvasY) {
    this.context.drawImage(this.img, frameX * this.spritesheet.width, frameY * this.spritesheet.height, this.spritesheet.width, this.spritesheet.height,
    canvasX, canvasY, this.spritesheet.width * this.scaleFactor, this.spritesheet.height * this.scaleFactor);
  }





}
