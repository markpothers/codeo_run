class StaticObject {

    constructor(src){
        this.img = document.createElement('img')
        this.img.src = src
    }

    spawn(){
        let object_container = document.querySelector("#character_container")
        object_container.append(this.img)
        this.img.className="staticobject"
        this.img.id = this.name
        this.img.style.zIndex = 3
        this.img.style.position = "absolute"
        this.img.style.width =  `${this.width}px`
        this.img.style.left = `${this.left}px`
        this.img.style.bottom = `${this.bottom}px`
        this.img.style.height = `${this.height}px`
        this.element = this.img
    }

    static scroll(){
        let objects = document.querySelectorAll('.staticobject')
        objects.forEach(function(object){
            let left = parseInt(object.style.left)
            let speed = 1
            object.style.left = `${left - speed}px`
            if (parseInt(object.style.left)+parseInt(object.style.width)+100 < 0){
                object.remove()
            }
            let positions = [];

            positions.push(parseInt(object.style.left));
            positions.push(parseInt(object.style.bottom ));
            positions.push(parseInt((object.style.left) + (object.style.width)));//right position in x axis
            positions.push(parseInt((object.style.height)+ (object.style.bottom)));// top position in y axis
           // console.log(positions)
            return positions;//left, bottom, width, height


        })
    }

    static randomVerticalPosition(){
        return (250*Math.random())+500
    }

}
