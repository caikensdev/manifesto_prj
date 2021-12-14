function setup() {
  // Create the canvas

  createCanvas(windowWidth, windowHeight);


  // Set colors
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

}

function draw() {

  if (mouseIsPressed){
    fill(0);
      } else {
          fill(255);
      }

  translate(mouseX, mouseY);


  for (let i = 0; i < 10; i ++) {
    ellipse(0, 20, 10, 40);
    rect(0, 0, 0, 15);
    rotate(PI/5)
    ellipse(0,0,15,15);

  }
}
