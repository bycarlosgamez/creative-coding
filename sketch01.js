const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

// // FUNCTIONS
// // Use degrees instead of radiants
// const degs = (deg) => {
//   return (deg / 180) * Math.PI;
// };

// // Return a random range between min and max
// const range = (min, max) => {
//   return Math.random() * (max - min) + min;
// };

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

    const copies = 16;
    const radius = width * 0.3;

    for (let i = 0; i < copies; i++) {
      const parts = math.degToRad(360 / copies);
      const angle = parts * i;

      x = centerX + radius * Math.sin(angle);
      y = centerY + radius * Math.cos(angle);

      context.save(); //start of block context
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(1, 5), 1);

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore(); //end of block context
    }
  };
};
canvasSketch(sketch, settings);
