//parâmetros da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2

//movimentação da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//parâmetros raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYoponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let ponto
let raquetada

//erro oponente
let chanceDeErrar = 0;

function preload(){
  ponto = loadSound("Ponto.wav");
  raquetada = loadSound("Raquete.wav");
}

function setup() {
  createCanvas(600, 400);
};

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentarMinhaRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  marcaPonto();
  incluiPlacar();
  movimentaRaqueteOponente();
  bolinhaNaoFicaPresa();

  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);

}

function movimentaBolinha(){
  yBolinha += velocidadeYbolinha;
  xBolinha += velocidadeXbolinha;  
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXbolinha *= -1
  };
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYbolinha *= -1
  };
}

function mostrarRaquete (x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentarMinhaRaquete (){
   if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  
   if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;

}
}

function movimentaRaqueteOponente (){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 -30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
}

function verificaColisaoRaquete (){
  if (xBolinha - raio < xRaquete + raqueteComprimento && 
      yBolinha - raio < yRaquete + raqueteAltura &&
      yBolinha + raio > yRaquete
     ){ velocidadeXbolinha *= -1;
      raquetada.play();}
}

function verificaColisaoRaqueteOponente (){
  if (xBolinha + raio > xRaqueteOponente + raqueteComprimento && 
      yBolinha - raio < yRaqueteOponente + raqueteAltura &&
      yBolinha + raio > yRaqueteOponente
     ){ velocidadeXbolinha *= -1;
      raquetada.play();}
}

function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 0){
    xBolinha = 50
  }
  if (xBolinha - raio > 590){
    xBolinha = 550
  }
}


function incluiPlacar(){
  fill(255);
  textSize (18);
  text (meusPontos, 278, 26);
  text (pontosDoOponente, 321, 26)
  
}

function marcaPonto(){
  if (xBolinha > 590){meusPontos += 1;
                     ponto.play();}
  if (xBolinha < 10){pontosDoOponente += 1;
                    ponto.play();}
  
}

function calculaChanceDeErrar(){
  if (pontosDoOponente >= meusPontos){chanceDeErrar += 1
  if (chanceDeErrar >= 39){chanceDeErrar = 40}
} else {
  chanceDeErrar -= 1
  if (chanceDeErrar <= 35){chanceDeErrar = 35}
}}






















