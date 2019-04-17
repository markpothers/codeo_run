

class Landscape  {
    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
    }

    static loadGame(){
        fetch('http://localhost:3000/play')
        .then(function(res){
            return res.json()
        })
        .then(function(gameData){
            console.log('I got some data back from the database!!!')
            console.log(gameData)
        })
    }

    static getPositions(character){
        let findAllObjects = document.querySelectorAll('.staticobject')
        let objectsList = []
        let i = 1
        findAllObjects.forEach(function(object){
            objectsList.push({
                "name": object.id,
                "x": parseInt(object.style.left),
                "y": parseInt(object.style.bottom),
                "height": parseInt(object.style.height),
                "width": parseInt(object.style.width)
            })
            i++
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
        console.log(dataToSave)

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
            console.log('I saved data to the database!!!')
            console.log(saveResponse)
        })
    }

}

