class Platform extends StaticObject {

    constructor(name, src, width, height){
        super()
        this.name = name
        this.src = src
        this.width = width
        this.height = height
        this.bottom = this.randomVerticalPosition()
        this.spawn()
    }

    static choosePlatform(){

        let names = ['log', 'grass', 'ladderbar', 'floating_rock', 'ladder']
        let srcs = [`./assets/Platforms/log.png`, `./assets/Platforms/grass.png`, `./assets/Platforms/ladderbar.png`, `./assets/Platforms/floating_rock.png`, `./assets/Platforms/ladder.png` ]
        let widths = [250, 100, 200, 120, 75]
        let heights = [45, 45, 80, 80, 80]
        let choice = (Math.floor(Math.random() * names.length))
        return (new Platform(names[choice], srcs[choice], widths[choice], heights[choice]))
    }
}
