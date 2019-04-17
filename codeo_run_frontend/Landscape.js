

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
            //console.log('I got some data back from the database!!!')
           // console.log(gameData)
        })
    }

    static saveGame(){
        fetch('http://localhost:3000/play', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

            })
        })
        .then(function(res){
            return res.json()
        })
        .then(function(saveResponse){
            //console.log('I saved data to the database!!!')
            //console.log(saveResponse)
        })
    }

}

