const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

// To use degrees instead of radiants
const degs = (deg) => {
  return (deg / 180) * Math.PI;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    let x, y;

    const copies = 3;
    const radius = width * 0.3;

    for (let i = 0; i < copies; i++) {
      const parts = degs(360 / copies);
      const angle = parts * i;

      x = centerX + radius * Math.sin(angle);
      y = centerY + radius * Math.cos(angle);

      context.save(); //start of block context
      context.translate(x, y);
      context.rotate(-angle);

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore(); //end of block context
    }
  };
};
canvasSketch(sketch, settings);
