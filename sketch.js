var fr,mr;
function setup() {
  createCanvas(1200,800);
  fr =createSprite(600, 400, 50, 80);
  mr= createSprite(400,200,80,30);
  fr.shapeColor="green";
mr.shapeColor="green"  
  
}


function draw() {
  background(255,255,255);  
  mr.x=mouseX;
  mr.y=mouseY;
  if(mr.x-fr.x<mr.width/2+fr.width/2&&
    fr.x-mr.x<mr.width/2+fr.width/2){
    fr.shapeColor="red";
    mr.shapeColor="red";  
      }
      else{
        fr.shapeColor="green";
        mr.shapeColor="green"  
          
      }
  drawSprites();
}