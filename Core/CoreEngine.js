let CoreEngine = {
    canvas : null,
    ctx : null,
    width : null,
    height : null,
    DeltaTime : null,
    // TODO: make it private
    lastFrameTime : null,
    Init : function(canvas_id,width,height) {
        this.canvas = document.getElementById(canvas_id);
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width = width;
        this.height = canvas.height = height;
    },
    GameLoop : function() {
        window.requestAnimationFrame(CoreEngine.GameLoop);

        let time = performance.now();
        this.DeltaTime = (time - this.lastFrameTime)/1000;
        this.lastFrameTime = time; 

    }
}


window.onload = function() {

    CoreEngine.Init('canvas',800,600);

    CoreEngine.GameLoop();

}