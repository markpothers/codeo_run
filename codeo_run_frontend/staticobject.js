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
        })
    }

    randomVerticalPosition(){
        return (250*Math.random())+500
    }

}
