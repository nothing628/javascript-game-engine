import * as PIXI from "pixi.js";
import bunnyImg from "../static/bunnys.png";

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application();

if (module.hot) {
  module.hot.accept();
}

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
app.loader.add("bunny", bunnyImg).load((loader, resources) => {
  // This creates a texture from a 'bunny.png' image
  const bunny = new PIXI.Sprite(resources.bunny.texture);

  // Setup the position of the bunny
  bunny.name = "bunny";
  bunny.x = app.renderer.width / 2;
  bunny.y = app.renderer.height / 2;

  // Rotate around the center
  bunny.anchor.x = 0.5;
  bunny.anchor.y = 0.5;

  // Add the bunny to the scene we are building
  app.stage.addChild(bunny);

  // Listen for frame updates
  app.ticker.add(() => {
    // each frame we spin the bunny around a bit
    bunny.rotation += 0.01;
  });
});

let counter = 0;

const basicText = new PIXI.Text("Basic text in pixi");
basicText.name = "rotation";
basicText.x = 50;
basicText.y = 100;
basicText.style = new PIXI.TextStyle({
  fill: 0xffffff,
});

app.stage.addChild(basicText);
app.ticker.add((delta) => {
  counter += delta;

  if (counter > 5) {
    const text_rotation = app.stage.getChildByName("rotation");
    const bunny = app.stage.getChildByName("bunny");

    if (text_rotation !== null && bunny !== null) {
      const bunny_rotation = bunny.rotation;

      text_rotation.text = bunny_rotation;
    }

    counter = 0;
  }
});
