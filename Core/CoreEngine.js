let CoreEngine = {
    canvas : null,
    ctx : null,
    width : null,
    height : null,
    DeltaTime : null,
    // TODO: make it private
    lastFrameTime : null,
    Init : function(canvas_id,width,height) {
        // TODO: make it bulletproof
        CoreEngine.canvas = document.getElementById(canvas_id);
        CoreEngine.ctx = canvas.getContext('2d');
        CoreEngine.width = canvas.width = width;
        CoreEngine.height = canvas.height = height;
    },
    GameLoop : function() {
        window.requestAnimationFrame(CoreEngine.GameLoop);

        let time = performance.now();
        CoreEngine.DeltaTime = (time - CoreEngine.lastFrameTime)/1000;
        CoreEngine.lastFrameTime = time; 

        CoreEngine.Update();
        CoreEngine.Render();
    },
    Update : function() {},
    Render : function() {
        CoreEngine.ctx.clearRect(0,0,this.width,this.height);

        //let a = new Sprite('Assets/kici.jpg');
        //a.Draw(50,50);
    }
}

class Sprite {
    constructor(filePath) {
        if(filePath != "" && filePath != null && filePath != undefined) {
            this.image = new Image();
            this.image.src = filePath;
        } else {
            console.log('ERROR: Cannot load file');
        }
    }
    Draw(x,y,width,height) {
        if(width != "" && width != null && width != undefined && height != "" && height != null && height != undefined)
            CoreEngine.ctx.drawImage(this.image,x,y,width,height);
        else
            CoreEngine.ctx.drawImage(this.image,x,y,this.image.width,this.image.height);
    }
    
}

window.onload = () => {

    CoreEngine.Init('canvas',800,600);

    CoreEngine.GameLoop();

    

}