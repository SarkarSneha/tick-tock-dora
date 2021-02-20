var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function preload(){
  wall=loadImage("wall.png")
  pink=loadImage("pink.png")
  boots=loadImage("booots.png")
  prop=loadImage("poppers.png")
}
function setup(){
    createCanvas(700,700); 
    angleMode(DEGREES);   
    p=createSprite(570,510,200,200)
    p.addImage(pink)
    p.scale=0.2

    b=createSprite(140,510,200,200)
    b.addImage(boots)
    b.scale=0.3
    
    decor=createSprite(300,0,700,20)
    decor.addImage(prop)
    decor.scale=0.8
}

function draw(){
    background(wall);
    fill("white")
    stroke("black")
    textSize(30)
    text("It's Party Time!!!",250,510)
    drawSprites()
    translate(300,300)
    rotate(-90)

    
    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr % 12,0,12,0,360);

    
    push();
    rotate(scAngle); 
    stroke(142,0,205);
    strokeWeight(5);
    line(0,0,100,0);
    pop()

    
    push();
    rotate(mnAngle);
    stroke("white");
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    
    push();
    rotate(hrAngle);
    stroke("magenta");
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    

    strokeWeight(7);
    noFill();
    
    stroke(142,0,205);
  
    arc(0,0,200,200,0,scAngle);
    
    
     stroke("white");
    arc(0,0,180,180,0,mnAngle);

    stroke("magenta");
    arc(0,0,160,160,0,hrAngle);
}
