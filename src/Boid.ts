import { Vector } from "p5";

const radius = 10;
const speed = 5;
const turnSpeed = 0.075;
const detectRadius = 200;

export default class Boid {
    position: Vector;
    moveDirection: Vector;

    constructor(x: number, y: number) {
        this.position = createVector(x, y);
        let angle = random(0, TWO_PI);
        this.moveDirection = createVector(cos(angle), sin(angle));
    }
    update(): void {
        let toCenter = createVector(windowWidth / 2 - this.position.x, windowHeight / 2 - this.position.y);
        let toWall = createVector(windowWidth / 2 - abs(toCenter.x), windowHeight / 2 - abs(toCenter.y));
        if (toWall.x < detectRadius || toWall.y < detectRadius) {
            if (toWall.x > toWall.y) {
                let wallDirection = -(Math.sign(toCenter.y));
                if (wallDirection < 0 && this.moveDirection.y < 0) {

                    if (this.moveDirection.x < 0) {
                        // turn clockwise
                        this.moveDirection.add(this.moveDirection.y * turnSpeed, -this.moveDirection.x * turnSpeed);
                        this.moveDirection.normalize();
                    } else {
                        // turn counter-clockwise
                        this.moveDirection.add(-this.moveDirection.y * turnSpeed, this.moveDirection.x * turnSpeed);
                        this.moveDirection.normalize();
                    }
                } else if (wallDirection > 0 && this.moveDirection.y > 0) {
                    // need to turn down away from the top
                    if (this.moveDirection.x < 0) {
                        // counter-clockwise 
                        this.moveDirection.add(-this.moveDirection.y * turnSpeed, this.moveDirection.x * turnSpeed);
                        this.moveDirection.normalize();
                    } else {
                        // clockwise
                        this.moveDirection.add(this.moveDirection.y * turnSpeed, -this.moveDirection.x * turnSpeed);
                        this.moveDirection.normalize();
                    }
                }

            } else if (toWall.y > toWall.x) {
                let wallDirection = -(Math.sign(toCenter.x));
                if (wallDirection < 0 && this.moveDirection.x < 0) {
                    // need to turn right
                    // moving straight up, vector moves 0,1
                    if (this.moveDirection.y < 0) {
                        // turn counter-clockwise
                        this.moveDirection.add(-this.moveDirection.y * turnSpeed, this.moveDirection.x * turnSpeed);
                        this.moveDirection.normalize();
                    } else {
                        // clockwise
                        this.moveDirection.add(this.moveDirection.y * turnSpeed, -this.moveDirection.x * turnSpeed);
                        this.moveDirection.normalize();
                    }
                } else if (wallDirection > 0 && this.moveDirection.x > 0) {
                    // need to turn left
                    if (this.moveDirection.y < 0) {
                        // clock-wise
                        this.moveDirection.add(this.moveDirection.y * turnSpeed, -this.moveDirection.x * turnSpeed);
                        this.moveDirection.normalize();
                    } else {
                        // counter clock-wise
                        this.moveDirection.add(-this.moveDirection.y * turnSpeed, this.moveDirection.x * turnSpeed);
                        this.moveDirection.normalize();
                    }
                }
            } else {
                // turn towards the center
            }
        }
        this.position.x += this.moveDirection.x * speed;
        this.position.y += this.moveDirection.y * speed;
    }
    constrain(): void {
        if (this.position.x + radius > windowWidth || this.position.x - radius < 0) {
            this.position.x = constrain(this.position.x, radius, windowWidth - radius);
            this.moveDirection.x = -this.moveDirection.x;
        }
        if (this.position.y + radius > windowHeight || this.position.y - radius < 0) {
            this.position.y = constrain(this.position.y, radius, windowHeight - radius);
            this.moveDirection.y = -this.moveDirection.y;
        }
    }
    draw(): void {
        stroke(30, 44, 70);
        fill(250);
        let x1 = this.position.x + this.moveDirection.x * (radius * 2);
        let y1 = this.position.y + this.moveDirection.y * (radius * 2);
        let x2 = this.position.x - this.moveDirection.x * radius - this.moveDirection.y * radius;
        let y2 = this.position.y - this.moveDirection.y * radius + this.moveDirection.x * radius;
        let x3 = this.position.x - this.moveDirection.x * radius + this.moveDirection.y * radius;
        let y3 = this.position.y - this.moveDirection.y * radius - this.moveDirection.x * radius;
        triangle(x1, y1, x2, y2, x3, y3);
    }
}