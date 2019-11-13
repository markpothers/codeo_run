//please dont remove the comments . We can finalise, decide and then remove them all during refractor
class Platform extends StaticObject {

    constructor(name, src, width, height, platformXPos=false, platformYPos=(StaticObject.randomVerticalPosition())){
        super(src)
        this.name = name
        this.width = width
        this.height = height
        if (platformXPos == false){
            this.x = this.canvas.width
        } else {
            this.x = platformXPos
        }
        this.y = platformYPos
        this.canvas = document.querySelector('#platforms');
        this.context = this.canvas.getContext('2d');
        this.bottom = this.y + this.height

        this.infiniteScroll()
        allPlatforms.push(this)
        //Not sure whether the following function will be effective if we call here.Pls dont remove the comment, until we confirm
        //collisionTestMethod(this);
    }

    static randomPlatformSpawn(){
        let platformInterval = ((Math.floor(Math.random() * 4000) + 1500))  // i.e. 1.5 to 4.5 sec interval)
        let choice = (Math.floor(Math.random() * 5)) // NB 5 is the number of Platform choices, currently set manually to keep those choices in platform.js
        Platform.createPlatform(choice);
        setTimeout(function(){
            Platform.randomPlatformSpawn()
        }, platformInterval)
      }

    static createPlatform(choice, platformXPos, platformYPos){
        let names = ['log', 'grass', 'ladderbar', 'floating_rock', 'ladder']
        let srcs = [`./assets/Platforms/log.png`, `./assets/Platforms/grass.png`, `./assets/Platforms/ladderbar.png`, `./assets/Platforms/floating_rock.png`, `./assets/Platforms/ladder.png` ]
        let widths = [250, 100, 200, 120, 75]
        let heights = [45, 45, 80, 80, 80]
        let newPlatform = new Platform(names[choice], srcs[choice], widths[choice], heights[choice], platformXPos, platformYPos);
        allPlatforms.push(newPlatform)
        return newPlatform;
    }

    static recreatePlatform(objectName, platformXPos, platformYPos){
        switch(objectName) {
            case 'log':
                Platform.createPlatform(0, platformXPos, platformYPos)
                break
            case 'grass':
                Platform.createPlatform(1, platformXPos, platformYPos)
                break
            case 'ladderbar':
                Platform.createPlatform(2, platformXPos, platformYPos)
                break
            case 'floating_rock':
                Platform.createPlatform(3, platformXPos, platformYPos)
                break
            case 'ladder':
                Platform.createPlatform(4, platformXPos, platformYPos)
                break
        }
    }


    //lets write a method here to update the game element based on the collision

    //lets write a method to discard or delete the platforms that goes offscreen
    }

    const allPlatforms = [];