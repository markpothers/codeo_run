class Landscape extends AnimatedObject  {
    constructor(img, name){
        super(img)
        this.name = name;
        this.canvas = document.querySelector("#background");
        this.context = this.canvas.getContext('2d');
        this.x = 0
        this.y = 0
    }

    static loadGame(){
        let loadedObjects = []
        return fetch('http://localhost:3000/play')
        .then(function(res){
            return res.json()
        })
        .then(function(gameData){
            loadedObjects.push(gameData[0][0])
            loadedObjects.push([])
            gameData[1].forEach(function(object){
                loadedObjects[1].push(object)
            })
        return loadedObjects
        })
    }

    static getPositions(character){
        let findAllObjects = StaticObject.all
        console.log(findAllObjects[0].x)
        let objectsList = []
        findAllObjects.forEach(function(object){
            objectsList.push({
                "name": object.name,
                "x": object.x,
                "y": object.y,
                "height": object.height,
                "width": object.width
            })
        })
        let dataToSave = {
            "character":{
                "name": character.name,
                "x": character.x,
                "y": character.y,
                "points": character.points,
                "health": character.health
            },
            objectsList
        }
        return dataToSave
    }

    static saveGame(character){
        let dataToSave = Landscape.getPositions(character)
        fetch('http://localhost:3000/play', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dataToSave
            })
        })
        .then(function(res){
            return res.json()
        })
        .then(function(saveResponse){
            console.log(saveResponse)
        })
    }

}
