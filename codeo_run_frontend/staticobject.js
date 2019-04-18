class StaticObject {

    constructor(src){
      this.img = document.createElement('img')
      this.img.src = src
      this.canvas = document.querySelector('#foreground');
      this.context = this.canvas.getContext('2d');

      StaticObject.all.push(this)
    }

    spawn(){
        let object_container = document.querySelector("#character_container")

        // object_container.append(this.img)
        // this.img.className="staticobject"
        // this.img.id = this.name
        // this.img.style.zIndex = 3
        // this.img.style.position = "absolute"
        // this.img.style.width =  `${this.width}px`
        // this.img.style.left = `${window.innerWidth + 10}px`
        // this.img.style.bottom = `${this.bottom}px`
        // this.img.style.height = `${this.height}px`
    }

    // static scroll(){
    //     let objects = document.querySelectorAll('.staticobject')
    //     objects.forEach(function(object){
    //         let left = parseInt(object.style.left)
    //         let speed = 1
    //         object.style.left = `${left - speed}px`
    //         if (parseInt(object.style.left)+parseInt(object.style.width)+100 < 0){
    //             object.remove()
    //         }
    //         let positions = [];
    //
    //         positions.push(parseInt(object.style.left));
    //         positions.push(parseInt(object.style.bottom ));
    //         positions.push(parseInt((object.style.left) + (object.style.width)));//right position in x axis
    //         positions.push(parseInt((object.style.height)+ (object.style.bottom)));// top position in y axis
    //        // console.log(positions)
    //         return positions;//left, bottom, width, height
    //
    //
    //     })
    // }

    infiniteScroll(){
      let imgWidth = 0;

      const  scrollSpeed = 2;

      this.img.addEventListener('load', () => {
        const loop = () => {
          console.log(this.constructor.name)
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
