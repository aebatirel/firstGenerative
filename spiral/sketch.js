var colorA =[255,255,0];
var colorB =[0,255,255];
var rMax;
function setup(){
    createCanvas(windowWidth,windowHeight);
    rMax=pow(windowWidth^2+windowHeight^2,0.5);
    background(0);
    frameRate(480);
}
function draw(){
    for(var i = 0;i<1000;i++){
        var x=randomGaussian(windowHeight/2,width/2);
        var y=randomGaussian(windowHeight/2,height/2);
        var polarCoor=getPolar(x-windowHeight/2,y-windowHeight/2);
        var ratio=getRatio(polarCoor[0],polarCoor[1]);
        ratio=ratio*randomGaussian(1,0.2);
        drawCircle(x,y,ratio);
    }

}
var disorder = 30;
function drawCircle(x,y,ratio){
    var red=ratio*colorA[0]+(1-ratio)*colorB[0];
    var green=ratio*colorA[1]+(1-ratio)*colorB[1];
    var blue=ratio*colorA[2]+(1-ratio)*colorB[2];
    var radius=30*ratio;
    noStroke();
    fill(red+random(disorder)-disorder/2,green+random(disorder)-disorder/2,blue+random(disorder)-disorder/2,30);
    ellipse(x,y,radius,radius);
}

function getPolar(x,y){
    var r =pow(x^2+y^2,0.5);
    return [r, asin(y/r)];
}

function getCart(r,tetha){
    return [r*cos(tetha),r*sin(tetha)];
}

function getRatio(r,tetha){
    rMax=pow(windowWidth^2+windowHeight^2,0.5);
    var spiralRatio=1-((r/(tetha*1000)%1));
    var centralRatio=r/rMax;
    var totalRatio=(spiralRatio+centralRatio)/2;
    return pow(spiralRatio*centralRatio,0.5);
}
