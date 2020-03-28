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

const boidCount: number = 20;
let boidArray: Boid[];

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  boidArray = [];
  for (let i = 0; i < boidCount; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let boid = new Boid (x, y);
    boidArray.push(boid);
  }
};
window.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
}

window.keyPressed = () => {
  if (key.toLowerCase() === "v") {
  }
}

window.draw = () => {
  for (let i = 0; i < boidArray.length; i++) {
    boidArray[i].update();
    boidArray[i].constrain();
  }
  background(0, 0, 0);
  strokeWeight(0);
  for (let i = 0; i < boidArray.length; i++) {
    boidArray[i].draw();
  }
}

export default null;
