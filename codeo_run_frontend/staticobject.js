class StaticObject {

    spawn(){
        const object = document.createElement('img')
        object.src = this.src
        let object_container = document.querySelector("#character_container")
        object_container.append(object)
        object.className="staticobject"
        object.id = this.name
        object.style.zIndex = 3
        object.style.position = "absolute"
        object.style.width =  `${this.width}px`
        object.style.left = `${window.innerWidth + 10}px`
        object.style.bottom = `${this.bottom}px`
        object.style.height = `${this.height}px`
        this.element = object
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

    randomVerticalPosition(){
        return (250*Math.random())+500
    }

}
