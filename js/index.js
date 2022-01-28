
const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")
     //  SEND THE CONTEXT TO THE GAME
  const player = new Player(ctx)
  const background = new Background(ctx)
  const obstacles = new Obstacles(ctx)

  const game = new Game(ctx, player, background, obstacles)

const startButton = document.getElementById("start-button")
  startButton.onclick = ()=> {
    startButton.remove()
    game.start();
  };











 

