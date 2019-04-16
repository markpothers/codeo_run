class Platform extends StaticObject {

    constructor(name, src, width){
        super()
        this.name = name
        this.src = src
        this.width = width
        this.height = this.randomHeight()
        this.spawn()
    }

    static choosePlatform(){

        let names = ['log', 'grass', 'ladderbar', 'floating_rock', 'ladder']
        let srcs = [`./assets/Platforms/log.png`, `./assets/Platforms/grass.png`, `./assets/Platforms/ladderbar.png`, `./assets/Platforms/floating_rock.png`, `./assets/Platforms/ladder.png` ]
        let sizes = [250, 100, 200, 120, 75]
        let choice = (Math.floor(Math.random() * names.length))
        return (new Platform(names[choice], srcs[choice], sizes[choice]))
    }
}
