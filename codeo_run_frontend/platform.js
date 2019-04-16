class Platform extends StaticObject {
    
    constructor(name, src, width){
        super()
        this.name = name
        this.src = src
        this.width = width
        this.height = this.randomHeight()
        this.spawn()
    }




}
