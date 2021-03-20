var database;
var backgroundImage, level1background;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player;
var players;
var player_img;
var form1;
var level1;
var game;
var person1, person1Image;
var rock, rockImage, rockGroup; 
var invisibleGround;
var score = 0;
var level2;
var monster, monsterImage;
var healthbar1, heathbar2, healthbar3, healthbar4, healthbar5, healthbar6, healthbar7, healthbar8, healthbar9, healthbar10, healthbar11,
healthbar12, healthbar13;


function preload(){
person1Image = loadAnimation("images/girlRunning1.png", "images/girlRunning2.png");
rockImage = loadImage("images/rock.png");
backgroundImage = loadImage("images/backgroundImg.png");
level1background = loadImage("images/lv1background.png");
monsterImage  = loadAnimation("images/guyRunning2.png", "images/guyRunning3.png");
healthbar1 = loadAnimation("images/healthbar1.png", "images/healthbar2.png");
rockGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
 // game = new Game();
 // game.getState();
  //game.start();
  form1 = new Form();
  game = new Game();
  level1 = new Level1();
  level2 = new Level2();
  person1 = createSprite(200, 100, 20, 20);
  person1.debug = true;
  person1.setCollider("circle", 0, 0, 60);
  person1.addAnimation("person1", person1Image);
  person1.scale = 0.3;
  person1.visible = false; 
  
  
  
}

function draw() {
  background(backgroundImage, "backgroundImage");
  invisibleGround = createSprite(100,560,600,20);
  invisibleGround.visible = false;
  person1.collide(invisibleGround);

  if(gameState === 0){
    form1.display();
  }

  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    //level1.hide();
    level2.display();
    Monster();
  }
  if (playerCount === 2) {
    //game.update(1);
  }
  
  drawSprites();
}

function Rock(){
  if((frameCount % 200 === 0) && gameState === 1){
    rock = createSprite(700, 550, 20, 20);
    rock.addImage ("rock", rockImage);
    rock.scale = 0.3;
    rock.velocityX = -2;
    rock.lifetime = 600;
    rockGroup.add(rock);
  }
}

function Monster(){
monster = createSprite(600, 500, 20, 20);
monster.addAnimation("person1Image", person1Image);
monster.scale = 0.3
monster.collide(invisibleGround);

}
