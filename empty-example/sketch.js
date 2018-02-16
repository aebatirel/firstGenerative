function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(480)
  // put setup code here
}
var change=10;
var colorA=[0,255,150];
var colorB=[255,150,255];
var curColorA=[0,0,0];
var curColorB=[255,0,0];
function draw() {
    for(var i=0;i<1000;i++){
        frawCell();
    }
    
}
var disorder=45;
var lastChangedRate=0;
var changeDist=100;
var nextChangedRate=1000;
var nextcolorA=[0,255,40];
var nextcolorB=[255,200,40];
var mirroring=false;
function frawCell(){
    var x=randomGaussian(width/2,width/5);
    var y=randomGaussian(height/2,height/5);
    var dist=pow(pow(x-width/2,2)+pow(y-height/2,2),0.5);
    var thetha=asin((y-height/2)/dist);
    var radius=random(pow(dist,0.5)*2/1);
    var darkness=100;
    //var fuctionRatio=(dist-400)/(cos(thetha)*sin(3*thetha))/(2*(pow(pow(width/2,2)+pow(height/2,2),0.5)-1))
    //var fuctionRatio=(dist*2*PI/thetha)
    //fill(random(255)*dist/darkness,random(255)*dist/darkness,random(255)*dist/darkness,random(200));
    //var fuctionRatio=Math.log(thetha)/Math.log(dist/400)
    var timeChange=sin((frameCount/400)%(2*PI))*(PI/2);
    var spiralRatio=1-((dist/((thetha+timeChange)*100)%1));
    var ratio=(dist/pow(pow(width/2,2)+pow(height/2,2),0.5)+spiralRatio)/2;
    //var totalratio=fuctionRatio//+ratio)/2;
    //var totalratio = ratio-thetha/(2*PI);
    if(mirroring){
       if(x>width/2){
        ratio=1-ratio;
    } 
    }
    
    
    ratio=ratio*randomGaussian(0.95,0.1);
    var red=ratio*curColorA[0]+(1-ratio)*curColorB[0];
    var green=ratio*curColorA[1]+(1-ratio)*curColorB[1];
    var blue=ratio*curColorA[2]+(1-ratio)*curColorB[2];
    fill(red+random(disorder)-disorder/2,green+random(disorder)-disorder/2,blue+random(disorder)-disorder/2,30);
    //fill(random(255)*dist/darkness,100);
    //stroke(0);
    //strokeWeight(2);
    noStroke();
    ellipse(x,y,radius,radius);
    
   ellipse(x,y,5,5);
  //if(frameCount<nextChangedRate){
    //   lastChangedRate=frameCount;
      // nextChangedRate=frameCount+changeDist*5;
   //    colorA=nextcolorA;
   //    colorB=nextcolorB;
   //    nextcolorA=randomColor();
   //    console.log(nextcolorA);
    //   nextcolorB=randomColor();
     //  console.log(nextcolorB);
   //}
   // else{
   //     var changeRatio=(frameCount-lastChangedRate)/(changeDist*2);
   //     var redA=changeRatio*nextcolorA[0]+(1-changeRatio)*colorA[0];
   //     var greenA=changeRatio*nextcolorA[1]+(1-changeRatio)*colorA[1];
   //     var blueA=changeRatio*nextcolorA[2]+(1-changeRatio)*colorA[2];
   //     var redB=changeRatio*nextcolorB[0]+(1-changeRatio)*colorB[0];
   //     var greenB=changeRatio*nextcolorB[1]+(1-changeRatio)*colorB[1];
   //     var blueB=changeRatio*nextcolorB[2]+(1-changeRatio)*colorB[2];
   //     curColorA=[redA,greenA,blueA];
   //     curColorB=[redB,greenB,blueB];
    //}
}
function mouseClicked() {
    mirroring=!mirroring;
  }
function randomColor(){
    var col = [Math.random()*255,Math.random()*255,Math.random()*255];
    return col;
}
