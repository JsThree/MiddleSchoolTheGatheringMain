class overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-screen");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage()
        };
        image.src = "images/download (1).jpeg";
    };
};
