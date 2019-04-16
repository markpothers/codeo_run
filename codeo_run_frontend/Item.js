class Item {
    constructor(name, x=200, y=200,health = 100, points = 100, special = 100){
       // super(name, x, y);  
        // this.landscape_id = landscape_id;
        this.points = points;
        this.special = special;
        this.health = health;
        //this.vertical_speed = 20
        this.spawn();
        //this.horizontal_scroll();
    }
    spawn(){
        const item = document.createElement('img')
        item.src = `./assets/Item/coin1.png`
        const item_container = document.querySelector("#character_container")
        item_container.append(item)
        item.id="item"
        item.style.position = "relative"
        item.style.width = '40px'
        item.style.left = '0px'
        item.style.bottom = '0px'
    }

    horizontal_scroll(horizontal_direction){
        let item = document.querySelector('#item')
        let left = parseInt(item.style.left)
        let speed = 10
            if(horizontal_direction === "left"){
                item.style.left = `${left - speed}px`
            }
            if(horizontal_direction === "right"){
                item.style.left = `${left + speed}px`
            }
            if(horizontal_direction === "stop"){
                item.style.left = `${left}px`
            }
    }

}

// create_table "items", force: :cascade do |t|
// t.string "name"
// t.integer "x"
// t.integer "y"
// t.integer "points"
// t.integer "health"
// t.string "special"
// t.integer "landscape_id"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.index ["landscape_id"], name: "index_items_on_landscape_id"
// end