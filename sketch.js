var btn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(0, 255),random(0,255), random(0,255))
  btn = createButton('Descargar');
  btn.position (10, 10);
  btn.mousePressed(impresora);
}

function draw() {
  fill(random(0, 255),random(0,255), random(0,255))
  square(mouseX, mouseY, 55);

}
function impresora() {
saveCanvas("imagen","jpg");
}