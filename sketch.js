var car;
var carImage;
var coin1Image,coin2Image,coin3Image;
  var coinCollectSound;
var backgroundImage;
  var loseSound;
var enemy1,enemy2,enemy3,enemy4;
var score=0;
var damage=0

var invisibleGround1;
var invisibleGround2;
var invisibleGround3;
var invisibleGround4;


var coinGroup,coin1Group,enemyGroup,enemyGroup1;

function preload(){
carImage=loadImage("car.png")

backgroundImage=loadImage("road1.jpg");

coin1Image=loadImage("coin1.png");
coin2Image=loadImage("coin2.png");


coinCollectSound=loadSound("jump.wav");
loseSound=loadSound("collided.wav");

enemy1=loadImage("m.png");
enemy2=loadImage("m1.png");
enemy3=loadImage("alien1.png");
enemy4=loadImage("alien2.png");
}

function setup() { 
  createCanvas(windowWidth,windowHeight);

    car=createSprite(windowWidth/2,windowHeight);

     invisibleGround1=createSprite(0,0,windowWidth*2,windowHeight/40);
     invisibleGround1.visible=false;

     invisibleGround2=createSprite(0,windowHeight,windowWidth*2,windowHeight/40);
     invisibleGround2.visible=false;

     invisibleGround3=createSprite(windowWidth,0,windowWidth/40,windowHeight*4);
     invisibleGround3.visible=false;

     invisibleGround4=createSprite(0,0,windowWidth/40,windowHeight*4);
     invisibleGround4.visible=false;

     score=0;
     damage=0;

     
     coinGroup=new Group();
     coin1Group=new Group();
     enemyGroup=new Group();
     enemyGroup1=new Group();
}

function draw() {
 background(backgroundImage);
 textSize(30);
 fill("pink");
  
 text("you have two chance of survive from the attack of monster",windowWidth/2.7,car.y+50+40);
fill("cyan");
 text("------------------------------------------------------------------------------",windowWidth/2.7,car.y+50+40+8)
 c1();
  c2();
  enemy();
  en2();
  car.addImage(carImage);
  car.scale=0.3
  car.display();
 
  invisibleGround1.display();
  invisibleGround2.display();
  invisibleGround3.display();
  invisibleGround4.display();

  if(keyDown(UP_ARROW)){
    car.y=car.y-5;
  }
  if( car.isTouching(invisibleGround1)){
    car.y=invisibleGround2.y;
  }
  if(keyDown(RIGHT_ARROW)){
    car.x =car.x+5
  }
  if(car.isTouching(invisibleGround3)){
    car.x=car.x-5;
  }
 if(keyDown(LEFT_ARROW)){
   car.x=car.x-5;
 }
 if(car.isTouching(invisibleGround4)){
 car.x=car.x+5;
 }
 if(keyDown(DOWN_ARROW)){
   car.y=car.y+5;
 }
 if(car.isTouching(invisibleGround2)){
 car.y=car.y-5
 }
 
  camera.position.x=car.x;
  camera.position.y=car.y;


  //coinTaking=====>
  if(car.isTouching(coinGroup)){
    coinGroup.destroyEach();
    coinCollectSound.play();
    score=score+1;
  }
  if(car.isTouching(coin1Group)){
    coin1Group.destroyEach();
    coinCollectSound.play();
    score=score+1;
  }
  
   textSize(30);
   fill("blue");
   text("score :" + score,car.x+30,car.y);
   
    if(car.isTouching(enemyGroup)){
    loseSound.play();
    enemyGroup.destroyEach();
     damage=damage+1;
    }
    if(car.isTouching(enemyGroup1)){
      loseSound.play();
      enemyGroup1.destroyEach();
      damage=damage+1;
      }
      textSize(30);
      fill("red");
      text("damage :"+damage,car.x-200,car.y)
    if(damage===2){
      score=0
      damage=0
    }

 drawSprites();
}

   function c1(){
   var coins= createSprite(Math.round(random(windowWidth/2,windowWidth)),0);
    coins.velocityY=5;
    coins.addImage(coin1Image);
   coins.scale=0.5;
   
   coinGroup.add(coins);
  
   }
   function c2(){
   var coins1= createSprite(Math.round(random(0,windowWidth/2)),0);
    coins1.velocityY=5;
    coins1.addImage(coin2Image);
   coins1.scale=0.5;
     coin1Group.add(coins1)
   }
   function enemy(){
     var foe=createSprite(Math.round(random(0,windowWidth/8)),0);
         foe.velocityY=score/500;
         foe.lifeTime=displayHeight;
     
      
        
         foe.addImage(enemy3);
         foe.scale=0.5
     
         
     
       enemyGroup.add(foe)
   }
   function en2(){
     var foe1=createSprite(Math.round(random(windowWidth/2,windowWidth/4)),0);
   
     foe1.velocityY=score/500;
     foe1.lifeTime=displayHeight;
 
     foe1.addImage(enemy4);
     foe1.scale=0.5;
     enemyGroup1.add(foe1);
   
    }
     
   





