document.addEventListener('DOMContentLoaded', () => {
  const can = document.getElementById('canvas1');
  const ctx = can.getContext('2d');

  can.width = window.innerWidth -20;
  can.height = 400;

  const bg = document.createElement('img')
  bg.src = 'assets/desert_BG.png'

  let imgWidth = 0;

  const  scrollSpeed = 2;

bg.addEventListener('load', () => {
  const loop = () => {
    let imgPos = imgWidth;


    ctx.drawImage(bg, imgPos, 0);
      while(imgPos < can.width) {
        console.log(imgPos)
        ctx.drawImage(bg, imgPos += bg.width, 0);
      }
    imgWidth -= scrollSpeed;
    if (imgWidth <= -bg.width){
      imgWidth = 0;}

    window.requestAnimationFrame(loop);
  }

  loop()
})
})
