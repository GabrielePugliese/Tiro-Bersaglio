let diametro = 480;
let punti = 0;
let messaggio = "Premi Play per iniziare!";
let play = false;
let clickX = null;
let clickY = null;
let lastType = ""; 
let feedbackDiv;

function setup() {
  createCanvas(600, 600);
  background("#0d1b2a");

  
  feedbackDiv = select("#feedback");
}

function draw() {
  background("#0d1b2a");

  let centroX = width / 2;
  let centroY = height / 2;

 
  fill("#f45");
  circle(centroX, centroY, diametro);
  fill("#fff");
  circle(centroX, centroY, diametro - 80);
  fill("#f45");
  circle(centroX, centroY, diametro - 160);
  fill("#fff");
  circle(centroX, centroY, diametro - 240);
  fill("#f45");
  circle(centroX, centroY, diametro - 300);
  fill("#fff");
  circle(centroX, centroY, diametro - 360);
  fill("#f45");
  circle(centroX, centroY, diametro - 440); 

  // Punteggio
  fill("#e0e1dd");
  textSize(24);
  textAlign(CENTER, CENTER);
  text(`Punti: ${punti}`, width / 2, 30);

  feedbackDiv.html(messaggio);

  
  if (clickX !== null && clickY !== null) {
    if (lastType === "cross") {
      stroke("black");
      strokeWeight(4);
      line(clickX - 10, clickY - 10, clickX + 10, clickY + 10);
      line(clickX - 10, clickY + 10, clickX + 10, clickY - 10);
    }
  }
}

function mouseClicked() {
  if (!play || mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;

  let centroX = width / 2;
  let centroY = height / 2;
  let distanza = dist(mouseX, mouseY, centroX, centroY);
  let raggio = diametro / 2;

  if (distanza <= raggio) {
    messaggio = "Ottimo colpo!";
    lastType = "cross";
    if (distanza <= 40) 
      punti += 50;
    else if (distanza <= 80) 
      punti += 40;
    else if (distanza <= 120) 
      punti += 35;
    else if (distanza <= 160) 
      punti += 30;
    else if (distanza <= 240) 
      punti += 20;
    else if (distanza <= 320) 
      punti += 10;
    else 
      punti += 5;
  } else {
    messaggio = "Bersaglio Mancato!";
    lastType = "cross";
  }

  clickX = mouseX;
  clickY = mouseY;
}


let btn = document.querySelector("#play");
btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    messaggio = "Il gioco è iniziato!";
    punti = 0;
    clickX = null;
    clickY = null;
    lastType = "";
    btn.textContent = "Reset";
  } else {
    play = false;
    messaggio = "Premi Play per iniziare!";
    punti = 0;
    clickX = null;
    clickY = null;
    lastType = "";
    btn.textContent = "Play";
  }
});