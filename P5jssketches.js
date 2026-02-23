let Xkoordinater = [];
let Ykoordinater = [];
let startX;
let startY;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  strokeWeight(0.3);
  for (let i = 0; i < 3; i++) {
    Xkoordinater.push(random(width));
    Ykoordinater.push(random(height));
  }
  let index = floor(random(3));
  startX = Xkoordinater[index];
  startY = Ykoordinater[index];
}
function draw() {
  for (let i = 0; i < 2000; i++) {
    let index = floor(random(3));
    let destX = Xkoordinater[index];
    let destY = Ykoordinater[index];
    startX = (startX + destX) / 2;
    startY = (startY + destY) / 2;
    point(startX, startY);
  }
}
