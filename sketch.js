var page = 0;
// function preload() {
//   //bg = loadImage('bg.png');
//
// }
function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
}

function draw() {
  background(0);
  if(page ==0){
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
