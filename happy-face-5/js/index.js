var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

setupCanvas();
window.onresize = function() {
  setupCanvas();
};

var rotate = Math.PI / 1;

const colors = [
  [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
  ],
  [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
  ],
  [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
  ],
  [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
  ],
  [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
  ],
  [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
  ],
  [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
  ]
];

//___________________animation loop ___________________

function cycle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-------Don't touch this^----------

  // Create gradient
  var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grd.addColorStop(0, "#cc66ff");
  grd.addColorStop(1, "#3399ff");

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  function happyFace(x, y, colors) {
    ctx.translate(x, y);
    ctx.rotate(rotate);
    ctx.translate(-x, -y);

    ctx.beginPath();
    ctx.arc(x, y, 30, 100, 100 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = colors;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + 11, y - 7, 7, 100, 100 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x - 10, y - 7, 7, 100, 100 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y + 8, 12, 0, 1 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#ff4000";
    ctx.fill();

    ctx.translate(x, y);
    ctx.rotate(-rotate);
    ctx.translate(-x, -y);
  }

  rotate += 0.05;

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 11; j++) {
      happyFace(50 + j * 90, 70 + i * 100, colors[i][j]);
    }
  }

  requestAnimationFrame(cycle);
}
requestAnimationFrame(cycle);