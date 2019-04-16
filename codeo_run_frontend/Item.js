class Item extends StaticObject {
    constructor(name, src , width=50, health = 100, points = 100, special = ""){
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

    static pickRandomItem(){
        let names = ["coin1", "energydraw", "poison", "fuel", "batterydown"]
        let srcs = [`./assets/Item/coin1.png`,`./assets/Item/energydraw.png`,`./assets/Item/poison.png`,`./assets/Item/fuel.png`, `./assets/Item/batterydown.png`]
        let sizes = [50, 50, 50, 50, 50]
        let choice = (Math.floor(Math.random() * names.length))
        return new Item (names[choice], srcs[choice], sizes[choice])
    }


}
