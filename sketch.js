//Create variables here
var dog,happyDog;
var dogImg,happyDogImg;
var database;
var foodS,foodStock;
var Food = 20;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(200,350,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  happyDog = createSprite(200,350,20,20);
  happyDog.scale = 0.2
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)) {
writeStock(foodS);
happyDog.addImage(happyDogImg);

}
  drawSprites();
  //add styles here
  textSize(15);
text("Note:Press UP_ARROW Key To Feed Drago Milk!",100,50);
textSize(25);
text("Food Remaining :" +Food,125,200);
}

function readStock(data) {
foodS = data.val();
}

function writeStock(x) {

  database.ref('/').update({
    Food:x
  })
  
if(x<=0) {
  x=0;
} else{
  x=x-1;
}
}


