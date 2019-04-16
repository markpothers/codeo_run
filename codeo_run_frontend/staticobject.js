class StaticObject {

    spawn(height){
        const object = document.createElement('img')
        object.src = this.src
        let object_container = document.querySelector("#character_container")
        object_container.append(object)
        object.className="object"
        object.style.position = "relative"
        object.style.width = '300px'
        object.style.left = `${window.innerWidth + 10}px`
        object.style.bottom = `${height}px`
    }

    static scroll(){
        let objects = document.querySelectorAll('.object')
        objects.forEach(function(object){
            let left = parseInt(object.style.left)
            let speed = 1
            object.style.left = `${left - speed}px`
            if (parseInt(object.style.left)+parseInt(object.style.width)+100 < 0){
                object.remove()
            }
        })

    }
}