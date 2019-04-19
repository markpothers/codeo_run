const splashScreen = () => {
  const splash = document.querySelector('#splash')
  const splashDraw = splash.getContext('2d')
  const logo = document.createElement('img')
  const startButton = document.createElement('img')
  logo.src = 'assets/Logo/logo_transparent.png'
  startButton.src = 'assets/ui/BlueButton.png'
  splash.append(logo)
  const startButton2 = document.createElement('img')
  startButton2.src = 'assets/ui/BlueButton - Continue.png'


  splash.width = window.innerWidth;
  splash.height = 400;

  splashDraw.fillStyle = 'orange';

  splash.addEventListener('mousedown',  () => {console.log('this works')})

  splashDraw.fillRect(0, 0, splash.width, splash.height)

  logo.addEventListener('load', () => {
    let button = document.createElement('canvas')
    let buttonContext = button.getContext('2d')
    button.style.zIndex = 10
    button.width = startButton.width
    button.height = startButton.height
    button.style.position = 'absolute'
    button.style.left = `${(splash.width-startButton.width-150)/2}px`
    button.style.top = `375px`
    document.body.append(button)
    logo.width = logo.width/3
  splashDraw.drawImage(logo, (splash.width-logo.width)/2, 0, 400, 400);
  splashDraw.drawImage(startButton, (splash.width-startButton.width-150)/2, 300, startButton.width, startButton.height);
  button.addEventListener('click', () => {
    splash.style.display = 'none'
      character = new PlayableCharacter("Hero")
      runGame()
    })

  let continueButton = document.createElement('canvas')
  console.log("got his far")
  let continueButtonContext = continueButton.getContext('2d')
  splashDraw.drawImage(startButton2, (splash.width-startButton2.width+300)/2, 298, 120, 91);
  document.body.append(continueButton)
  continueButton.style.zIndex = 11
  continueButton.width = button.width
  continueButton.height = button.height
  continueButton.style.position = 'absolute'
  continueButton.style.left = `${(splash.width-startButton2.width+300)/2}px`
  continueButton.style.top = `375px`
  // continueButton.style.background = "black"
  continueButton.addEventListener('click', () => {
    splash.style.display = 'none'
      Landscape.loadGame().then(function(savedGameData){
        character = new PlayableCharacter(savedGameData[0]["name"], savedGameData[0]["health"], savedGameData[0]["points"], savedGameData[0]["x"], savedGameData[0]["y"] )
        savedGameData[1].forEach(function(object){
          Platform.recreatePlatform(object["name"], object["x"], object["y"])
          Item.recreateItem(object["name"], object["x"], object["y"])
        })
        runGame()
      })

    })
  })
}



