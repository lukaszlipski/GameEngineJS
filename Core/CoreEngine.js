let GlobalVariables = {
    TilesMap : new Map(1000,1000,32,32),
    MainCamera : new Camera(0,0,1024,720)
}
//TEST
    var positionX = 0;
//

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

        Controls.init();

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
        
        // TEST ------
        GlobalVariables.TilesMap.Tiles[25].Sprite = TyleSprites.Ground;
        GlobalVariables.TilesMap.Draw(GlobalVariables.MainCamera);
        let a = new Sprite('Assets/StoneBlock.png');
        a.Draw(100,100,50,50,positionX);

        if(Controls.isKeyPressed(Controls.Keys.Space))
            positionX += this.DeltaTime;

        // -----------

    }
}

window.onload = () => {

    CoreEngine.Init('canvas',1024,720);

    CoreEngine.GameLoop();

    
}