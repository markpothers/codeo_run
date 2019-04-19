class Item extends StaticObject {

    constructor(name, src , width, height, health, points, special, itemXPos=false, itemYPos=(StaticObject.randomVerticalPosition())){
        super(src)
        this.name = name
        this.points = points
        this.special = special
        this.health = health
        this.width = width
        if (itemXPos == false){
            this.x = this.canvas.width
        } else {
            this.x = itemXPos
        }
        this.y = itemYPos
        this.height = height
        this.right = this.x + this.width
        this.bottom = this.y + this.height
        allItems.push(this)
        this.infiniteScroll()
        //this.spawn()
    }

    static createItem(choice, itemXPos, itemYPos){
        let names = ["coin1", "energydraw", "poison", "fuel", "batterydown"]
        let srcs = [`./assets/Item/coin1.png`,`./assets/Item/energydraw.png`,`./assets/Item/poison.png`,`./assets/Item/fuel.png`, `./assets/Item/batterydown.png`]
        let sizes = [50, 50, 50, 50, 50]
        let healths = [0, 15, -20, 5, 0]
        let points = [100, 25, 50, 15, 15]
        let specials = ["", "", "slow", "speed", "no_jumping"]
        return new Item (names[choice], srcs[choice], sizes[choice], sizes[choice], healths[choice], points[choice], specials[choice], itemXPos, itemYPos)
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

    pickup(character){
        character.health += this.health
        Counter.changeHealth(character.health)
        character.points += this.points
        Counter.changeScore(character.points)
    }

}
const allItems = [];