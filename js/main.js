const cam = document.getElementById('camera');
let video;
let posenet;
let nx;
let mx;
let ny;
let my;
let px;
let py;
let cx;
let cy;




Webcam.set({
	width: 500,
	height:350,
	image_format: 'png',
	jpeg_quality: 90,
})

Webcam.attach(cam);

function setup() {
let cnv= createCanvas(600,450);
cnv.position(400, 1300);
video=createCapture(Webcam);
video.hide();
posenet = ml5.poseNet(video, { audio: false }, modelReady);
  posenet.on('pose', gotPoses);
}
function gotPoses(poses){
console.log(poses);
if (poses.length>0){
nx=poses[0].pose.keypoints[1].position.x
mx=poses[0].pose.keypoints[2].position.x
ny=poses[0].pose.keypoints[1].position.y
my=poses[0].pose.keypoints[2].position.y
cx=poses[0].pose.keypoints[0].position.x
cy=poses[0].pose.keypoints[0].position.y
}
}

function modelReady() {
console.log("The model is ready")
 
}

function clown() {
image(video,0,0);
   stroke(0,0,0)
fill("white");
ellipse(nx,ny,50,50);
fill("black");
ellipse(nx,ny,30,30)
fill("white");
ellipse(mx,my,50,50);
fill("black");
ellipse(mx,my,30,30);
fill("#FF1100")
ellipse(cx,cy,40,40);
}
function shades() {
image(video,0,0);
   stroke(0,0,0)
fill("black");
rect(cx-10, cy-45, 30, 20, 5);
fill("black");
rect(nx-32, ny-20, 65, 50, 20);
fill("rgb(23,23,23)");
rect(nx-27, ny-17, 55, 40, 10);
fill("black");
rect(mx-32, my-20, 65, 50, 20);
fill("rgb(23,23,23)");
rect(mx-27, my-17, 55, 40, 10);

}
function bigi() {
image(video,0,0);
   stroke(0,0,0)
fill("white");
rect(nx-15, ny-25, 40, 65, 10);
fill("black");
rect(nx-15, ny-5, 30, 35, 10);
fill("white");
rect(mx-15, my-25, 40, 65, 10);
fill("black");
rect(mx-15, my-5, 30, 35, 10);
}
function snor() {
image(video,0,0);
strokeWeight(0);
 stroke(0,0,0)
fill("orange");
rect(cx-10, cy-65, 70, 35, 10);
fill("orange");
strokeWeight(0);
rect(nx-15, ny-35, 70, 60, 10);
fill("aqua");
rect(nx-10, ny-30, 60, 50, 10);
fill("orange");
rect(mx-35, my-35, 70, 60, 10);
fill("aqua");
rect(mx-30, my-30, 60, 50, 10);
fill("aqua");
rect(cx-10, cy-60, 70, 27, 10);
  
fill("grey");
rect(cx-20, cy+25, 50, 30, 20);
fill(255, 100 , 40);
rect(cx, cy+35, 65, 5, 5);
stroke(255, 100 , 40);
  strokeWeight(4);
line(cx+65, cy+30, mx+130, my+20);
stroke(255, 100 , 40);
  strokeWeight(4);
line(mx+130, my+20, mx+130, my-25);
}