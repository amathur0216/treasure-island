class Level2{
    constructor(){
        this.title = createElement('h2');

    }

    display(){
        this.title.html("Level 2: Monsters???");
        this.title.position(50, 50);
        this.title.style('font-size', '20px');
        this.title.style('color', 'darkgreen');
        Monster();
        if(keyWentDown(RIGHT_ARROW)){
            person1.velocityX = 5;
        }else if(keyWentUp(RIGHT_ARROW)){
            person1.velocityX = 0;
        }
        if(keyWentDown(UP_ARROW)){
            console.log("hello");
            monster.addAnimation("monsterImage", monsterImage);
        }else if (keyWentUp(UP_ARROW)){
            console.log("hi");
            monster.addAnimation("person1Image", person1Image);
        }

    }
}