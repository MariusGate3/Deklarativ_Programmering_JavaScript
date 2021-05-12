let liste = [1,2,3,4,5,6,7,8,9,10];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  displayDiagram(liste);
}

function displayDiagram(liste) {
  liste.filter(function(current, index, arr) {
let h = current;
      rect(40*index, 400, 40, -40*h);

    });

  }
