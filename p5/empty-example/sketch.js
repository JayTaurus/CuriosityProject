var alpha = 0.5
function setup() {
  // put setup code here
  createCanvas(500,500)

}

function draw() {
  // put drawing code here
background(10);
  fill("#ADD8E6")
      ellipse(random(width), random(height) , 5, 5)
fill(100)    
      ellipse(50,50, 55, 55) //Moon   
      colorMode(HSB, 100);
      textSize(32); //Text
  fill("#FFFF00");      
      text('Curiosity', 350, 50);
  fill(100)    
      ellipse(50,50, 55, 55) //Moon   
      colorMode(HSB, 100);
  fill(50, 55, 100)
      rect(125, 250, 250, 250); //Body
  fill("#FAFDCB");  
      ellipse(250, 250, 325, 325); //Face
  fill(100)
      ellipse(170, 250, 60, 60);// Eye
      ellipse(325, 250, 60, 60);// Eye
  fill(0)    
      ellipse(325 + mouseX/50, 250 + mouseY/50, 30, 30);// Eye
      ellipse(170 + mouseX/50, 250 + mouseY/50, 30, 30);// Eye
  fill(100)    
      ellipse(322 + mouseX/50, 243 + mouseY/50, 15, 15);// Eye
      ellipse(168 + mouseX/50, 243 + mouseY/50, 15, 15);// Eye
  noFill();
      arc(295, 350, 70, 70, PI + QUARTER_PI, TWO_PI);//Eyebrow
  noFill();
      arc(330, 230, 71, 71, PI + QUARTER_PI, TWO_PI);//Eyebrow 
  noFill();
      arc(330, 230, 70, 70, PI + QUARTER_PI, TWO_PI);//Mouth
      line(190, 210, 150, 210);
      line(190, 211, 150, 211);       
  noCursor()
    fill("#FFFF00")
      ellipse(mouseX, mouseY,20,20)//Firefly 
}

function mousePressed(){
  fill("#FFFF00")
      ellipse(mouseX, mouseY,30,30)//Firefly 



}