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
        fetch('http://localhost:3000/play')
        .then(function(res){
            return res.json()
        })
        .then(function(gameData){
            console.log(gameData)
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
