class Platform extends StaticObject {
    
    constructor(name, src, x=100, y=100){
        super()
        this.name = name
        this.x = `${x}px`
        this.y = `${y}px`
        this.src = src
        console.log(src)
        let height = this.randomHeight()
        this.spawn(height)
    }

    randomHeight(){
        return (300*Math.random())-310
    }


}
