//elenco colori
let azzurrino;
let rosa;
let bianco;
let azzurro;
let bluScuro;
let giallo;
let giallino;
let fucsia;
let bordeaux;
let vinaccia;
let viola; 
let verde;
let verdino;
let rosso; 
let arancione;
let arancioncino; 
let nero;


function preload() {
  noLoop ();
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  // const message =
  //   "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  // textAlign(CENTER, CENTER);
  // textSize(16);
  // text(message, width / 2, height / 2);

  //elenco colori
  azzurrino= "#DEE5EF";
  rosa= "#E35D98";
  bianco= "#FFFFFF";
  azzurro= "#00aad1";
  bluScuro= "#1f3660";
  giallo= "#fed81d";
  giallino= "#edf7d4";
  fucsia= "#fe2188";
  bordeaux= "#751a15";
  vinaccia= "#b82d66";
  viola= "#6b4381";
  verde= "#10a97a";
  verdino= "#3ffb2a";
  rosso= "#cb1a2c";
  arancione= "#dc6f14";
  arancioncino= "#eab09a";
  nero= "#000000";
}

function draw() {
  let unit= windowHeight/(32*4); //dimensione del lato di ogni quadratino 

  noStroke ();
  fill (azzurrino);
  rect (unit, unit, windowWidth-unit*2, windowHeight-unit*2);
  
  let rectWidth= windowWidth-unit*4;
  let rectHeight= windowHeight-unit*4;
  fill (rosa);
  rect (unit*2, unit*2, rectWidth, rectHeight)
  
  //PROVA per testare l'unità sulla griglia
  //quanti quadratini servono?
  // let nQuadratiOrizz= rectWidth/unit;
  // let nQuadratiVert= rectHeight/unit;

  //due cicli for: il primo riempie le colonne,
  //il secondo riempie le righe
  // for (let i = 0; i < nQuadratiOrizz-1; i++) {
  //   for (let j=0; j < nQuadratiVert; j++) {
  //     stroke ("black"); 
  //     strokeWeight (1);

  //     // Input del rect: 
  //     // offset da bordo + nColonna * unità, offset da bordo + nRiga * unità, larghezza (unità), altezza (unità)
  //     rect (unit*2 + i*unit, unit*2 + j*unit, unit, unit); 
  //   }
  // }

  //rettangolo bianco
  fill (bianco);
  rect (unit*2+unit*13, unit*2+unit*13, rectWidth-unit*13*2, rectHeight-unit*13*2);
  
  //rettangolo azzurro
  //aggiungo progressivamente un offset per rimpicciolire i rettangoli
  fill (azzurro);
  rect (unit*2+unit*13+unit*10, unit*2+unit*13+unit*10, rectWidth-(unit*13+unit*10)*2, rectHeight-(unit*13+unit*10)*2);

  //rettangolo giallo
  fill (giallo);
  rect (unit*2+unit*13+unit*10+unit*8, unit*2+unit*13+unit*10+unit*8, rectWidth-(unit*13+unit*10+unit*8)*2, rectHeight-(unit*13+unit*10+unit*8)*2);

  //rettangolo fucsia
  fill (fucsia);
  rect (unit*2+unit*13+unit*10+unit*8+unit*7, unit*2+unit*13+unit*10+unit*8+unit*7, rectWidth-(unit*13+unit*10+unit*8+unit*7)*2, rectHeight-(unit*13+unit*10+unit*8+unit*7)*2);

  //rettangolo bordeaux
  fill (bordeaux);
  rect (unit*2+unit*13+unit*10+unit*8+unit*7+unit*4, unit*2+unit*13+unit*10+unit*8+unit*7+unit*4, rectWidth-(unit*13+unit*10+unit*8+unit*7+unit*4)*2, rectHeight-(unit*13+unit*10+unit*8+unit*7+unit*4)*2);

  //rettangolo bianco
  fill (bianco);
  rect (unit*2+unit*13+unit*10+unit*8+unit*7+unit*4+unit*4, unit*2+unit*13+unit*10+unit*8+unit*7+unit*4+unit*4, rectWidth-(unit*13+unit*10+unit*8+unit*7+unit*4+unit*4)*2, rectHeight-(unit*13+unit*10+unit*8+unit*7+unit*4+unit*4)*2);

  //rettangolo verde
  fill (verde);
  rect (unit*2+unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3, unit*2+unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3, rectWidth-(unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3)*2, rectHeight-(unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3)*2);

  //rettangolo giallino
  fill (giallino);
  rect (unit*2+unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3+unit*2, unit*2+unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3+unit*2, rectWidth-(unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3+unit*2)*2, rectHeight-(unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3+unit*2)*2);

  //rettangolo vinaccia
  fill (vinaccia);
  rect (unit*2+unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3+unit*4, unit*2+unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3+unit*4, rectWidth-(unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3+unit*4)*2, rectHeight-(unit*13+unit*10+unit*8+unit*7+unit*4+unit*4+unit*3+unit*4)*2);

}