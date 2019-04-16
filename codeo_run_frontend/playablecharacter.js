class PlayableCharacter {

    constructor(name, x=100, y=100, points=0, health=100, life_time_points=0){
        this.name = name
        this.x = `${x}px`
        this.y = `${y}px`
        this.points = points
        this.health = health
        this.life_time_points = life_time_points
        this.spawn()
    }

    spawn(){
        const character = document.createElement('img')
        character.src = `./assets/Blocky/blocky.png`
        let character_container = document.querySelector("#character_container")
        character_container.append(character)
        character.id="character"
        character.style.position = "relative"
        character.style.width = '75px'
        character.style.left = '-785px'
        character.style.bottom = '60px'
    }

    horizontal_move(horizontal_direction){
        let character = document.querySelector('#character')
        let left = parseInt(character.style.left)
        let speed = 5
            if(horizontal_direction === "left"){
                character.style.left = `${left - speed}px`
            }
            if(horizontal_direction === "right"){
                character.style.left = `${left + speed}px`
            }
            if(horizontal_direction === "stop"){
                character.style.left = `${left}px`
            }
    }

}
