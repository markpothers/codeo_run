const splashScreen = () => {
  const splash = document.querySelector('#splash')
  const splashDraw = splash.getContext('2d')
  const logo = document.createElement('img')
  const startButton = document.createElement('img')
  logo.src = 'assets/Logo/logo_transparent.png'
  startButton.src = 'assets/ui/BlueButton.png'
  splash.append(logo)

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
    button.style.left = `${(splash.width-startButton.width)/2}px`
    button.style.top = `388px`
    document.body.append(button)
    logo.width = logo.width/3
  splashDraw.drawImage(logo, (splash.width-logo.width)/2, 0, 400, 400);
  splashDraw.drawImage(startButton, (splash.width-startButton.width)/2, 300, startButton.width, startButton.height);
  button.addEventListener('click', () => {
    splash.style.display = 'none'
  })
})
}
