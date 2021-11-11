nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;

function preload(){
    

}

function setup(){
Video=createCapture(VIDEO);
Video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);

poseNet=ml5.poseNet(Video,modelloaded);
poseNet.on('pose',gotPoses);
}

function draw(){
background('pink');
document.getElementById("square_side").innerHTML="width and height of a square will be "+difference+"px";
fill('purple');
stroke('purple');
square(nosex,nosey,difference);
}


function modelloaded(){
    console.log("poseNet is in initialized");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;

leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
difference=floor(leftwristx-rightwristx)
}
}
