
let TyleSprites = {
    Empty : "",
    Ground : new Sprite('Assets/5.png'),
    Block : new Sprite('Assets/StoneBlock.png')
}

let TyleTypes = {
    Empty : 0,
    Block : 1,
    Water : 2
}

class Tile {
    constructor(type,sprite){
        // TODO: make it bulletproof
        this.Type = type;
        this.Sprite = sprite;
    }
}

class Map {
    constructor(TilesCountWidth,TilesCountHeight,TileSizeX,TileSizeY,WorldPositionX,WorldPositionY) {
        this.TilesCountWidth = TilesCountWidth;
        this.TilesCountHeight = TilesCountHeight;
        this.TileSizeX = TileSizeX;
        this.TileSizeY = TileSizeY;

        // array of every tiles in specific object
        this.Tiles = new Array(TilesCountWidth*TilesCountHeight);

        // initialization
        for(let i=0;i<this.Tiles.length;i++) {
            this.Tiles[i] = new Tile(TyleTypes.Block,TyleSprites.Empty);
        }

        if(WorldPositionX != "" && WorldPositionX != null && WorldPositionX != undefined)
            this.WorldPositionX = WorldPositionX;
        else
            this.WorldPositionX = 0;

        if(WorldPositionY != "" && WorldPositionY != null && WorldPositionY != undefined)
            this.WorldPositionY = WorldPositionY;
        else
            this.WorldPositionY = 0;
        
    }

    Draw(camera){

        let startCol = Math.floor(camera.PositionX / this.TileSizeX),
            endCol = startCol + Math.floor(camera.CameraWidth / this.TileSizeX),
            startRow = Math.floor(camera.PositionY / this.TileSizeY),
            endRow = startRow + Math.floor(camera.CameraHeight / this.TileSizeY),
            offsetX = -camera.PositionX,
            offsetY = -camera.PositionY;

        for(let y=startRow;y<endRow;y++){
            for(let x=startCol;x<endCol;x++){
                let index = y*this.TilesCountWidth + x;
                if(this.Tiles[index].Sprite != TyleSprites.Empty)
                    this.Tiles[index].Sprite.Draw( this.TileSizeX * x + this.WorldPositionX + offsetX,this.TileSizeY * y + this.WorldPositionY + offsetY,this.TileSizeX,this.TileSizeY);
            }
        }
    }


  

}