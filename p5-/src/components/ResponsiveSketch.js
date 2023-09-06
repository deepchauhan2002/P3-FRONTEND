import React, { useEffect } from 'react';
import Sketch from 'react-p5';

class Particle {
  constructor(p5, type) {
    this.type = type;
    this.loc = p5.createVector(p5.random(p5.width * 1.2), p5.random(p5.height), 2);
    this.angle = p5.random(p5.TWO_PI);
    this.dir = p5.createVector(p5.cos(this.angle), p5.sin(this.angle));
    this.speed = this.type === 'a' ? 0.5 : 0.75;
    this.d = 1;
  }

  move(p5) {
    this.angle = p5.noise(this.loc.x / noiseScale, this.loc.y / noiseScale, p5.frameCount / noiseScale) * p5.TWO_PI * noiseStrength;
    this.dir.x = p5.cos(this.angle) + p5.sin(this.angle) - p5.sin(this.angle);
    this.dir.y = p5.sin(this.angle) - p5.cos(this.angle) * p5.sin(this.angle);
    this.vel = this.dir.copy();
    this.vel.mult(this.speed * this.d);
    this.loc.add(this.vel);
  }

  checkEdges(p5) {
    if (this.loc.x < 0 || this.loc.x > p5.width || this.loc.y < 0 || this.loc.y > p5.height) {
      this.loc.x = p5.random(p5.width * 1.2);
      this.loc.y = p5.random(p5.height);
    }
  }

  update(p5, radius) {
    p5.ellipse(this.loc.x, this.loc.y, radius);
  }
}

let particles_a = [];
let particles_b = [];
let particles_c = [];
const noiseScale = 300;
const noiseStrength = 1.2;
const num = 3000;
const fade = 100; // Add fade variable
const radius = 3; // Add radius variable

const YourComponent = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1200, 900).parent(canvasParentRef);
    p5.noStroke();

    for (let i = 0; i < num; i++) {
      particles_a.push(new Particle(p5, 'a'));
      particles_b.push(new Particle(p5, 'b'));
      particles_c.push(new Particle(p5, 'c'));
    }
  };

  const draw = (p5) => {
    p5.fill(0, 2);
    p5.noStroke();
    p5.rect(0, 0, p5.width, p5.height);

    for (let i = 0; i < num; i++) {
      p5.fill(255, fade); // Use the 'fade' variable
      particles_a[i].move(p5);
      particles_a[i].update(p5, radius); // Use the 'radius' variable
      particles_a[i].checkEdges(p5);

      p5.fill(0, 255, 255, fade); // Use the 'fade' variable
      particles_b[i].move(p5);
      particles_b[i].update(p5, radius); // Use the 'radius' variable
      particles_b[i].checkEdges(p5);

      p5.fill(102, 153, 255, fade); // Use the 'fade' variable
      particles_c[i].move(p5);
      particles_c[i].update(p5, radius); // Use the 'radius' variable
      particles_c[i].checkEdges(p5);
    }
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default YourComponent;
