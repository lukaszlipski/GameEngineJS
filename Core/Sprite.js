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
