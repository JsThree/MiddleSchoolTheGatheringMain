(function () {
  const overworld = new Stage({
    element: document.querySelector(".game-container"),
    src: "images/map/download.png",
  });
  overworld.init();
  overworld.draw()
})();
