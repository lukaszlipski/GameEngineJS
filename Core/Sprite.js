class Sprite {
    constructor(filePath) {
        if(filePath != "" && filePath != null && filePath != undefined) {
            this.image = new Image();
            this.image.src = filePath;
        } else {
            console.log('ERROR: Cannot load file');
        }
    }
    
    Draw(x,y,width,height,angle) {
        // rotation
        if(angle != 0 && angle != "" && angle != null && angle != undefined)
        {
            CoreEngine.ctx.save();
            CoreEngine.ctx.translate(x,y);
            x = y = 0;
            CoreEngine.ctx.rotate(angle);
        
        }

        // drawing sprite
        if(width != "" && width != null && width != undefined && height != "" && height != null && height != undefined)
            CoreEngine.ctx.drawImage(this.image,x - width/2,y - height/2,width,height);
        else
            CoreEngine.ctx.drawImage(this.image,x - this.image.width/2,y - this.image.height/2,this.image.width,this.image.height);

        // end of rotation
        if(angle != 0 && angle != "" && angle != null && angle != undefined)
            CoreEngine.ctx.restore();

    }
    
}
