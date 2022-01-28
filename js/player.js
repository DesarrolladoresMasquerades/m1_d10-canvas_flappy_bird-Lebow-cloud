// -------MUST ADD CONTEXT TO ALL CLASSES------

class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 100;
        this.y = 200

        this.width = 46   // PIXELS FROM THE IMAGE
        this.height = 32
    }

    move(frameNumber){
        console.log("Player move to frame number, frameNumber: ", frameNumber);
    }

    draw(frameNumber){
        console.log("Player move to frame number, frameNumber: ", frameNumber);
    }

    colliedesWith(object){
        return( 
            this.x < object.x + object.width &&
            this.x + this.width > object.x &&

            this.y < object.y + object.height &&
            this.y + this.height > object.y
        )
    }

    exitsCanvas(){
        return this.y > this.ctx.canvas.height || this.y < this.ctx.canvas.height < 0
    }

    
}