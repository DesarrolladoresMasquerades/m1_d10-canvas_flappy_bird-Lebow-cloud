
// -------MUST ADD CONTEXT TO ALL CLASSES------

class Game {
    constructor(ctx, player, background, obstacles){
        this.ctx = ctx;  // PUT THE CONTEXT IN THE GAME CLASS
        this.player = player;
        this.background = background;
        this.obstacles = obstacles;
        this.frameNumber = null;

    }

    start(){

        this.init()
        this.play()


    }

    init(){
        this.frameNumber = 0;   // SCALE THE CANVAS BIGGER
    
        
        //this.sound.stop() ETC
        //background.init()
    }

    play(){
        this.frameNumber += 1;
        this.ctx.clearRect(0, 0, ctx.canvas.width,ctx.canvas.height)
        this.move()
        this.checkCollision()
        this.draw()
        requestAnimationFrame(this.play.bind(this)) //NEED TO USE BIND TO RUN THE FUNCTION IN THIS OBJECT
      }

    move(){

        this.background.move(this.frameNumber)
        this.obstacles.move(this.frameNumber)
        this.player.move(this.frameNumber)
       
    }

    draw(){
        this.background.draw(this.frameNumber)
        this.obstacles.draw(this.frameNumber)
        this.player.draw(this.frameNumber)
    }

    checkCollision(){

        let collisions = false;

        if(this.obstacles.objects.some(obstacle=> this.player.colliedesWith(obstacle)) ) collisions = true

        if(this.player.exitsCanvas()) collisions = true

        return collisions
    }
        

    
}

