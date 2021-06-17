var page = 0;
function preload() {
  bg = loadImage('bg.png');
  g = loadImage('g.png');

}
function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
}

function draw() {
  background(0);
  image(bg,0,0,width,height);
  image(g,width/5,height/3.8,700,700);
  if(page ==0){
    fill(0);
    //title
    rect(width/15,height/25,width/1.15,height/19);
    textSize(70);
    fill(0,255,0);
    text("Grognack - The Gnome",width/9,height/13);
    //Skills
    fill(0);
    rect(width/15,height/1.5,width/1.15,height/3.3);
    for(let  i = 0;i<5;i++){
      noFill();
      stroke(100,80,80);
      strokeWeight(5)
      rect(width/15,height/1.5+i*height/20,width/1.15,height/20);
    }

  }
  else if(page ==1){
  }
  else if(page ==2){

  }

}

function mouseClicked() {
  if (page === 0) {
    page = 1;
  }
  else if (page === 1) {
    page = 2;
  }

  else {
    page = 0;
  }
}
