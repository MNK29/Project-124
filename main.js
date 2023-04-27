function setup(){
    video = createCapture(VIDEO);
    video.size(550,415);
    video.position(250,320)
    canvas = createCanvas(550,450);
    canvas.position(900,300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has been initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}