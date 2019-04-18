 class Landscape  {
    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
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
        let findAllObjects = document.querySelectorAll('.staticobject')
        let objectsList = []
        findAllObjects.forEach(function(object){
            objectsList.push({
                "name": object.id,
                "x": parseInt(object.style.left),
                "y": parseInt(object.style.bottom),
                "height": parseInt(object.style.height),
                "width": parseInt(object.style.width)
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

