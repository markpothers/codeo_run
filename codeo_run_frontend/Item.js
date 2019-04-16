class Item extends StaticObject {

    constructor(name, src, width, health = 100, points = 100, special = ""){
        super()
        this.name = name
        this.src = src
        this.points = points;
        this.special = special;
        this.health = health;
        this.width = width
        this.height = this.randomHeight()
        this.spawn()
    }

}