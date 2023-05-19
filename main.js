function setup()
{
    canvas=createCanvas(500,250)
    canvas.position(800,70)
    video=createCapture(VIDEO);
    video.size(500,250);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    background("black")
}
function modelLoaded()
{
    console.log("Model is Initialized")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}