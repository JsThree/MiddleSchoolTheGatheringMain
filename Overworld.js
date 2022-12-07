class Stage {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.stage = config.src;
    this.player = null;
  }

  
  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
    image.src = this.stage;
    const kris = new Sprite({src:"images/characters/Mason.png"})
    kris.draw(this.ctx)
    this.player = kris
  }
  draw() {
    const step = () => {
      this.player.x += 1
      this.player.draw(this.ctx)
      console.log('run')
      window.requestAnimationFrame(step())
    }
    step()
  }
}
