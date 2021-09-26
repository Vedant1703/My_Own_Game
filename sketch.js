var GabbarSingh,Thakur,TenemyGroup;
var line,score=0,Tscore=0,TImg,TWeaponGroup;
var enemy,enemy1,enemyGroup,gameState='play';
var num=1,num1=1,weapon,Tweapon,weaponGroup;

function preload(){
TImg=loadImage("T1.png");
BImg=loadImage("screen.png");

GSImg=loadImage("J1.png");


}

function setup(){
createCanvas(1600,750);
GabbarSingh=createSprite(600,325,25,75);
GabbarSingh.addImage(GSImg);
GabbarSingh.scale=0.1;

enemyGroup=new Group();
weaponGroup=new Group();

TenemyGroup=new Group();
TWeaponGroup=new Group();

Thakur=createSprite(1000,325,25,75);
Thakur.addImage(TImg);
Thakur.scale=0.5;

for(var i=0; i<750;i=i+20){
 line=createSprite(800,i,2,i+10);
line.shapeColor="black";
}
}

function draw(){
background(BImg);
textSize(35);
fill('black');
text("GabbarSingh:"+score,100,100);

textSize(35);
fill('black');
text("Thakur:"+Tscore,1300,100);

if(gameState==='play'){
  if(keyDown(UP_ARROW)){
    GabbarSingh.y=GabbarSingh.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    GabbarSingh.y=GabbarSingh.y+10;
  }

  if(keyDown('w')){
    Thakur.y=Thakur.y-10;
  }
  if(keyDown('a')){
    Thakur.y=Thakur.y+10;
  }

  num=num+1;
  num1=num+1;
  if(keyDown('space')){
    GSWeapons();
    
  }
  if(keyDown('F')){
    TWeapons();
  }
  if(enemyGroup.isTouching(GabbarSingh)){
    GabbarSingh.destroy();
    gameState='end';
  }
  
if(TenemyGroup.isTouching(Thakur)){
    Thakur.destroy();
    
    gameState='end';
   
  }
  

GSEnemies();
TEnemies();
}
if(gameState==='end'){
  textSize(50);
  fill("Green");
  text("!!!Ohh!!! GameOver!!!!",600,300);

  if(score<Tscore){
    textSize(50);
    fill("Green");
    text("!!CONGRATULATIONS!!Thakur!!",500,500)

  }
  if(score>Tscore){
    textSize(50);
    fill("Green");
    text("!!CONGRATULATIONS!!GabbarSingh!!",500,500)

  }
  if(score===Tscore){
    textSize(50);
    fill("Green");
    text("!!Match Draw!!",500,500)

  }


}





  drawSprites();

}

function GSEnemies(){

if(num%20===0){
  
  //var x=Math.round(random(1000,1500));
  var y=Math.round(random(0,700));
  enemy=createSprite(1500,y,30,30);
  enemy.addImage(TImg);
  enemy.scale=0.2;
  enemy.velocityX=-5-(Math.round(score/10));
  enemyGroup.add(enemy);
  enemy.lifetime=600;

  if(weaponGroup.isTouching(enemyGroup)){
  enemyGroup.destroyEach();
  score=score+10;
  }
 
}

}

function GSWeapons(){
weapon=createSprite(GabbarSingh.x+100,GabbarSingh.y,10,100);
weapon.shapeColor="black";
weapon.velocityX=10;
weaponGroup.add(weapon);
weapon.lifetime=60;
}

function TEnemies(){

  if(num1%20===0){
    
    //var x=Math.round(random(1000,1500));
    var y=Math.round(random(0,700));
    enemy1=createSprite(300,y,30,30);
    enemy1.addImage(GSImg);
    enemy1.scale=0.05;
    enemy1.velocityX=4+(Math.round(score/10));
    TenemyGroup.add(enemy1);
    enemy1.lifetime=600;
  
    if(TWeaponGroup.isTouching(TenemyGroup)){
    TenemyGroup.destroyEach();
    Tscore=Tscore+10;
    }
   
  }
  
  }

  function TWeapons(){
    Tweapon=createSprite(Thakur.x-100,Thakur.y,10,100);
    Tweapon.shapeColor="Brown";
    Tweapon.velocityX=-10;
    TWeaponGroup.add(Tweapon);
    Tweapon.lifetime=60;
    }
    