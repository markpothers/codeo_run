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
        all.push(this)
    }


    // spawn(){
    //     const item = document.createElement('img')
    //     item.src = this.src
    //     const item_container = document.querySelector("#character_container")
    //     item_container.append(item)
    //     item.id="item"
    //     item.style.position = "relative"
    //     item.style.width = '40px'
    //     item.style.left = '0px'
    //     item.style.bottom = '0px'
    // }

    static pickRandomItem(){
        return all[Math.floor(Math.random()*all.length)];
        //debugger
    }
    
   
}

const all = [];


