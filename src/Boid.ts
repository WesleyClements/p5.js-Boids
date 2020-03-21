import {Vector} from "p5";

const speed = 10;

export default class Boid {
    radius: number;
    position: Vector;
    velocity: Vector;

    constructor(x: number, y: number) {
        this.radius = 50;
        this.position = createVector(x, y);
        let angle = random(0, TWO_PI);
        this.velocity = createVector(speed * cos(angle), speed * sin(angle));
    }
    update(): void {
        // let wallDirectionX = Math.sign(this.position.x - windowWidth / 2);
        // let distanceX: number;
        // if (wallDirectionX === -1 && this.velocity.x < 0) {
        //     distanceX = this.position.x;
        // } else if (wallDirectionX === 1 && this.velocity.x > 0) {
        //     distanceX = windowWidth - this.position.x;
        // }
        // let wallDirectionY = Math.sign(this.position.y - windowHeight / 2);
        // let distanceY: number;
        // if (wallDirectionY === -1 && this.velocity.y < 0) {
        //     distanceY = this.position.y;
        // } else if (wallDirectionY === 1 && this.velocity.y > 0) {
        //     distanceY = windowHeight - this.position.y;
        // }
        // if (distanceX && distanceY) {
        //     if (distanceX > distanceY) {
        //         distanceX = undefined;
        //     } else if (distanceY > distanceX) {
        //         distanceY = undefined;
        //     } else {
        //         distanceY = undefined;
        //     }
        // }
        // if (distanceX) {
        //     let targetYSpeed = Math.sign(this.velocity.y) * speed;
        //     let t = (this.radius / distanceX) ** 2;
        //     this.velocity = this.velocity.lerp(0, targetYSpeed, 0, t);
        // } else if (distanceY) {
        //     let targetXSpeed = Math.sign(this.velocity.x) * speed;
        //     let t = (this.radius / distanceY) ** 2;
        //     this.velocity = this.velocity.lerp(targetXSpeed, 0, 0, t);
        // }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    constrain(): void {
        if (this.position.x + this.radius > windowWidth || this.position.x - this.radius < 0) {
            this.position.x = constrain(this.position.x, this.radius, windowWidth - this.radius);
            this.velocity.x = -this.velocity.x;
        } 
        if (this.position.y + this.radius > windowHeight || this.position.y - this.radius < 0) {
            this.position.y = constrain(this.position.y, this.radius, windowHeight - this.radius);
            this.velocity.y = -this.velocity.y;
        }
    }   
    draw(): void {
        stroke(30, 44, 70);
        fill(250);
        circle(this.position.x, this.position.y, this.radius * 2);
    } 
}