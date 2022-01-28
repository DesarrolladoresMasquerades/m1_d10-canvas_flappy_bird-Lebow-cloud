

// -------MUST ADD CONTEXT TO ALL CLASSES------


class Obstacles {
    constructor(ctx){
        this.ctx = ctx;
        this.objects = []
    }


    move(frameNumber){
        console.log("Obstacles move to frame number, frameNumber: ", frameNumber);
    }

    draw(frameNumber){
        console.log("Obstacles to frame number, frameNumber: ", frameNumber);
    }
}