import React, { useState } from 'react';
import Sketch from 'react-p5';

const MouseDrawing = () => {
  const [t, setT] = useState(0);
  const [circles] = useState(24);
  const [explodeIndex, setExplodeIndex] = useState(0);
  const [explode, setExplode] = useState(false);

  const drawMouse = (p, x, y, size = 1, angle = 0) => {
    p.push();
    p.beginShape();
    p.translate(x, y);
    p.rotate(angle);
    p.vertex(0, 0);
    p.vertex(0, 0 + 17 * size);
    p.vertex(0 + 4 * size, 0 + 13 * size);
    p.vertex(0 + 7 * size, 0 + 20 * size);
    p.vertex(0 + 10 * size, 0 + 19 * size);
    p.vertex(0 + 7 * size, 0 + 12 * size);
    p.vertex(0 + 12 * size, 0 + 12 * size);
    p.endShape(p.CLOSE);
    p.pop();
  };

  const drawMouseCircle = (p, radius, count) => {
    let newX = p.noise(radius / 100 + t);
    for (let i = newX; i < p.TWO_PI + newX; i += p.PI / count) {
      let x = p.cos(i) * radius * (1 + p.sin(explodeIndex) * p.sin(radius + explodeIndex * 2));
      let y = p.sin(i) * radius * (1 + p.sin(explodeIndex) * p.sin(radius + explodeIndex * 2));
      drawMouse(p, p.width / 2 + x, p.height / 2 + y, 1, 3.25 * p.PI / 2 + i);
    }
  };

  const setup = (p, canvasParentRef) => {
    p.createCanvas(900, 900 ).parent(canvasParentRef);
    p.fill(0);
    p.stroke(255);
    p.strokeWeight(1.2);
    p.noiseDetail(2, 0.2);
    p.angleMode(p.RADIANS);
    p.noCursor();
  };

  const draw = (p) => {
    p.background(0);
    if (explode) {
      setExplodeIndex(explodeIndex + p.PI / 60);
      if (explodeIndex >= p.PI) {
        setExplodeIndex(0);
        setExplode(false);
      }
    }
    p.translate(p.mouseX - p.width / 2, p.mouseY - p.height / 2);
    drawMouse(p, p.width / 2 - 5, p.height / 2 - 10);
    for (let i = 1; i < circles; i++) {
      drawMouseCircle(p, p.width / (circles / i), i * 3);
    }
    setT(t + 0.01);
    p.translate(-p.mouseX + p.width / 2, -p.mouseY + p.height / 2);
  };

  const mousePressed = () => {
    setExplodeIndex(0);
    setExplode(true);
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />
    </div>
  );
};

export default MouseDrawing;
