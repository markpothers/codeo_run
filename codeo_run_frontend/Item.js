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