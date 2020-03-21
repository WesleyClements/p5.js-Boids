import {Vector} from "p5";

export default class Boid {
    radius: number;
    position: Vector;
    velocity: Vector;

    constructor(x: number, y: number) {
        this.radius = 50;
        this.position = createVector(x, y);
        this.velocity = Vector.random2D().setMag(10);
    }
    update(): void {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    constrain(): void {
        if (this.position.x + this.radius >= windowWidth || this.position.x - this.radius <= 0) {
            this.position.x = constrain(this.position.x, 0, windowWidth);
            this.velocity.x = -this.velocity.x;
        } 
        if (this.position.y + this.radius >= windowHeight || this.position.y - this.radius <= 0) {
            this.position.y = constrain(this.position.y, 0, windowHeight);
            this.velocity.y = -this.velocity.y;
        }
    }   
    draw(): void {
        stroke(30, 44, 70);
        fill(100);
        circle(this.position.x, this.position.y, this.radius * 2);
    } 
}