class AnimatedObject {

  constructor(img){

    this.img = document.createElement('img')
    this.img.src = img
    this.frameCount = 0
    this.currentLoopIndex = 0
    this.canvas = document.querySelector('#foreground');
    this.context = this.canvas.getContext('2d');
  }

  animateObject(animationSet, desiredFrameCount, callback){
    const can2 = document.querySelector('#foreground');
    const ctx2 = can2.getContext('2d');

    console.log(this.direction, animationSet.direction)
    if(this.direction == animationSet.direction){

      console.log('we made it')

    let cycleLoop = range(0, animationSet.frames);
    this.frameCount++;
    if (this.frameCount < desiredFrameCount) {
        window.requestAnimationFrame(() => this.animateObject(animationSet, desiredFrameCount, callback));
        return;
      }
    this.frameCount = 0;
    ctx2.clearRect(0, 0, this.canvas.width, this.canvas.height);
    console.log(animationSet.yPos, this.x, this.y)
    this.drawFrame(cycleLoop[this.currentLoopIndex], animationSet.yPos, this.x, this.y);
    this.currentLoopIndex++;
    if(typeof callback == 'function') callback()
    if (this.currentLoopIndex >= cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
    window.requestAnimationFrame(() => this.animateObject(animationSet, desiredFrameCount, callback));
    }
  }

  drawFrame(frameX, frameY, canvasX, canvasY) {
    console.log(this.scaleFactor)
    this.context.drawImage(this.img, frameX * this.spritesheet.width, frameY * this.spritesheet.height, this.spritesheet.width, this.spritesheet.height,
    canvasX, canvasY, this.spritesheet.width * this.scaleFactor, this.spritesheet.height * this.scaleFactor);
  }





}
