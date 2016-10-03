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
        
        let a = new Map(40,35,16,16);

        a.Tiles[100].Sprite = TyleSprites.Ground;

        a.Draw();

    }
}

window.onload = () => {

    CoreEngine.Init('canvas',1024,720);

    CoreEngine.GameLoop();

    
}