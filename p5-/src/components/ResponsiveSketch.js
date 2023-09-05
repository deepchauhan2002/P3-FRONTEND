import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';

const ResponsiveSketch = () => {
  let t = 0;
  let words = ['HI I AM DEEP'];
  let gapFactor = 1.5; // Adjust this value to control the gap between text
  let speedFactor = 0.5; // Adjust this value to control the animation speed

  const [canvas, setCanvas] = useState(null);

  const setup = (p5, canvasParentRef) => {
    // Set canvas size to match the window size
    const newCanvas = p5.createCanvas(window.innerWidth, window.innerHeight);
    newCanvas.parent(canvasParentRef);

    // Disable body overflow to prevent scrolling
    document.body.style.overflow = 'hidden';

    // Store the canvas reference
    setCanvas(newCanvas);
  };

  const draw = (p5) => {
    p5.background(0);
    t += speedFactor; // Adjust animation speed

    // Adjust the gap between text based on window size
    let gap = window.innerWidth / 40 * gapFactor;

    p5.translate(
      window.innerWidth / 2 - (p5.textWidth(words) / 2 + gap),
      0
    );

    for (var b = 0; b < 3; b++) {
      for (var a = 0; a < 24; a++) {
        var dx = 400 * p5.sin(p5.radians(p5.PI / 2 + t * 2 + a * 10));
        p5.fill(255, 127, 1);
        p5.textSize(50);
        p5.textAlign(p5.CENTER);

        p5.text(words, a * 50 + window.innerWidth / 1.6 * b + dx, a * 64);
      }
    }
  };

  // Resize the canvas when the window is resized
  const windowResized = (p5) => {
    // Access the canvas element and set its width and height
    canvas.canvas.width = window.innerWidth;
    canvas.canvas.height = window.innerHeight;
  };

  // Use useEffect to attach the window resize event listener
  useEffect(() => {
    window.addEventListener('resize', windowResized);
    return () => {
      window.removeEventListener('resize', windowResized);
    };
  }, [canvas]);

  return <Sketch setup={setup} draw={draw} />;
};

export default ResponsiveSketch;
