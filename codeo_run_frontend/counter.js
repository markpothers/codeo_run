class Counter {

    constructor(health, points){
        this.health = health
        this.points = points
        this.display()
    }

    display(){
        let counter_container = document.createElement('div')
        counter_container.id="counter_container"
        counter_container.style.position = "absolute"
        counter_container.style.zIndex = 5
        let object_container = document.querySelector("#character_container")
        object_container.append(counter_container)
        // counter_container.borderStyle ='solid'
        // counter_container.borderWidth = '2px'
        counter_container.style.left = `20px`
        counter_container.style.bottom = `675px`
        counter_container.style.transform = "rotate(-5deg)"

        const healthBox = document.createElement('img')
        healthBox.src = `./assets/Counters/EmptyScoreBar.png`
        healthBox.style.position = "absolute"
        healthBox.style.width = "200px"
        healthBox.style.zIndex = 4
        healthBox.style.left = `00px`
        healthBox.style.bottom = `60px`

        const scoreBox = document.createElement('img')
        scoreBox.src = `./assets/Counters/EmptyScoreBar.png`
        counter_container.append(healthBox, scoreBox)
        scoreBox.style.position = "absolute"
        scoreBox.style.width = "200px"
        scoreBox.style.zIndex = 4
        scoreBox.style.left = `00px`
        scoreBox.style.bottom = `0px`

        const heart = document.createElement('img')
        heart.src = `./assets/Counters/HeartIcon.png`
        counter_container.append(heart)
        heart.style.position = "absolute"
        heart.style.zIndex = 5
        heart.style.left = `2px`
        heart.style.bottom = `62px`
        heart.style.width = "50px"

        const coin = document.createElement('img')
        coin.src = `./assets/Counters/CoinIcon.png`
        counter_container.append(coin)
        coin.style.position = "absolute"
        coin.style.zIndex = 5
        coin.style.left = `2px`
        coin.style.bottom = `1px`
        coin.style.width = "50px"

        const healthBar = document.createElement('img')
        healthBar.id = "healthBar"
        healthBar.src = `./assets/Counters/FullHealthBar.png`
        counter_container.append(healthBar)
        healthBar.style.position = "absolute"
        healthBar.style.zIndex = 5
        healthBar.style.left = `52px`
        healthBar.style.bottom = `74px`
        healthBar.style.width = "135px"
        healthBar.style.height = "27px"

        const score = document.createElement('h4')
        score.id = "score"
        counter_container.append(score)
        score.innerText = "0"
        score.style.position = "absolute"
        score.style.zIndex = 5
        score.style.left = `30px`
        score.style.bottom = `3px`
        score.style.width = "150px"
        score.style.fontFamily = "Brush Script MT"
        score.style.fontSize = "25px"
        score.style.color = "rgb(150,85,13)"
        score.style.textAlign = "right"
    }

    static changeScore(newScore){
        let score = document.querySelector('#score')
        score.innerText = newScore
    }

    static changeHealth(newHealth){
        let healthBar = document.querySelector('#healthBar')
        healthBar.style.width = `${(newHealth/100)*135}px`
    }

}