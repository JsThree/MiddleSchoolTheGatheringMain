class Sprite{
    constructor(config){
        this.src = config.src
        this.width = config.width || 65
        this.height = config.height || 63
        this.x = config.x || 0
        this.y = config.y || 0
    }
    draw(ctx) {
        const image = new Image()
        image.onload = () => {
            ctx.drawImage(
                image,
                0,
                0,
                65,
                63,
                0,
                0,
                this.width,
                this.height
                  );
        }
        image.src = this.src;
    }
}
