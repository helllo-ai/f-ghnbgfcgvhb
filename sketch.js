 var ladydetective
 var gamestate
 var score
 var array=["notebook","bottle","pen","canopener","rose"]
 var array2=["sharpner","paper","pencilbox","ruler","target","pin"]
   gamestate="screen"

 function preload(){
 ladyd=loadImage("Myowngame/lady.png")
 notebook=loadImage("Myowngame/notebook.png")
 bottle=loadImage("Myowngame/bottle.png")
 pen=loadImage("Myowngame/pen.jpg")
 canopener=loadImage("Myowngame/can.png")
 rose=loadImage("Myowngame/rose.png")
 sharpener=loadImage("Myowngame/sharpner.png")
 paper=loadImage("Myowngame/paper.png")
 pencilbox=loadImage("Myowngame/pencilb.png")
 ruler=loadImage("Myowngame/ruler.png")
 target=loadImage("Myowngame/target.png")
 pin=loadImage("Myowngame/pin.png")
 background1=loadImage("Myowngame/screen.jpg")

 //background3=loadImage("Myowngame/screen.jpg")
 
 }


 function setup() {
  createCanvas(800,400);
 ladydetective= createSprite(400, 200, 50, 50);
 button=createButton("Switch places")
 button.position(300,100,20,20)
 button2=createButton("Switch places")
 button.position(300,100,20,20)
}

function draw() {
  background(255,255,255);  
  drawSprites();
   


if (gamestate==="screen"){
  background(background1,100)
  image (ladyd,100,200)
  button.hide()
  button2.hide()
  if (KeyIsDown(UP_ARROW)){
    gamestate="l1"
  }
}

if (gamestate==="l1"){
  background()
  image(ladyd,100,200)
  if (mousePressedOver(array)){
    score=score+1
  }

  if (mousePressedOver(button)){
    if (gamestate_l1==="living ")
    {gamestate_l1==="library"}
    else{gamestate_l1="living"
    } 
  }
  if (score===5){
    gamestate="l2"
  }
}


if (gamestate==="l2"){
  background()
  image(ladyd,100,200)
  if (mousePressedOver(array2)){
    score=score+1
  }

  if (mousePressedOver(button2)){
    if (gamestate_l2==="living ")
    {gamestate_l2==="library"}
    else{gamestate_l2="living"
    } 
  }
  if (score===5){
    gamestate="screen"
  }
}
if (gamestate===array[0]){
  image(notebook,200,100)
}
if (gamestate===array[1]){
  image(bottle,300,200)
}
if (gamestate===array[4]){
  image(rose,400,100)
}
}
