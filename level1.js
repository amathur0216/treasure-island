class Level1{
    constructor(){
        this.title = createElement('h2');

    }
    display(){
        background(level1background, "level1background");
        level1background.velocityX = -2;
        if (level1background.x < 0){
            level1background.x = level1background.width/2;
        }
        this.title.html("Level 1: Stuck On the Island");
        this.title.position(50, 50);
        this.title.style('font-size', '20px');
        this.title.style('color', 'darkgreen');
        if(keyDown("space") && person1.y >= 450){
            person1.velocityY = -5;
        }
        person1.velocityY = person1.velocityY + 0.8; 
  score = score + Math.round(frameCount/500);
  textSize(20);
  text("Score: " + score, 800, 50);
 if (score > 100){
     textSize(30);
     text("YOU PASSED LEVEL 1! Time for Level 2...", 370, 400);
     gameState = 2;

 }
 if(person1.isTouching(rockGroup)){
     score = 0;
 }
    }
}