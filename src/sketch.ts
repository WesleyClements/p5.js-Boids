declare global {
  interface Window {
    setup: () => void;
    windowResized: () => void;
    keyPressed: () => void;
    mousePressed: () => void;
    draw: () => void;
  }
}
import Boid from "./Boid.js";

let Ralph: Boid;

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  let x = random(windowWidth);
  let y = random(windowHeight);
  Ralph = new Boid(x, y);
};
window.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
}

window.draw = () => {
    // update logic
    Ralph.update();
    Ralph.constrain();


    // draw things
    background(20, 44, 100);
    Ralph.draw();
}

export default null;
