function setup() {
  canvas = createCanvas(400,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modeloaded);
}
function modeloaded() {
console.log("model loaded!");
}
function draw(){
image(video,0,0,400,300);
classifier.classify(video,gotresult);
}
function mouseClicked() {
canvas.position(mouseX,mouseY);
}
function gotresult(error,results) {
if(error)  {
console.log(error);
}
else {
console.log(results);
document.getElementById("result_image").innerHTML=results[0].label;
document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}
