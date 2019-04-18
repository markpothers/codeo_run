class Item extends StaticObject {
    constructor(name, src , width, height, health = 100, points = 100, special = ""){
        super(src)
        this.x = this.canvas.width
        this.y = this.randomVerticalPosition()
        this.name = name
        this.points = points;
        this.special = special;
        this.health = health;
        this.width = width
        this.height = height
        this.right = this.x + this.width
        this.bottom = this.y + this.height
        this.infiniteScroll()
        //this.spawn()
    }

    static pickRandomItem(){
        let names = ["coin1", "energydraw", "poison", "fuel", "batterydown"]
        let srcs = [`./assets/Item/coin1.png`,`./assets/Item/energydraw.png`,`./assets/Item/poison.png`,`./assets/Item/fuel.png`, `./assets/Item/batterydown.png`]
        let sizes = [50, 50, 50, 50, 50]
        let choice = (Math.floor(Math.random() * names.length))
        new Item(names[choice], srcs[choice], sizes[choice], sizes[choice])
        console.log('we created an item!')
    }


}
