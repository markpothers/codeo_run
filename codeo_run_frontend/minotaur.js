const can2 = document.querySelector('#foreground');
const ctx2 = can2.getContext('2d');

let currentLoopIndex = 0;

let bullImg = document.createElement('img')
bullImg.src = 'assets/Minotaur/minsheet.png'


let count = 0
  function drawBullFrame(frameX, frameY, canvasX, canvasY) {
    let width = 96
    let height = 96

    ctx2.drawImage(bullImg, frameX * width, frameY * height, width, height,
    canvasX, canvasY, width * 2, height * 2);
    }



  function bullIdle() {
    let cycleLoop = [0, 1, 2, 3, 4, 5];
  //test sprite script
    frameCount++;
    if (frameCount < 15) {
        window.requestAnimationFrame(bullIdle);
        return;
      }
    frameCount = 0;
    ctx2.clearRect(0, 0, can2.width, can2.height);
    drawBullFrame(cycleLoop[currentLoopIndex], 10, 660, 220);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length-1) {
      currentLoopIndex = 0;
    }
    window.requestAnimationFrame(bullIdle);
  }

  function bullRunLeft(object) {
    if(horizontal_direction == 'left'){
    let x = parseInt(object.x)
    let y = parseInt(object.y)
    let cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7];
    const  scrollSpeed = 15;
    //test sprite script

    frameCount++;
    if (frameCount < 5) {
        window.requestAnimationFrame(() => bullRunLeft(object));
        return;
      }
      frameCount = 0;
      ctx2.clearRect(0, 0, can2.width, can2.height);
      drawBullFrame(cycleLoop[currentLoopIndex], 11, x, y);
      object.x = `${x -= scrollSpeed}px`
      currentLoopIndex++;
      if (currentLoopIndex >= cycleLoop.length-1) {
        currentLoopIndex = 0;
      }
      window.requestAnimationFrame(() => bullRunLeft(object));
    }
    }

  function bullRunRight(object) {
    if(horizontal_direction == 'right'){
    let x = parseInt(object.x)
    let y = parseInt(object.y)
    let cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7];
    const  scrollSpeed = 15;
  //test sprite script

    frameCount++;
    if (frameCount < 5) {
        window.requestAnimationFrame(() => bullRunRight(object));
        return;
      }
      console.log(scrollSpeed)
    frameCount = 0;
    ctx2.clearRect(0, 0, can2.width, can2.height);
    drawBullFrame(cycleLoop[currentLoopIndex], 1, x, y);
    object.x = `${x += scrollSpeed}px`
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length-1) {
      currentLoopIndex = 0;
    }
    window.requestAnimationFrame(() => bullRunRight(object));
  }
  }
