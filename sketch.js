var canvas,block1,block2,block3,block4;
var music,ball,edge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   block1=createSprite(700,590,150,30)
   block1.shapeColor="red"
   block2=createSprite(530,590,150,30)
   block2.shapeColor="green"
   block3=createSprite(350,590,150,30)
   block3.shapeColor="yellow"
   block4=createSprite(170,590,150,30)
   block4.shapeColor="blue"
   ball=createSprite(random(20,760),300,40,40)
   ball.shapeColor="black"

   ball.velocityX=6
   ball.velocityY=6
   




    



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edge=createEdgeSprites()
    ball.bounceOff(edge)
    if(ball.isTouching(block1)){
        ball.shapeColor="red";
      ball.velocityX=0
      ball.velocityY=0
      music.stop()
    }
    if(ball.isTouching(block2)&& ball.bounceOff(block2)){
        ball.shapeColor="green";
        music.play()
    }
    if(ball.isTouching(block3)&& ball.bounceOff(block3)){
        ball.shapeColor="yellow";
      
    }
    if(ball.isTouching(block4)&& ball.bounceOff(block4)){
        ball.shapeColor="blue";
        
    }






    //add condition to check if box touching surface and make it box
   drawSprites()

}
