let backgroundColours= ["#D67681","#8A1C25", "#262640", "#8C3744", "#103D78","#4085BD", "#30522A", "#BAD5E6", "#FA562D", "#C2344C", "#628526", "#D1C85E", "#961E28"];
let geometryColour= "#E8A725";


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  noLoop();
}


function drawSquare(x,y,side) {
  noStroke();
  let numero= floor(random(backgroundColours.length));
  fill(backgroundColours[numero]);
  square(x,y,side);
  let geometryNumber= floor(random(5));
  // cerchio
  fill(geometryColour);
  if (geometryNumber == 0) {
     circle(x+side/2, y+side/2, side*3/4);
  }
  // else if per mettere più opzioni
  // quadrato
  else if (geometryNumber == 1) {
    square(x+side/6, y+side/6, side*2/3);
  }

  // quadrato ruotato
  else if (geometryNumber == 2) {
    //conosco la diagonale del quadrato che è = al diametro del cerchio (side) e al lato dell'altro quadrato
    //quindi calcolo il lato del quadrato ruotato
    let innerSide = (3 / 4) * (side / sqrt(2)); // variabile lato del quadrato ruotato
    push(); 
    translate(x + side / 2, y + side / 2); // Sposta l'origine al centro del quadrato esterno
    rotate(radians(45)); 
    square(-innerSide / 2, -innerSide / 2, innerSide); // il quadrato ruotato è centrato
    pop();
  }

  // rombo grande
  else if (geometryNumber == 3) {
    beginShape(QUADS); //creo figura a partire dai vertici
    //definisco i vertici in senso orario
    vertex(x,y); 
    vertex(x+side/4+side/2, y+side/4); 
    vertex(x+side, y+side);
    vertex(x+side/4, y+side/4+side/2);
    endShape(CLOSE);
  }

  //rombo piccolo. è l'ultimo quindi scrivo solo else
  else{
    beginShape(QUADS);
    vertex(x+side/3, y+side/3); 
    vertex(x+side-side/8, y+side/8); 
    vertex(x+side-side/3, y+side-side/3);
    vertex(x+side/8, y+side-side/8);
    endShape(CLOSE);  
  }
}

function draw() {
  background(220);
  drawSquare (0,0,50);

  for (let i=0; i<20; i++) {
    for (let j= 0; j<20; j++){
      let side= 50;
      drawSquare(side*i, side*j,side);
    }
  }
}

