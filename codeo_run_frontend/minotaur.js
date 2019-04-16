const can2 = document.querySelector('#foreground');
const ctx2 = can2.getContext('2d');

const cycleLoop = [0, 1, 2, 3, 4, 5];
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


let frameCount = 0;

  function bullIdle() {
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
