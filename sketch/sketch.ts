declare global {
  interface Window {
    setup: () => void;
    windowResized: () => void;
    keyPressed: () => void;
    mousePressed: () => void;
    draw: () => void;
  }
}

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
};
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {}

export default null;
