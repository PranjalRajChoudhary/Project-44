var database;
var form,player,game;
var gameState = 1,playerCount;
var allPlayers = [];
var helicopter,launcher,tank,soldier;
var helToken = 0;
var tankToken = 0;
var solToken = 0;
var launchToken = 0;
var helSpr,launchSpr,tankSpr,solSpr;
var helToken2 = 0;
var tankToken2 = 0;
var solToken2 = 0;
var launchToken2 = 0;

function preload(){
  MillitaryImg  = loadImage("Millitar image.jpg");
}

  function setup(){
  database = firebase.database();
  
  createCanvas(1490,700);

   game = new Game();
   game.getState();
   game.start();

   player = new Player();
   player.getCount();

    form = new Form();  
}

function draw(){

    form.display();
  
  if(playerCount === 8){
   game.updateState(1);
  }
  game.getState();

  if(gameState === 1){
    clear();
  game.play();
  drawSprites();
  }

drawSprites();
  
}
