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

const maxBoidCount = 20;

let ralphs: Boid[];
function generateBoids(): void {
  ralphs = [];
  for (let i = 0; i < maxBoidCount; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let boid = new Boid(x, y);
    ralphs.push(boid);
  }
}

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  generateBoids();
};
window.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
}

window.keyPressed = () => {
  if (key.toLowerCase() === "v") {
    generateBoids();
  }
}

window.draw = () => {
    // update logic
    for (let i = 0; i < ralphs.length; i++) {
      ralphs[i].update();
      ralphs[i].constrain();
    }

    // draw things
    background(20, 44, 100);
    for (let i = 0; i < ralphs.length; i++) {
      ralphs[i].draw();
    }
}

export default null;
