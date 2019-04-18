class Item extends StaticObject {
    constructor(name, src , width, height, itemXPos=(window.innerWidth + 10), itemYPos=(StaticObject.randomVerticalPosition()), health = 100, points = 100, special = ""){
        super(src)
        this.name = name
        this.points = points;
        this.special = special;
        this.health = health;
        this.width = width
        this.left = itemXPos
        this.height = height
        this.bottom = itemYPos
        this.spawn()
    }

    static createItem(choice, itemXPos, itemYPos){
        let names = ["coin1", "energydraw", "poison", "fuel", "batterydown"]
        let srcs = [`./assets/Item/coin1.png`,`./assets/Item/energydraw.png`,`./assets/Item/poison.png`,`./assets/Item/fuel.png`, `./assets/Item/batterydown.png`]
        let sizes = [50, 50, 50, 50, 50]
        return new Item (names[choice], srcs[choice], sizes[choice], sizes[choice], itemXPos, itemYPos)
    }

    static recreateItem(objectName, itemXPos, itemYPos){
        switch(objectName) {
            case 'coin1':
                Item.createItem(0, itemXPos, itemYPos)
                break
            case 'energydraw':
                Item.createItem(1, itemXPos, itemYPos)
                break
            case 'poison':
                Item.createItem(2, itemXPos, itemYPos)
                break
            case 'fuel':
                Item.createItem(3, itemXPos, itemYPos)
                break
            case 'batterydown':
                Item.createItem(4, itemXPos, itemYPos)
                break
        }
    }
}
