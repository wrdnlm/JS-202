const canvas = document.querySelector('canvas#etch-a-sketch');
const context = canvas.getContext('2d');
const btnShake = document.querySelector('.shake');
const arrArrowKeyCodes = [37, 38, 39, 40];

const { width, height } = canvas;

// begin at random points in the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0; // initial color

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;
context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();

function paintToCanvas(keyCode) {
  hue += 3;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(x, y);

  switch (keyCode) {
    case 37:
      x -= 10;
      break;
    case 38:
      y -= 10;
      break;
    case 39:
      x += 10;
      break;
    case 40:
      y += 10;
      break;
    default:
      break;
  }
  context.lineTo(x, y);
  context.stroke();
}

function handleKeyDown(e) {
  e.preventDefault();
  let keyCode = e.keyCode;
  if (arrArrowKeyCodes.includes(keyCode)) {
    paintToCanvas(keyCode);
  }
}

document.addEventListener('keydown', handleKeyDown);

function shakeCanvas() {
  canvas.classList.add('shake');
  context.clearRect(0, 0, width, height);
  y = Math.floor(Math.random() * height);
  x = Math.floor(Math.random() * width);
}
btnShake.addEventListener('click', shakeCanvas);